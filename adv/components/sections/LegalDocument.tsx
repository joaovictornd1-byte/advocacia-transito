export function LegalDocument({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-surface py-14 md:py-20">
      <div className="container-content max-w-2xl">
        <h1 className="font-display text-3xl text-ink md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Última atualização: {updatedAt}</p>
        <div className="prose-legal mt-10 flex flex-col gap-6 text-[15px] leading-relaxed text-ink/85">
          {children}
        </div>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <div className="mt-2 flex flex-col gap-3">{children}</div>
    </div>
  );
}
