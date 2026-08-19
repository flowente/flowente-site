import { Button } from "./Button";
import { MarkBadge } from "./MarkBadge";
import { marks } from "@/lib/marks";
import type { Mark } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

type Item = { nome: string; text: string; mark: Mark; shape: ShapeKind };

// I quattro prodotti, in ordine di impegno crescente: una prima automazione, il
// processo intero, il modello privato, le persone. Chi legge si colloca da solo
// nella riga giusta senza che gliela indichiamo.
//
// Formazione non e' qui: ha la sua fascia a tutta larghezza subito sotto. In
// una fila di quattro riquadri uguali spariva; da sola si legge.
//
// Il titolo dice "Quattro modi" e i riquadri sono tre: il quarto e' quella
// fascia, che arriva due centimetri piu' giu'. Se un giorno la fascia se ne
// va, questo titolo va rimesso a "Tre modi".
const ITEMS: Item[] = [
  {
    nome: "AI Pilota",
    text: "Una prima automazione concreta e misurabile per ridurre un'attività manuale ripetitiva.",
    mark: marks.onda,
    shape: "circle",
  },
  {
    nome: "AI Automation",
    text: "Agenti AI e automazioni avanzate per collegare dati, documenti e strumenti nei processi più complessi.",
    mark: marks.flusso,
    shape: "square",
  },
  {
    nome: "Private AI",
    text: "Modelli AI privati, configurati sui dati e sulle regole della tua azienda.",
    mark: marks.lucchetto,
    shape: "triangle",
  },
];

export function ServiceCards() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Le soluzioni</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Quattro modi per portare l&apos;AI nel lavoro di ogni giorno.
          </h2>
          <p className="mt-5 text-fg-2 text-[1.06rem]">
            Dal primo progetto alla formazione del team, portiamo l&apos;AI dove può essere davvero utile, nei processi
            e nelle attività di ogni giorno.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.nome} className="rounded-[16px] border border-border bg-surface p-7 flex flex-col">
              <div className="h-[104px] flex items-center justify-start">
                <MarkBadge mark={it.mark} shape={it.shape} boxW={120} boxH={100} shapeSize={96} markW={92} markH={63} />
              </div>
              <h3 className="font-display font-semibold text-[1.2rem] tracking-[-0.01em] mt-2">{it.nome}</h3>
              <p className="text-fg-2 text-[0.98rem] mt-2.5">{it.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/servizi">
            Esplora le soluzioni
          </Button>
        </div>
      </div>
    </section>
  );
}
