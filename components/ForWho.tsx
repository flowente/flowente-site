// Problemi, non settori: chi legge si riconosce in quello che gli succede, non
// nella categoria merceologica in cui qualcuno lo ha messo.
//
// Impaginata come Steps — numero in accento, titolo, paragrafo, filetti
// verticali fra le colonne. Prima erano quattro titoli nudi: bastavano quando
// sotto c'era anche "Il metodo, in tre fasi", perche' le due sezioni si
// dividevano il lavoro. Adesso questa e' rimasta sola e deve dire anche cosa
// succede, non solo di cosa si occupa.
const VOCI = [
  {
    titolo: "Automatizzare il lavoro ripetitivo",
    testo:
      "Riduciamo le attività manuali tra email, file e strumenti, così il team può dedicarsi al lavoro che richiede davvero attenzione.",
  },
  {
    titolo: "Rendere accessibile la conoscenza aziendale",
    testo:
      "Documenti, procedure e informazioni diventano più facili da trovare, consultare e usare nel momento in cui servono.",
  },
  {
    titolo: "Integrare l'AI nei processi esistenti",
    testo:
      "Colleghiamo l'AI agli strumenti che già usate, senza creare un altro ambiente da gestire o un flusso da imparare.",
  },
  {
    titolo: "Proteggere dati e proprietà intellettuale",
    testo:
      "Definiamo dove risiedono dati e modelli, chi può accedervi e come vengono utilizzati, in base ai requisiti dell'azienda.",
  },
];

export function ForWho() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Per chi</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Dove l&apos;AI migliora il lavoro.
          </h2>
        </div>

        {/* Due colonne sul tablet e quattro sul desktop: a quattro colonne sotto
            i 1024px la colonna scende sotto i 180px e i paragrafi si spezzano.
            I filetti seguono la griglia — nella disposizione a due, la voce che
            apre la seconda riga non deve avere il filetto a sinistra. */}
        <div className="grid gap-8 sm:gap-x-0 sm:grid-cols-2 lg:grid-cols-4">
          {VOCI.map((v, i) => (
            <div
              key={v.titolo}
              className={[
                "sm:px-6 lg:px-8",
                i % 2 === 1 ? "sm:border-l sm:border-border" : "sm:pl-0",
                i > 0 ? "lg:border-l lg:border-border lg:pl-8" : "lg:pl-0",
              ].join(" ")}
            >
              <div className="font-mono text-accent text-[0.9rem]">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display font-semibold text-[1.35rem] tracking-[-0.02em] mt-3">{v.titolo}</h3>
              <p className="text-fg-2 text-[0.98rem] mt-2.5 max-w-[300px]">{v.testo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
