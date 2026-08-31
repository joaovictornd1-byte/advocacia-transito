import { ButtonLink } from "@/components/ui/Button";

export function CtaBand({
  title = "Envie sua documentação para análise.",
  description = "A equipe responsável realizará a análise individualizada do seu caso e entrará em contato pelos canais informados.",
  ctaLabel = "Enviar documentação para análise",
  ctaHref = "/raio-x-da-autuacao",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="border-t border-line bg-surface-alt py-16 md:py-20">
      <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-lg">
          <h2 className="font-display text-2xl text-ink md:text-3xl">{title}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>
        </div>
        <ButtonLink href={ctaHref} size="lg" withArrow>
          {ctaLabel}
        </ButtonLink>
      </div>
    </section>
  );
}
