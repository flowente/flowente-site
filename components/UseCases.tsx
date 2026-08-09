type Case = { label: string; title: string; text: string; img: string };

// Il titolo dice "Case Study" per scelta dell'autore, ma i contenuti restano
// esempi di applicazione: nessun cliente, nessun nome, nessun numero, nessun
// risultato dichiarato. Finché è così la sezione non afferma nulla di falso.
// Il limite da non passare è quello: aggiungere una percentuale o il nome di
// un'azienda trasforma l'insieme in una dichiarazione su lavori mai svolti.
// Si sostituiscono con lavori veri appena ci sono.
//
// FOTO — i file in /public/media/casi sono SEGNAPOSTO.
// Quando arrivano gli scatti veri basta cambiare l'estensione qui sotto (.svg -> .jpg).
// Brief di scatto: CONTENT.md §13. Le foto sono d'ambiente, mai di clienti:
// per questo l'alt resta vuoto e nessun nome o azienda va mai associato.
// I nomi dei file non corrispondono più ai titoli: erano stati scelti sui casi
// precedenti. Si sistemano quando arrivano gli scatti veri.
const CASES: Case[] = [
  {
    label: "Dati storici",
    title: "Agente di ricerca sui dati storici aziendali.",
    text: "Anni di commesse, preventivi e ordini in sistemi che ormai nessuno interroga. Si chiede in italiano — quanto ha reso quella linea, quali clienti sono fermi da un anno — e la risposta arriva con il riferimento al dato da cui è presa.",
    img: "/media/casi/01-archivio.svg",
  },
  {
    label: "Centralino",
    title: "Centralino automatizzato con calendario clienti.",
    text: "Le chiamate che arrivano fuori orario o mentre in reparto non può rispondere nessuno. L'agente capisce la richiesta, propone gli orari liberi e fissa l'appuntamento in agenda; se la richiesta esce dal seminato, passa la chiamata a una persona.",
    img: "/media/casi/02-documenti.svg",
  },
  {
    label: "Rendicontazione",
    title: "Skills e plugin di rendicontazione periodica.",
    text: "Il rapporto che qualcuno rimette insieme a mano ogni mese. Serve a vedere dove va il budget, dove il lavoro si ferma e quali canali di acquisizione rendono meno di quanto costano — le tre cose che di solito si scoprono tardi.",
    img: "/media/casi/03-stesure.svg",
  },
  {
    label: "Costi di esercizio",
    title: "Un modello aziendale con le skills che tagliano i costi.",
    text: "Le skills fissano il modo in cui si fanno le richieste: il modello riceve ogni volta solo il contesto che serve, invece dell'archivio intero. A parità di lavoro svolto, il costo per richiesta scende in modo netto.",
    img: "/media/casi/04-risposte.jpg",
  },
];

export function UseCases() {
  return (
    <section id="casi-duso" className="border-b border-border scroll-mt-[80px]">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Casi d&apos;uso</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Case Study.
          </h2>
          <p className="text-fg-2 text-[1.06rem] mt-5">
            Esempi concreti di applicazione dei nostri prodotti, sui processi in cui intervengono più spesso.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <div key={c.label} className="rounded-[16px] border border-border bg-surface overflow-hidden flex flex-col">
              <div className="bg-surface-2 border-b border-border">
                {/* Immagine d'ambiente, non un cliente: alt vuoto per non attribuirle un'identità.
                    Il rapporto sta sull'immagine, non sul contenitore: lì un file più alto del 3:2
                    non verrebbe vincolato e allungherebbe la card. */}
                <img src={c.img} alt="" className="block w-full aspect-[3/2] object-cover" loading="lazy" />
              </div>
              <div className="p-7">
                <div className="font-mono text-[0.68rem] uppercase tracking-wide text-accent">{c.label}</div>
                <h3 className="font-display font-semibold text-[1.2rem] tracking-[-0.015em] mt-3">{c.title}</h3>
                <p className="text-fg-2 text-[0.98rem] mt-2.5">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
