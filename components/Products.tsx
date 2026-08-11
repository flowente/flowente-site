type Prodotto = { nome: string; perChi: string; cosaOttieni: string };

// Tre prodotti distinti e indipendenti: non sono una scala obbligata e non vanno
// presentati come livelli crescenti. Si entra da quello che serve.
//
// Ogni blocco risponde alle due domande che si fa chi legge, in quest'ordine:
// "parla di me?" e "cosa mi porto a casa?". Invertirle costringe a leggere una
// descrizione tecnica prima di sapere se lo riguarda.
const PRODOTTI: Prodotto[] = [
  {
    nome: "AI Quick Automation",
    perChi:
      "Per aziende che vogliono automatizzare attività specifiche in modo rapido senza cambiare gli strumenti che già usano.",
    cosaOttieni: "Agenti AI, automazioni, skills e integrazioni che riducono il lavoro ripetitivo.",
  },
  {
    nome: "AI Business Platform",
    perChi: "Per chi vuole centralizzare processi, documenti e conoscenza in un unico ambiente intelligente.",
    cosaOttieni:
      "Una piattaforma AI con ricerca sui documenti, knowledge base aziendale, workflow e strumenti di collaborazione.",
  },
  {
    nome: "Private AI Infrastructure",
    perChi: "Per chi ha bisogno di massimo controllo su dati, sicurezza e personalizzazione.",
    cosaOttieni:
      "Un'infrastruttura AI privata, in cloud dedicato o on-premise, con modelli ottimizzati per il tuo contesto.",
  },
];

export function Products() {
  return (
    // Senza titolo visibile la sezione resterebbe anonima per chi naviga a voce:
    // aria-label le dà un nome senza aggiungere testo alla pagina.
    <section className="border-b border-border" aria-label="I tre prodotti">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="grid gap-10 md:gap-0 md:grid-cols-3">
          {PRODOTTI.map((p, i) => (
            <div
              key={p.nome}
              className={`md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l md:border-border"}`}
            >
              <h3 className="font-display font-semibold text-[1.35rem] tracking-[-0.02em]">{p.nome}</h3>

              <p className="font-mono text-[0.66rem] tracking-[0.12em] uppercase text-fg-muted mt-6">Per chi è</p>
              <p className="text-fg-2 text-[0.98rem] mt-2">{p.perChi}</p>

              <p className="font-mono text-[0.66rem] tracking-[0.12em] uppercase text-fg-muted mt-6">Cosa ottieni</p>
              <p className="text-fg-2 text-[0.98rem] mt-2">{p.cosaOttieni}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
