import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ReceivedFine } from "@/components/sections/ReceivedFine";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { RaioXFeature } from "@/components/sections/RaioXFeature";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { HOME_FAQ } from "@/lib/constants/faq";

export const metadata: Metadata = {
  title: "Direito de Trânsito especializado para proteger seus direitos",
  description:
    "Análise individualizada de autuações, procedimentos relacionados à CNH e atuação jurídica especializada, com atendimento digital em todo o Brasil.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReceivedFine />
      <HowItWorks />
      <ServicesGrid />
      <RaioXFeature />
      <FaqSection items={HOME_FAQ} />
      <CtaBand />
    </>
  );
}
