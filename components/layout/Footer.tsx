import Link from "next/link";
import { SITE } from "@/lib/constants/site";
import { FOOTER_LEGAL_NAV, MAIN_NAV } from "@/lib/constants/nav";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white/80">
      <div className="container-content grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg text-white">{SITE.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Direito de Trânsito. Atendimento digital em todo o Brasil.
          </p>
          <p className="mt-4 text-sm text-white/60">{SITE.lawyerName}</p>
          <p className="text-sm text-white/60">{SITE.oab}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>{SITE.emailPlaceholder}</li>
            <li>{SITE.phonePlaceholder}</li>
            <li>{SITE.addressPlaceholder}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Institucional</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            {FOOTER_LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-content border-t border-white/10 py-6 text-xs text-white/40">
        <p>
          © {new Date().getFullYear()} {SITE.name}. {SITE.cnpj !== "[CNPJ]" ? SITE.cnpj : "[CNPJ]"}.
          Todos os direitos reservados. As informações deste site têm caráter
          informativo e não constituem garantia de resultado, em conformidade com
          o Código de Ética e Disciplina da OAB.
        </p>
      </div>
    </footer>
  );
}
