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
    "Storie documentate di intelligenza artificiale usata per risolvere problemi reali: proteine, vista, parola. Con la fonte accanto a ciascuna.",
};

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
          title="Dove l'AI ha cambiato qualcosa."
          text="Storie documentate di intelligenza artificiale usata per risolvere problemi veri. Non sono nostri lavori: sono i casi che teniamo d'occhio, ognuno con la sua fonte — perché su questo argomento circola molta approssimazione."
        />

        <FeatureSection
          eyebrow="Ricerca"
          title="Duecento milioni di proteine, aperte a tutti."
          text="Per decenni scoprire la forma di una proteina è stato un lavoro da anni di laboratorio, e la forma è ciò che determina come funziona. AlphaFold ha previsto la struttura di quasi tutte le proteine conosciute e le ha messe in un archivio pubblico e gratuito: oltre duecento milioni, da più di un milione di organismi. Lo hanno usato più di due milioni di persone in centonovanta paesi, per lavori che vanno dalla resistenza agli antibiotici agli enzimi che degradano la plastica. Nel 2024 è arrivato il Nobel per la chimica."
          note={<Fonte href="https://www.nobelprize.org/prizes/chemistry/2024/press-release/" testo="Premio Nobel per la chimica 2024" />}
          mark={marks.coil}
          shape="circle"
        />

        <FeatureSection
          reverse
          eyebrow="Salute"
          title="Una diagnosi dove non c'è un oculista."
          text="La retinopatia diabetica porta alla cecità, ed è quasi sempre evitabile se la si vede in tempo. Il problema è che serve un oculista, e in molti paesi non ce ne sono abbastanza. Un sistema addestrato a leggere le fotografie della retina è stato messo al lavoro dentro il programma di screening nazionale thailandese, su settemilaseicento pazienti in nove ambulatori di base. Ha riconosciuto i casi da mandare allo specialista nel 91,4% delle volte: più dei retinologi che rileggevano le stesse immagini, fermi all'84,8%."
          note={
            <Fonte
              href="https://pubmed.ncbi.nlm.nih.gov/35272972/"
              testo="The Lancet Digital Health, 2022 — studio prospettico sul programma thailandese"
            />
          }
          mark={marks.onda}
          shape="square"
        />

        <FeatureSection
          eyebrow="Parola"
          title="Riavere la propria voce."
          text="La SLA toglie la parola lasciando intatto il pensiero. A un uomo di quarantacinque anni che l'aveva persa sono stati impiantati duecentocinquantasei elettrodi sull'area del cervello che governa il linguaggio: un modello traduce quei segnali in testo mentre lui prova a parlare, e una copia digitale della sua voce di prima lo pronuncia. Nei successivi otto mesi ha tenuto un'accuratezza del 97,5% su un vocabolario di centoventicinquemila parole, conversando per oltre duecento ore. È una ricerca agli inizi, su un solo partecipante: non è una terapia disponibile, è la prova che si può fare."
          note={
            <Fonte
              href="https://pubmed.ncbi.nlm.nih.gov/39141853/"
              testo="The New England Journal of Medicine, 2024 — studio su un partecipante"
            />
          }
          mark={marks.flusso}
          shape="triangle"
        />

        <CtaBand
          title="Hai un processo da semplificare?"
          text="Partiamo da un confronto semplice. Ci racconti come lavori oggi, analizziamo insieme vincoli e possibilità, e vediamo se l'AI può davvero darti una mano."
          ctaLabel="Parliamone"
        />
      </main>
      <Footer />
    </>
  );
}
