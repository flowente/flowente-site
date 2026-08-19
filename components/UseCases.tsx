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
// TRE PER SCHERMATA, non quattro. A 300px il testo di un caso andava a nove
// righe e ne restavano fuori la meta'. A 360px ne servono sei, ed e' il numero
// scelto: i quattro testi di adesso ci stanno interi, nessuno viene tagliato.
// Se un testo nuovo sfora, il troncamento tiene la scheda a misura — ma e' il
// segnale che quel testo va accorciato, non che la scheda va allungata.
//
// Su telefono le righe diventano otto: la scheda e' larga 280px e gli stessi
// testi ne occupano sette o otto. Li' una scheda piu' alta non costa niente,
// perche' se ne vede una per volta e non c'e' nessuna fila da tenere allineata
// con lo sguardo.
//
// QUELLA DOPO SPORGE APPOSTA. A 1280 tre schede piene arrivano a 1213px e la
// quarta si affaccia per una quarantina di pixel: e' il segnale che ce n'e'
// dell'altro. Una riga che finisce esatta sul bordo sembra completa, e nessuno
// prova a scorrerla.
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
              className="shrink-0 w-[280px] md:w-[360px] rounded-[16px] border border-border bg-surface overflow-hidden flex flex-col"
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
                  prodotto collegato.
                  Il titolo ha tre righe perche' quello di GymOS ne occupa tre:
                  con due ne restava fuori una. Gli altri ne usano due e sotto
                  resta una riga vuota — costa meno di un titolo tagliato. */}
              <div className="p-6">
                <div className="font-mono text-[0.66rem] uppercase tracking-wide text-accent">{c.label}</div>
                <h3 className="font-display font-semibold text-[1.05rem] leading-[1.35] tracking-[-0.015em] mt-2.5 line-clamp-3 h-[4.35rem]">
                  {c.title}
                </h3>
                <p className="text-fg-2 text-[0.92rem] leading-[1.55] mt-2 line-clamp-8 h-[11.45rem] md:line-clamp-6 md:h-[8.6rem] overflow-hidden">
                  {c.text}
                </p>
                {/* La soluzione usata, in fondo e nel font del testo: e' una
                    firma, non un'etichetta. L'altezza e' riservata anche quando
                    manca, altrimenti le schede senza prodotto starebbero piu'
                    basse delle altre. */}
                <div className="mt-4 h-[26px]">
                  {c.prodotto && (
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-[0.78rem] leading-none text-fg-muted">
                      {c.prodotto}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
