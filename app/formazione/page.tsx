import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Formazione — Flowente",
  description:
    "Fra chi valuta l'AI e poi non la adotta, il 58,6% indica la mancanza di competenze. Il team Flowente accompagna il tuo nella comprensione e nell'uso efficace degli strumenti.",
};

// PAGINA APPENA APERTA. Per ora c'e' solo la hero: il testo e' quello della
// fascia in home, in attesa dei contenuti veri (formato, durata, cosa si porta
// a casa chi partecipa). Finche' resta cosi', chi arriva qui legge la stessa
// frase che ha appena letto in home e non trova niente di piu': e' il motivo
// per cui questa pagina va riempita presto.
//
// Il 58,6% e il 43,0% vengono da ISTAT, "Imprese e ICT — Anno 2025", gli stessi
// numeri della sezione in home. Se qui la frase cambia, il vincolo resta: il
// dato riguarda chi ha VALUTATO l'IA senza poi adottarla, non tutte le imprese
// che non la usano. Vedi il commento in components/Numeri.tsx.
export default function Formazione() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Formazione"
          title="Si parte da qui."
          text="Fra chi valuta l'AI e poi non la adotta, il 58,6% indica la mancanza di competenze — più del costo, che si ferma al 43%. Il team Flowente vi accompagna nella comprensione e utilizzo efficace degli strumenti."
          ctaLabel="Parliamone"
        />

        <CtaBand
          title="Partiamo dal tuo team."
          text="Raccontaci come lavorate oggi e con quali strumenti: da lì costruiamo il percorso."
          ctaLabel="Parliamone"
        />
      </main>
      <Footer />
    </>
  );
}
