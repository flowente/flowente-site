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
// Senza NEXT_PUBLIC_POSTHOG_KEY qui non succede niente: il sito resta identico e
// il banner continua a funzionare a vuoto. La chiave si mette fra le Variables
// di Railway, che ricostruisce e la inserisce nel bundle.
const CHIAVE = process.env.NEXT_PUBLIC_POSTHOG_KEY;
// Regione europea come predefinita: il sito vende dati che non escono, mandare
// le proprie metriche negli Stati Uniti sarebbe la contraddizione più facile da
// notare. Si cambia solo con una variabile esplicita.
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

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
    if (!CHIAVE) return;

    const avvia = async () => {
      if (attivo.current) return;
      const { default: posthog } = await import("posthog-js");
      posthog.init(CHIAVE, {
        api_host: HOST,
        // Le navigazioni fra le pagine sono client-side: il conteggio automatico
        // vedrebbe solo il primo caricamento. Lo facciamo a mano più sotto.
        capture_pageview: false,
        // Niente registrazione di ogni clic: servono le pagine viste, e
        // raccogliere meno del necessario è un obbligo prima che una scelta.
        autocapture: false,
        person_profiles: "identified_only",
        // Spegnere autocapture non basta: PostHog scarica la sua configurazione
        // dal progetto e attiva quello che è acceso lì. In produzione stava
        // caricando la registrazione delle sessioni, i sondaggi, i dead click e
        // i web vitals — misurato sul sito in linea. La registrazione delle
        // sessioni cattura DOM e interazioni, cioè molto più di "quali pagine
        // vengono aperte", che è quanto dichiarano la privacy e la cookie policy.
        // I primi tre reggono: verificato sul sito in linea, dopo il consenso non
        // vengono più scaricati né il recorder né i sondaggi né i web vitals.
        disable_session_recording: true,
        disable_surveys: true,
        capture_performance: false,
        // rageclick e heatmap registrano i clic: il primo per frequenza, la
        // seconda per posizione sulla pagina. Entrambi sono letti dalla libreria
        // come semplice booleano di configurazione, quindi qui si spengono davvero
        // — a differenza di capture_dead_clicks qui sotto.
        rageclick: false,
        capture_heatmaps: false,
        // Questo invece NON basta: misurato, dead-clicks-autocapture.js si carica
        // lo stesso. Nella catena di controllo della libreria il valore booleano
        // non chiude la strada alla configurazione remota, che vince. Si spegne
        // solo dalle impostazioni del progetto PostHog. Il flag resta perché
        // esprime l'intento e potrà valere in una versione futura, ma non contarci.
        capture_dead_clicks: false,
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
