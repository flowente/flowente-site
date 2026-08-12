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

// Il caso collegato al prodotto. NON è una testimonianza: non c'è una frase fra
// virgolette, non c'è un nome, non c'è un'azienda. Titolo e testo vengono dai
// casi d'uso già pubblicati in /servizi, che descrivono un tipo di problema e
// come lo affrontiamo. Il giorno che un cliente vero parla, le sue parole e il
// suo nome prendono il posto di questi due campi senza toccare il layout.
//
// video = percorso in /public/media/testimonianze. Assente = la sezione resta a
// una colonna, senza riquadro vuoto.
export type Caso = { titolo: string; testo: string; video?: string };

export type Prodotto = {
  slug: string;
  nome: string;
  descrizione: string;
  // Riga breve per la tendina della barra: là lo spazio è quello di un menu, e
  // la descrizione lunga occuperebbe quattro righe per voce.
  sottotitolo: string;
  perChi: string;
  prezzo: Prezzo | null;
  caso: Caso;
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
    caso: {
      titolo: "Skills e plugin di rendicontazione periodica.",
      testo:
        "Il rapporto che qualcuno rimette insieme a mano ogni mese. Serve a vedere dove va il budget, dove il lavoro si ferma e quali canali di acquisizione rendono meno di quanto costano — le tre cose che di solito si scoprono tardi.",
      video: "/media/testimonianze/quick-automation.mp4",
    },
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
    caso: {
      titolo: "Agente di ricerca sui dati storici aziendali.",
      testo:
        "Anni di commesse, preventivi e ordini in sistemi che ormai nessuno interroga. Si chiede in italiano — quanto ha reso quella linea, quali clienti sono fermi da un anno — e la risposta arriva con il riferimento al dato da cui è presa.",
    },
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
    caso: {
      titolo: "Un modello aziendale con le skills che tagliano i costi.",
      testo:
        "Le skills fissano il modo in cui si fanno le richieste: il modello riceve ogni volta solo il contesto che serve, invece dell'archivio intero. A parità di lavoro svolto, il costo per richiesta scende in modo netto.",
    },
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
