import { Card } from "./Card";
import { marks } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

const CARDS: { title: string; meta: string; tag: string; mark: (typeof marks)[string]; shape: ShapeKind }[] = [
  { title: "−70% sul lavoro ripetitivo", meta: "Case study · 4 min", tag: "Advisory", mark: marks.flusso, shape: "square" },
  { title: "Come scegliere il modello giusto", meta: "Guida · 6 min", tag: "Studio", mark: marks.onda, shape: "circle" },
  { title: "n8n + AI: workflow senza attrito", meta: "Tutorial · 8 min", tag: "Lab", mark: marks.freccia, shape: "triangle" },
];

export function CardGrid() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-[88px]">
        <div className="text-center max-w-[560px] mx-auto mb-11">
          <h2 className="font-display font-semibold text-[2.4rem] tracking-[-0.03em]">Storie e risorse</h2>
          <p className="text-fg-2 mt-3.5">Casi, guide e approfondimenti su come far scorrere il lavoro con l&apos;AI.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Card key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
