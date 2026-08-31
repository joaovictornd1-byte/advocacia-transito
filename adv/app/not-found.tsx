import { ButtonLink } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="flex min-h-[60vh] items-center justify-center bg-surface-alt py-20">
        <div className="container-content max-w-md text-center">
          <p className="eyebrow">Erro 404</p>
          <h1 className="mt-3 font-display text-3xl text-ink">Página não encontrada</h1>
          <p className="mt-3 text-[15px] text-muted">
            O conteúdo que você procura pode ter sido movido ou não existe mais.
          </p>
          <ButtonLink href="/" size="lg" className="mt-8">
            Voltar para o início
          </ButtonLink>
        </div>
      </section>
      <Footer />
    </>
  );
}
