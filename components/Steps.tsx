type Step = { n: string; title: string; text: string };

const STEPS: Step[] = [
  { n: "1", title: "Capire", text: "Partiamo dal processo che si inceppa, non dalla tecnologia." },
  { n: "2", title: "Prototipare", text: "Una prova concreta, in fretta, per vedere se conviene davvero." },
  { n: "3", title: "Mettere in produzione", text: "Lo portiamo dove serve, in sicurezza, e resta." },
];

type Props = { eyebrow?: string; title?: string };

export function Steps({ eyebrow = "Il metodo", title = "Semplice, in tre passi." }: Props) {
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
