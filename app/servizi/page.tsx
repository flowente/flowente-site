import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Products } from "@/components/Products";
import { FeatureSection } from "@/components/FeatureSection";
import { UseCases } from "@/components/UseCases";
import { CtaBand } from "@/components/CtaBand";
import { marks } from "@/lib/marks";

export const metadata: Metadata = {
  title: "Servizi — Flowente",
  description:
    "Dalla prima automazione all'infrastruttura AI privata: agenti, piattaforma aziendale e modelli on-premise. Scegli il punto di partenza.",
};

export default function Servizi() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Servizi"
          title="Sistemi AI per ogni fase della tua crescita."
          text="Dalla prima automazione all'infrastruttura privata, scegli il tuo punto di partenza. Al resto pensiamo insieme."
          ctaLabel="Parliamone"
        />
        <Products />
        <FeatureSection
          eyebrow="Advisory"
          title="Prima la scelta, poi lo sviluppo."
          text="Partiamo dal processo e dai suoi vincoli: quali dati tratta, quale volume di richieste, quale latenza è accettabile, quale costo di esercizio è sostenibile."
          note="Cosa ricevi: la scelta motivata — quale modello, su quale infrastruttura, con quale architettura — e cosa serve per partire."
          mark={marks.onda}
          shape="circle"
        />
        <FeatureSection
          reverse
          eyebrow="Sviluppo software"
          title="Collegamento a dati e sistemi proprietari."
          text="Progettiamo e sviluppiamo l'applicazione e gli agenti che la muovono, li colleghiamo ai dati e ai programmi già in uso — gestionale, archivi, posta, strumenti interni — e li portiamo in produzione. Ci occupiamo anche delle parti che di solito fanno fallire i progetti: cosa succede quando il modello sbaglia, chi può vedere cosa, quanto costa l'esercizio."
          note="Cosa ricevi: l'applicazione in produzione, collegata ai tuoi dati, con il modello sostituibile senza rifare il resto."
          mark={marks.flusso}
          shape="square"
        />
        <FeatureSection
          eyebrow="AI privata"
          title="Modelli addestrati su misura."
          text="Quando si trattano dati interni, il modello viene installato sui server aziendali. Il servizio e i risultati restano sulla rete interna: il dato non esce, ed è la risposta più diretta ai vincoli che lo impongono — GDPR, Schrems II sui trasferimenti fuori dall'Unione, EU AI Act. Nessun servizio esterno riceve le richieste, nessuno le usa per addestrare altro."
          note="Cosa ricevi: il modello installato sulla tua infrastruttura, con i controlli di accesso e la ricerca sui tuoi documenti."
          mark={marks.lucchetto}
          shape="triangle"
        />
        <UseCases />
        <CtaBand
          title="Valutiamo il tuo caso."
          text="Descrivi il processo su cui vuoi intervenire: definiamo ambito, vincoli e fattibilità."
          ctaLabel="Parliamone"
        />
      </main>
      <Footer />
    </>
  );
}
