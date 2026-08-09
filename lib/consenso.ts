// Stato del consenso cookie, in un posto solo.
//
// Sta in localStorage e non in un cookie: la preferenza è del browser, non serve
// mandarla al server a ogni richiesta. Conservare la scelta dell'utente è di per
// sé necessario al funzionamento, quindi non richiede a sua volta consenso.
//
// Oggi il sito non carica nessuno strumento di statistica: finché non c'è,
// "accettato" non attiva niente. Quando si installerà l'analytics, va montato
// dietro statistichePermesse() — mai prima della scelta.

export type Consenso = "accettato" | "rifiutato";

// Alzare di uno quando cambia ciò per cui si chiede il consenso: le scelte
// registrate con la versione precedente non valgono più e il banner ricompare.
export const VERSIONE = 1;

const CHIAVE = "flowente:consenso";
export const EVENTO = "flowente:consenso";

type Registrazione = { stato: Consenso; versione: number; data: string };

export function leggiConsenso(): Consenso | null {
  if (typeof window === "undefined") return null;
  try {
    const grezzo = window.localStorage.getItem(CHIAVE);
    if (!grezzo) return null;
    const r = JSON.parse(grezzo) as Registrazione;
    if (r.versione !== VERSIONE) return null;
    return r.stato === "accettato" || r.stato === "rifiutato" ? r.stato : null;
  } catch {
    // localStorage può essere disabilitato o pieno, e il JSON può essere stato
    // manomesso: in ogni caso si riparte come se la scelta non ci fosse.
    return null;
  }
}

export function salvaConsenso(stato: Consenso) {
  try {
    const r: Registrazione = { stato, versione: VERSIONE, data: new Date().toISOString() };
    window.localStorage.setItem(CHIAVE, JSON.stringify(r));
  } catch {
    /* se non si può scrivere, la scelta vale per questa sessione e basta */
  }
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: stato }));
}

// Riapre la richiesta: serve perché revocare dev'essere facile quanto accettare.
export function riapriConsenso() {
  try {
    window.localStorage.removeItem(CHIAVE);
  } catch {
    /* niente da fare */
  }
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: null }));
}

export function statistichePermesse(): boolean {
  return leggiConsenso() === "accettato";
}
