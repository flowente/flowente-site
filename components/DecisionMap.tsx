type Row = { when: string; use: string; why: string };

// La mappa decisionale: il criterio con cui scegliamo, esposto per intero.
// È la sezione che ci distingue — chi vende una sola soluzione non può pubblicarla.
const ROWS: Row[] = [
  {
    when: "Ragionamento complesso, analisi, lavoro difficile",
    use: "Modello di frontiera, via API",
    why: "Sui compiti di ragionamento i modelli di frontiera restano avanti: un modello interno costerebbe di più e renderebbe meno.",
  },
  {
    when: "Dati sensibili, o soggetti a vincoli",
    use: "Modello LLM privato, sui tuoi server",
    why: "Richieste e documenti non lasciano la rete aziendale. È l'unica garanzia verificabile.",
  },
  {
    when: "Volumi alti su un compito ripetitivo e circoscritto",
    use: "Modello piccolo, installato",
    why: "A volumi alti il costo per richiesta scende sotto quello delle API.",
  },
  {
    when: "Serve una risposta immediata, sempre disponibile",
    use: "Modello locale",
    why: "Nessuna latenza di rete, nessuna coda, nessun limite di chiamate.",
  },
  {
    when: "Una prova rapida, su pochi volumi",
    use: "Modello di frontiera, via API",
    why: "Nessuna infrastruttura da allestire, si paga a consumo.",
  },
  {
    when: "Il problema è la costanza dei risultati, non la riservatezza",
    use: "Skills e plugin",
    why: "Non serve un modello dedicato: si fissano le istruzioni, e l'output esce sempre nello stesso formato.",
  },
  // Le ultime due righe dicono entrambe "ti serve meno di quanto pensi", in
  // ordine crescente: prima "non ti serve un server tuo", poi "non ti serve
  // niente". La mappa chiude sul rifiuto, che è la cosa che chi vende una sola
  // soluzione non può scrivere.
  {
    when: "Il processo non è chiaro, o i dati non ci sono",
    use: "Niente AI",
    why: "Il primo intervento è sul processo, non sul modello. Lo diciamo, e non partiamo.",
  },
];

export function DecisionMap() {
  return (
    <section id="la-scelta" className="border-b border-border scroll-mt-[80px]">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">La scelta</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Quale soluzione, per quale vincolo.
          </h2>
          <p className="text-fg-2 text-[1.06rem] mt-5">
            Non esiste un modello adatto a tutto. Questo è il criterio con cui scegliamo, pubblicato per intero: la
            selezione è la parte del lavoro che incide di più sul risultato.
          </p>
        </div>

        <div className="border-t border-border">
          {ROWS.map((r) => (
            <div
              key={r.when}
              className="grid gap-2 md:grid-cols-[1.05fr_0.85fr_1.1fr] md:gap-8 py-6 border-b border-border"
            >
              <p className="text-fg text-[1rem] font-display font-semibold tracking-[-0.015em]">{r.when}</p>
              <p className="font-mono text-[0.82rem] text-accent md:pt-1">{r.use}</p>
              <p className="text-fg-2 text-[0.96rem]">{r.why}</p>
            </div>
          ))}
        </div>

        <p className="text-fg-2 text-[1.02rem] mt-10 max-w-[620px]">
          Quasi ogni sistema reale è ibrido: modello di frontiera dove serve ragionamento, modello interno dove ci sono
          dati da proteggere. Progettare quel bilanciamento è la parte che incide di più sul costo e sulla qualità. Gli
          agenti eseguono, le decisioni restano alle persone.
        </p>
      </div>
    </section>
  );
}
