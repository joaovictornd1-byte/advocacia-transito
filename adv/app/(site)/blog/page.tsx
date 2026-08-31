import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Surface";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/content/blogPosts";

export const metadata: Metadata = {
  title: "Blog — Direito de Trânsito",
  description:
    "Conteúdo informativo sobre multas, CNH, infrações e procedimentos administrativos de trânsito.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo sobre Direito de Trânsito"
        description="Artigos informativos sobre multas, CNH, infrações e procedimentos administrativos. Conteúdo educativo, sem promessa de resultado."
      />

      <section className="border-b border-line bg-surface py-6">
        <div className="container-content flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((category) => (
            <Badge key={category} tone="neutral">
              {category}
            </Badge>
          ))}
        </div>
      </section>

      <section className="bg-surface-alt py-14 md:py-16">
        <div className="container-content grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="flex h-full flex-col justify-between transition-shadow hover:shadow-lift">
                <div>
                  <Badge tone="accent">{post.category}</Badge>
                  <h2 className="mt-3 font-display text-lg leading-snug text-ink">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                </div>
                <p className="mt-5 text-xs text-muted">
                  {formatDate(post.publishedAt)} · {post.readingTimeMinutes} min de leitura
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
