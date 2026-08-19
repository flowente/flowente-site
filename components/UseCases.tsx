import { CASI } from "@/lib/casi";

// I dati stanno in lib/casi.ts: li condivide con la pila di schede nella hero.
//
// UNA RIGA SOLA, NON UNA GRIGLIA. Prima erano quattro schede grandi su due
// righe: ognuna pesava come una sezione a sé e insieme occupavano mezza pagina.
// In fila diventano un catalogo da scorrere — si leggono con un colpo d'occhio
// e si guarda in dettaglio solo quella che interessa.
//
// Le schede hanno larghezza fissa e la riga scorre in orizzontale: cosi' il
// numero dei casi non cambia l'impaginazione. Se ne aggiungi due in casi.ts,
// entrano in coda e basta.
//
// LA QUARTA SPORGE APPOSTA. A 1280 la riga e' larga piu' del contenitore e
// l'ultima resta tagliata a meta': e' il segnale che ce n'e' dell'altro. Una
// riga che finisce esatta sul bordo sembra completa, e nessuno prova a
// scorrerla.
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
      </div>

      {/* Il nastro esce dal contenitore e arriva a filo schermo: se restasse
          dentro i 1160px, l'ultima scheda si fermerebbe a meta' pagina e il
          taglio sembrerebbe un errore invece di un invito. Il rientro che
          riallinea la prima scheda al testo qui sopra e' il padding di
          .fila-casi, in globals.css — con max() e calc() annidati Tailwind non
          genera la classe, e la scheda restava a filo bordo. */}
      <div className="pb-20 md:pb-24">
        <div
          className="fila-casi flex gap-5 overflow-x-auto pb-4"
          role="region"
          aria-label="Casi d'uso, scorrevole in orizzontale"
          tabIndex={0}
        >
          {CASI.map((c) => (
            <article
              key={c.label}
              className="shrink-0 w-[268px] md:w-[300px] rounded-[16px] border border-border bg-surface overflow-hidden flex flex-col"
            >
              <div className="bg-surface-2 border-b border-border">
                {/* Immagine d'ambiente, non un cliente: alt vuoto per non attribuirle un'identità.
                    Il rapporto sta sull'immagine, non sul contenitore: lì un file più alto del 3:2
                    non verrebbe vincolato e allungherebbe la card. */}
                <img src={c.img} alt="" className="block w-full aspect-[3/2] object-cover" loading="lazy" />
              </div>
              {/* Altezze fisse su titolo e testo: in fila le schede stanno
                  affiancate e una piu' alta delle altre si nota subito. Il
                  troncamento tiene, e il testo intero resta nella pagina del
                  prodotto collegato. */}
              <div className="p-6">
                <div className="font-mono text-[0.66rem] uppercase tracking-wide text-accent">{c.label}</div>
                <h3 className="font-display font-semibold text-[1.05rem] leading-[1.35] tracking-[-0.015em] mt-2.5 line-clamp-2 h-[2.9rem]">
                  {c.title}
                </h3>
                <p className="text-fg-2 text-[0.9rem] leading-[1.55] mt-2 line-clamp-4 h-[5.6rem] overflow-hidden">
                  {c.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
