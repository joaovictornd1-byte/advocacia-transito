import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

export function FaqSection({
  items,
  title = "Perguntas frequentes",
}: {
  items: AccordionItem[];
  title?: string;
}) {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-content max-w-3xl">
        <p className="eyebrow">Dúvidas comuns</p>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-[2.1rem]">{title}</h2>
        <div className="mt-10">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
