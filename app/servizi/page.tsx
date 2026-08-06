import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FeatureSection } from "@/components/FeatureSection";
import { Steps } from "@/components/Steps";
import { CtaBand } from "@/components/CtaBand";
import { marks } from "@/lib/marks";

export const metadata: Metadata = {
  title: "Servizi — Flowente",
  description:
    "Advisory, sviluppo di app e modelli, AI privata on-premise. Scegliamo la soluzione giusta per il tuo caso e la portiamo in produzione, in sicurezza.",
};

export default function Servizi() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Servizi"
          title="Dalla strategia al modello in produzione."
          text={`Non vendiamo "l'AI". Capiamo cosa ti serve, scegliamo la soluzione giusta per il tuo caso e la mettiamo al lavoro — anche privata, se i dati non devono uscire.`}
          ctaLabel="Parliamone"
        />
        <FeatureSection
          eyebrow="Advisory"
          title="Prima capire, poi scegliere."
          text="C'è un modello giusto per ogni caso, e spesso non è il più grande né il più costoso. Ti aiutiamo a scegliere: quale modello, su quale infrastruttura, a che costo e latenza. Così parti con una bussola, non con l'hype."
          mark={marks.onda}
          shape="circle"
        />
        <FeatureSection
          reverse
          eyebrow="Studio"
          title="Costruiamo cose che restano."
          text="Progettiamo e sviluppiamo applicazioni e modelli su misura, e li portiamo fino in produzione. Ci colleghiamo ai tuoi dati e ai tuoi strumenti, così l'AI entra nel lavoro vero — non in una demo che poi dimentichi."
          mark={marks.flusso}
          shape="square"
        />
        <FeatureSection
          eyebrow="AI privata"
          title="I tuoi dati restano tuoi."
          text="Quando i dati sono sensibili — o le norme lo richiedono — installiamo modelli che girano nel tuo perimetro. Niente esce verso cloud esterni. Tutta la comodità dell'AI, con la serenità di sapere dove sono le tue informazioni."
          mark={marks.coil}
          shape="triangle"
        />
        <Steps eyebrow="Il metodo" title="Un metodo, tre passi." />
        <CtaBand
          title="Partiamo dal tuo caso."
          text="Raccontaci il processo più lento che hai. Il resto lo vediamo insieme."
        />
      </main>
      <Footer />
    </>
  );
}
