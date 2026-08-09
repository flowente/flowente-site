import { MarkBadge } from "./MarkBadge";
import { marks } from "@/lib/marks";
import type { Mark } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

type Item = { label: string; lead: string; text: string; note?: string; mark: Mark; shape: ShapeKind };

const ITEMS: Item[] = [
  {
    label: "Advisory",
    lead: "Scegliere prima di costruire.",
    text: "Confrontiamo i modelli candidati sul tuo compito reale e indichiamo quale usare, dove eseguirlo e a quale costo per richiesta. Anche quando la risposta è di non procedere.",
    mark: marks.onda,
    shape: "circle",
  },
  {
    label: "Sviluppo software",
    lead: "Costruire e mettere in produzione.",
    text: "Sviluppiamo l'applicazione e gli agenti che la muovono, li colleghiamo ai tuoi archivi e al gestionale, e li mettiamo in esercizio con log e controlli di accesso.",
    mark: marks.flusso,
    shape: "square",
  },
  {
    label: "AI privata",
    lead: "Tenere i dati dentro l'azienda.",
    text: "Installiamo l'LLM sui tuoi server o su cloud privato europeo. Richieste, documenti e risposte non transitano da servizi esterni.",
    note: "Per chi tratta dati soggetti a GDPR, EU AI Act o vincoli di riservatezza.",
    mark: marks.lucchetto,
    shape: "triangle",
  },
];

export function ServiceCards() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[560px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Cosa facciamo</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Scegliere, costruire, proteggere i dati.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.label} className="rounded-[16px] border border-border bg-surface p-7 flex flex-col">
              {/* La forma deve leggersi come sfondo del segno, quindi va tenuta più
                  grande. Attenzione ai due rapporti nascosti: il triangolo occupa
                  l'82% del proprio box in larghezza e il 76% in altezza, e il segno
                  a sua volta non riempie il viewBox. Con shapeSize 72 e markW 116 il
                  triangolo rendeva 59×55 contro un lucchetto di 63×69 — cioè la
                  forma era la più piccola dei due. */}
              <div className="h-[104px] flex items-center justify-start">
                <MarkBadge mark={it.mark} shape={it.shape} boxW={120} boxH={100} shapeSize={96} markW={92} markH={63} />
              </div>
              <div className="font-mono text-[0.68rem] uppercase tracking-wide text-accent mt-2">{it.label}</div>
              <h3 className="font-display font-semibold text-[1.2rem] tracking-[-0.01em] mt-2">{it.lead}</h3>
              <p className="text-fg-2 text-[0.98rem] mt-2.5">{it.text}</p>
              {it.note && <p className="text-fg-muted text-[0.82rem] mt-3">{it.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
