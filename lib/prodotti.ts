import { marks, type Mark } from "./marks";
import type { ShapeKind } from "@/components/AccentShape";

// NOMI E INDIRIZZI NON COINCIDONO PIU', ed e' voluto. I prodotti si chiamano
// AI Pilota, AI Automation e Private AI; gli slug sono rimasti quelli di prima
// (quick-automation, business-platform, private-ai-infrastructure) perche'
// rinominarli rompe ogni link gia' condiviso e quanto Google ha indicizzato.
// Si cambiano il giorno che si mettono in piedi i redirect dai vecchi.
//
// Sorgente unica dei tre prodotti: la usano le schede in /servizi, le pagine di
// dettaglio e la tendina della barra in alto. Una copia sola evita che i tre
// punti dicano cose diverse alla prossima revisione del copy.
//
// prezzo a null = non si espone una cifra e la scheda mostra "Contatta il team".
// Al momento vale per tutti e tre: il perimetro di un progetto cambia troppo da
// cliente a cliente perché un numero in vetrina sia una promessa mantenibile.
// Il tipo Prezzo e il ramo che lo stampa restano al loro posto: il giorno che un
// listino c'è, si riempie questo campo e la scheda torna a mostrarlo da sola.
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
    nome: "AI Pilota",
    // Qualche parola in piu' della scheda in home: li' e' un elenco da scorrere,
    // qui chi legge sta gia' scegliendo e la riga in piu' gli serve.
    descrizione:
      "Una prima automazione concreta e misurabile per ridurre un'attività manuale ripetitiva, partendo da un flusso solo.",
    sottotitolo: "La prima automazione, misurata",
    prezzo: null,
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
    cta: "Scopri AI Pilota",
    mark: marks.onda,
    shape: "circle",
  },
  {
    slug: "business-platform",
    nome: "AI Automation",
    descrizione:
      "Agenti AI e automazioni avanzate per collegare dati, documenti e strumenti nei processi più complessi, dove si susseguono diversi task.",
    sottotitolo: "Agenti e processi collegati",
    prezzo: null,
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
    cta: "Esplora AI Automation",
    mark: marks.flusso,
    shape: "square",
  },
  {
    slug: "private-ai-infrastructure",
    nome: "Private AI",
    descrizione:
      "Modelli AI privati, configurati sui dati e sulle regole della tua azienda, che restano dentro il perimetro che decidi tu.",
    sottotitolo: "Modelli e dati nel tuo perimetro",
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
    cta: "Scala con Private AI",
    mark: marks.lucchetto,
    shape: "triangle",
  },
];

export const percorso = (slug: string) => `/servizi/${slug}`;
