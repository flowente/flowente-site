import { MarkBadge } from "./MarkBadge";
import { marks } from "@/lib/marks";
import type { Mark } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

type Item = { label: string; lead: string; text: string; note?: string; mark: Mark; shape: ShapeKind };

const ITEMS: Item[] = [
  {
    label: "Advisory",
    lead: "Capire e scegliere.",
    text: "Quale modello, dove, a che costo. Ti diamo la bussola prima di scrivere una riga di codice.",
    mark: marks.onda,
    shape: "circle",
  },
  {
    label: "Studio",
    lead: "Costruire.",
    text: "Applicazioni e modelli su misura, portati fino in produzione — non fino alla demo.",
    mark: marks.flusso,
    shape: "square",
  },
  {
    label: "AI privata",
    lead: "Tenere i dati al sicuro.",
    text: "Modelli che girano nel tuo perimetro, on-premise. I dati non escono.",
    note: "Per chi ha dati sensibili o vincoli normativi.",
    mark: marks.coil,
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
            Tre modi di far scorrere il lavoro.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.label} className="rounded-[16px] border border-border bg-surface p-7 flex flex-col">
              <div className="h-[96px] flex items-center justify-start">
                <MarkBadge mark={it.mark} shape={it.shape} boxW={120} boxH={92} shapeSize={72} markW={116} markH={80} />
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
