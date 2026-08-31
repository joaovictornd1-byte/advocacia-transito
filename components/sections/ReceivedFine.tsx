import { ButtonLink } from "@/components/ui/Button";

export function ReceivedFine() {
  return (
    <section className="bg-ink-light py-16 text-white md:py-20">
      <div className="container-content grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <h2 className="font-display text-3xl leading-tight md:text-[2.1rem]">
          Recebeu uma multa?
        </h2>
        <div>
          <p className="text-[17px] leading-relaxed text-white/75">
            Receber uma multa não significa necessariamente que você saiba
            qual medida administrativa é adequada ao seu caso. A análise da
            documentação permite identificar as características da autuação,
            os prazos envolvidos e as medidas juridicamente cabíveis.
          </p>
          <div className="mt-6">
            <ButtonLink
              href="/raio-x-da-autuacao"
              variant="secondary"
              withArrow
              className="border-white/30 text-white hover:border-white hover:bg-white/10"
            >
              Quero analisar minha situação
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
