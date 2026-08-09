const COLS = ["PMI e manifattura", "Studi professionali", "E-commerce", "Palestre", "Scale-up"];

// Onesto: al posto di testimonianze finte, mostriamo per chi lavoriamo.
export function ForWho() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-11">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Per chi</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Organizzazioni con processi definiti e dati da proteggere.
          </h2>
        </div>
        {/* Cinque colonne solo da lg in su: a 768px lo spazio per voce scende a
            135px e "PMI e manifattura" e "Studi professionali" vanno a capo
            mentre "Palestre" e "Scale-up" restano su una riga — la fila esce
            sfilacciata, e "E-commerce" si spezza sul trattino. */}
        <div className="grid gap-6 lg:gap-0 lg:grid-cols-5">
          {COLS.map((c, i) => (
            <div key={c} className={`lg:px-4 ${i > 0 ? "lg:border-l lg:border-border" : "lg:pl-0"}`}>
              <div className="font-display font-semibold text-[1.05rem]">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
