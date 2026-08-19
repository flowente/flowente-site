import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Formazione — Flowente",
  description:
    "Per molte aziende l'ostacolo non è il costo dell'AI, ma sapere come usarla. Con Flowente il team impara a scegliere gli strumenti e ad applicarli al lavoro di ogni giorno.",
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
          text="Per molte aziende il vero ostacolo non è il costo dell'AI, ma sapere come usarla. Il 58,6% di chi ha valutato un investimento e poi si è fermato indica la mancanza di competenze."
          note={
            <>
              Fonte:{" "}
              <a
                href="https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-fg transition-colors"
              >
                ISTAT, Imprese e ICT — Anno 2025
              </a>
              .
            </>
          }
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
