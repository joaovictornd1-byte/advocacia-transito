"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants/site";

function messageForPath(path: string) {
  if (path.startsWith("/empresas")) return WHATSAPP_MESSAGES.empresas;
  if (path.includes("cnh")) return WHATSAPP_MESSAGES.cnh;
  if (path.startsWith("/raio-x-da-autuacao")) return WHATSAPP_MESSAGES.raioX;
  return WHATSAPP_MESSAGES.default;
}

export function WhatsAppFloatButton() {
  const pathname = usePathname();
  const href = buildWhatsAppLink(messageForPath(pathname));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-event="whatsapp_click"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#0E7C86] px-4 py-3 text-white shadow-lift transition-transform hover:scale-[1.03] md:bottom-8 md:right-8"
    >
      <MessageCircle size={20} />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
