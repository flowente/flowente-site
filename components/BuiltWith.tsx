// Fascia "costruito con": gli strumenti, non i clienti.
//
// Sono wordmark tipografici, non file logo: i marchi altrui hanno regole d'uso
// e non abbiamo gli asset ufficiali. Così è sobrio, coerente col design system
// e senza rischi. Va letto come stack, mai come partnership — per questo la
// riga sotto dice "strumenti", non "partner".
//
// Ogni voce deve essere vera: si aggiunge solo ciò che si usa davvero.
const STRUMENTI = ["Next.js", "Supabase", "pgvector", "n8n", "Ollama", "Railway"];

export function BuiltWith() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <p className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-fg-muted shrink-0">
            Costruito con
          </p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 md:gap-x-9">
            {STRUMENTI.map((s) => (
              <li key={s} className="text-fg-muted text-[0.95rem] tracking-[-0.01em]">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
