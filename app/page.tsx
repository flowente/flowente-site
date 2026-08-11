import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BuiltWith } from "@/components/BuiltWith";
import { FeatureSection } from "@/components/FeatureSection";
import { ProcessSection } from "@/components/ProcessSection";
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
        <ProcessSection />
        <FeatureSection
          eyebrow="Perché le aziende si fermano"
          title={<>Il problema non è l&apos;AI, è sapere da dove iniziare.</>}
          text="Le aziende non rinunciano all'intelligenza artificiale perché la tecnologia è troppo complessa. Si fermano perché è difficile capire da dove partire, quali processi automatizzare e come ottenere risultati concreti senza stravolgere il modo di lavorare."
          ctaLabel="Scopri da dove iniziare"
          ctaHref="/metodo"
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
