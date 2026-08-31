import type { Metadata } from "next";
import { ScanLine } from "lucide-react";
import { RaioXForm } from "@/components/forms/RaioXForm";

export const metadata: Metadata = {
  title: "Raio-X da Autuação — Envie sua documentação para análise",
  description:
    "Envie a documentação da sua autuação de trânsito para análise jurídica individualizada. Atendimento digital em todo o Brasil.",
  alternates: { canonical: "/raio-x-da-autuacao" },
};

export default function RaioXPage() {
  return (
    <section className="bg-surface-alt py-16 md:py-20">
      <div className="container-content">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent-light text-accent-dark">
            <ScanLine size={20} />
          </div>
          <h1 className="mt-4 font-display text-3xl text-ink md:text-4xl">
            Raio-X da Autuação
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Envie a documentação da sua autuação. A partir das informações
            apresentadas, realizaremos a análise jurídica individualizada da
            situação. Seus dados são tratados com confidencialidade, conforme
            a Política de Privacidade.
          </p>
        </div>
        <RaioXForm />
      </div>
    </section>
  );
}
