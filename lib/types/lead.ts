export type LeadFormStep =
  | "identification"
  | "situation"
  | "infractionData"
  | "upload"
  | "notes"
  | "consent";

export const LEAD_FORM_STEPS: { key: LeadFormStep; label: string }[] = [
  { key: "identification", label: "Identificação" },
  { key: "situation", label: "Situação" },
  { key: "infractionData", label: "Dados da autuação" },
  { key: "upload", label: "Documentos" },
  { key: "notes", label: "Observações" },
  { key: "consent", label: "Consentimento" },
];

/**
 * Payload enviado ao endpoint /api/leads. Reflete o formato pensado para
 * futura integração com CRM (ver lib/services/crm.ts).
 */
export type LeadPayload = {
  fullName: string;
  cpf: string;
  phone: string;
  whatsapp: string;
  email: string;
  situation: string;
  issuingAgency?: string;
  aitNumber?: string;
  plate?: string;
  infractionCode?: string;
  infractionDate?: string;
  notificationDate?: string;
  deadline?: string;
  infractionDescription?: string;
  notes?: string;
  consent: boolean;
  fileNames: string[];
  source: string;
};
