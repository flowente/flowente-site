// Tre cifre e nient'altro: niente icone, niente segni, niente illustrazione.
// In una sezione che serve a dire "il dato esiste", qualunque disegno accanto
// sposta l'attenzione dal numero e lo fa sembrare decorazione.
//
// I DATI SONO VERIFICATI SULLA FONTE, non presi da rilanci di stampa.
// ISTAT, "Imprese e ICT — Anno 2025", pubblicato a dicembre 2025:
//   - 16,4% delle imprese con almeno 10 addetti usa almeno una tecnologia di IA
//     nel 2025, contro l'8,2% del 2024 (e il 5,0% del 2023). Da qui il "2×".
//   - 58,6% e' la mancanza di competenze come ostacolo, ed e' il primo della
//     lista (segue la scarsa chiarezza normativa al 47,3%).
//
// Sul 58,6% la formulazione conta: ISTAT lo misura fra le imprese che hanno
// VALUTATO l'IA senza poi adottarla, non fra tutte quelle che non la usano.
// Scriverlo come "le aziende ferme sull'AI" allargherebbe la platea e farebbe
// dire al dato piu' di quello che dice. Se un giorno qualcuno accorcia questa
// riga, e' questa la parte da non buttare.
const NUMERI = [
  {
    cifra: "2×",
    testo: "L'uso dell'AI nelle imprese italiane è raddoppiato in un anno.",
  },
  {
    cifra: "16,4%",
    testo: "Le imprese italiane con almeno 10 addetti che usano già l'AI.",
  },
  {
    cifra: "58,6%",
    // Due righe come le altre due didascalie: la soglia misurata a schermo e'
    // intorno ai 70 caratteri, questa ne ha 68. "Primo ostacolo" resta perche'
    // e' il fatto piu' difendibile - non uno fra i tanti, il primo della lista
    // (58,6% contro il 47,3% del secondo).
    testo: "Di chi l'ha valutata senza adottarla: primo ostacolo, le competenze.",
  },
];

export function Numeri() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">
            Il vantaggio è ancora aperto
          </p>
          <h2
            className="mt-4 font-display font-semibold tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.02 }}
          >
            L&apos;AI cresce. Ma molte aziende devono ancora capire da dove iniziare.
          </h2>
        </div>

        {/* Filetti verticali fra le colonne come in Steps e ForWho: e' il modo in
            cui il sito separa gia' le righe di tre o quattro voci. */}
        <div className="mt-14 md:mt-16 grid gap-10 md:gap-0 md:grid-cols-3">
          {NUMERI.map((n, i) => (
            <div
              key={n.cifra}
              className={`text-center md:px-8 ${i > 0 ? "md:border-l md:border-border" : ""}`}
            >
              <div
                className="font-display font-semibold tracking-[-0.04em] leading-none"
                style={{ fontSize: "clamp(3.2rem, 6vw, 4.6rem)" }}
              >
                {n.cifra}
              </div>
              <p className="mt-4 text-fg-2 text-[0.98rem] max-w-[280px] mx-auto">{n.testo}</p>
            </div>
          ))}
        </div>

        {/* Una fonte sola sotto tutta la riga: i tre numeri vengono dalla stessa
            rilevazione, e ripeterla tre volte la farebbe leggere come tre fonti
            diverse. */}
        <p className="mt-12 text-center text-fg-muted text-[0.85rem]">
          Fonte:{" "}
          <a
            href="https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-fg transition-colors"
          >
            ISTAT, Imprese e ICT — Anno 2025
          </a>
          .
        </p>
      </div>
    </section>
  );
}
