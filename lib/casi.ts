// video = filmato muto in ciclo che prende il posto della fotografia nella pila
// della hero. Assente = resta l'immagine.
// prodotto = quale delle nostre soluzioni ha risolto il caso. Si legge come una
// firma in fondo alla scheda, nel font del testo e non nel mono: il mono qui
// sarebbe una terza etichetta tecnica dopo l'eyebrow, e ne basta una.
// dettaglio = le righe in piu' che compaiono quando la scheda si apre. Sono
// facoltative: senza, aprendo si vede comunque il testo per intero invece che
// troncato.
export type Caso = { label: string; title: string; text: string; dettaglio?: string; img: string; video?: string; prodotto?: string };

// Sorgente unica dei casi: li usano la sezione in /servizi e la pila di schede
// nella hero. Stavano dentro UseCases, ma da quando compaiono in due punti una
// copia sola evita che le due versioni divergano alla prossima revisione del copy.
//
// Il titolo della sezione dice "Case Study": i casi senza nome restano esempi di
// applicazione — nessun cliente, nessuna percentuale, nessun risultato dichiarato
// — e finché è così non affermano nulla di falso. Quelli con un nome (GymOS) sono
// lavori veri, e il nome si può dire perché il prodotto è nostro.
//
// Il limite resta dov'era: si può nominare un progetto che esiste, non si possono
// attribuire numeri o risultati che nessuno ha misurato, né il nome di un cliente
// che non ha dato il consenso.
//
// FOTO — i file in /public/media/casi sono SEGNAPOSTO, tranne il quarto.
// Quando arrivano gli scatti veri basta cambiare l'estensione qui sotto (.svg -> .jpg).
// Brief di scatto: CONTENT.md §13. Le foto sono d'ambiente, mai di clienti:
// per questo l'alt resta vuoto e nessun nome o azienda va mai associato.
// I nomi dei file non corrispondono più ai titoli: erano stati scelti sui casi
// precedenti. Si sistemano quando arrivano gli scatti veri.
export const CASI: Caso[] = [
  {
    label: "Dati storici",
    title: "Agente di ricerca sui dati storici aziendali.",
    text: "Anni di commesse, preventivi e ordini in sistemi che ormai nessuno interroga. Si chiede in italiano — quanto ha reso quella linea, quali clienti sono fermi da un anno — e la risposta arriva con il riferimento al dato da cui è presa.",
    img: "/media/casi/01-archivio.svg",
  },
  {
    // GymOS e' un progetto vero e ha un nome: e' il primo caso che esce dalla
    // regola scritta qui sopra. Il nome si puo' dire perche' il prodotto e'
    // nostro; restano fuori numeri e risultati, che non sono stati misurati.
    label: "Gestionale palestra",
    title: "Gestionale per palestra: prenotazioni, controllo ingressi e pianificazione della giornata.",
    text: "Serviva un gestionale che tenesse conto delle diverse dinamiche di una palestra — prenotazioni, pagamenti, raccolta dati — e insieme una guida intelligente che accompagnasse il lavoro quotidiano dello staff.",
    // Fotogramma estratto dal filmato del primo caso: qui serve un'immagine, non
    // un altro video, e un fermo immagine vero regge meglio di un segnaposto.
    img: "/media/casi/quick-automation-frame.jpg",
    prodotto: "AI Automation",
  },
  {
    label: "Rendicontazione",
    title: "Skills e plugin di rendicontazione periodica.",
    text: "Il rapporto che qualcuno rimette insieme a mano ogni mese. Serve a vedere dove va il budget, dove il lavoro si ferma e quali canali di acquisizione rendono meno di quanto costano — le tre cose che di solito si scoprono tardi.",
    img: "/media/casi/03-stesure.svg",
    video: "/media/testimonianze/business-platform.mp4",
  },
  {
    label: "Costi di esercizio",
    title: "Un modello aziendale con le skills che tagliano i costi.",
    text: "Le skills fissano il modo in cui si fanno le richieste: il modello riceve ogni volta solo il contesto che serve, invece dell'archivio intero. A parità di lavoro svolto, il costo per richiesta scende in modo netto.",
    img: "/media/casi/04-risposte.jpg",
    video: "/media/testimonianze/quick-automation.mp4",
  },
];

// L'ancora della sezione in /servizi: la hero ci rimanda, il footer pure.
export const ANCORA_CASI = "/servizi#casi-duso";
