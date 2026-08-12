import { Button } from "./Button";
import { MarkBadge } from "./MarkBadge";
import { marks } from "@/lib/marks";
import type { Mark } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

// prezzo a null = non si espone una cifra e si rimanda al contatto: sul terzo
// prodotto la spesa dipende dall'infrastruttura, e un numero secco sarebbe una
// promessa che nessuno può mantenere senza aver visto i server.
type Prezzo = { importo: string; cadenza: string };
type Prodotto = {
  nome: string;
  descrizione: string;
  prezzo: Prezzo | null;
  esempi: string[];
  cta: string;
  mark: Mark;
  shape: ShapeKind;
};

// Tre prodotti distinti e indipendenti. Nessuna scheda è messa in evidenza — né
// bordo più marcato né etichetta "consigliato": nei listini a livelli serve a
// indicare il piano da comprare, ma qui non c'è una scala e suggerirne una
// direbbe il contrario di quello che i prodotti sono.
//
// I segni riprendono quelli delle schede in home: onda per l'automazione, flusso
// per la piattaforma, lucchetto per l'infrastruttura privata. Chi arriva dalla
// home ritrova lo stesso segno sullo stesso argomento.
const PRODOTTI: Prodotto[] = [
  {
    nome: "Quick Automation",
    descrizione:
      "Automatizza attività ripetitive e passaggi manuali tra strumenti, eliminando lavoro operativo che si ripete ogni settimana.",
    prezzo: { importo: "€199", cadenza: "al mese" },
    esempi: [
      "Email marketing automation",
      "Weekly report automatici",
      "P&L automation",
      "WhatsApp automation",
      "Follow-up automatici",
      "Aggiornamento CRM e database",
    ],
    cta: "Scopri Quick Automation",
    mark: marks.onda,
    shape: "circle",
  },
  {
    nome: "Business Platform",
    descrizione:
      "Costruisce piattaforme e agenti operativi su misura per gestire dati, clienti e flussi in un ambiente unico.",
    prezzo: { importo: "€499", cadenza: "al mese" },
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
    mark: marks.flusso,
    shape: "square",
  },
  {
    nome: "Private AI Infrastructure",
    descrizione:
      "Infrastruttura AI privata per usare modelli e dati aziendali con controllo, sicurezza e governance.",
    prezzo: null,
    esempi: [
      "LLM privati",
      "Knowledge base aziendale protetta",
      "Controllo accessi e permessi",
      "Data governance",
      "Integrazione con sistemi interni",
      "Monitoring e compliance",
      "Deploy sicuro di modelli",
    ],
    // "Scala con Private AI Infrastructure" misura 248px contro i 245 disponibili
    // nel bottone a 1280: andava a capo per tre pixel, e sotto quella larghezza
    // il divario cresce. Accorciato all'ultima parola che sta su una riga sola;
    // il nome del prodotto e' comunque scritto sopra, in grande.
    cta: "Scala con Private AI",
    mark: marks.lucchetto,
    shape: "triangle",
  },
];

// Spunta disegnata a mano libera ma ferma: qui non serve il tremolio dei Flow
// Mark, che a venti ripetizioni diventerebbe rumore. Resta un tocco di accento.
function Spunta() {
  return (
    <svg viewBox="0 0 16 16" className="h-[14px] w-[14px] mt-[5px] shrink-0 text-accent" aria-hidden="true">
      <path
        d="M2.5 8.6 6 12l7.5-8.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Products() {
  return (
    // Senza titolo visibile la sezione resterebbe anonima per chi naviga a voce:
    // aria-label le dà un nome senza aggiungere testo alla pagina.
    <section className="border-b border-border" aria-label="I tre prodotti">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        {/* Niente items-start: le schede si allungano tutte all'altezza della più
            alta, e l'elenco in fondo assorbe la differenza. */}
        <div className="grid gap-5 md:grid-cols-3">
          {PRODOTTI.map((p) => (
            <div
              key={p.nome}
              className="rounded-[16px] border border-border bg-surface flex flex-col overflow-hidden"
            >
              <div className="p-7 flex flex-col">
                <div className="h-[104px] flex items-center justify-start">
                  <MarkBadge mark={p.mark} shape={p.shape} boxW={120} boxH={100} shapeSize={96} markW={92} markH={63} />
                </div>
                <h3 className="font-display font-semibold text-[1.35rem] tracking-[-0.02em] mt-2">{p.nome}</h3>
                {/* Altezze minime su descrizione e area del bottone: senza, il
                    filetto cadrebbe a un'altezza diversa in ogni scheda, perché le
                    descrizioni hanno lunghezze diverse e l'ultima azione va a capo
                    su due righe. Sono i due punti che tengono allineate le tre
                    schede senza costringere il testo a essere della stessa misura. */}
                <p className="text-fg-2 text-[0.96rem] mt-3 min-h-[6.75rem]">{p.descrizione}</p>

                {/* Il blocco del prezzo ha un'altezza minima come gli altri: la
                    cifra e il rimando al contatto hanno ingombri diversi, e senza
                    questo il filetto tornerebbe a cadere a tre altezze diverse. */}
                <div className="mt-6 min-h-[52px] flex items-baseline gap-2.5">
                  {p.prezzo ? (
                    <>
                      <span className="font-display font-semibold text-[2.2rem] tracking-[-0.03em] leading-none">
                        {p.prezzo.importo}
                      </span>
                      <span className="text-fg-muted text-[0.88rem]">{p.prezzo.cadenza}</span>
                    </>
                  ) : (
                    // Nel corpo del testo, non nel corpo della cifra: qui non c'è un
                    // numero da confrontare, e scriverlo grande fingerebbe che ci sia.
                    <a
                      href="/contatti"
                      className="text-[1.05rem] text-fg underline underline-offset-4 hover:text-fg-muted transition-colors inline-flex items-center gap-2"
                    >
                      Contatta il team
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>

                <div className="mt-6 min-h-[64px]">
                  {/* !whitespace-normal: .btn impone nowrap per la barra in alto, e
                      qui "Approfondisci Private AI Infrastructure" sfonderebbe la
                      scheda. La regola di .btn vince sulle utility, serve il bang. */}
                  <Button
                    href="/contatti"
                    className="w-full justify-center text-center !whitespace-normal"
                  >
                    {p.cta}
                  </Button>
                </div>
              </div>

              <div className="border-t border-border p-7 grow">
                <ul className="space-y-2.5">
                  {p.esempi.map((e) => (
                    <li key={e} className="flex gap-2.5 text-[0.94rem] text-fg-2">
                      <Spunta />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
