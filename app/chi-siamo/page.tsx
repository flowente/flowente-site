import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Chi siamo — Flowente",
  description:
    "Flowente nasce da un'idea semplice: l'AI dovrebbe far scorrere il lavoro, non aggiungere confusione. Una persona, non un reparto marketing.",
};

const CREDO = [
  { t: "Il lavoro deve scorrere.", d: "Nessuno dovrebbe perdere tempo, dati o serenità per usare l'AI." },
  {
    t: "Lo strumento giusto per il compito.",
    d: "A volte è un modello di frontiera, a volte uno piccolo e privato. La bravura sta nello scegliere, non nel vendere sempre la stessa cosa.",
  },
  {
    t: "I dati vengono prima.",
    d: "Se possono restare nel tuo perimetro, ci restano. Sicurezza by design, non come ripensamento.",
  },
  { t: "Onestà.", d: "Ti dico anche quando l'AI non serve. È il modo più veloce per fidarsi." },
];

// Nota: [...] = fatti personali da inserire (vedi Flowente_Copy_Sito.md, pagina Chi siamo).
export default function ChiSiamo() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Chi siamo"
          title="Una persona, non un reparto marketing."
          text="Flowente nasce da un'idea semplice: l'AI dovrebbe far scorrere il lavoro, non aggiungere confusione. Dietro c'è [nome], che [una riga: cosa fai / da dove vieni] e che oggi aiuta aziende e studi a usare l'AI in modo concreto e sicuro."
          align="left"
        />

        {/* La storia */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10">
            <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.04]">
              Perché esiste Flowente.
            </h2>
            <div className="max-w-[560px] text-fg-2 text-[1.06rem] space-y-5">
              <p>
                [La tua storia in 3–4 frasi, onesta: da dove parti — design, sviluppo, dati — e come sei arrivato
                all&apos;AI applicata. Il momento in cui hai capito che il problema non era &ldquo;l&apos;AI&rdquo;, ma
                portarla davvero dentro il lavoro delle persone.]
              </p>
              <p>
                Ho visto troppe demo brillanti fermarsi lì. Flowente è la risposta: meno teatro, più cose che entrano in
                produzione e restano.
              </p>
            </div>
          </div>
        </section>

        {/* In cosa credo */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
            <div className="max-w-[560px] mb-12">
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Manifesto</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
                In cosa credo.
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

        {/* Come lavoro + competenze */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.04]">
                Come lavoro con te.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[440px]">
                Un solo interlocutore dall&apos;idea alla messa online: niente rimbalzi tra reparti. Partiamo dal
                processo che si inceppa, proviamo una soluzione concreta in fretta, e la portiamo dove serve. Con calma,
                ma senza perdere tempo.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.04]">
                Su cosa mi muovo.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[440px]">
                Progettazione e sviluppo di applicazioni, integrazione dati e automazioni ([Supabase], [n8n], deploy su
                [Railway]), scelta e messa in produzione dei modelli (cloud di frontiera o modelli privati/on-prem con
                RAG).
              </p>
            </div>
          </div>
        </section>

        <CtaBand
          title="Se ti va, partiamo dal tuo caso."
          text="Una call di mezz'ora per capire se e come possiamo far scorrere il tuo lavoro."
        />
      </main>
      <Footer />
    </>
  );
}
