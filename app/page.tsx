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
          title={<>Il freno è la competenza.</>}
          text="Dove l'AI non entra, raramente il motivo è il costo o la maturità degli strumenti: è non sapere da dove si comincia, cosa si può affidare a un modello e cosa va lasciato alle persone. È una barriera che si abbatte spiegando."
          ctaLabel="Quando conviene cosa"
          ctaHref="/servizi#la-scelta"
          mark={marks.onde}
          shape="square"
        />
        <ServiceCards />
        <Steps />
        <ForWho />
        <CtaBand
          title="Valutiamo il tuo caso."
          text="Un primo confronto di trenta minuti per definire ambito, vincoli e fattibilità."
        />
      </main>
      <Footer />
    </>
  );
}
