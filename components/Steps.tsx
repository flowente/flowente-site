type Step = { n: string; title: string; text: string };

const STEPS: Step[] = [
  {
    n: "1",
    title: "Capire il tuo contesto",
    text: "Osserviamo strumenti, file e attività quotidiane per capire dove si perde tempo e dove l'AI può aiutare davvero.",
  },
  {
    n: "2",
    title: "Prototipo rapido e concreto",
    text: "Trasformiamo le esigenze in una prima soluzione funzionante. L'obiettivo è vedere qualcosa che funziona in poco tempo.",
  },
  {
    n: "3",
    title: "Portarlo nel quotidiano",
    text: "Testiamo, miglioriamo e integriamo la soluzione nel flusso di lavoro reale, con piccoli aggiustamenti finché non diventa semplice e utile.",
  },
];

type Props = { eyebrow?: string; title?: string };

export function Steps({ eyebrow = "Il metodo", title = "Il metodo, in tre fasi." }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[560px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">{eyebrow}</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            {title}
          </h2>
        </div>
        <div className="grid gap-8 md:gap-0 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className={`md:px-8 ${i > 0 ? "md:border-l md:border-border" : ""} ${i === 0 ? "md:pl-0" : ""}`}>
              <div className="font-mono text-accent text-[0.9rem]">{s.n.padStart(2, "0")}</div>
              <h3 className="font-display font-semibold text-[1.35rem] tracking-[-0.02em] mt-3">{s.title}</h3>
              <p className="text-fg-2 text-[0.98rem] mt-2.5 max-w-[300px]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
