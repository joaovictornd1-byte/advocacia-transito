import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema, MAX_FILE_SIZE_BYTES, ACCEPTED_FILE_TYPES } from "@/lib/validations/leadForm";
import { sendLeadToCrm } from "@/lib/services/crm";
import { storeLeadFilesPrivately } from "@/lib/services/storage";
import type { LeadPayload } from "@/lib/types/lead";

// Evita cache/edge caching de dados pessoais.
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Honeypot anti-spam: campo invisível que só bots preenchem.
    if (formData.get("website")) {
      return NextResponse.json({ ok: true }); // resposta neutra, não expõe a checagem
    }

    // TODO: validar token de CAPTCHA (SITE.recaptchaSiteKey) antes de prosseguir,
    // quando a chave real estiver configurada em produção.

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

    return NextResponse.json({ ok: true, crmDelivered: crmResult.ok });
  } catch (error) {
    console.error("[api/leads] Erro ao processar envio:", error);
    return NextResponse.json({ ok: false, error: "Erro ao processar o envio." }, { status: 500 });
  }
}
