import { ButtonLink } from "@/components/ui/Button";
import { ScanLine, ShieldCheck, FileSearch } from "lucide-react";

export function RaioXFeature() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="container-content relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="flex items-center gap-2 text-accent">
            <ScanLine size={18} />
            <p className="eyebrow text-accent">Raio-X da Autuação</p>
          </div>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight md:text-[2.3rem]">
            Você não precisa saber qual recurso apresentar.
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/70">
            Envie a documentação da sua autuação. A partir das informações
            apresentadas, realizaremos a análise jurídica individualizada da
            situação.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <FileSearch size={16} className="text-accent" />
              Análise individualizada por documento
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              Envio seguro e privado
            </div>
          </div>

          <div className="mt-8">
            <ButtonLink
              href="/raio-x-da-autuacao"
              size="lg"
              withArrow
              className="bg-accent border-accent hover:bg-accent-dark hover:border-accent-dark"
            >
              Enviar minha documentação
            </ButtonLink>
          </div>
        </div>

        {/* mini visual representation of the scan concept */}
        <div className="hidden justify-self-end md:block">
          <div className="relative h-56 w-40 overflow-hidden rounded-lg border border-white/15 bg-white/[0.04]">
            <div className="absolute inset-x-4 top-6 h-2 rounded bg-white/15" />
            <div className="absolute inset-x-4 top-11 h-2 w-2/3 rounded bg-white/15" />
            <div className="absolute inset-x-4 top-20 h-px bg-white/15" />
            <div className="absolute inset-x-4 top-24 h-2 rounded bg-white/10" />
            <div className="absolute inset-x-4 top-[7.5rem] h-2 w-4/5 rounded bg-white/10" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0" />
          </div>
        </div>
      </div>
    </section>
  );
}
