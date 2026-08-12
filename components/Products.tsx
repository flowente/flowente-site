import { Button } from "./Button";

type Prodotto = { nome: string; descrizione: string; esempi: string[]; cta: string };

// Tre prodotti distinti e indipendenti: non sono una scala obbligata e non vanno
// presentati come livelli crescenti. Si entra da quello che serve.
//
// La struttura è nome → cosa fa → esempi concreti → azione. L'elenco di esempi è
// la parte che li rende prodotti e non categorie di servizio: senza, "automatizza
// attività ripetitive" resta una frase che potrebbe scrivere chiunque.
const PRODOTTI: Prodotto[] = [
  {
    nome: "Quick Automation",
    descrizione:
      "Automatizza attività ripetitive e passaggi manuali tra strumenti, eliminando lavoro operativo che si ripete ogni settimana.",
    esempi: [
      "Email marketing automation",
      "Weekly report automatici",
      "P&L automation",
      "WhatsApp automation",
      "Follow-up automatici",
      "Aggiornamento CRM e database",
    ],
    cta: "Scopri Quick Automation",
  },
  {
    nome: "Business Platform",
    descrizione:
      "Costruisce piattaforme e agenti operativi su misura per gestire dati, clienti e flussi in un ambiente unico.",
    esempi: [
      "CRM su misura",
      "Dashboard operative",
      "Portale clienti",
      "Marketing agent",
      "Sales agent",
      "Content creation agent",
      "Workflow e approvazioni interne",
    ],
    cta: "Esplora Business Platform",
  },
  {
    nome: "Private AI Infrastructure",
    descrizione:
      "Infrastruttura AI privata per usare modelli e dati aziendali con controllo, sicurezza e governance.",
    esempi: [
      "LLM privati",
      "Knowledge base aziendale protetta",
      "Controllo accessi e permessi",
      "Data governance",
      "Integrazione con sistemi interni",
      "Monitoring e compliance",
      "Deploy sicuro di modelli",
    ],
    cta: "Approfondisci Private AI Infrastructure",
  },
];

export function Products() {
  return (
    // Senza titolo visibile la sezione resterebbe anonima per chi naviga a voce:
    // aria-label le dà un nome senza aggiungere testo alla pagina.
    <section className="border-b border-border" aria-label="I tre prodotti">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="grid gap-12 md:gap-0 md:grid-cols-3">
          {PRODOTTI.map((p, i) => (
            <div
              key={p.nome}
              className={`flex flex-col md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l md:border-border"}`}
            >
              <h3 className="font-display font-semibold text-[1.35rem] tracking-[-0.02em]">{p.nome}</h3>
              <p className="text-fg-2 text-[0.98rem] mt-4">{p.descrizione}</p>

              <ul className="mt-6 space-y-2.5 grow">
                {p.esempi.map((e) => (
                  <li key={e} className="flex gap-3 text-[0.94rem] text-fg-2">
                    {/* Trattino in accento: il colore vive su piccoli tocchi
                        funzionali, e qui serve a far leggere l'elenco come elenco. */}
                    <span aria-hidden="true" className="text-accent shrink-0 select-none">
                      —
                    </span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button variant="ghost" href="/contatti">
                  {p.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
