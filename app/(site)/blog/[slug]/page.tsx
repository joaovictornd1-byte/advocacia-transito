import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Surface";
import { CtaBand } from "@/components/sections/CtaBand";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    articleSection: post.category,
  };

  return (
    <>
      <article className="border-b border-line bg-surface py-14 md:py-20">
        <div className="container-content max-w-2xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-accent-dark hover:text-ink">
            <ArrowLeft size={15} /> Voltar para o blog
          </Link>

          <Badge tone="accent">{post.category}</Badge>
          <h1 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-muted">
            {formatDate(post.publishedAt)} · {post.readingTimeMinutes} min de leitura
          </p>

          <div className="mt-10 flex flex-col gap-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl text-ink">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-[16px] leading-relaxed text-ink/85">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-muted">
            Este conteúdo tem caráter informativo e não constitui aconselhamento
            jurídico para um caso específico, nem promessa de resultado. Cada
            situação deve ser analisada individualmente.
          </p>
        </div>
      </article>

      <CtaBand
        title="Tem uma situação parecida com esta?"
        description="Envie sua documentação para receber uma análise jurídica individualizada do seu caso."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
