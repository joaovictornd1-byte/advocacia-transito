const STEPS = [
  {
    number: "01",
    title: "Envie os documentos",
    description: "Envie a notificação, AIT ou documentos relacionados ao seu caso.",
  },
  {
    number: "02",
    title: "Analisamos a situação",
    description: "Realizamos análise individualizada dos documentos apresentados.",
  },
  {
    number: "03",
    title: "Orientamos sobre as medidas cabíveis",
    description: "Você recebe orientação jurídica sobre o procedimento adequado ao seu caso.",
  },
  {
    number: "04",
    title: "Atuamos",
    description: "Quando contratado, o escritório realiza a atuação jurídica correspondente.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-line bg-surface py-16 md:py-20">
      <div className="container-content">
        <p className="eyebrow">Como funciona</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl text-ink md:text-[2.1rem]">
          Um processo claro, do envio à orientação jurídica.
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.number} className="border-t-2 border-ink/10 pt-5">
              <span className="font-mono text-sm text-accent-dark">{step.number}</span>
              <h3 className="mt-2 font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
