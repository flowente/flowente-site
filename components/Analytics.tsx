"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { EVENTO, statistichePermesse } from "@/lib/consenso";

// PostHog, ma solo dopo il consenso.
//
// La libreria viene caricata con un import dinamico dentro l'avvio: finché non
// accetti, il codice di PostHog non viene proprio scaricato — non basta
// inizializzarlo "in modalità spenta", perché lo script sarebbe comunque partito
// e avrebbe già visto il tuo indirizzo IP.
//
const CHIAVE = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

function configurazionePostHog() {
  const chiaviMancanti = [
    ["NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN", CHIAVE],
    ["NEXT_PUBLIC_POSTHOG_HOST", HOST],
  ].filter(([, valore]) => !valore);

  if (chiaviMancanti.length > 0) {
    if (process.env.NODE_ENV === "development") {
      const [variabile] = chiaviMancanti[0];
      throw new Error(
        `${variabile} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${variabile} is configured`,
      );
    }
    return null;
  }

  return { chiave: CHIAVE!, host: HOST! };
}

// opt_out_capturing() interrompe l'invio ma lascia dov'è l'identificatore già
// scritto: chi revoca se lo ritroverebbe nel browser. Qui si cancella tutto ciò
// che PostHog ha lasciato — chiavi ph_… e __ph_… fra archiviazione e cookie.
// Sparisce anche il segnalino di opt-out di PostHog, e va bene: a decidere se
// caricarlo è statistichePermesse(), non lui.
const suoDiPosthog = (k: string) => k.startsWith("ph_") || k.startsWith("__ph_");

function ripulisci() {
  try {
    for (const deposito of [window.localStorage, window.sessionStorage]) {
      Object.keys(deposito).filter(suoDiPosthog).forEach((k) => deposito.removeItem(k));
    }
  } catch {
    /* archiviazione non disponibile: non c'è nulla da cancellare */
  }
  document.cookie.split(";").forEach((voce) => {
    const nome = voce.split("=")[0]?.trim();
    if (nome && suoDiPosthog(nome)) {
      document.cookie = `${nome}=; Max-Age=0; path=/`;
      document.cookie = `${nome}=; Max-Age=0; path=/; domain=.${location.hostname}`;
    }
  });
}

export function Analytics() {
  const pathname = usePathname();
  const attivo = useRef(false);

  useEffect(() => {
    const configurazione = configurazionePostHog();
    if (!configurazione) return;

    const avvia = async () => {
      if (attivo.current) return;
      const { default: posthog } = await import("posthog-js");
      posthog.init(configurazione.chiave, {
        api_host: configurazione.host,
        defaults: "2026-01-30",
        // Le navigazioni fra le pagine sono client-side: il conteggio automatico
        // vedrebbe solo il primo caricamento. Lo facciamo a mano più sotto.
        capture_pageview: false,
        // Invia a Error Tracking soltanto eccezioni e promise rejection non gestite;
        // gli errori in console non fanno parte del perimetro di monitoraggio.
        capture_exceptions: {
          capture_unhandled_errors: true,
          capture_unhandled_rejections: true,
          capture_console_errors: false,
        },
        person_profiles: "identified_only",
      });
      attivo.current = true;
      posthog.capture("$pageview");
    };

    const ferma = async () => {
      if (!attivo.current) return;
      const { default: posthog } = await import("posthog-js");
      posthog.opt_out_capturing();
      attivo.current = false;
      // Niente reset(): serve a cambiare utente, non a cancellare, e rigenera
      // un identificatore nuovo scrivendolo subito dopo la pulizia — misurato,
      // la chiave tornava al suo posto un istante dopo essere stata tolta.
      // La seconda passata copre le scritture che PostHog accoda.
      ripulisci();
      window.setTimeout(ripulisci, 150);
    };

    if (statistichePermesse()) avvia();

    // Il banner e il comando nel footer emettono questo evento: la revoca deve
    // avere effetto subito, non al prossimo caricamento.
    const suCambio = () => {
      if (statistichePermesse()) avvia();
      else ferma();
    };
    window.addEventListener(EVENTO, suCambio);
    return () => window.removeEventListener(EVENTO, suCambio);
  }, []);

  useEffect(() => {
    // Al primo montaggio ci pensa avvia(): qui contano solo i cambi successivi.
    if (!attivo.current) return;
    import("posthog-js").then(({ default: posthog }) => posthog.capture("$pageview"));
  }, [pathname]);

  return null;
}
