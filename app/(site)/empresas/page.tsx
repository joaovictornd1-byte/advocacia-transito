import type { Metadata } from "next";
import { Building2, CalendarClock, FileSearch, UserCheck, ShieldCheck, ClipboardList } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Surface";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Gestão jurídica de infrações para empresas e frotas",
  description:
    "Acompanhamento de notificações, organização de prazos e orientação jurídica especializada para empresas com veículos e frotas.",
  alternates: { canonical: "/empresas" },
};

const TOPICS = [
  { icon: FileSearch, title: "Acompanhamento de notificações", description: "Monitoramento das notificações recebidas pela frota, com organização centralizada." },
  { icon: CalendarClock, title: "Organização de prazos", description: "Controle dos prazos administrativos de cada autuação, evitando perda de prazo por dispersão de informações." },
  { icon: UserCheck, title: "Indicação de condutor", description: "Orientação sobre o procedimento de indicação de condutor infrator, quando aplicável." },
  { icon: ClipboardList, title: "Análise de autuações", description: "Análise individualizada das autuações recebidas pelos veículos da frota." },
  { icon: ShieldCheck, title: "Orientação preventiva", description: "Orientação jurídica voltada à redução de riscos administrativos recorrentes." },
  { icon: Building2, title: "Acompanhamento de procedimentos", description: "Condução dos procedimentos administrativos cabíveis, quando contratado o escritório." },
];

export default function EmpresasPage() {
  return (
    <>
      <section className="border-b border-line bg-ink-light py-16 text-white md:py-24">
        <div className="container-content max-w-2xl">
          <p className="eyebrow text-accent">Empresas e Frotas</p>
          <h1 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Gestão jurídica de infrações para empresas e frotas.
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-white/70">
            Apoio jurídico especializado para empresas com veículos próprios
            ou frotas, com organização de notificações, prazos e
            procedimentos administrativos relacionados a infrações de
            trânsito.
          </p>
          <div className="mt-8">
            <ButtonLink
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.empresas)}
              target="_blank"
              size="lg"
              withArrow
              className="bg-accent border-accent hover:bg-accent-dark hover:border-accent-dark"
            >
              Falar com um especialista
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-14 md:py-20">
        <div className="container-content grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic) => (
            <Card key={topic.title}>
              <topic.icon className="text-accent-dark" size={20} />
              <h3 className="mt-3 font-medium text-ink">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <CtaBand
        title="Fale com o escritório sobre sua frota."
        description="A gestão jurídica de infrações é estruturada de acordo com o porte e as necessidades específicas da sua empresa."
        ctaLabel="Falar com um especialista"
        ctaHref={buildWhatsAppLink(WHATSAPP_MESSAGES.empresas)}
      />
    </>
  );
}
