import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Steps } from "@/components/Steps";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Come lavoriamo — Flowente",
  description:
    "Partiamo da come lavori oggi, individuiamo dove l'AI genera valore e costruiamo soluzioni semplici, testabili e integrate nei tuoi processi.",
};

const NOT_FOR = [
  {
    t: "Quando basta un abbonamento.",
    d: "Se il bisogno è mettere uno strumento in mano alle persone e finisce lì, esistono prodotti già pronti che costano poco. Lo diciamo, invece di costruire qualcosa che non serve.",
  },
  {
    t: "Quando i dati non ci sono ancora.",
    d: "Se le informazioni sono sparse, incomplete o in formati che nessuno riesce a leggere, il primo lavoro è quello — e non è un progetto di AI.",
  },
  {
    t: "Quando le persone devono uscire dal processo.",
    d: "Costruiamo sistemi in cui il modello propone e qualcuno decide. Se l'obiettivo è togliere del tutto le persone dalle decisioni, serve un altro progetto.",
  },
  {
    t: "Quando la scadenza è la settimana prossima.",
    d: "Un sistema che entra nel lavoro va costruito, collegato e verificato. Se quel tempo non c'è, quello che esce è una dimostrazione — esattamente la cosa che diciamo di non fare.",
  },
];

export default function ComeLavoriamo() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Come lavoriamo"
          title="Dall'analisi alla soluzione pronta all'uso."
          text="Partiamo da come lavori oggi, individuiamo dove l'AI può davvero generare valore e costruiamo insieme soluzioni semplici, testabili e integrate nei tuoi processi."
          ctaLabel="Parliamone"
        />

        <Steps eyebrow="Le fasi" title="Tre fasi, in quest'ordine." />

        {/* La sezione sui quattro livelli di quello che consegniamo è stata tolta:
            descriveva un'architettura precisa — interfaccia, dati, agenti, modello —
            e il documento chiede di non vincolare il prodotto a una struttura che
            può ancora cambiare. Al suo posto andranno gli esempi visivi di skill
            reali, quando ci saranno. */}

        {/* Per chi non è adatto */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
            <div className="max-w-[620px] mb-12">
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Onestà</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
                Quando conviene dirsi di no.
              </h2>
              <p className="text-fg-2 text-[1.06rem] mt-5">
                Dichiararlo prima evita a entrambi settimane di lavoro senza esito.
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
          ctaLabel="Parliamone"
        />
      </main>
      <Footer />
    </>
  );
}
