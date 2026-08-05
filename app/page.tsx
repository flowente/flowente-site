import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { CardGrid } from "@/components/CardGrid";
import { QuoteRow } from "@/components/QuoteRow";
import { Footer } from "@/components/Footer";
import { marks } from "@/lib/marks";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureSection
          title={<>Meno lavoro ripetitivo.<br />Più cose che scorrono.</>}
          text="Un agente legge, cerca, decide e agisce al posto del tuo team sui compiti che non aggiungono valore. Misurabile dal primo mese."
          ctaLabel="Scopri lo Studio"
          mark={marks.onde}
          shape="square"
        />
        <FeatureSection
          reverse
          title={<>Dalla strategia<br />al modello in produzione.</>}
          text="Un solo partner dall'idea alla messa online: consulenza, sviluppo di applicazioni e implementazione dei modelli. Niente dispersione."
          ctaLabel="Come lavoriamo"
          mark={marks.flusso}
          shape="blob"
        />
        <CardGrid />
        <QuoteRow />
      </main>
      <Footer />
    </>
  );
}
