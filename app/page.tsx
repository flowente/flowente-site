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
          title={<>L&apos;AI è già in azienda. Le regole no.</>}
          text="Le persone hanno cominciato da sole: documenti incollati dentro un chatbot, e nessuno che abbia deciso cosa si può fare e cosa no. Il progetto serio invece non parte, perché in azienda manca chi sappia scegliere. È lo stesso problema visto da due lati — l'AI non è entrata nel lavoro, ci è passata accanto."
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
