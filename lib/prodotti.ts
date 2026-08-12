import { marks, type Mark } from "./marks";
import type { ShapeKind } from "@/components/AccentShape";

// Sorgente unica dei tre prodotti: la usano le schede in /servizi, le pagine di
// dettaglio e la tendina della barra in alto. Una copia sola evita che i tre
// punti dicano cose diverse alla prossima revisione del copy.
//
// prezzo a null = non si espone una cifra e si rimanda al contatto: sul terzo
// prodotto la spesa dipende dall'infrastruttura, e un numero secco sarebbe una
// promessa che nessuno può mantenere senza aver visto i server.
export type Prezzo = { importo: string; cadenza: string };

export type Prodotto = {
  slug: string;
  nome: string;
  descrizione: string;
  // Riga breve per la tendina della barra: là lo spazio è quello di un menu, e
  // la descrizione lunga occuperebbe quattro righe per voce.
  sottotitolo: string;
  perChi: string;
  prezzo: Prezzo | null;
  esempi: string[];
  cta: string;
  mark: Mark;
  shape: ShapeKind;
};

export const PRODOTTI: Prodotto[] = [
  {
    slug: "quick-automation",
    nome: "Quick Automation",
    descrizione:
      // Tre righe come le altre due descrizioni: "manuali" è caduto perché già
      // implicito in "ripetitive", ed era la parola che faceva la quarta riga.
      "Automatizza attività ripetitive e passaggi tra strumenti, togliendo il lavoro che si ripete ogni settimana.",
    sottotitolo: "Automazioni e agenti, senza cambiare strumenti",
    perChi:
      "Per aziende che vogliono automatizzare attività specifiche in modo rapido, senza cambiare gli strumenti che già usano.",
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
    slug: "business-platform",
    nome: "Business Platform",
    descrizione:
      "Costruisce piattaforme e agenti operativi su misura per gestire dati, clienti e flussi in un ambiente unico.",
    sottotitolo: "Un unico ambiente per processi e dati",
    perChi: "Per chi vuole centralizzare processi, documenti e conoscenza in un unico ambiente intelligente.",
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
    slug: "private-ai-infrastructure",
    nome: "Private AI Infrastructure",
    descrizione:
      "Infrastruttura AI privata per usare modelli e dati aziendali con controllo, sicurezza e governance.",
    sottotitolo: "Modelli e dati sui tuoi server",
    perChi: "Per chi ha bisogno di massimo controllo su dati, sicurezza e personalizzazione.",
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
    // nel bottone della scheda: andava a capo per tre pixel.
    cta: "Scala con Private AI",
    mark: marks.lucchetto,
    shape: "triangle",
  },
];

export const percorso = (slug: string) => `/servizi/${slug}`;
