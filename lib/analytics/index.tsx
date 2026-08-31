"use client";

import Script from "next/script";
import { SITE } from "@/lib/constants/site";

/**
 * GOOGLE ANALYTICS / GOOGLE TAG MANAGER
 * ------------------------------------------------------------------
 * Substitua SITE.gaMeasurementId e SITE.gtmContainerId (lib/constants/site.ts)
 * pelos IDs reais antes de publicar. Enquanto os placeholders (G-XXXXXXXXXX
 * / GTM-XXXXXXX) estiverem em uso, os scripts abaixo carregam mas não
 * enviam dados válidos.
 *
 * Para produção, considere carregar este componente apenas após o
 * consentimento de cookies do usuário (ver /politica-de-cookies).
 * ------------------------------------------------------------------
 */
export function AnalyticsScripts() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaMeasurementId}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${SITE.gaMeasurementId}');
        `}
      </Script>
    </>
  );
}

/**
 * EVENTOS DE CONVERSÃO SUGERIDOS
 * ------------------------------------------------------------------
 * whatsapp_click        — clique no botão flutuante de WhatsApp (já
 *                          instrumentado via data-analytics-event)
 * form_submit_raio_x    — envio concluído do formulário (ver RaioXForm.tsx)
 * form_start            — início do preenchimento (etapa 1 renderizada)
 * form_abandon          — troca de página com formulário iniciado e não enviado
 * upload_complete       — upload de arquivo concluído na etapa 4
 * service_click         — clique em card de serviço
 * cta_click             — clique em CTA principal
 *
 * Chame trackEvent(nome, params) nos pontos relevantes do código.
 * ------------------------------------------------------------------
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) gtag("event", eventName, params);
}
