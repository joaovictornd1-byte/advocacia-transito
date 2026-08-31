import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

const STATIC_ROUTES = [
  "",
  "/sobre",
  "/servicos",
  "/servicos/multas",
  "/servicos/defesa-previa",
  "/servicos/jari",
  "/servicos/cetran",
  "/servicos/suspensao-cnh",
  "/servicos/cassacao-cnh",
  "/servicos/infracoes",
  "/empresas",
  "/raio-x-da-autuacao",
  "/blog",
  "/contato",
  "/politica-de-privacidade",
  "/termos-de-uso",
  "/politica-de-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/raio-x-da-autuacao" ? 0.9 : 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries];
}
