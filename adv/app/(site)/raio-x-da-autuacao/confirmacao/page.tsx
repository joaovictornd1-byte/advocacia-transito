import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Documentação recebida",
  robots: { index: false, follow: false },
};

export default function ConfirmationPage() {
  return (
    <section className="flex min-h-[70vh] items-center bg-surface-alt py-16">
      <div className="container-content max-w-xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-accent-dark">
          <CheckCircle2 size={26} />
        </div>
        <h1 className="mt-6 font-display text-3xl text-ink md:text-4xl">
          Documentação recebida.
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          Recebemos as informações enviadas. A equipe responsável realizará a
          análise e entrará em contato pelos canais informados.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={buildWhatsAppLink(WHATSAPP_MESSAGES.raioX)} target="_blank" size="lg" withArrow>
            Falar pelo WhatsApp
          </ButtonLink>
          <ButtonLink href="/" variant="secondary" size="lg">
            Voltar para o início
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
