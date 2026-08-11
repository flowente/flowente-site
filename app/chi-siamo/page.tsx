import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Chi siamo — Flowente",
  description:
    "Portiamo l'AI dentro il lavoro quotidiano delle aziende. Non partiamo dalla tecnologia da mostrare, ma dai processi che fanno perdere tempo.",
};

export default function ChiSiamo() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Chi siamo"
          title="AI applicata ai processi reali."
          text="Flowente nasce per portare l'intelligenza artificiale dentro il lavoro quotidiano delle aziende, in modo semplice e concreto. Non partiamo dalla tecnologia da mostrare, ma dai processi che fanno perdere tempo, creano complessità o frenano la crescita."
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

        {/* La griglia numerata "In cosa crediamo" stava qui ed è stata tolta: il
            concetto è già espresso per intero nella sezione dedicata più in alto. */}

        {/* Come lavoriamo + competenze */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.04]">
                Come lavoriamo con te.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[440px]">
                Un solo interlocutore dall&apos;analisi alla messa in produzione, senza passaggi di consegne tra
                reparti. Si parte dal processo che si inceppa, si verifica su un perimetro ristretto e si estende solo
                dopo che i criteri fissati all&apos;inizio sono stati raggiunti.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.04]">
                Su cosa lavoriamo.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[440px]">
                Progettazione e sviluppo di applicazioni, agenti che eseguono procedure end-to-end, integrazione con i
                sistemi e gli archivi già in uso, selezione e messa in produzione degli LLM — di frontiera via API o
                installati nel perimetro aziendale — con la ricerca semantica sui documenti del cliente.
              </p>
            </div>
          </div>
        </section>

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
