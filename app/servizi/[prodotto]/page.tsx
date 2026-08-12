import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { MarkBadge } from "@/components/MarkBadge";
import { CtaBand } from "@/components/CtaBand";
import { Spunta } from "@/components/Spunta";
import { PRODOTTI } from "@/lib/prodotti";

type Props = { params: { prodotto: string } };

const trova = (slug: string) => PRODOTTI.find((p) => p.slug === slug);

// Le tre pagine sono statiche: gli slug sono noti in fase di build, non serve
// generarle a richiesta.
export function generateStaticParams() {
  return PRODOTTI.map((p) => ({ prodotto: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = trova(params.prodotto);
  if (!p) return {};
  return { title: `${p.nome} — Flowente`, description: p.descrizione };
}

export default function PaginaProdotto({ params }: Props) {
  const p = trova(params.prodotto);
  if (!p) notFound();

  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 items-center md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted mb-5">Soluzioni</p>
              <h1 className="font-display font-semibold tracking-[-0.035em] text-[clamp(2.4rem,5.4vw,3.8rem)] leading-[1]">
                {p.nome}
              </h1>
              <p className="text-fg-2 text-[1.08rem] mt-6 max-w-[480px]">{p.descrizione}</p>

              <div className="mt-8 flex items-baseline gap-2.5">
                {p.prezzo ? (
                  <>
                    <span className="font-display font-semibold text-[2.6rem] tracking-[-0.03em] leading-none">
                      {p.prezzo.importo}
                    </span>
                    <span className="text-fg-muted text-[0.92rem]">{p.prezzo.cadenza}</span>
                  </>
                ) : (
                  <a
                    href="/contatti"
                    className="text-[1.08rem] text-fg underline underline-offset-4 hover:text-fg-muted transition-colors inline-flex items-center gap-2"
                  >
                    Contatta il team
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>

              <div className="mt-8">
                <Button href="/contatti" size="lg">
                  Parliamone
                </Button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end" aria-hidden="true">
              <MarkBadge mark={p.mark} shape={p.shape} boxW={300} boxH={250} shapeSize={220} markW={210} markH={144} />
            </div>
          </div>
        </section>

        {/* Qui stava "Quando è la scelta giusta" con il per-chi. Tolta la sezione,
            il campo perChi non serviva più a nessuno ed è uscito da lib/prodotti.ts:
            la tendina della barra usa "sottotitolo", che è un'altra cosa. */}

        {/* I punti della scheda e il caso collegato stanno nella stessa sezione,
            senza filetto in mezzo: sono due parti dello stesso discorso — cosa
            comprende e come si vede applicato. Un bordo li farebbe leggere come
            due argomenti diversi. */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
            {/* In colonna, uno sotto l'altro: con sei o sette voci la griglia a
                tre colonne obbligava a leggere a zigzag per capire l'elenco. */}
            <ul className="space-y-3">
              {p.esempi.map((e) => (
                <li key={e} className="flex gap-3 text-[1.02rem] text-fg-2">
                  <Spunta className="mt-[6px]" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>

            <div className="mt-16 md:mt-20 grid gap-10 md:gap-14 items-center md:grid-cols-2">
              <div>
                <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Case study</p>
                <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.04]">
                  {p.caso.titolo}
                </h2>
                <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[460px]">{p.caso.testo}</p>
              </div>

              {p.caso.video && (
                // Nessun autoplay e preload dei soli metadati: è un video con
                // parlato, si guarda se si sceglie di guardarlo, e finché non lo
                // si fa dalla rete scendono pochi byte invece di due megabyte.
                <div className="rounded-[20px] overflow-hidden border border-border bg-surface-2 md:justify-self-end w-full max-w-[520px]">
                  <video
                    className="block w-full h-auto"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`Video del caso: ${p.caso.titolo}`}
                  >
                    <source src={p.caso.video} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>
        </section>

        <CtaBand
          title="Valutiamo il tuo caso."
          text="Descrivi il processo su cui vuoi intervenire: definiamo ambito, vincoli e fattibilità."
          ctaLabel="Parliamone"
        />
      </main>
      <Footer />
    </>
  );
}
