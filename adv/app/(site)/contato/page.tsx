import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Surface";
import { SITE, buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com o escritório ou envie sua documentação para análise jurídica especializada.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com o escritório"
        description="O atendimento é predominantemente digital, com alcance em todo o território nacional."
      />

      <section className="bg-surface py-14 md:py-16">
        <div className="container-content grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <MessageCircle className="text-accent-dark" size={20} />
            <h3 className="mt-3 font-medium text-ink">WhatsApp</h3>
            <p className="mt-1 text-sm text-muted">Canal mais rápido para dúvidas iniciais.</p>
            <ButtonLink
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.default)}
              target="_blank"
              variant="ghost"
              className="mt-3 px-0"
            >
              Iniciar conversa
            </ButtonLink>
          </Card>
          <Card>
            <Mail className="text-accent-dark" size={20} />
            <h3 className="mt-3 font-medium text-ink">E-mail</h3>
            <p className="mt-1 text-sm text-muted">{SITE.emailPlaceholder}</p>
          </Card>
          <Card>
            <Phone className="text-accent-dark" size={20} />
            <h3 className="mt-3 font-medium text-ink">Telefone</h3>
            <p className="mt-1 text-sm text-muted">{SITE.phonePlaceholder}</p>
          </Card>
          <Card>
            <MapPin className="text-accent-dark" size={20} />
            <h3 className="mt-3 font-medium text-ink">Endereço</h3>
            <p className="mt-1 text-sm text-muted">{SITE.addressPlaceholder}</p>
          </Card>
        </div>

        <div className="container-content mt-10 rounded-md border border-line bg-surface-alt p-6 md:p-8">
          <h2 className="font-display text-xl text-ink">Prefere enviar sua documentação diretamente?</h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
            Utilize o Raio-X da Autuação para enviar seus documentos e receber
            uma análise individualizada da sua situação.
          </p>
          <ButtonLink href="/raio-x-da-autuacao" size="md" withArrow className="mt-4">
            Enviar documentação para análise
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
