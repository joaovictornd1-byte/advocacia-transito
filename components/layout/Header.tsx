"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { MAIN_NAV } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/site";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <div className="container-content flex h-[72px] items-center justify-between">
        <Link href="/" className="font-display text-lg font-medium text-ink">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {MAIN_NAV.map((item) => (
            <div
              key={item.href}
              className="group relative"
              onMouseEnter={() => item.children && setOpenSubmenu(item.href)}
              onMouseLeave={() => item.children && setOpenSubmenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-sm px-3.5 py-2 text-[15px] text-ink/80 hover:text-ink"
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </Link>
              {item.children && (
                <div
                  className={cn(
                    "absolute left-0 top-full min-w-[260px] rounded-md border border-line bg-white p-2 shadow-lift transition-all",
                    openSubmenu === item.href
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-1"
                  )}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-sm px-3 py-2 text-sm text-ink/80 hover:bg-surface-alt hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/raio-x-da-autuacao" size="md">
            Enviar documentação
          </ButtonLink>
        </div>

        <button
          className="lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-surface lg:hidden">
          <nav className="container-content flex flex-col py-4" aria-label="Navegação móvel">
            {MAIN_NAV.map((item) => (
              <div key={item.href} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-[15px] font-medium text-ink"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-line pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-sm text-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <ButtonLink href="/raio-x-da-autuacao" size="md" className="mt-3 justify-center">
              Enviar documentação
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
