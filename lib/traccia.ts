import { statistichePermesse } from "./consenso";

// Invio di un evento a PostHog dal resto del sito.
//
// Passa dallo stesso cancello del resto: se il consenso non c'è, non succede
// niente e la libreria non viene nemmeno caricata. Chiamarla è sempre sicuro.
//
// REGOLA: qui dentro non entrano mai dati che identificano una persona — niente
// nome, email, azienda, testo del messaggio. Il consenso raccolto dal banner è
// per statistiche d'uso aggregate; mandare a PostHog i dati di un contatto
// sarebbe un'altra finalità, con un'altra base giuridica, e smentirebbe sia la
// privacy policy sia il banner. I contatti viaggiano solo verso /api/contact.
export async function traccia(evento: string, proprieta?: Record<string, string | number | boolean>) {
  if (!statistichePermesse()) return;
  try {
    const { default: posthog } = await import("posthog-js");
    // Se il consenso è arrivato ma init non è ancora passato, capture accoda.
    posthog.capture(evento, proprieta);
  } catch {
    /* la misurazione non deve mai far fallire l'azione dell'utente */
  }
}
