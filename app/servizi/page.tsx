import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FeatureSection } from "@/components/FeatureSection";
import { DecisionMap } from "@/components/DecisionMap";
import { UseCases } from "@/components/UseCases";
import { CodeBlock, C, K } from "@/components/CodeBlock";
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
          ctaLabel="Prenota una call"
        />
        <DecisionMap />
        <FeatureSection
          eyebrow="Advisory"
          title="Prima la scelta, poi lo sviluppo."
          text="Partiamo dal processo e dai suoi vincoli: quali dati tratta, quanto volume, quanto può aspettare chi lo usa, quanto può costare. Poi confrontiamo i modelli candidati sul compito reale — non su una classifica generale — e indichiamo quale usare, dove farlo girare e a quale costo. Se non conviene farlo, lo diciamo prima."
          note="Cosa ricevi: la scelta motivata — quale modello, su quale infrastruttura, con quale architettura — e cosa serve per partire. Quattro settimane."
          mark={marks.onda}
          shape="circle"
          code={
            <CodeBlock
              label="La scelta, in pratica"
              caption="Quasi nessun progetto usa un modello solo. La parte del lavoro che conta di più è questa: decidere cosa mandare dove, e sapere perché."
            >
{``}<C># Un modello per tipo di lavoro, non uno per tutto</C>{`
`}<K>if</K>{` dati_sensibili(compito):
    modello = privato(`}<K>&quot;qwen2.5&quot;</K>{`)         `}<C># resta dentro</C>{`
`}<K>elif</K>{` ragionamento_difficile(compito):
    modello = frontiera(`}<K>&quot;claude&quot;</K>{`)        `}<C># qualità alta</C>{`
`}<K>else</K>{`:
    modello = privato(`}<K>&quot;mistral-small&quot;</K>{`)   `}<C># costo minimo</C>
            </CodeBlock>
          }
        />
        <FeatureSection
          reverse
          eyebrow="Sviluppo software"
          title="Costruiamo, colleghiamo, mettiamo online."
          text="Progettiamo e sviluppiamo l'applicazione, la colleghiamo ai dati e ai programmi già in uso — gestionale, archivi, posta, strumenti interni — e la portiamo in produzione. Ci occupiamo anche delle parti che di solito fanno fallire i progetti: cosa succede quando il modello sbaglia, chi può vedere cosa, quanto costa tenerlo acceso."
          note="Cosa ricevi: un'applicazione che funziona, collegata ai tuoi dati, con il modello sostituibile senza rifare il lavoro. Quattro settimane."
          mark={marks.flusso}
          shape="square"
          code={
            <CodeBlock
              label="Come cerca nei tuoi documenti"
              caption="Prima di rispondere, il sistema va a prendere i cinque pezzi dei tuoi documenti più vicini alla domanda. Il modello risponde su quelli — non su quello che “ricorda”."
            >
{``}<C>-- La domanda cerca per significato, non per parole chiave</C>{`
`}<K>select</K>{` titolo, contenuto
`}<K>from</K>{` documenti
`}<K>where</K>{` reparto = `}<K>&apos;amministrazione&apos;</K>{`
`}<K>order by</K>{` embedding <=> :domanda   `}<C>-- distanza semantica</C>{`
`}<K>limit</K>{` 5;`}
            </CodeBlock>
          }
        />
        <FeatureSection
          eyebrow="AI privata"
          title="Il modello gira dove stanno i dati."
          text="Quando i dati non possono uscire — GDPR, Schrems II sui trasferimenti fuori dall'Unione, EU AI Act, o un contratto che hai firmato — installiamo il modello sui server dell'azienda o su un cloud privato in Europa. Le domande, i documenti e le risposte restano lì: nessun servizio esterno li riceve e nessuno li usa per addestrare altro."
          note="Cosa ricevi: il modello installato sulla tua infrastruttura, con i controlli di accesso e la ricerca sui tuoi documenti. Quattro settimane."
          mark={marks.coil}
          shape="triangle"
          code={
            <CodeBlock
              label="Dove risponde il modello"
              caption="È una riga di configurazione. L'indirizzo del modello è un numero della tua rete interna: se quell'indirizzo non esce dal tuo perimetro, non escono nemmeno i tuoi dati."
            >
{``}<C># Il modello risponde qui — un indirizzo dentro la tua rete</C>{`
MODEL_BASE_URL=`}<K>http://10.0.0.12:11434</K>{`/v1

`}<C># non qui</C>{`
`}<C># MODEL_BASE_URL=https://api.fornitore-esterno.com/v1</C>
            </CodeBlock>
          }
        />
        <UseCases />
        <CtaBand
          title="Valutiamo il tuo caso."
          text="Descrivi il processo su cui vuoi intervenire: definiamo ambito, vincoli e fattibilità."
        />
      </main>
      <Footer />
    </>
  );
}
