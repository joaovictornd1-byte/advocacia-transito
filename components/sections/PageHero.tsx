export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-line bg-surface py-14 md:py-20">
      <div className="container-content max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">{description}</p>
      </div>
    </section>
  );
}
