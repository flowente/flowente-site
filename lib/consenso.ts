// Stato del consenso cookie, in un posto solo.
//
// Sta in localStorage e non in un cookie: la preferenza è del browser, non serve
// mandarla al server a ogni richiesta. Conservare la scelta dell'utente è di per
// sé necessario al funzionamento, quindi non richiede a sua volta consenso.
//
// Le categorie sono due, non tre. I cookie tecnici non sono una scelta e non
// hanno un interruttore; quelli di marketing non compaiono perché non ne usiamo:
// mostrare una categoria vuota farebbe credere che ci sia un tracciamento
// pubblicitario da spegnere, e sarebbe falso. Se un giorno servisse, si aggiunge
// qui e si alza VERSIONE.

export type Preferenze = { statistiche: boolean };

// Alzare di uno quando cambia ciò per cui si chiede il consenso: le scelte
// registrate con la versione precedente non valgono più e il banner ricompare.
// Portata a 2 quando la scelta unica è diventata una scelta per categoria.
export const VERSIONE = 2;

const CHIAVE = "flowente:consenso";
export const EVENTO = "flowente:consenso";

type Registrazione = Preferenze & { versione: number; data: string };

export function leggiPreferenze(): Preferenze | null {
  if (typeof window === "undefined") return null;
  try {
    const grezzo = window.localStorage.getItem(CHIAVE);
    if (!grezzo) return null;
    const r = JSON.parse(grezzo) as Registrazione;
    if (r.versione !== VERSIONE) return null;
    return typeof r.statistiche === "boolean" ? { statistiche: r.statistiche } : null;
  } catch {
    // localStorage può essere disabilitato o pieno, e il JSON può essere stato
    // manomesso: in ogni caso si riparte come se la scelta non ci fosse.
    return null;
  }
}

export function salvaPreferenze(p: Preferenze) {
  try {
    const r: Registrazione = { ...p, versione: VERSIONE, data: new Date().toISOString() };
    window.localStorage.setItem(CHIAVE, JSON.stringify(r));
  } catch {
    /* se non si può scrivere, la scelta vale per questa sessione e basta */
  }
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: p }));
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
  return leggiPreferenze()?.statistiche === true;
}
