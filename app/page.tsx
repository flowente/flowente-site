import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BuiltWith } from "@/components/BuiltWith";
import { FeatureSection } from "@/components/FeatureSection";
import { ServiceCards } from "@/components/ServiceCards";
import { Steps } from "@/components/Steps";
import { ForWho } from "@/components/ForWho";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { marks } from "@/lib/marks";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BuiltWith />
        {/* Subito sotto i loghi, e al centro: e' la prima cosa che diciamo dopo
            esserci presentati, e non deve sembrare una delle tante. */}
        <FeatureSection
          center
          eyebrow="Perché le aziende sono ferme"
          title={<>Il problema non è l&apos;AI. È capire da dove iniziare.</>}
          text="Tra nuove tecnologie, dati da proteggere e processi già consolidati, capire da dove partire non è semplice. Noi analizziamo il lavoro di ogni giorno e troviamo i punti in cui l'AI può portare un miglioramento concreto."
          mark={marks.onde}
          shape="square"
        />
        <ServiceCards />
        <Steps />
        <ForWho />
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
