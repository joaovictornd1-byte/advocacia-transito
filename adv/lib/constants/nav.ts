export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const MAIN_NAV: NavItem[] = [
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Multas e Autuações", href: "/servicos/multas", description: "Defesa prévia, recursos, JARI e CETRAN" },
      { label: "Defesa Prévia", href: "/servicos/defesa-previa" },
      { label: "JARI", href: "/servicos/jari" },
      { label: "CETRAN", href: "/servicos/cetran" },
      { label: "Suspensão da CNH", href: "/servicos/suspensao-cnh" },
      { label: "Cassação da CNH", href: "/servicos/cassacao-cnh" },
      { label: "Infrações específicas", href: "/servicos/infracoes" },
    ],
  },
  { label: "Empresas e Frotas", href: "/empresas" },
  { label: "Raio-X da Autuação", href: "/raio-x-da-autuacao" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const FOOTER_LEGAL_NAV = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
];
