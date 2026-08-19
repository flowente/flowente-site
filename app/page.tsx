import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BuiltWith } from "@/components/BuiltWith";
import { Numeri } from "@/components/Numeri";
import { ServiceCards } from "@/components/ServiceCards";
import { Steps } from "@/components/Steps";
import { ForWho } from "@/components/ForWho";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BuiltWith />
        {/* Subito sotto i loghi: e' la prima cosa che diciamo dopo esserci
            presentati, e la diciamo con tre dati invece che con un'opinione. */}
        <Numeri />
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
