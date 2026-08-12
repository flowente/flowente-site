"use client";

import { useEffect, useState } from "react";
import { CASI, ANCORA_CASI, type Caso } from "@/lib/casi";
import { VideoMuto } from "./VideoMuto";

// Pila di schede nella hero: tre case study veri che si danno il cambio. Quella
// in testa scivola sotto le altre e la seconda ne prende esattamente il posto.
//
// Vengono da lib/casi.ts, quindi si aggiornano da sole quando cambiano i case
// study in /servizi.
const PILA: Caso[] = [CASI[1], CASI[2], CASI[3]];

// Quanto resta ferma una scheda e quanto dura lo scambio. Tempi lunghi come il
// resto del sito: la pila deve accompagnare la lettura, non interromperla.
const SOSTA = 5200;
const SCAMBIO = 900;

// Posizione delle tre schede: 0 è in testa, 2 è in fondo. Sotto md rotazione e
// sfalsamento sono ridotti — la rotazione allarga l'ingombro di circa l'altezza
// per il seno dell'angolo, e su una scheda alta 420px bastavano 3,5 gradi per
// portarla a filo del bordo dello schermo.
const POSIZIONI = [
  "translate-x-0 translate-y-0 -rotate-[1deg] md:-rotate-[1.6deg]",
  "translate-x-1.5 translate-y-3 rotate-[1deg] md:translate-x-2.5 md:translate-y-[22px] md:rotate-[1.8deg]",
  "translate-x-3 translate-y-6 rotate-[2deg] md:translate-x-5 md:translate-y-11 md:rotate-[3.5deg]",
];

// Trasparenza per posizione: la scheda in testa è piena, le altre si spengono
// via via. Serve a due cose. Dà profondità alla pila, e soprattutto copre lo
// scatto: senza, la scheda uscente cambiava piano di colpo e si vedeva saltare.
// È lo stesso fade del resto del sito — opacità che sale e scende, stessa idea
// di pageIn — applicato allo scambio invece che al caricamento.
// Non troppo spinta: le schede dietro si vedono per una striscia di sedici pixel
// a destra e una quarantina in basso, e su fondo chiaro sotto il 60% smettono di
// leggersi come carta. Sono tre numeri, si tarano guardando il risultato.
const OPACITA = [1, 0.82, 0.62];

export function HeroCases() {
  const [giro, setGiro] = useState(0);
  const [fermo, setFermo] = useState(false);

  useEffect(() => {
    if (fermo) return;
    // Chi ha chiesto di non vedere animazioni si tiene la prima scheda.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setGiro((g) => g + 1), SOSTA);
    return () => window.clearInterval(t);
  }, [fermo]);

  // In testa parte l'ultima della lista, così l'ordine di lettura resta quello
  // dell'elenco. A ogni giro ognuna scala di un posto.
  const posizione = (i: number) => (((PILA.length - 1 - i - giro) % PILA.length) + PILA.length) % PILA.length;
  const inTesta = PILA.findIndex((_, i) => posizione(i) === 0);

  return (
    <a
      href={ANCORA_CASI}
      aria-label={`${PILA[inTesta].title} Vai ai case study.`}
      onMouseEnter={() => setFermo(true)}
      onMouseLeave={() => setFermo(false)}
      onFocus={() => setFermo(true)}
      onBlur={() => setFermo(false)}
      // Griglia con tutte le schede nella stessa cella: restano nel flusso, così
      // l'altezza del contenitore è quella della scheda e non va fissata a mano.
      className="hero-cases grid w-full max-w-[420px] mx-auto md:mx-0 md:justify-self-end"
    >
      {PILA.map((caso, i) => {
        const pos = posizione(i);
        const testa = pos === 0;
        return (
          <span
            key={caso.label}
            // Le schede dietro restano fuori dalla lettura assistita: il nome del
            // link è già quello in testa, e leggerle tutte lo renderebbe illeggibile.
            aria-hidden={testa ? undefined : "true"}
            style={{
              zIndex: 30 - pos * 10,
              opacity: OPACITA[pos],
              // Lo z-index cambia a metà scambio, non all'inizio. È un valore
              // discreto — non si può interpolare — e cambiandolo subito la
              // scheda uscente spariva dietro mentre era ancora al suo posto:
              // era quello lo scatto. Ritardandolo, quando passa sotto si è già
              // spostata e sbiadita, e il salto non si vede.
              transition: `transform ${SCAMBIO}ms ease-in-out, opacity ${SCAMBIO}ms ease-in-out, z-index 0s linear ${
                SCAMBIO / 2
              }ms`,
            }}
            className={`col-start-1 row-start-1 rounded-[18px] border border-border bg-surface overflow-hidden ${
              POSIZIONI[pos]
            } ${testa ? "shadow-[0_12px_44px_rgba(11,11,12,0.10)]" : ""}`}
          >
            {caso.video ? (
              <VideoMuto
                src={caso.video}
                attivo={testa}
                poster={caso.img}
                className="block w-full aspect-[3/2] object-cover"
                etichetta={caso.title}
              />
            ) : (
              // Immagine d'ambiente, non un cliente: alt vuoto per non attribuirle
              // un'identità. Il rapporto sta sull'immagine, non sul contenitore.
              <img src={caso.img} alt="" className="block w-full aspect-[3/2] object-cover" />
            )}
            <span className="block p-6">
              <span className="block font-mono text-[0.66rem] uppercase tracking-wide text-accent">{caso.label}</span>
              {/* Altezze fisse, non minime: le schede si scambiano di posto e
                  devono sovrapporsi al pixel. Con un'altezza minima bastava un
                  titolo su due righe invece di una perché la pila si allungasse
                  a ogni giro — misurato, 497px contro 490. Il troncamento fa il
                  resto: nessun testo può sfondare lo spazio che ha. */}
              <span className="block font-display font-semibold text-[1.12rem] leading-[1.35] tracking-[-0.015em] mt-2.5 line-clamp-2 h-[3.1rem]">
                {caso.title}
              </span>
              <span className="block text-fg-2 text-[0.92rem] leading-[1.5] mt-2 line-clamp-3 h-[4.15rem] overflow-hidden">
                {caso.text}
              </span>
            </span>
          </span>
        );
      })}
    </a>
  );
}
