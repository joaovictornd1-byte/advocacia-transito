import { ButtonLink } from "@/components/ui/Button";
import { FileText, Search, Compass, Gavel } from "lucide-react";

const FLOW = [
  { icon: FileText, label: "Documento" },
  { icon: Search, label: "Análise" },
  { icon: Compass, label: "Orientação" },
  { icon: Gavel, label: "Atuação" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="container-content grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fadeUp">
          <p className="eyebrow">Direito de Trânsito · Atendimento digital nacional</p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Direito de Trânsito especializado para proteger seus direitos.
          </h1>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
            Análise individualizada de autuações, procedimentos relacionados à
            CNH e atuação jurídica especializada, com atendimento digital em
            todo o Brasil.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/raio-x-da-autuacao" size="lg" withArrow>
              Enviar documentação para análise
            </ButtonLink>
            <ButtonLink href="/servicos" size="lg" variant="secondary">
              Conhecer os serviços
            </ButtonLink>
          </div>
        </div>

        {/* Elemento-assinatura: documento com varredura (Raio-X da Autuação) */}
        <div className="relative mx-auto flex h-[340px] w-full max-w-sm items-center justify-center">
          <div className="relative h-full w-full rounded-lg border border-line bg-white shadow-lift overflow-hidden">
            <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(#E3E6EA_1px,transparent_1px),linear-gradient(90deg,#E3E6EA_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex h-full flex-col gap-3 p-7">
              <div className="h-3 w-2/3 rounded bg-ink/10" />
              <div className="h-3 w-1/2 rounded bg-ink/10" />
              <div className="mt-4 h-px w-full bg-line" />
              <div className="mt-2 h-2.5 w-full rounded bg-ink/[0.06]" />
              <div className="h-2.5 w-5/6 rounded bg-ink/[0.06]" />
              <div className="h-2.5 w-full rounded bg-ink/[0.06]" />
              <div className="h-2.5 w-2/3 rounded bg-ink/[0.06]" />
              <div className="mt-16 flex items-center justify-between font-mono text-[10px] text-muted">
                <span>AIT Nº XXXXXXXXX</span>
                <span>ART. 218</span>
              </div>
            </div>
            {/* scan line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-14 animate-scan bg-gradient-to-b from-accent/0 via-accent/25 to-accent/0" />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[92%] -translate-x-1/2 rounded-md border border-line bg-white px-4 py-3 shadow-card">
            <div className="flex items-center justify-between">
              {FLOW.map((step, i) => (
                <div key={step.label} className="flex flex-1 flex-col items-center gap-1.5 text-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                    <step.icon size={15} />
                  </div>
                  <span className="text-[10px] font-medium text-muted">{step.label}</span>
                  {i < FLOW.length - 1 && (
                    <span className="absolute hidden" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
