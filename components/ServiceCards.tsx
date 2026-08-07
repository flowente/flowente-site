import { MarkBadge } from "./MarkBadge";
import { marks } from "@/lib/marks";
import type { Mark } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

type Item = { label: string; lead: string; text: string; note?: string; mark: Mark; shape: ShapeKind };

const ITEMS: Item[] = [
  {
    label: "Advisory",
    lead: "Scegliere prima di costruire.",
    text: "Guardiamo il processo, confrontiamo i modelli disponibili e ti diciamo quale usare, dove farlo girare e quanto costa. Anche quando la risposta è che non conviene.",
    mark: marks.onda,
    shape: "circle",
  },
  {
    label: "Sviluppo software",
    lead: "Costruire e mettere in produzione.",
    text: "Progettiamo e sviluppiamo l'applicazione, la colleghiamo ai dati e ai programmi che usi già, e la portiamo online. Il lavoro finisce quando le persone la usano.",
    mark: marks.flusso,
    shape: "square",
  },
  {
    label: "AI privata",
    lead: "Tenere i dati dentro l'azienda.",
    text: "Installiamo il modello sui tuoi server, o su un cloud privato europeo. Le domande e i documenti non passano da servizi esterni.",
    note: "Per chi tratta dati soggetti a GDPR, EU AI Act o vincoli di riservatezza.",
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
            Scegliere, costruire, proteggere i dati.
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
