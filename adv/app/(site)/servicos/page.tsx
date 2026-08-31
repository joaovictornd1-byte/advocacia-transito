import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Serviços em Direito de Trânsito",
  description:
    "Multas e autuações, procedimentos relacionados à CNH, infrações específicas e gestão jurídica para empresas e frotas.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Áreas de atuação em Direito de Trânsito"
        description="Cada situação é analisada individualmente, a partir da documentação apresentada e das circunstâncias específicas do caso."
      />
      <ServicesGrid />
      <CtaBand />
    </>
  );
}
