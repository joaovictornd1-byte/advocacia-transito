import { z } from "zod";

export const SITUATION_OPTIONS = [
  { value: "notificacao_autuacao", label: "Recebi uma notificação de autuação" },
  { value: "notificacao_penalidade", label: "Recebi uma notificação de penalidade" },
  { value: "recurso_andamento", label: "Tenho um recurso em andamento" },
  { value: "suspensao", label: "Estou respondendo a processo de suspensão" },
  { value: "cassacao", label: "Estou respondendo a processo de cassação" },
  { value: "nao_sei", label: "Não sei exatamente qual é a situação" },
] as const;

export const MAX_FILE_SIZE_MB = 10;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
export const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

// Etapa 1 — Identificação
export const identificationSchema = z.object({
  fullName: z.string().trim().min(5, "Informe seu nome completo."),
  cpf: z
    .string()
    .trim()
    .min(11, "CPF inválido.")
    .regex(/^[0-9.\-]{11,14}$/, "Informe um CPF válido."),
  phone: z.string().trim().min(10, "Informe um telefone válido."),
  whatsapp: z.string().trim().min(10, "Informe um número de WhatsApp válido."),
  email: z.string().trim().email("Informe um e-mail válido."),
});

// Etapa 2 — Situação
export const situationSchema = z.object({
  situation: z.enum(
    SITUATION_OPTIONS.map((o) => o.value) as [string, ...string[]],
    { errorMap: () => ({ message: "Selecione a opção que melhor descreve sua situação." }) }
  ),
});

// Etapa 3 — Dados da autuação (opcionais quando o titular ainda não possui todos os dados)
export const infractionDataSchema = z.object({
  issuingAgency: z.string().trim().optional().or(z.literal("")),
  aitNumber: z.string().trim().optional().or(z.literal("")),
  plate: z.string().trim().optional().or(z.literal("")),
  infractionCode: z.string().trim().optional().or(z.literal("")),
  infractionDate: z.string().trim().optional().or(z.literal("")),
  notificationDate: z.string().trim().optional().or(z.literal("")),
  deadline: z.string().trim().optional().or(z.literal("")),
  infractionDescription: z.string().trim().optional().or(z.literal("")),
});

// Etapa 4 — Upload (validado no client antes do envio; ver FileUploadField)
export const uploadSchema = z.object({
  files: z
    .array(
      z.object({
        name: z.string(),
        size: z.number().max(MAX_FILE_SIZE_BYTES, `Cada arquivo deve ter no máximo ${MAX_FILE_SIZE_MB}MB.`),
        type: z.string().refine((t) => ACCEPTED_FILE_TYPES.includes(t), "Formato de arquivo não aceito."),
      })
    )
    .min(1, "Envie ao menos um documento para análise."),
});

// Etapa 5 — Observações
export const notesSchema = z.object({
  notes: z.string().trim().max(2000, "O texto pode ter no máximo 2000 caracteres.").optional().or(z.literal("")),
});

// Etapa 6 — LGPD
export const consentSchema = z.object({
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar o tratamento de dados para prosseguir." }),
  }),
});

export const leadFormSchema = identificationSchema
  .merge(situationSchema)
  .merge(infractionDataSchema)
  .merge(notesSchema)
  .merge(consentSchema);

export type LeadFormValues = z.infer<typeof leadFormSchema>;
