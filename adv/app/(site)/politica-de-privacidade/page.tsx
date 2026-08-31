import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/sections/LegalDocument";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  robots: { index: true, follow: true },
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalDocument title="Política de Privacidade" updatedAt="27 de outubro de 2026">
      <p>
        Esta Política de Privacidade descreve como {SITE.name} (&ldquo;Escritório&rdquo;,
        &ldquo;nós&rdquo;), inscrito no CNPJ {SITE.cnpj}, trata os dados pessoais dos
        usuários deste site, em conformidade com a Lei nº 13.709/2018 (Lei
        Geral de Proteção de Dados Pessoais — LGPD).
      </p>

      <LegalSection title="1. Dados coletados">
        <p>
          Coletamos os dados fornecidos voluntariamente pelo usuário ao
          preencher formulários deste site, incluindo: nome completo, CPF,
          telefone, WhatsApp, e-mail, informações sobre a situação relatada
          (autuação, notificação ou procedimento administrativo) e os
          documentos enviados para análise (notificações, Auto de Infração de
          Trânsito, CNH e documentos complementares).
        </p>
        <p>
          Também podem ser coletados dados de navegação (como páginas
          visitadas e origem do acesso) por meio de cookies e ferramentas de
          análise, conforme detalhado na Política de Cookies.
        </p>
      </LegalSection>

      <LegalSection title="2. Finalidade do tratamento">
        <p>
          Os dados pessoais são tratados com as seguintes finalidades: (i)
          realizar a análise individualizada da situação relatada; (ii)
          viabilizar o contato da equipe do escritório com o titular dos
          dados; (iii) prestar o serviço jurídico contratado, quando
          aplicável; (iv) cumprir obrigações legais e regulatórias aplicáveis
          à advocacia; e (v) melhorar a experiência de navegação no site.
        </p>
      </LegalSection>

      <LegalSection title="3. Armazenamento e segurança">
        <p>
          Os documentos enviados são armazenados em ambiente privado, sem
          acesso público, com controles de autenticação e autorização
          restritos à equipe responsável pela análise dos casos. Adotamos
          medidas técnicas e administrativas razoáveis para proteger os dados
          pessoais contra acessos não autorizados e situações de perda,
          alteração ou vazamento.
        </p>
      </LegalSection>

      <LegalSection title="4. Compartilhamento de dados">
        <p>
          Os dados pessoais não são vendidos ou compartilhados com terceiros
          para fins comerciais alheios à prestação do serviço. Poderá haver
          compartilhamento com prestadores de serviço estritamente
          necessários à operação do site e do atendimento (como ferramentas de
          CRM e hospedagem), sempre limitado ao necessário e mediante
          garantias contratuais de confidencialidade.
        </p>
      </LegalSection>

      <LegalSection title="5. Direitos do titular">
        <p>
          Nos termos da LGPD, o titular dos dados pode solicitar, a qualquer
          momento: confirmação da existência de tratamento, acesso aos dados,
          correção de dados incompletos ou desatualizados, anonimização,
          bloqueio ou eliminação de dados desnecessários, portabilidade,
          eliminação dos dados tratados com consentimento, informação sobre
          compartilhamento e revogação do consentimento.
        </p>
      </LegalSection>

      <LegalSection title="6. Canal de contato">
        <p>
          Solicitações relacionadas a dados pessoais podem ser encaminhadas
          para {SITE.emailPlaceholder} ou {SITE.phonePlaceholder}.
        </p>
      </LegalSection>

      <LegalSection title="7. Alterações desta política">
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente. A
          data da última atualização está indicada no início deste documento.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
