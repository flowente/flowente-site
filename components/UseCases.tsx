import { CASI } from "@/lib/casi";

// I dati stanno in lib/casi.ts: li condivide con la pila di schede nella hero.
export function UseCases() {
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

        <div className="grid gap-5 md:grid-cols-2">
          {CASI.map((c) => (
            <div key={c.label} className="rounded-[16px] border border-border bg-surface overflow-hidden flex flex-col">
              <div className="bg-surface-2 border-b border-border">
                {/* Immagine d'ambiente, non un cliente: alt vuoto per non attribuirle un'identità.
                    Il rapporto sta sull'immagine, non sul contenitore: lì un file più alto del 3:2
                    non verrebbe vincolato e allungherebbe la card. */}
                <img src={c.img} alt="" className="block w-full aspect-[3/2] object-cover" loading="lazy" />
              </div>
              <div className="p-7">
                <div className="font-mono text-[0.68rem] uppercase tracking-wide text-accent">{c.label}</div>
                <h3 className="font-display font-semibold text-[1.2rem] tracking-[-0.015em] mt-3">{c.title}</h3>
                <p className="text-fg-2 text-[0.98rem] mt-2.5">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
