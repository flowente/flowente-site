import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Chi siamo — Flowente",
  description:
    "Portiamo l'AI dentro il lavoro quotidiano delle aziende, in modo semplice e concreto.",
};

export default function ChiSiamo() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Chi siamo"
          title="AI applicata ai processi reali."
          text="Flowente nasce per portare l'intelligenza artificiale dentro il lavoro quotidiano delle aziende, in modo semplice e concreto."
        />

        {/* In cosa crediamo */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Manifesto</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.04]">
                In cosa crediamo.
              </h2>
            </div>
            <p className="max-w-[560px] text-fg-2 text-[1.06rem]">
              Crediamo che l&apos;intelligenza artificiale debba essere uno strumento pratico, non una promessa astratta
              o una tecnologia per pochi. Per questo partiamo sempre da come un&apos;azienda lavora oggi: strumenti,
              file, abitudini, vincoli e obiettivi. Innovare per noi non significa complicare, ma semplificare ciò che
              ogni giorno richiede tempo, attenzione e coordinamento.
            </p>
          </div>
        </section>

        {/* Qui stavano "Perché esiste Flowente", la griglia numerata del manifesto
            e la coppia "Come lavoriamo con te / Su cosa lavoriamo". Tolte tutte:
            la pagina resta con la struttura del documento — hero, in cosa
            crediamo, chiamata all'azione. */}

        <CtaBand
          title="Hai un processo da semplificare?"
          text="Partiamo da un confronto semplice. Ci racconti come lavori oggi, analizziamo insieme vincoli e possibilità, e vediamo se l'AI può davvero darti una mano."
          ctaLabel="Parliamone"
        />
      </main>
      <Footer />
    </>
  );
}
