"use client";

import { useEffect, useRef, useState } from "react";
import { CASI, ANCORA_CASI, type Caso } from "@/lib/casi";
import { VideoMuto } from "./VideoMuto";

// Pila di schede nella hero: tre case study veri che si danno il cambio.
//
// Vengono da lib/casi.ts, quindi si aggiornano da sole quando cambiano i case
// study in /servizi.
const PILA: Caso[] = [CASI[1], CASI[2], CASI[3]];

// L'ANIMAZIONE. La scheda in testa non scivola sotto le altre: esce di lato
// ruotando, passa sopra a tutto, e rientra in fondo alla pila dall'altra parte.
// E' il gesto di chi sfoglia un mazzo, e si legge come un'azione invece che
// come una dissolvenza.
//
// SOSTA e' quanto una scheda resta ferma; USCITA quanto dura il volo prima che
// la pila si ricomponga; SCAMBIO la durata di ogni spostamento.
const SOSTA = 4200;
const USCITA = 620;
const SCAMBIO = 620;

// Le tre posizioni della pila. Impilamento verso l'alto e a destra, con le
// schede dietro leggermente rimpicciolite: da' profondita' vera invece del solo
// sfalsamento. Sotto md rotazioni e scostamenti sono ridotti, perche' ruotare
// una scheda alta 420px ne allarga l'ingombro e a 375px arrivava a filo bordo.
const POSIZIONI = [
  "translate-x-0 translate-y-0 -rotate-[2deg] md:-rotate-[3deg] scale-100",
  "translate-x-3 -translate-y-2 rotate-[1deg] md:translate-x-[26px] md:-translate-y-[18px] md:rotate-[1.5deg] scale-[0.975] md:scale-[0.962]",
  "translate-x-6 -translate-y-4 rotate-[-0.5deg] md:translate-x-[52px] md:-translate-y-[36px] md:rotate-[-1deg] scale-[0.95] md:scale-[0.925]",
];

// La posizione durante il volo. Nello snippet originale la scheda usciva di
// -56%: qui la pila sta nella colonna destra della hero e a quella distanza
// finiva sopra il titolo, coprendolo. A -34% resta quasi tutta nella sua
// colonna, e l'opacita' che scende fa il resto — quel poco che sconfina non
// nasconde niente.
const VOLO = "-translate-x-[34%] translate-y-[4%] -rotate-[9deg] scale-[0.98]";

const OPACITA = [1, 0.9, 0.78];

export function HeroCases() {
  // testa = indice della scheda davanti. uscente = quella in volo, se c'e'.
  const [testa, setTesta] = useState(PILA.length - 1);
  const [uscente, setUscente] = useState<number | null>(null);
  const [fermo, setFermo] = useState(false);

  // testa serve dentro l'intervallo, che pero' si crea una volta sola: senza il
  // ref leggerebbe per sempre il valore del primo giro.
  const testaRef = useRef(testa);
  testaRef.current = testa;

  useEffect(() => {
    if (fermo) return;
    // Chi ha chiesto di non vedere animazioni si tiene la prima scheda.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let atterraggio = 0;
    const giro = window.setInterval(() => {
      setUscente(testaRef.current);
      // La pila si ricompone quando il volo e' finito: fino ad allora la scheda
      // uscente e' ancora "in mano" e le altre non si muovono.
      atterraggio = window.setTimeout(() => {
        setUscente(null);
        setTesta((x) => (x + 1) % PILA.length);
      }, USCITA);
    }, SOSTA);

    return () => {
      window.clearInterval(giro);
      // Senza questo, mettendo il puntatore sopra mentre una scheda vola, quella
      // resterebbe fuori: l'atterraggio non arriverebbe mai.
      window.clearTimeout(atterraggio);
      setUscente(null);
    };
  }, [fermo]);

  // Mentre una scheda vola, le altre si dispongono gia' come se fosse uscita:
  // la seconda prende il posto della prima nello stesso momento in cui quella
  // se ne va, ed e' questo a far sembrare il gesto una cosa sola.
  const riferimento = uscente !== null ? (testa + 1) % PILA.length : testa;
  const posizione = (i: number) => (((i - riferimento) % PILA.length) + PILA.length) % PILA.length;
  const inTesta = uscente !== null ? uscente : testa;

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
      className="hero-cases relative grid w-full max-w-[420px] mx-auto md:mx-0 md:justify-self-end"
    >
      {PILA.map((caso, i) => {
        const vola = i === uscente;
        const pos = posizione(i);
        const davanti = vola || pos === 0;
        return (
          <span
            key={caso.label}
            // Le schede dietro restano fuori dalla lettura assistita: il nome del
            // link è già quello in testa, e leggerle tutte lo renderebbe illeggibile.
            aria-hidden={davanti ? undefined : "true"}
            style={{
              // Chi vola passa sopra a tutto, altrimenti sparirebbe dietro le
              // altre proprio mentre esce.
              zIndex: vola ? 40 : 30 - pos * 10,
              opacity: vola ? 0.12 : OPACITA[pos],
              // Curva decisa in partenza e morbida in arrivo: il volo deve avere
              // uno scatto iniziale, il rientro no.
              transition: `transform ${SCAMBIO}ms cubic-bezier(.32,0,.22,1), opacity ${SCAMBIO}ms ease, z-index 0s`,
            }}
            className={`col-start-1 row-start-1 rounded-[18px] border border-border bg-surface overflow-hidden ${
              vola ? VOLO : POSIZIONI[pos]
            } ${davanti ? "shadow-[0_14px_44px_rgba(11,11,12,0.12)]" : ""}`}
          >
            {caso.video ? (
              <VideoMuto
                src={caso.video}
                attivo={davanti}
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
                  resto: nessun testo può sfondare lo spazio che ha.
                  Tre righe di titolo perché quello di GymOS ne occupa tre: un
                  titolo tagliato a metà è la cosa peggiore da troncare, visto
                  che è la sola riga che qualcuno legge di sicuro. */}
              <span className="block font-display font-semibold text-[1.12rem] leading-[1.35] tracking-[-0.015em] mt-2.5 line-clamp-3 h-[4.6rem]">
                {caso.title}
              </span>
              <span className="block text-fg-2 text-[0.92rem] leading-[1.5] mt-2 line-clamp-3 h-[4.15rem] overflow-hidden">
                {caso.text}
              </span>
            </span>
          </span>
        );
      })}

      {/* Indicatore, non comando: dice quante schede ci sono e a che punto siamo.
          Non è cliccabile perché tutta la pila è un link ai case study, e due
          bersagli sovrapposti costringerebbero a indovinare cosa succede. */}
      <span aria-hidden="true" className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
        {PILA.map((_, i) => (
          <span
            key={i}
            className={`block h-[6px] w-[6px] rounded-full transition-colors duration-500 ${
              i === inTesta ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </span>
    </a>
  );
}
