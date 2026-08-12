"use client";

import { useEffect, useState } from "react";
import { EVENTO, leggiPreferenze, salvaPreferenze } from "@/lib/consenso";

// Banner e pannello preferenze nello stesso componente. Vincoli che ne
// determinano la forma:
//
// 1. Rifiutare dev'essere facile quanto accettare — stesso posto, stessa
//    dimensione, un clic per entrambi. Niente "accetta tutto" grande e
//    "personalizza" nascosto in un link grigio.
// 2. Non blocca la pagina: non c'è niente da bloccare, perché nessuno strumento
//    di statistica viene caricato prima della scelta.
// 3. Compare solo dopo il montaggio: la scelta sta in localStorage, che sul
//    server non esiste, e renderlo subito darebbe un disallineamento in idratazione.
export function CookieBanner() {
  const [visibile, setVisibile] = useState(false);
  const [dettaglio, setDettaglio] = useState(false);
  const [statistiche, setStatistiche] = useState(false);

  useEffect(() => {
    const p = leggiPreferenze();
    setVisibile(p === null);
    if (p) setStatistiche(p.statistiche);
    // Il footer può riaprire la richiesta: il banner sta in ascolto.
    const suCambio = (e: Event) => {
      const dettaglioEvento = (e as CustomEvent).detail;
      if (dettaglioEvento === null) {
        setDettaglio(false);
        setStatistiche(false);
        setVisibile(true);
      } else {
        setVisibile(false);
      }
    };
    window.addEventListener(EVENTO, suCambio);
    return () => window.removeEventListener(EVENTO, suCambio);
  }, []);

  if (!visibile) return null;

  const decidi = (statistiche: boolean) => {
    salvaPreferenze({ statistiche });
    setVisibile(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Preferenze cookie"
      className="cookie-banner fixed z-50 left-4 right-4 bottom-4 md:left-auto md:right-6 md:bottom-6 md:w-[440px] rounded-[16px] border border-border bg-surface p-6 shadow-[0_8px_30px_rgba(11,11,12,0.10)]"
    >
      <p className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-fg-muted">Cookie</p>

      {!dettaglio ? (
        <>
          <p className="text-fg-2 text-[0.95rem] mt-3">
            Il sito usa i cookie necessari a funzionare. Per le statistiche d&apos;uso — quali pagine vengono lette, in
            forma aggregata — serve il tuo consenso.
          </p>
          {/* Stessa variante per accettare e rifiutare, non una piena e una a
              filetto: il consenso non è libero se una delle due strade è più
              invitante dell'altra. Prima "Accetta tutto" era il bottone pieno e
              "Rifiuta" quello a filetto — stessa dimensione, ma non stesso peso. */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="button" className="btn btn-ghost" onClick={() => decidi(true)}>
              Accetta tutto
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => decidi(false)}>
              Rifiuta non necessari
            </button>
            <button
              type="button"
              onClick={() => setDettaglio(true)}
              className="text-[0.85rem] text-fg-muted hover:text-fg transition-colors underline underline-offset-4"
            >
              Personalizza
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mt-4 divide-y divide-border border-y border-border">
            {/* I tecnici non sono una scelta: l'interruttore è disattivato e spiegato,
                non nascosto — così si vede che esistono e perché non si spengono. */}
            <div className="py-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-display font-semibold text-[1rem]">Tecnici</p>
                <p className="text-fg-2 text-[0.88rem] mt-1">
                  Servono a far funzionare il sito e a ricordare questa scelta. Sempre attivi.
                </p>
              </div>
              <span className="font-mono text-[0.68rem] uppercase text-fg-muted shrink-0 pt-1">Sempre</span>
            </div>

            <label className="py-4 flex items-start justify-between gap-4 cursor-pointer">
              <div>
                <p className="font-display font-semibold text-[1rem]">Statistiche</p>
                <p className="text-fg-2 text-[0.88rem] mt-1">
                  Quali pagine vengono lette e in che ordine, in forma aggregata. Non ti profiliamo.
                </p>
              </div>
              <input
                type="checkbox"
                checked={statistiche}
                onChange={(e) => setStatistiche(e.target.checked)}
                className="mt-1 h-[18px] w-[18px] shrink-0 accent-[var(--accent)]"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="button" className="btn btn-primary" onClick={() => decidi(statistiche)}>
              Salva preferenze
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => decidi(true)}>
              Accetta tutto
            </button>
          </div>
        </>
      )}

      <p className="text-[0.82rem] text-fg-muted mt-4">
        <a href="/privacy" className="underline underline-offset-4 hover:text-fg transition-colors">
          Privacy Policy
        </a>
        {" · "}
        <a href="/cookie" className="underline underline-offset-4 hover:text-fg transition-colors">
          Cookie Policy
        </a>
      </p>
    </div>
  );
}
