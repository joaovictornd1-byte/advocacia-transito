import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { leadFormSchema, MAX_FILE_SIZE_BYTES, ACCEPTED_FILE_TYPES } from "@/lib/validations/leadForm";
import { sendLeadToCrm } from "@/lib/services/crm";
import { storeLeadFilesPrivately } from "@/lib/services/storage";
import type { LeadPayload } from "@/lib/types/lead";

// Evita cache/edge caching de dados pessoais.
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Honeypot anti-spam
    if (formData.get("website")) {
      return NextResponse.json({ ok: true });
    }

    const raw = Object.fromEntries(formData.entries());
    const consentValue = raw.consent === "true" || raw.consent === "on";

    const parsed = leadFormSchema.safeParse({
      ...raw,
      consent: consentValue,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Dados inválidos.", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const files = formData.getAll("files").filter((f): f is File => f instanceof File);

    for (const file of files) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { ok: false, error: `O arquivo ${file.name} excede o tamanho máximo permitido.` },
          { status: 400 }
        );
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        return NextResponse.json(
          { ok: false, error: `O arquivo ${file.name} possui um formato não aceito.` },
          { status: 400 }
        );
      }
    }

    const storedFiles = await storeLeadFilesPrivately(
      files.map((f) => ({ name: f.name, size: f.size, type: f.type }))
    );

    const payload: LeadPayload = {
      fullName: parsed.data.fullName,
      cpf: parsed.data.cpf,
      phone: parsed.data.phone,
      whatsapp: parsed.data.whatsapp,
      email: parsed.data.email,
      situation: parsed.data.situation,
      issuingAgency: parsed.data.issuingAgency,
      aitNumber: parsed.data.aitNumber,
      plate: parsed.data.plate,
      infractionCode: parsed.data.infractionCode,
      infractionDate: parsed.data.infractionDate,
      notificationDate: parsed.data.notificationDate,
      deadline: parsed.data.deadline,
      infractionDescription: parsed.data.infractionDescription,
      notes: parsed.data.notes,
      consent: parsed.data.consent,
      fileNames: storedFiles.map((f) => f.originalName),
      source: "raio-x-da-autuacao",
    };

    const crmResult = await sendLeadToCrm(payload);

    // --- DISPARO DE E-MAIL VIA GMAIL ---
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        // Prepara os anexos a partir dos arquivos recebidos
        const attachments = await Promise.all(
          files.map(async (file) => {
            const arrayBuffer = await file.arrayBuffer();
            return {
              filename: file.name,
              content: Buffer.from(arrayBuffer),
            };
          })
        );

        const mailContent = `
Novo Lead Recebido - Raio-X da Autuação

--- DADOS DE IDENTIFICAÇÃO ---
Nome: ${payload.fullName}
CPF: ${payload.cpf}
Telefone: ${payload.phone}
WhatsApp: ${payload.whatsapp}
E-mail: ${payload.email}

--- SITUAÇÃO ---
Situação: ${payload.situation}

--- DADOS DA INFRAÇÃO ---
Órgão Autuador: ${payload.issuingAgency || "Não informado"}
Número AIT: ${payload.aitNumber || "Não informado"}
Placa: ${payload.plate || "Não informada"}
Código Infração: ${payload.infractionCode || "Não informado"}
Data Infração: ${payload.infractionDate || "Não informada"}
Data Notificação: ${payload.notificationDate || "Não informada"}
Prazo Defesa: ${payload.deadline || "Não informado"}
Descrição: ${payload.infractionDescription || "Não informada"}

--- OBSERVAÇÕES ---
${payload.notes || "Nenhuma observação enviada."}
        `;

        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: process.env.LEAD_NOTIFICATION_EMAIL || process.env.GMAIL_USER,
          subject: `Novo Lead Raio-X: ${payload.fullName}`,
          text: mailContent,
          attachments,
        });

        console.log("[email] Notificação enviada por e-mail com sucesso!");
      } catch (emailErr) {
        console.error("[email] Falha ao enviar e-mail:", emailErr);
      }
    } else {
      console.log("[email] Variáveis GMAIL_USER e GMAIL_APP_PASSWORD não encontradas.");
    }

    return NextResponse.json({ ok: true, crmDelivered: crmResult.ok });
  } catch (error) {
    console.error("[api/leads] Erro ao processar envio:", error);
    return NextResponse.json({ ok: false, error: "Erro ao processar o envio." }, { status: 500 });
  }
}
