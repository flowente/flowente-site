import { Button } from "./Button";
import { MarkBadge } from "./MarkBadge";
import { marks } from "@/lib/marks";
import type { Mark } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

type Item = { lead: string; text: string; mark: Mark; shape: ShapeKind };

// Tre verbi, non tre nomi di servizio: dicono cosa cambia per chi legge invece
// di come si chiama internamente il lavoro.
const ITEMS: Item[] = [
  {
    lead: "Automatizza.",
    text: "Eliminiamo le attività ripetitive con agenti AI e workflow intelligenti.",
    mark: marks.onda,
    shape: "circle",
  },
  {
    lead: "Organizza.",
    text: "Rendiamo accessibile la conoscenza aziendale con sistemi che comprendono documenti, procedure e dati interni.",
    mark: marks.flusso,
    shape: "square",
  },
  {
    lead: "Proteggi.",
    text: "Distribuiamo modelli AI in cloud privato o on-premise mantenendo il controllo dei dati.",
    mark: marks.lucchetto,
    shape: "triangle",
  },
];

export function ServiceCards() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Cosa facciamo</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Tre modi per portare l&apos;AI nella tua azienda.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.lead} className="rounded-[16px] border border-border bg-surface p-7 flex flex-col">
              <div className="h-[104px] flex items-center justify-start">
                <MarkBadge mark={it.mark} shape={it.shape} boxW={120} boxH={100} shapeSize={96} markW={92} markH={63} />
              </div>
              <h3 className="font-display font-semibold text-[1.2rem] tracking-[-0.01em] mt-2">{it.lead}</h3>
              <p className="text-fg-2 text-[0.98rem] mt-2.5">{it.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button variant="ghost" href="/servizi">
            Esplora le soluzioni
          </Button>
        </div>
      </div>
    </section>
  );
}
