import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FeatureSection } from "@/components/FeatureSection";
import { CtaBand } from "@/components/CtaBand";
import { marks } from "@/lib/marks";

export const metadata: Metadata = {
  title: "Storie umane — Flowente",
  description:
    "Le volte in cui uomo e intelligenza artificiale, insieme, hanno restituito qualcosa a qualcuno: la vista, la parola, il lavoro di una vita. Ogni storia con la sua fonte.",
};

// IMMAGINI — sono segnaposto, e il nome dei file lo dice apposta.
// Non ritraggono nessuna delle persone o dei luoghi di cui si parla: sono lì per
// dare alla pagina il suo peso visivo finché non ci saranno fotografie vere.
// Per questo restano volutamente astratte e senza volti: una foto di una persona
// accanto a una di queste storie verrebbe letta come il paziente, e non lo è.
// Quando arriveranno immagini reali, si sostituiscono qui e si scrive l'alt.

// REGOLA DI QUESTA PAGINA — non è negoziabile, ed è il motivo per cui la pagina
// vale qualcosa invece di essere l'ennesimo elenco di meraviglie.
//
// 1. Nessuna di queste storie è lavoro di Flowente. Non vanno mai scritte in
//    modo che lo sembri: nessun "abbiamo", nessun "noi".
// 2. Ogni storia porta la fonte. Se una storia non ha una fonte pubblica e
//    verificabile, non entra.
// 3. Le cifre sono quelle della fonte, riportate come le riporta lei. Dove il
//    risultato riguarda una sola persona o è in fase iniziale, va detto: è la
//    differenza fra raccontare e vendere.
//
// La fonte sta nella nota sotto il testo e si apre in una scheda nuova, così chi
// legge può controllare senza perdere la pagina.
function Fonte({ href, testo }: { href: string; testo: string }) {
  return (
    <>
      Fonte:{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-fg transition-colors"
      >
        {testo}
      </a>
    </>
  );
}

export default function Storie() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Storie umane"
          title="Quando uomo e AI collaborano per il bene comune."
          text="Dell'intelligenza artificiale si parla quasi sempre con paura. Qui teniamo l'altra metà: le volte in cui qualcuno l'ha usata per ridare a una persona la vista, la parola, una possibilità. Non sono storie nostre — sono storie di altri, e ognuna porta la sua fonte."
        />

        <FeatureSection
          eyebrow="Ricerca"
          title="Il lavoro di una vita, regalato a tutti."
          text="Capire la forma di una proteina poteva costare a un ricercatore anni di laboratorio. AlphaFold le ha previste quasi tutte — duecento milioni — e invece di venderle le ha messe in un archivio gratuito, aperto a chiunque. Oggi lo usano due milioni di persone in centonovanta paesi. Nel 2024 è arrivato il Nobel."
          note={<Fonte href="https://www.nobelprize.org/prizes/chemistry/2024/press-release/" testo="Premio Nobel per la chimica 2024" />}
          mark={marks.coil}
          shape="circle"
          img="/media/storie/segnaposto-forma.jpg"
        />

        <FeatureSection
          reverse
          eyebrow="Vista"
          title="Accorgersene in tempo, dove non c'è un oculista."
          text="La retinopatia diabetica porta alla cecità, e quasi sempre si potrebbe evitare: basta vederla per tempo. Ma serve un oculista, e in gran parte del mondo non c'è. In Thailandia un sistema che legge le fotografie della retina ha riconosciuto chi andava mandato allo specialista nel 91,4% delle volte. I retinologi che rileggevano le stesse immagini erano all'84,8%."
          note={
            <Fonte
              href="https://pubmed.ncbi.nlm.nih.gov/35272972/"
              testo="The Lancet Digital Health, 2022 — studio prospettico sul programma thailandese"
            />
          }
          mark={marks.onda}
          shape="square"
          img="/media/storie/segnaposto-luce.jpg"
        />

        <FeatureSection
          eyebrow="Parola"
          title="Riavere la propria voce."
          text="La SLA gli aveva tolto la parola, non i pensieri. Duecentocinquantasei elettrodi leggono l'area del cervello che governa il linguaggio, un modello traduce, e a parlare è una copia della sua voce di prima. Per otto mesi ha conversato con i suoi con un'accuratezza del 97,5%. Un solo paziente, una ricerca appena cominciata: non è una cura, è una porta che si apre."
          note={
            <Fonte
              href="https://pubmed.ncbi.nlm.nih.gov/39141853/"
              testo="The New England Journal of Medicine, 2024 — studio su un partecipante"
            />
          }
          mark={marks.flusso}
          shape="triangle"
          img="/media/storie/segnaposto-voce.jpg"
        />

        {/* La banda finale resta, ma qui non vende: dopo tre storie cosi' una
            domanda sul processo aziendale suonerebbe fuori posto. */}
        <CtaBand
          title="Conosci una storia che meriterebbe di stare qui?"
          text="Raccontacela. Cerchiamo casi documentati in cui l'AI ha fatto la differenza per qualcuno — la fonte poi la verifichiamo insieme."
          ctaLabel="Scrivici"
        />
      </main>
      <Footer />
    </>
  );
}
