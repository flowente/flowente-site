import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Chi siamo — Flowente",
  description:
    "Studio di AI applicata. Quasi tutti i progetti di AI partono dalla tecnologia e finiscono in una dimostrazione: noi partiamo dal processo e finiamo quando lo strumento è in uso.",
};

const CREDO = [
  { t: "Il lavoro deve scorrere.", d: "Nessuno dovrebbe perdere tempo, dati o serenità per usare l'AI." },
  {
    t: "Lo strumento adatto al compito.",
    d: "A volte è un modello di frontiera, a volte uno piccolo installato in azienda. La bravura sta nello scegliere, non nel vendere sempre la stessa cosa.",
  },
  {
    t: "Precedenza ai dati.",
    d: "Se possono restare nel perimetro del cliente, ci restano. La sicurezza è un requisito di progetto, non una verifica finale.",
  },
  {
    t: "Onestà tecnica.",
    d: "Diciamo anche quando l'AI non è la risposta. È il modo più veloce per fidarsi.",
  },
];

export default function ChiSiamo() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Chi siamo"
          title="L'AI non è il punto di partenza."
          text="Flowente è uno studio di AI applicata. Quasi tutti i progetti partono dalla tecnologia e finiscono in una dimostrazione; noi partiamo dal processo che costa più tempo e finiamo quando lo strumento è in uso tutti i giorni. In mezzo c'è la scelta di cosa serve davvero — ed è lì che sta il mestiere."
          align="left"
        />

        {/* Perché esiste */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10">
            <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.04]">
              Perché esiste Flowente.
            </h2>
            <div className="max-w-[560px] text-fg-2 text-[1.06rem] space-y-5">
              <p>
                Il mercato dell&apos;AI è pieno di fornitori che hanno deciso la risposta prima di aver sentito la
                domanda: chi vende server consiglia server, chi vende formazione consiglia corsi. Il cliente finisce per
                scegliere tra soluzioni, quando quello che gli serve è un criterio.
              </p>
              <p>
                Flowente esiste per stare dall&apos;altra parte del tavolo: capire cosa serve davvero — anche quando la
                risposta è che non serve niente — e poi costruirlo. È una posizione che non si può tenere avendo
                qualcosa da piazzare.
              </p>
            </div>
          </div>
        </section>

        {/* In cosa crediamo */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
            <div className="max-w-[560px] mb-12">
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Manifesto</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
                In cosa crediamo.
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {CREDO.map((c, i) => (
                <div key={i} className="flex gap-5">
                  <div className="font-mono text-accent text-[0.9rem] pt-1">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-display font-semibold text-[1.25rem] tracking-[-0.02em]">{c.t}</h3>
                    <p className="text-fg-2 text-[0.98rem] mt-2 max-w-[420px]">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Come lavoriamo + competenze */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.04]">
                Come lavoriamo con te.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[440px]">
                Un solo interlocutore dall&apos;analisi alla messa online: niente rimbalzi tra reparti. Partiamo dal
                processo che si inceppa, proviamo una soluzione circoscritta e la portiamo dove serve, con i controlli
                al posto giusto.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.04]">
                Su cosa lavoriamo.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[440px]">
                Progettazione e sviluppo di applicazioni, integrazione con i sistemi e gli archivi già in uso,
                automazione dei passaggi manuali, scelta e messa in produzione dei modelli — di frontiera via API o
                installati nel perimetro aziendale, con la ricerca sui documenti del cliente.
              </p>
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
