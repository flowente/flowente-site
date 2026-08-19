"use client";

import { useEffect, useState } from "react";
import { CASI } from "@/lib/casi";

// I dati stanno in lib/casi.ts: li condivide con la pila di schede nella hero.
//
// UNA RIGA SOLA, NON UNA GRIGLIA. Prima erano quattro schede grandi su due
// righe: ognuna pesava come una sezione a sé e insieme occupavano mezza pagina.
// In fila diventano un catalogo da scorrere — si leggono con un colpo d'occhio
// e si guarda in dettaglio solo quella che interessa.
//
// Le schede hanno larghezza fissa e la riga scorre in orizzontale: cosi' il
// numero dei casi non cambia l'impaginazione. Se ne aggiungi due in casi.ts,
// entrano in coda e basta.
//
// TRE PER SCHERMATA. A 300px il testo di un caso andava a nove righe e ne
// restavano fuori la meta'. A 360px ne stanno quattro da chiusa, che bastano a
// capire di cosa si parla; il resto si legge aprendo.
//
// QUELLA DOPO SPORGE APPOSTA. A 1280 tre schede piene arrivano a 1213px e la
// quarta si affaccia per una quarantina di pixel: e' il segnale che ce n'e'
// dell'altro. Una riga che finisce esatta sul bordo sembra completa, e nessuno
// prova a scorrerla.
//
// IL FUOCO. Al clic la scheda si allarga e mostra il testo intero piu' le righe
// di dettaglio. Una sola aperta per volta: due schede larghe dentro una riga che
// scorre costringono a cercare dove si era rimasti. Si richiude cliccandola di
// nuovo o con Esc.
//
// Su telefono l'aperta prende tutta la larghezza utile — 100vw meno i due
// rientri della fila — perche' li' non esiste un "accanto": o la scheda occupa
// lo schermo, o si legge un testo lungo dentro una colonna da 280px.
//
// Le due larghezze sono in globals.css (.caso e .caso-aperta): scritte come
// utility dentro una costante non venivano generate, e la scheda restava della
// misura di partenza qualunque cosa si cliccasse.

export function UseCases() {
  const [aperta, setAperta] = useState<number | null>(null);

  // Esc chiude, come la tendina della barra: se una cosa si apre, deve potersi
  // chiudere anche senza mouse.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAperta(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Aprendo una scheda vicina al bordo, meta' resterebbe fuori schermo: la
  // riporta dentro da sola, ma solo dopo che si e' allargata.
  const apri = (i: number, scheda: HTMLElement | null) => {
    const nuova = aperta === i ? null : i;
    setAperta(nuova);
    if (nuova === null || !scheda) return;
    window.setTimeout(() => {
      scheda.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }, 460);
  };

  return (
    <section id="casi-duso" className="border-b border-border scroll-mt-[80px]">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Casi d&apos;uso</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Case Study.
          </h2>
          <p className="text-fg-2 text-[1.06rem] mt-5">
            Esempi reali di come i nostri sistemi migliorano i processi aziendali.
          </p>
        </div>
      </div>

      {/* Il nastro esce dal contenitore e arriva a filo schermo: se restasse
          dentro i 1160px, l'ultima scheda si fermerebbe a meta' pagina e il
          taglio sembrerebbe un errore invece di un invito. Il rientro che
          riallinea la prima scheda al testo qui sopra e' il padding di
          .fila-casi, in globals.css — con max() e calc() annidati Tailwind non
          genera la utility e la scheda restava a filo bordo. */}
      <div className="pb-20 md:pb-24">
        <div
          // items-start: ogni scheda tiene la sua altezza. Con lo stiramento
          // predefinito, aprendone una si allungherebbero anche le altre e
          // resterebbero con il fondo vuoto.
          className="fila-casi flex items-start gap-5 overflow-x-auto pb-4"
          role="region"
          aria-label="Casi d'uso, scorrevole in orizzontale"
          tabIndex={0}
        >
          {CASI.map((c, i) => {
            const eAperta = aperta === i;
            return (
              <article
                key={c.label}
                className={`shrink-0 rounded-[16px] border bg-surface overflow-hidden transition-[width,border-color] duration-[420ms] ease-[cubic-bezier(.32,0,.22,1)] ${
                  eAperta ? "caso caso-aperta border-fg" : "caso border-border"
                }`}
              >
                {/* Tutta la scheda e' il comando: un bersaglio piccolo dentro una
                    scheda cliccabile costringe a mirare. type=button perche' non
                    manda niente da nessuna parte. */}
                <button
                  type="button"
                  onClick={(e) => apri(i, e.currentTarget.closest("article"))}
                  aria-expanded={eAperta}
                  className="block w-full text-left"
                >
                  <span className="block bg-surface-2 border-b border-border">
                    {/* Immagine d'ambiente, non un cliente: alt vuoto per non attribuirle un'identità.
                        Il rapporto sta sull'immagine, non sul contenitore: lì un file più alto del 3:2
                        non verrebbe vincolato e allungherebbe la card. */}
                    <img src={c.img} alt="" className="block w-full aspect-[3/2] object-cover" loading="lazy" />
                  </span>

                  <span className="block p-6">
                    <span className="block font-mono text-[0.66rem] uppercase tracking-wide text-accent">{c.label}</span>

                    {/* Tre righe perche' il titolo di GymOS ne occupa tre: un
                        titolo tagliato e' la cosa peggiore da troncare, visto che
                        e' la sola riga che qualcuno legge di sicuro. */}
                    <span className="block font-display font-semibold text-[1.05rem] leading-[1.35] tracking-[-0.015em] mt-2.5 line-clamp-3 h-[4.35rem]">
                      {c.title}
                    </span>

                    {/* Altezze fisse in tutti e due gli stati: da auto non si
                        anima, e l'apertura sarebbe uno scatto invece di un
                        movimento. Chiusa quattro righe, aperta abbastanza da
                        contenere i testi di adesso per intero. */}
                    <span
                      className={`block text-fg-2 text-[0.92rem] leading-[1.55] mt-2 overflow-hidden transition-[height] duration-[420ms] ease-[cubic-bezier(.32,0,.22,1)] ${
                        eAperta ? "h-[8.6rem] md:h-[7.2rem]" : "line-clamp-4 h-[5.75rem]"
                      }`}
                    >
                      {c.text}
                    </span>

                    {/* Le righe in piu'. Se il caso non le ha, lo spazio resta a
                        zero e l'apertura mostra solo il testo per intero. */}
                    <span
                      className={`block overflow-hidden transition-[height,opacity] duration-[420ms] ease-[cubic-bezier(.32,0,.22,1)] ${
                        eAperta && c.dettaglio ? "mt-3 h-[7.2rem] opacity-100" : "h-0 opacity-0"
                      }`}
                    >
                      <span className="block text-fg-2 text-[0.92rem] leading-[1.55]">{c.dettaglio}</span>
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
                        {eAperta ? "Chiudi" : "Leggi tutto"}
                      </span>
                    </span>
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
