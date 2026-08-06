import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
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
        <ProcessSection />
        <FeatureSection
          title={<>Molti progetti di AI si fermano al prototipo.</>}
          text="Il modello funziona, la dimostrazione convince, e poi non succede più niente. La parte difficile non è il modello: è collegarlo ai dati e ai programmi che l'azienda usa ogni giorno, e decidere cosa deve fare quando sbaglia. Noi partiamo da lì."
          ctaLabel="Il metodo"
          ctaHref="/servizi"
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
