/**
 * PLACEHOLDERS CENTRAIS DO SITE
 * ------------------------------------------------------------------
 * Nenhum dado real do escritório foi informado no briefing. Todos os
 * valores abaixo são placeholders explícitos e devem ser substituídos
 * antes da publicação. Ver README.md, seção "Substituindo os placeholders".
 * ------------------------------------------------------------------
 */
export const SITE = {
  name: "Duque Advocacia | Trânsito",
  lawyerName: "João Victor Nogueira Duque",
  oab: "Oab/ES n° 43032",
  cnpj: "",
  addressPlaceholder: "Rua Henrique Novaes, Centro, Itaguaçu-Es - Escritório com atendimento digital nacional",
  emailPlaceholder: "jduque.adv@gmail.com",
  phonePlaceholder: "5527996342385",
  whatsappNumber: "5527996342385", // formato E.164, ex: 5527999999999 — NÃO inventar
  // Substituir pelo domínio definitivo antes do deploy (ver README).
  url: "https://www.exemplo-escritorio.com.br",
  description:
    "Escritório especializado em Direito de Trânsito, com análise individualizada de autuações, procedimentos administrativos relacionados à CNH e atuação jurídica especializada em todo o Brasil.",
  // Placeholders de analytics — substituir pelos IDs reais em produção
  gaMeasurementId: "G-XXXXXXXXXX",
  gtmContainerId: "GTM-XXXXXXX",
  recaptchaSiteKey: "[RECAPTCHA_SITE_KEY]",
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  default:
    "Olá, gostaria de obter informações sobre análise de uma autuação de trânsito.",
  cnh: "Olá, gostaria de obter informações sobre um procedimento administrativo relacionado à CNH.",
  empresas:
    "Olá, represento uma empresa e gostaria de falar sobre gestão jurídica de infrações de frota.",
  raioX:
    "Olá, enviei minha documentação pelo Raio-X da Autuação e gostaria de falar com a equipe.",
} as const;
