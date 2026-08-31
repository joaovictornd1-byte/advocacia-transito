import type { Metadata } from "next";
import { ServicePageBody } from "@/components/sections/ServicePageBody";
import { SERVICE_PAGES } from "@/lib/content/servicePages";

const content = SERVICE_PAGES["jari"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: "/servicos/jari" },
};

export default function ServicePage() {
  return <ServicePageBody content={content} />;
}
