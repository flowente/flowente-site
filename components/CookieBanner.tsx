"use client";

import { useEffect, useState } from "react";
import { EVENTO, leggiConsenso, salvaConsenso } from "@/lib/consenso";

// Banner di consenso. Tre vincoli che ne determinano la forma:
//
// 1. Rifiutare dev'essere facile quanto accettare — stesso posto, stessa
//    dimensione, un clic per entrambi. Niente "accetta" grande e "gestisci
//    preferenze" nascosto in un link.
// 2. Non blocca la pagina: non c'è niente da bloccare, perché nessuno strumento
//    di statistica viene caricato prima della scelta. Una modale che copre il
//    sito per una richiesta a cui si può rispondere dopo è solo un ostacolo.
// 3. Compare solo dopo il montaggio: la scelta sta in localStorage, che sul
//    server non esiste, e renderlo subito darebbe un disallineamento in idratazione.
export function CookieBanner() {
  const [visibile, setVisibile] = useState(false);

  useEffect(() => {
    setVisibile(leggiConsenso() === null);
    // Il footer può riaprire la richiesta: il banner sta in ascolto.
    const suCambio = (e: Event) => setVisibile((e as CustomEvent).detail === null);
    window.addEventListener(EVENTO, suCambio);
    return () => window.removeEventListener(EVENTO, suCambio);
  }, []);

  if (!visibile) return null;

  const scegli = (stato: "accettato" | "rifiutato") => {
    salvaConsenso(stato);
    setVisibile(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Consenso ai cookie"
      className="cookie-banner fixed z-50 left-4 right-4 bottom-4 md:left-auto md:right-6 md:bottom-6 md:w-[420px] rounded-[16px] border border-border bg-surface p-6 shadow-[0_8px_30px_rgba(11,11,12,0.10)]"
    >
      <p className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-fg-muted">Cookie</p>
      <p className="text-fg-2 text-[0.95rem] mt-3">
        Il sito usa i cookie necessari a funzionare. Per le statistiche d&apos;uso — quali pagine vengono lette, in forma
        aggregata — serve il tuo consenso.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" className="btn btn-primary" onClick={() => scegli("accettato")}>
          Accetta
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => scegli("rifiutato")}>
          Rifiuta
        </button>
        <a href="/cookie" className="text-[0.85rem] text-fg-muted hover:text-fg transition-colors ml-auto">
          Cookie Policy
        </a>
      </div>
    </div>
  );
}
