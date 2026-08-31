import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/sections/LegalDocument";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUsoPage() {
  return (
    <LegalDocument title="Termos de Uso" updatedAt="27 de outubro de 2026">
      <p>
        Estes Termos de Uso regulam o acesso e a utilização deste site, de
        titularidade de {SITE.name}, CNPJ {SITE.cnpj}. Ao utilizar o site, o
        usuário concorda com os termos abaixo.
      </p>

      <LegalSection title="1. Natureza do conteúdo">
        <p>
          As informações disponibilizadas neste site têm caráter meramente
          informativo e educativo, não configurando aconselhamento jurídico
          para casos concretos, nem substituindo a análise individualizada
          realizada por advogado. A leitura do conteúdo não estabelece
          relação de contratação de serviços advocatícios.
        </p>
      </LegalSection>

      <LegalSection title="2. Ausência de garantia de resultado">
        <p>
          Nenhuma informação, formulário ou funcionalidade deste site
          constitui promessa, garantia ou estimativa de resultado em processo
          administrativo ou judicial. Cada caso é analisado individualmente,
          e os resultados dependem de circunstâncias próprias de cada
          situação e das decisões dos órgãos competentes.
        </p>
      </LegalSection>

      <LegalSection title="3. Envio de documentos">
        <p>
          Ao utilizar o formulário &ldquo;Raio-X da Autuação&rdquo;, o usuário declara que
          os documentos enviados são verídicos e de sua titularidade ou que
          possui autorização para seu envio. O envio de documentos não
          implica, por si só, a contratação dos serviços do escritório, que
          depende de manifestação expressa das partes.
        </p>
      </LegalSection>

      <LegalSection title="4. Propriedade intelectual">
        <p>
          Os textos, marca, layout e demais elementos deste site são de
          titularidade de {SITE.name} ou de seus licenciadores, sendo vedada a
          reprodução total ou parcial sem autorização prévia.
        </p>
      </LegalSection>

      <LegalSection title="5. Disponibilidade do site">
        <p>
          Empregamos esforços razoáveis para manter o site disponível e
          atualizado, mas não garantimos disponibilidade ininterrupta, estando
          sujeitos a interrupções para manutenção ou por motivos alheios à
          nossa vontade.
        </p>
      </LegalSection>

      <LegalSection title="6. Legislação aplicável">
        <p>
          Estes Termos de Uso são regidos pela legislação brasileira,
          incluindo o Código de Ética e Disciplina da OAB e a legislação de
          proteção de dados pessoais aplicável.
        </p>
      </LegalSection>

      <LegalSection title="7. Contato">
        <p>Dúvidas sobre estes Termos podem ser encaminhadas para {SITE.emailPlaceholder}.</p>
      </LegalSection>
    </LegalDocument>
  );
}
