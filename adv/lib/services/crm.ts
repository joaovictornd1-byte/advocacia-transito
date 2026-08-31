import type { LeadPayload } from "@/lib/types/lead";

/**
 * INTEGRAÇÃO FUTURA COM CRM
 * ------------------------------------------------------------------
 * Esta função centraliza o envio do lead para um CRM externo. Hoje ela
 * apenas registra o payload (uso interno/observabilidade). Para ativar
 * a integração real:
 *
 * 1. Defina CRM_WEBHOOK_URL e CRM_API_KEY em variáveis de ambiente
 *    (ver .env.example);
 * 2. Substitua o corpo desta função por uma chamada HTTP (fetch/axios)
 *    para o endpoint do CRM, enviando o payload abaixo;
 * 3. Trate erros de forma a não bloquear a confirmação ao usuário caso
 *    o CRM esteja indisponível (fila de retry, log, alerta).
 *
 * O payload já está normalizado no formato pensado para consumo por
 * ferramentas como RD Station, Pipedrive, HubSpot ou CRM proprietário.
 * ------------------------------------------------------------------
 */
export async function sendLeadToCrm(payload: LeadPayload): Promise<{ ok: boolean }> {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  if (!webhookUrl) {
    // Sem CRM configurado: apenas log estruturado (ambiente de desenvolvimento).
    console.info("[crm:stub] Lead recebido (CRM não configurado):", {
      email: payload.email,
      situation: payload.situation,
      source: payload.source,
    });
    return { ok: true };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CRM_API_KEY ? { Authorization: `Bearer ${process.env.CRM_API_KEY}` } : {}),
      },
      body: JSON.stringify(payload),
    });
    return { ok: response.ok };
  } catch (error) {
    console.error("[crm] Falha ao enviar lead para o CRM:", error);
    return { ok: false };
  }
}
