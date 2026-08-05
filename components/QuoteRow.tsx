const QUOTES = [
  { name: "PMI manifattura", text: "Preventivi pronti in minuti invece che in un giorno. Il team ha ripreso a pensare.", who: "Direttore operations" },
  { name: "Studio legale", text: "La rassegna documentale che ci portava via ore, ora scorre da sola.", who: "Partner" },
  { name: "E-commerce", text: "Supporto clienti più rapido e costante, senza aumentare il personale.", who: "Founder" },
  { name: "Scale-up SaaS", text: "Dalla strategia al modello in produzione con un solo partner. Zero dispersione.", who: "CTO" },
];

export function QuoteRow() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 grid gap-8 md:gap-0 md:grid-cols-4">
        {QUOTES.map((q, i) => (
          <div key={i} className={`md:px-6 ${i > 0 ? "md:border-l md:border-border" : ""}`}>
            <div className="font-display font-semibold text-[1.05rem] mb-3.5">{q.name}</div>
            <p className="text-fg-2 text-[0.9rem]">&ldquo;{q.text}&rdquo;</p>
            <div className="font-mono text-[0.66rem] text-fg-muted mt-[18px]">{q.who}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
