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
    "Advisory, sviluppo di applicazioni e modelli, AI privata on-premise. Scegliamo modello e infrastruttura adatti al caso d'uso e li portiamo in produzione.",
};

export default function Servizi() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Servizi"
          title="Dalla strategia al modello in produzione."
          text="L'intervento parte dai requisiti — riservatezza dei dati, volumi, latenza accettabile, costo di esercizio — e arriva al sistema in produzione. Quando i dati non possono uscire, l'infrastruttura resta interna."
          ctaLabel="Contattaci"
        />
        <FeatureSection
          eyebrow="Advisory"
          title="Prima la scelta, poi lo sviluppo."
          text="Partiamo dal processo e dai suoi vincoli: quali dati tratta, quanto volume, quanto può aspettare chi lo usa, quanto può costare. Poi confrontiamo i modelli candidati sul compito reale — non su una classifica generale — e indichiamo quale usare, dove farlo girare e a quale costo. Se non conviene farlo, lo diciamo prima."
          mark={marks.onda}
          shape="circle"
        />
        <FeatureSection
          reverse
          eyebrow="Studio"
          title="Costruiamo, colleghiamo, mettiamo online."
          text="Progettiamo e sviluppiamo l'applicazione, la colleghiamo ai dati e ai programmi già in uso — gestionale, archivi, posta, strumenti interni — e la portiamo in produzione. Ci occupiamo anche delle parti che di solito fanno fallire i progetti: cosa succede quando il modello sbaglia, chi può vedere cosa, quanto costa tenerlo acceso."
          mark={marks.flusso}
          shape="square"
        />
        <FeatureSection
          eyebrow="AI privata"
          title="Il modello gira dove stanno i dati."
          text="Quando i dati non possono uscire — per il GDPR, per l'EU AI Act o per un contratto che hai firmato — installiamo il modello sui server dell'azienda o su un cloud privato in Europa. Le domande, i documenti e le risposte restano lì: nessun servizio esterno li riceve e nessuno li usa per addestrare altro."
          mark={marks.coil}
          shape="triangle"
        />
        <Steps eyebrow="Il metodo" title="Un metodo, tre fasi." />
        <CtaBand
          title="Valutiamo il tuo caso."
          text="Descrivi il processo su cui vuoi intervenire: definiamo ambito, vincoli e fattibilità."
        />
      </main>
      <Footer />
    </>
  );
}
