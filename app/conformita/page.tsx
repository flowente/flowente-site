import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Conformità — Flowente",
  description:
    "Cosa prevedono il GDPR e l'AI Act europeo, e come progettiamo i sistemi per rispettarli: dichiarazione dell'AI, supervisione umana, dati trattati nel perimetro.",
};

type Riga = { rif: string; t: string };

// I riferimenti normativi vanno tenuti esatti: sono il motivo per cui questa
// pagina ha valore. Ogni voce cita l'articolo e dice cosa comporta in pratica,
// senza parafrasarlo in modo da cambiarne la portata.
//
// GDPR = Regolamento (UE) 2016/679. AI Act = Regolamento (UE) 2024/1689,
// in vigore dal 1° agosto 2024 con applicazione scaglionata.
const GDPR: Riga[] = [
  {
    rif: "Art. 5",
    t: "I principi del trattamento: si raccolgono solo i dati necessari alla finalità dichiarata, si conservano per il tempo necessario e si proteggono. Il primo effetto pratico è che un sistema non deve vedere più dati di quanti gliene servano.",
  },
  {
    rif: "Art. 22",
    t: "Nessuno può essere sottoposto a una decisione che produce effetti giuridici o incide in modo significativo sulla sua persona se quella decisione è basata unicamente su un trattamento automatizzato. È la norma che rende la supervisione umana un requisito e non una cortesia.",
  },
  {
    rif: "Art. 25",
    t: "Protezione dei dati fin dalla progettazione e per impostazione predefinita. Le tutele si mettono mentre il sistema si costruisce: aggiungerle a fine progetto costa di più e copre di meno.",
  },
  {
    rif: "Art. 32",
    t: "Sicurezza del trattamento: misure adeguate al rischio, dal controllo degli accessi alla cifratura. Per un sistema di AI significa sapere chi può interrogare cosa, e poterlo dimostrare.",
  },
  {
    rif: "Art. 35",
    t: "Quando un trattamento presenta un rischio elevato per i diritti delle persone serve una valutazione d'impatto, prima di partire. Molti progetti di AI su dati personali ricadono qui.",
  },
  {
    rif: "Capo V",
    t: "I trasferimenti di dati fuori dall'Unione richiedono garanzie specifiche. La sentenza Schrems II della Corte di giustizia (causa C-311/18, 2020) ha alzato l'asticella su cosa conta come garanzia adeguata.",
  },
];

const AI_ACT: Riga[] = [
  {
    rif: "Art. 4",
    t: "Alfabetizzazione in materia di IA: chi fornisce e chi utilizza sistemi di AI deve assicurare un livello sufficiente di competenza nel personale che li usa. In vigore dal 2 febbraio 2025.",
  },
  {
    rif: "Art. 5",
    t: "Le pratiche vietate: manipolazione del comportamento, sfruttamento delle vulnerabilità, punteggio sociale, e altre. Sono divieti, non adempimenti — un sistema che vi rientra non si può usare. In vigore dal 2 febbraio 2025.",
  },
  {
    rif: "Art. 14",
    t: "Sorveglianza umana per i sistemi ad alto rischio: devono essere progettati perché una persona possa comprenderne l'esito, intervenire e fermarli. La supervisione va costruita dentro il sistema, non aggiunta come procedura.",
  },
  {
    rif: "Art. 50",
    t: "Obblighi di trasparenza per i sistemi a rischio limitato — chatbot, assistenti, generazione di testo e immagini. Chi interagisce con un sistema di AI deve saperlo, e i contenuti generati vanno marcati come tali. Applicabile dal 2 agosto 2026.",
  },
  {
    rif: "Allegato III",
    t: "L'elenco dei sistemi ad alto rischio: selezione del personale, accesso al credito, istruzione, servizi essenziali. Se un progetto ricade qui, gli obblighi cambiano di grado — e va saputo prima di cominciare, non dopo.",
  },
];

const IMPEGNI = [
  {
    t: "Diciamo sempre che è AI.",
    d: "Chi parla con un nostro sistema sa che sta parlando con un sistema. Nessun assistente che finge di essere una persona, nessun testo generato che passa per scritto a mano. È quello che chiede l'art. 50, ed è anche il modo più rapido per non perdere la fiducia di chi lo usa.",
  },
  {
    t: "Le decisioni restano alle persone.",
    d: "Gli agenti che costruiamo eseguono, propongono e preparano; dove l'esito incide su una persona — una candidatura, un credito, un contratto — si fermano e chiedono un'approvazione. La supervisione è un punto del flusso, con un responsabile.",
  },
  {
    t: "I dati restano dove devono restare.",
    d: "Prima di progettare guardiamo quali dati il processo tratta davvero, e quel perimetro guida l'architettura. Quando i dati non possono uscire, il modello si installa sui vostri server: è la garanzia più semplice da verificare, perché non dipende da una promessa contrattuale.",
  },
  {
    t: "Quello che facciamo è ricostruibile.",
    d: "Registriamo cosa il sistema ha ricevuto, cosa ha risposto e su quali documenti. Serve a correggere gli errori, ma serve soprattutto a poter rispondere quando qualcuno chiede conto di una decisione.",
  },
];

function Tabella({ righe }: { righe: Riga[] }) {
  return (
    <div className="border-t border-border">
      {righe.map((r) => (
        <div key={r.rif} className="grid gap-1 md:grid-cols-[150px_1fr] md:gap-8 py-5 border-b border-border">
          <p className="font-mono text-[0.78rem] uppercase tracking-wide text-accent md:pt-1">{r.rif}</p>
          <p className="text-fg-2 text-[0.98rem]">{r.t}</p>
        </div>
      ))}
    </div>
  );
}

export default function Conformita() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Conformità"
          title="L'AI si può adottare in sicurezza."
          text="Le regole europee non vietano l'intelligenza artificiale: stabiliscono a quali condizioni si usa. Conoscerle in anticipo è la differenza fra un progetto che entra in produzione e uno che si ferma alla verifica legale."
        />

        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">GDPR</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.04]">
                Cosa prevede il regolamento sui dati.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[420px]">
                Regolamento (UE) 2016/679, in vigore dal 2018. Riguarda ogni trattamento di dati personali, quindi
                riguarda quasi ogni sistema di AI che entra in un&apos;azienda.
              </p>
            </div>
            <Tabella righe={GDPR} />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">AI Act</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.04]">
                Cosa prevede il regolamento sull&apos;AI.
              </h2>
              <p className="text-fg-2 text-[1.02rem] mt-5 max-w-[420px]">
                Regolamento (UE) 2024/1689, in vigore dal 1° agosto 2024 e applicabile per gradi. Classifica i sistemi
                per rischio: più alto è il rischio, più stringenti sono gli obblighi.
              </p>
            </div>
            <Tabella righe={AI_ACT} />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
            <div className="max-w-[620px] mb-12">
              <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Come lavoriamo</p>
              <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
                Quattro impegni, sempre.
              </h2>
              <p className="text-fg-2 text-[1.06rem] mt-5">
                Non sono clausole aggiunte a fine progetto: sono vincoli che entrano nell&apos;architettura il primo
                giorno, perché dopo costerebbero molto di più.
              </p>
            </div>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {IMPEGNI.map((n, i) => (
                <div key={i} className="flex gap-5">
                  <div className="font-mono text-accent text-[0.9rem] pt-1">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-display font-semibold text-[1.25rem] tracking-[-0.02em]">{n.t}</h3>
                    <p className="text-fg-2 text-[0.98rem] mt-2 max-w-[420px]">{n.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Distinzione che tiene in piedi la pagina: qui si spiega come progettiamo,
                non si certifica un esito. La conformità di un sistema dipende dal suo uso
                e dal ruolo di chi lo impiega, e non si dichiara al posto del cliente. */}
            <p className="text-fg-muted text-[0.92rem] mt-12 max-w-[620px] pl-4 border-l border-border">
              Questa pagina descrive come progettiamo i sistemi e non sostituisce una valutazione legale. La conformità
              di un sistema dipende da come viene usato e dal ruolo di chi lo impiega: la verifichiamo caso per caso,
              insieme a chi in azienda se ne occupa.
            </p>
          </div>
        </section>

        <CtaBand
          title="Partiamo dai vincoli, non dopo."
          text="Se il processo tratta dati personali o ricade fra i sistemi ad alto rischio, è la prima cosa da guardare."
          ctaLabel="Parliamone"
        />
      </main>
      <Footer />
    </>
  );
}
