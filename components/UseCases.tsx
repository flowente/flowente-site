type Case = { label: string; title: string; text: string };

// Onesto: non sono clienti, sono i problemi che incontriamo più spesso.
// Nessun numero, nessun nome. Si sostituiscono con lavori veri appena ci sono.
const CASES: Case[] = [
  {
    label: "Archivio",
    title: "Cercare dentro anni di documenti.",
    text: "Pratiche, contratti e relazioni in cartelle che nessuno riesce più a percorrere. Si fa una domanda in italiano e la risposta arriva con il riferimento al documento da cui è presa — così è verificabile.",
  },
  {
    label: "Documenti in entrata",
    title: "Leggere e smistare quello che arriva.",
    text: "Fatture, ordini, certificati che arrivano via mail e vengono ricopiati a mano in un gestionale. Il modello legge ed estrae i campi; quello di cui non è sicuro lo mette in coda a una persona invece di indovinare.",
  },
  {
    label: "Prime stesure",
    title: "Partire da una bozza invece che dal foglio bianco.",
    text: "Documenti che nascono sempre dagli stessi blocchi. La prima versione la prepara il modello, sui vostri modelli e sui vostri dati. La revisione e la firma restano a chi di dovere.",
  },
  {
    label: "Risposte interne",
    title: "Rispondere a domande che hanno già una risposta.",
    text: "Le stesse domande che tornano ogni settimana, quando la risposta è già scritta da qualche parte. Il modello la trova e cita la fonte; quando la domanda esce dal seminato, passa a una persona.",
  },
];

export function UseCases() {
  return (
    <section id="casi-duso" className="border-b border-border scroll-mt-[80px]">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Casi d&apos;uso</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Quattro esempi concreti.
          </h2>
          <p className="text-fg-2 text-[1.06rem] mt-5">
            Non sono clienti: sono i problemi che ci troviamo davanti più spesso. Quando avremo lavori da raccontare,
            questi lasceranno il posto a quelli.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <div key={c.label} className="rounded-[16px] border border-border bg-surface p-7">
              <div className="font-mono text-[0.68rem] uppercase tracking-wide text-accent">{c.label}</div>
              <h3 className="font-display font-semibold text-[1.2rem] tracking-[-0.015em] mt-3">{c.title}</h3>
              <p className="text-fg-2 text-[0.98rem] mt-2.5">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
