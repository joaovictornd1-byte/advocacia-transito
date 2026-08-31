import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_GROUPS } from "@/lib/constants/services";
import { Card } from "@/components/ui/Surface";

export function ServicesGrid() {
  return (
    <section className="bg-surface-alt py-16 md:py-20" id="servicos">
      <div className="container-content">
        <p className="eyebrow">Áreas de atuação</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl text-ink md:text-[2.1rem]">
          Atuação especializada em Direito de Trânsito.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICE_GROUPS.map((group) => (
            <Card key={group.slug} className="flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl text-ink">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.summary}</p>
                <ul className="mt-4 grid gap-1.5 text-sm text-ink/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={group.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark hover:text-ink"
              >
                Saber mais <ArrowUpRight size={15} />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
