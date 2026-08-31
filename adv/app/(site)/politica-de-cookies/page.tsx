import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/sections/LegalDocument";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaDeCookiesPage() {
  return (
    <LegalDocument title="Política de Cookies" updatedAt="27 de outubro de 2026">
      <p>
        Este site utiliza cookies e tecnologias semelhantes para melhorar a
        experiência de navegação e obter informações estatísticas sobre o uso
        do site.
      </p>

      <LegalSection title="1. O que são cookies">
        <p>
          Cookies são pequenos arquivos de texto armazenados no dispositivo do
          usuário, que permitem reconhecer o navegador em visitas
          subsequentes e coletar informações sobre a navegação.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookies utilizados">
        <p>
          <strong>Cookies necessários:</strong> essenciais para o
          funcionamento do site, como preferências de navegação.
        </p>
        <p>
          <strong>Cookies de análise:</strong> utilizados por ferramentas como
          Google Analytics e Google Tag Manager para compreender como os
          visitantes utilizam o site, de forma agregada e estatística.
        </p>
      </LegalSection>

      <LegalSection title="3. Gerenciamento de cookies">
        <p>
          O usuário pode gerenciar ou desativar cookies diretamente nas
          configurações do navegador utilizado. A desativação de determinados
          cookies pode afetar a experiência de navegação em algumas
          funcionalidades do site.
        </p>
      </LegalSection>

      <LegalSection title="4. Contato">
        <p>
          Dúvidas sobre esta Política de Cookies podem ser encaminhadas para{" "}
          {SITE.emailPlaceholder}.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
