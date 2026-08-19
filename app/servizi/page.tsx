import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Products } from "@/components/Products";
import { UseCases } from "@/components/UseCases";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Soluzioni — Flowente",
  description:
    "Dalla prima automazione al modello privato: AI Pilota, AI Automation e Private AI. Scegli il punto di partenza.",
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
        {/* Dopo i tre prodotti si passa direttamente ai case study: le tre sezioni
            su advisory, sviluppo software e AI privata che stavano qui ripetevano
            gli stessi concetti con altre parole. */}
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
