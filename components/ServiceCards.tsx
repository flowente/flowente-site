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
// ATTENZIONE: questi sono i nomi nuovi. /servizi, la tendina della barra e le
// pagine prodotto usano ancora Quick Automation / Business Platform / Private AI
// Infrastructure, e per Formazione non esiste ancora una pagina.
const ITEMS: Item[] = [
  {
    nome: "AI Pilota",
    text: "Una prima automazione concreta per togliere di mezzo un'attività manuale e ripetitiva. Partiamo da un flusso semplice, lo rendiamo operativo e misuriamo il risultato.",
    mark: marks.onda,
    shape: "circle",
  },
  {
    nome: "AI Automation",
    text: "Progettiamo agenti AI e automazioni avanzate che collegano dati, documenti e strumenti aziendali. L'AI raccoglie informazioni, esegue attività e attiva il passaggio successivo del processo.",
    mark: marks.flusso,
    shape: "square",
  },
  {
    nome: "Private AI",
    text: "Progettiamo modelli AI dedicati alla tua azienda, configurati e, quando serve, addestrati su documenti, procedure e dati autorizzati. Operano in un ambiente privato, con accessi e regole definite.",
    mark: marks.lucchetto,
    shape: "triangle",
  },
  {
    nome: "Formazione",
    text: "Percorsi pratici per capire e usare l'AI nel lavoro quotidiano. Partiamo da ruoli, strumenti e casi reali del team, per trasformare la curiosità in autonomia.",
    mark: marks.coil,
    shape: "blob",
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
        {/* Due per riga sul tablet, quattro sul desktop: a quattro colonne sotto
            i 1024px la colonna scende a ~180px e il testo si spezza a due parole
            per riga. Le schede si allungano tutte alla piu' alta da sole. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <div key={it.nome} className="rounded-[16px] border border-border bg-surface p-6 flex flex-col">
              <div className="h-[104px] flex items-center justify-start">
                <MarkBadge mark={it.mark} shape={it.shape} boxW={120} boxH={100} shapeSize={96} markW={92} markH={63} />
              </div>
              <h3 className="font-display font-semibold text-[1.2rem] tracking-[-0.01em] mt-2">{it.nome}</h3>
              <p className="text-fg-2 text-[0.95rem] mt-2.5">{it.text}</p>
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
