import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Card } from "@/components/ui/Surface";
import type { ServicePageContent } from "@/lib/content/servicePages";

export function ServicePageBody({ content }: { content: ServicePageContent }) {
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} description={content.description} />

      <section className="border-b border-line bg-surface py-14 md:py-16">
        <div className="container-content max-w-2xl">
          {content.intro.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-[16px] leading-relaxed text-ink/85 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-surface-alt py-14 md:py-16">
        <div className="container-content">
          <h2 className="font-display text-2xl text-ink md:text-3xl">O que abrange</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.topics.map((topic) => (
              <Card key={topic.title}>
                <h3 className="font-medium text-ink">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {content.faq.length > 0 && <FaqSection items={content.faq} title="Perguntas sobre este serviço" />}

      <CtaBand />
    </>
  );
}
