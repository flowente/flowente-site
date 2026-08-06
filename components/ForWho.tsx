const COLS = ["PMI e manifattura", "Studi professionali", "E-commerce", "Scale-up"];

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
        <div className="grid gap-6 md:gap-0 md:grid-cols-4">
          {COLS.map((c, i) => (
            <div key={c} className={`md:px-6 ${i > 0 ? "md:border-l md:border-border" : "md:pl-0"}`}>
              <div className="font-display font-semibold text-[1.05rem]">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
