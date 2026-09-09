"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CASI, type Caso } from "@/lib/casi";

// I dati stanno in lib/casi.ts: li condivide con la pila di schede nella hero.
//
// UNA RIGA SOLA, NON UNA GRIGLIA. Prima erano quattro schede grandi su due
// righe: ognuna pesava come una sezione a sé e insieme occupavano mezza pagina.
// In fila diventano un catalogo da scorrere — si leggono con un colpo d'occhio
// e si guarda in dettaglio solo quella che interessa.
//
// Le schede hanno larghezza fissa e la riga scorre in orizzontale: cosi' il
// numero dei casi non cambia l'impaginazione. Se ne aggiungi due in casi.ts,
// entrano in coda e basta. Le larghezze stanno in globals.css (.caso): scritte
// come utility dentro una costante Tailwind non le genera.
//
// TRE SCHEDE, E LE FRECCE PER LE ALTRE. Prima la quarta si affacciava di una
// quarantina di pixel per dire che la fila continuava. Non funzionava: una
// striscia verticale tagliata sul bordo si legge come un errore, non come un
// invito. Adesso le schede sono frazioni esatte della colonna — tre piene e
// nessun avanzo — e a dire che c'e' dell'altro ci pensano due frecce, che sono
// un comando visibile invece di un indizio da interpretare.
// Su telefono resta l'affaccio: li' si scorre col dito, e due bersagli da
// centrare sarebbero un peggioramento.
//
// IL DETTAGLIO SI APRE IN UNA FINESTRA. La prima versione allargava la scheda
// sul posto: spingeva le altre, cambiava la posizione di scorrimento e obbligava
// a rincorrere il punto in cui si era. Adesso lo sfondo si spegne e il caso
// arriva al centro dello schermo, dove ha spazio per essere letto.
//
// <dialog> nativo e non un div: Esc, il blocco del fuoco dentro la finestra e il
// ritorno del fuoco alla scheda di partenza li fa il browser. Rifarli a mano
// significa sbagliarne almeno uno.

// 44px, che e' la misura minima di un bersaglio tattile in DESIGN.md §13.
// Spenta e non nascosta quando da quella parte non c'e' piu' niente: una freccia
// che sparisce sposta l'altra sotto il dito, e si preme quella sbagliata.
function FrecciaCasi({ verso, attiva, onClick }: { verso: 1 | -1; attiva: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!attiva}
      aria-label={verso === -1 ? "Casi precedenti" : "Casi successivi"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg-2 transition-colors hover:border-fg-muted hover:text-fg disabled:cursor-default disabled:opacity-30 disabled:hover:border-border disabled:hover:text-fg-2"
    >
      <svg viewBox="0 0 8 14" className="h-[13px] w-[8px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={verso === -1 ? "M7 1L1 7l6 6" : "M1 1l6 6-6 6"} />
      </svg>
    </button>
  );
}

export function UseCases() {
  const [aperto, setAperto] = useState<Caso | null>(null);
  const finestra = useRef<HTMLDialogElement>(null);

  // Le due direzioni tenute separate: servono a spegnere la freccia quando da
  // quella parte non c'e' piu' niente. E' l'unico modo di far vedere a che punto
  // della fila si e' arrivati senza scriverlo da qualche parte.
  const fila = useRef<HTMLDivElement>(null);
  const [scorrevole, setScorrevole] = useState({ sx: false, dx: false });

  const misura = useCallback(() => {
    const f = fila.current;
    if (!f) return;
    const massimo = f.scrollWidth - f.clientWidth;
    // I 4px di margine assorbono gli arrotondamenti a frazione di pixel: le
    // schede sono terzi di colonna, quindi lo scorrimento massimo quasi mai e'
    // un intero. Senza, arrivati in fondo la freccia resta accesa e non porta
    // da nessuna parte.
    setScorrevole({ sx: f.scrollLeft > 4, dx: f.scrollLeft < massimo - 4 });
  }, []);

  useEffect(() => {
    const f = fila.current;
    if (!f) return;
    misura();
    f.addEventListener("scroll", misura, { passive: true });
    // Le schede sono frazioni della colonna: cambiando larghezza alla finestra
    // cambia anche quanto resta da scorrere, e le frecce devono accorgersene.
    const osserva = new ResizeObserver(misura);
    osserva.observe(f);
    return () => {
      f.removeEventListener("scroll", misura);
      osserva.disconnect();
    };
  }, [misura]);

  // Un passo = una scheda, non una schermata. Con quattro casi e tre visibili,
  // una schermata intera scavalcherebbe proprio quello che si stava guardando.
  const scorri = (verso: 1 | -1) => {
    const f = fila.current;
    if (!f) return;
    const prima = f.querySelector<HTMLElement>(".caso");
    const spazio = parseFloat(getComputedStyle(f).columnGap) || 20;
    // getBoundingClientRect e non offsetWidth: le schede sono terzi di colonna,
    // quindi la larghezza ha una frazione che offsetWidth arrotonda. Su piu'
    // scatti l'errore si accumula e la fila si ferma fuori posto.
    const passo = prima ? prima.getBoundingClientRect().width + spazio : f.clientWidth;
    const dolce = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    f.scrollBy({ left: verso * passo, behavior: dolce ? "smooth" : "auto" });
  };

  const chiudi = useCallback(() => {
    const d = finestra.current;
    if (!d) return;
    // Lascia finire la dissolvenza prima di smontare il contenuto.
    d.setAttribute("data-chiusura", "");
    const fine = () => {
      d.removeAttribute("data-chiusura");
      d.close();
      setAperto(null);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return fine();
    window.setTimeout(fine, 220);
  }, []);

  useEffect(() => {
    const d = finestra.current;
    if (!d || !aperto) return;
    if (!d.open) d.showModal();

    // La pagina dietro non deve scorrere mentre si legge il caso. Ma togliendo
    // lo scorrimento sparisce anche la barra, e la pagina scivola di lato dei
    // pixel che quella occupava: il salto che si vede all'apertura. Li misuro e
    // li restituisco come padding, cosi' la larghezza utile non cambia e niente
    // si muove. Su Mac e su telefono la barra e' in sovrapposizione, la
    // differenza e' zero e questa riga non fa nulla.
    const barra = window.innerWidth - document.documentElement.clientWidth;
    const overflowPrima = document.body.style.overflow;
    const paddingPrima = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (barra > 0) document.body.style.paddingRight = `${barra}px`;

    return () => {
      document.body.style.overflow = overflowPrima;
      document.body.style.paddingRight = paddingPrima;
    };
  }, [aperto]);

  return (
    <section id="casi-duso" className="border-b border-border scroll-mt-[80px]">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div className="max-w-[620px]">
            <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Casi d&apos;uso</p>
            <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
              Case Study.
            </h2>
            <p className="text-fg-2 text-[1.06rem] mt-5">
              Esempi reali di come i nostri sistemi migliorano i processi aziendali.
            </p>
          </div>

          {/* Nell'intestazione e non sotto le schede: qui stanno dentro la
              colonna, non coprono le immagini e si trovano prima di doverle
              cercare. Compaiono solo se c'e' davvero altro da vedere — due
              frecce spente sopra una fila che ci sta tutta sarebbero un comando
              che non comanda niente. */}
          {(scorrevole.sx || scorrevole.dx) && (
            <div className="hidden shrink-0 gap-2 md:flex">
              <FrecciaCasi verso={-1} attiva={scorrevole.sx} onClick={() => scorri(-1)} />
              <FrecciaCasi verso={1} attiva={scorrevole.dx} onClick={() => scorri(1)} />
            </div>
          )}
        </div>
      </div>

      {/* Il nastro sta nella stessa colonna da 1160px di tutto il resto: prima
          era a tutta larghezza e sfondava a destra, ma le quattro schede sono
          piu' larghe della colonna e il gruppo finiva sempre fuori asse — su uno
          schermo largo restava mezzo schermo vuoto a sinistra e niente a destra.
          Adesso il taglio cade sul bordo della colonna, dove finisce anche tutto
          il resto della pagina, quindi si legge come voluto. La misura e' in
          .fila-casi, in globals.css. */}
      <div className="pb-20 md:pb-24">
        <div
          ref={fila}
          className="fila-casi flex items-start gap-5 md:gap-11 overflow-x-auto pb-4"
          role="region"
          aria-label="Casi d'uso, scorrevole in orizzontale"
          tabIndex={0}
        >
          {CASI.map((c) => (
            <article key={c.label} className="caso shrink-0 rounded-[16px] border border-border bg-surface overflow-hidden">
              {/* Tutta la scheda e' il comando: un bersaglio piccolo dentro una
                  scheda cliccabile costringe a mirare. */}
              <button
                type="button"
                onClick={() => setAperto(c)}
                aria-haspopup="dialog"
                className="caso-bottone block w-full text-left"
              >
                <span className="block bg-surface-2 border-b border-border">
                  {/* Immagine d'ambiente, non un cliente: alt vuoto per non attribuirle un'identità.
                      Il rapporto sta sull'immagine, non sul contenitore: lì un file più alto del 3:2
                      non verrebbe vincolato e allungherebbe la card. */}
                  <img src={c.img} alt="" className="block w-full aspect-[3/2] object-cover" loading="lazy" />
                </span>

                <span className="block p-6">
                  <span className="block font-mono text-[0.66rem] uppercase tracking-wide text-accent">{c.label}</span>

                  {/* Tre righe perche' il titolo di GymOS ne occupa tre: un titolo
                      tagliato e' la cosa peggiore da troncare, visto che e' la
                      sola riga che qualcuno legge di sicuro. */}
                  <span className="block font-display font-semibold text-[1.05rem] leading-[1.35] tracking-[-0.015em] mt-2.5 line-clamp-3 h-[4.35rem]">
                    {c.title}
                  </span>

                  <span className="block text-fg-2 text-[0.92rem] leading-[1.55] mt-2 line-clamp-4 h-[5.75rem] overflow-hidden">
                    {c.text}
                  </span>

                  {/* La soluzione usata, nel font del testo: e' una firma, non
                      un'etichetta. L'altezza e' riservata anche quando manca,
                      altrimenti le schede senza prodotto starebbero piu' basse. */}
                  <span className="flex items-center justify-between gap-3 mt-4 h-[26px]">
                    {c.prodotto ? (
                      <span className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-[0.78rem] leading-none text-fg-muted">
                        {c.prodotto}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="text-[0.78rem] leading-none text-fg-muted underline underline-offset-4">
                      Leggi tutto
                    </span>
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={finestra}
        className="finestra-caso"
        aria-label={aperto ? aperto.title : undefined}
        // Il clic sullo sfondo chiude. L'evento arriva al <dialog> solo quando
        // si colpisce l'area fuori dal riquadro, perche' dentro c'e' un figlio
        // che lo intercetta.
        onClick={(e) => {
          if (e.target === finestra.current) chiudi();
        }}
        onCancel={(e) => {
          // Esc: lo gestiamo noi per far vedere la dissolvenza in uscita.
          e.preventDefault();
          chiudi();
        }}
      >
        {aperto && (
          <div className="finestra-corpo rounded-[18px] bg-surface overflow-hidden">
            <div className="relative">
              <img src={aperto.img} alt="" className="block w-full aspect-[3/2] object-cover" />
              <button
                type="button"
                onClick={chiudi}
                aria-label="Chiudi"
                // Pieno e non traslucido: sta sopra l'immagine del caso, che
                // puo' essere scura quanto vuole. Con la trasparenza il segno
                // spariva dentro le foto piu' cupe.
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-surface border border-border text-fg-2 shadow-[0_2px_10px_rgba(11,11,12,0.18)] hover:text-fg transition-colors"
              >
                <svg viewBox="0 0 14 14" className="h-[11px] w-[11px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                  <path d="M2 2l10 10M12 2L2 12" />
                </svg>
              </button>
            </div>

            <div className="p-7 md:p-9">
              <p className="font-mono text-[0.68rem] uppercase tracking-wide text-accent">{aperto.label}</p>
              <h3 className="mt-3 font-display font-semibold text-[clamp(1.3rem,3vw,1.7rem)] leading-[1.25] tracking-[-0.02em]">
                {aperto.title}
              </h3>
              <p className="mt-4 text-fg-2 text-[1rem] leading-[1.6]">{aperto.text}</p>
              {aperto.dettaglio && <p className="mt-4 text-fg-2 text-[1rem] leading-[1.6]">{aperto.dettaglio}</p>}
              {aperto.prodotto && (
                <p className="mt-6">
                  <span className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-[0.82rem] leading-none text-fg-muted">
                    {aperto.prodotto}
                  </span>
                </p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
