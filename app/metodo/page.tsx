import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Steps } from "@/components/Steps";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Metodo — Flowente",
  description:
    "Come lavoriamo: analisi del processo, prototipo con criteri di successo definiti, messa in produzione. E com'è fatto quello che consegniamo.",
};

const LAYERS = [
  { n: "Interfaccia", t: "L'applicazione con cui lavorano le persone. Progettata perché si usi senza istruzioni." },
  { n: "Dati", t: "Il collegamento a quello che avete già: archivi, gestionale, posta, strumenti interni." },
  { n: "Automazione", t: "I passaggi che prima erano manuali, eseguiti in ordine e con i controlli al posto giusto." },
  { n: "Modello", t: "Chiamato via API. È la parte sostituibile: si cambia senza rifare il resto." },
];

const NOT_FOR = [
  {
    t: "Chi cerca una scorciatoia.",
    d: "Se l'obiettivo è poter dire che si usa l'AI, il lavoro migliore non lo facciamo noi.",
  },
  {
    t: "Chi vuole delegare la decisione.",
    d: "Il modello propone, le persone decidono. Se questa parte non interessa, non è il progetto giusto.",
  },
  {
    t: "Chi non ha ancora i dati in ordine.",
    d: "Se le informazioni non ci sono o sono sparse ovunque, prima si sistema quello. Lo diciamo prima di partire, non a metà.",
  },
  {
    t: "Chi ha bisogno di un fornitore strutturato.",
    d: "Se serve un team dedicato e un presidio continuativo, siamo la scelta sbagliata — e te lo diciamo subito.",
  },
];

export default function Metodo() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Il metodo"
          title="Prima capire, poi costruire."
          text="Nessun progetto parte dalla tecnologia. Parte dal processo che oggi costa più tempo, e si chiude quando lo strumento è in uso tutti i giorni."
          ctaLabel="Prenota una call"
        />

        <Steps eyebrow="Le fasi" title="Tre fasi, in quest'ordine." />

        {/* Come è fatto quello che consegniamo */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Cosa consegniamo</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.04]">
                Com&apos;è fatto quello che resta a te.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[420px]">
                Quasi sempre la stessa struttura, adattata al caso. La parte che cambia più spesso è l&apos;ultima — ed
                è fatta apposta per poter cambiare.
              </p>
            </div>
            <div className="border-t border-border">
              {LAYERS.map((l) => (
                <div key={l.n} className="grid gap-1 md:grid-cols-[150px_1fr] md:gap-8 py-5 border-b border-border">
                  <p className="font-mono text-[0.78rem] uppercase tracking-wide text-accent md:pt-1">{l.n}</p>
                  <p className="text-fg-2 text-[0.98rem]">{l.t}</p>
                </div>
              ))}
              <p className="text-fg-2 text-[1rem] mt-8 max-w-[520px]">
                Il modello è chiamato via API, non incastrato dentro l&apos;applicazione. Se domani conviene cambiarlo —
                da un modello di frontiera a uno installato da voi, o il contrario — si cambia quello. Il resto resta in
                piedi.
              </p>
            </div>
          </div>
        </section>

        {/* Per chi non è adatto */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
            <div className="max-w-[620px] mb-12">
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Onestà</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
                Per chi non siamo adatti.
              </h2>
              <p className="text-fg-2 text-[1.06rem] mt-5">
                Scriverlo prima fa risparmiare tempo a tutti e due.
              </p>
            </div>
            <div className="grid gap-x-10 gap-y-9 md:grid-cols-2">
              {NOT_FOR.map((n, i) => (
                <div key={i} className="flex gap-5">
                  <div className="font-mono text-fg-muted text-[0.9rem] pt-1">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-display font-semibold text-[1.15rem] tracking-[-0.02em]">{n.t}</h3>
                    <p className="text-fg-2 text-[0.98rem] mt-2 max-w-[420px]">{n.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Valutiamo il tuo caso."
          text="Un primo confronto di trenta minuti per definire ambito, vincoli e fattibilità."
        />
      </main>
      <Footer />
    </>
  );
}
