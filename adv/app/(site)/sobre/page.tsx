import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SITE } from "@/lib/constants/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Atuação especializada em Direito de Trânsito, combinando conhecimento jurídico, análise documental e tecnologia.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Atuação especializada em Direito de Trânsito"
        description="Combinamos conhecimento jurídico, análise documental e tecnologia para proporcionar atendimento eficiente e organizado, em todo o território nacional."
      />

      <section className="border-b border-line bg-surface py-14 md:py-16">
        <div className="container-content grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="relative h-40 w-40 overflow-hidden rounded-md border border-line">
  <Image
    src="/foto-perfil-placeholder.png"
    alt="Foto profissional — placeholder"
    fill
    className="object-cover"
  />
</div>
<p className="text-center text-xs text-muted md:text-left">
  Siga nosso Instagram — @joodque
</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">{SITE.lawyerName}</h2>
            <p className="mt-1 text-sm text-muted">{SITE.oab}</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">Formação</p>
                <p className="mt-1 text-sm text-ink/80">Direito pelo Centro Universitário do Espírito Santo - Unesc</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">Especialização</p>
                <p className="mt-1 text-sm text-ink/80">Pós Graduação em Direito Penal e Processo Penal e Pós Graduação em Criminologia</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">Experiência</p>
                <p className="mt-1 text-sm text-ink/80">Atuação prática em Direito de Trânsito e experiência na área criminal, com análise de casos concretos, elaboração de recursos e defesas administrativas, além do acompanhamento de questões relacionadas a infrações, CNH e procedimentos criminais.

A experiência conjunta nessas áreas permite uma visão mais ampla dos casos, especialmente em situações em que questões de trânsito possuem desdobramentos na esfera criminal, possibilitando uma análise integrada dos aspectos administrativos e penais envolvidos.</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">Atuação</p>
                <p className="mt-1 text-sm text-ink/80">Direito de Trânsito · Atendimento digital nacional</p>
              </div>
            </div>

            <p className="mt-8 text-[16px] leading-relaxed text-ink/85">
              A tecnologia empregada no atendimento — triagem inicial, envio
              de documentos e acompanhamento do caso — tem como finalidade
              tornar o processo mais organizado e acessível. A atuação
              jurídica, no entanto, permanece pessoal e sob responsabilidade
              direta do advogado, em conformidade com o Código de Ética e
              Disciplina da OAB.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
