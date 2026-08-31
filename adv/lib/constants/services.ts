export type ServiceGroup = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  items: string[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    slug: "multas",
    href: "/servicos/multas",
    title: "Multas e Autuações",
    summary: "Análise de autuações e condução dos procedimentos administrativos cabíveis.",
    items: ["Defesa prévia", "Recursos administrativos", "JARI", "CETRAN", "Análise de autos de infração"],
  },
  {
    slug: "cnh",
    href: "/servicos/suspensao-cnh",
    title: "CNH",
    summary: "Acompanhamento de procedimentos administrativos relacionados à habilitação.",
    items: [
      "Processo de suspensão",
      "Processo de cassação",
      "Excesso de pontuação",
      "Procedimentos administrativos relacionados à habilitação",
    ],
  },
  {
    slug: "infracoes",
    href: "/servicos/infracoes",
    title: "Infrações específicas",
    summary: "Análise individualizada conforme a natureza da infração apontada no auto.",
    items: [
      "Excesso de velocidade",
      "Recusa ao teste do etilômetro",
      "Alcoolemia",
      "Avanço de sinal",
      "Uso de celular",
      "Ultrapassagens",
      "Demais infrações administrativas",
    ],
  },
  {
    slug: "empresas",
    href: "/empresas",
    title: "Empresas e Frotas",
    summary: "Apoio jurídico à gestão de infrações de veículos e frotas corporativas.",
    items: [
      "Gestão jurídica de infrações",
      "Orientação sobre indicação de condutor",
      "Análise de notificações",
      "Acompanhamento de procedimentos administrativos",
    ],
  },
];
