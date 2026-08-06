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
        <FeatureSection
          title={<>Troppa AI resta un esperimento.</>}
          text="Succede spesso: una demo che a schermo funziona, e poi si ferma lì — non entra mai nel lavoro di tutti i giorni. Noi partiamo dall'altra parte. Dal problema reale, fino a qualcosa che gira ogni giorno."
          ctaLabel="Come lavoriamo"
          ctaHref="/servizi"
          mark={marks.onde}
          shape="square"
        />
        <ProcessSection />
        <ServiceCards />
        <Steps />
        <ForWho />
        <CtaBand
          title="Il tuo progetto AI è fermo alla demo?"
          text="Vediamo insieme come portarlo al lavoro. Il primo passo è una call di mezz'ora."
        />
      </main>
      <Footer />
    </>
  );
}
