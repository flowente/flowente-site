import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — Flowente",
  description: "Quali cookie usa il sito Flowente. Puntiamo a un sito il più possibile senza tracciamento.",
};

export default function Cookie() {
  return (
    <LegalPage title="Cookie Policy" updated="[gg mese 2026]">
      <p className="muted">Bozza da validare. Il contenuto rispecchia ciò che il sito fa davvero oggi.</p>

      <h2>In breve</h2>
      <p>
        Flowente cerca di rispettare la tua privacy anche nella pratica, non solo a parole. Per questo puntiamo a un sito
        il più possibile senza cookie di tracciamento.
      </p>

      <h2>Cookie tecnici (necessari)</h2>
      <p>
        Oggi il sito <strong>non installa cookie</strong>. L&apos;unica cosa che salviamo nel tuo browser è la scelta
        che fai sul banner: senza, dovremmo richiedertela a ogni pagina. Conservare la tua decisione è necessario al
        funzionamento e non richiede a sua volta consenso.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Finalità</th>
            <th>Durata</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>flowente:consenso</td>
            <td>Ricordare se hai accettato o rifiutato le statistiche</td>
            <td>Finché non la cancelli o non cambi scelta</td>
            <td>Archiviazione locale (non è un cookie, non viene inviata al server)</td>
          </tr>
        </tbody>
      </table>

      <h2>Statistiche (analytics)</h2>
      <p>
        Per capire quali pagine servono davvero usiamo <strong>PostHog</strong>, sull&apos;infrastruttura europea. Parte
        solo se accetti: finché non lo fai, lo script di PostHog non viene nemmeno scaricato dal tuo browser — quindi
        nessun cookie e nessun indirizzo IP raggiungono il fornitore.
      </p>
      <p>
        Se accetti, PostHog installa i propri cookie per riconoscere le visite dello stesso browser e non contarle più
        volte. Non registriamo i singoli clic e non creiamo profili di visitatori anonimi.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Finalità</th>
            <th>Durata</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ph_… (PostHog)</td>
            <td>Distinguere le visite dello stesso browser nelle statistiche</td>
            <td>Fino a 12 mesi</td>
            <td>Statistico — solo con il tuo consenso</td>
          </tr>
        </tbody>
      </table>
      <p className="muted">
        Da verificare alla prima attivazione: nomi e durate esatti dei cookie impostati da PostHog nella configurazione
        effettivamente usata, leggendoli dal browser e non dalla documentazione.
      </p>
      <p>
        Puoi cambiare idea in qualsiasi momento con il comando <strong>Preferenze cookie</strong> in fondo a ogni
        pagina. Rifiutare è facile quanto accettare: stesso posto, un clic.
      </p>

      <h2>Font del sito</h2>
      <p>
        I caratteri tipografici sono serviti da <strong>Google Fonts</strong>. Per scaricarli, il tuo browser si collega
        ai server di Google, che in quel momento riceve il tuo indirizzo IP. Google Fonts non installa cookie e non
        serve a profilarti, ma è un collegamento a un fornitore esterno che avviene su ogni pagina, prima di qualunque
        consenso, perché senza i caratteri il sito non sarebbe leggibile.
      </p>

      <h2>Terze parti</h2>
      <p>
        Questi sono i soggetti esterni che possono installare cookie, riceverli o accedere a dati tramite il sito, con
        il link alla loro informativa.
      </p>
      <table>
        <thead>
          <tr>
            <th>Fornitore</th>
            <th>Cosa fa</th>
            <th>Informativa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PostHog</td>
            <td>Statistiche d&apos;uso, solo con il tuo consenso</td>
            <td>
              <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">
                posthog.com/privacy
              </a>
            </td>
          </tr>
          <tr>
            <td>Google (Fonts)</td>
            <td>Caratteri tipografici; nessun cookie, riceve l&apos;indirizzo IP</td>
            <td>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                policies.google.com/privacy
              </a>
            </td>
          </tr>
          <tr>
            <td>Railway</td>
            <td>Hosting del sito; nessun cookie</td>
            <td>
              <a href="https://railway.com/legal/privacy" target="_blank" rel="noopener noreferrer">
                railway.com/legal/privacy
              </a>
            </td>
          </tr>
          <tr>
            <td>Resend</td>
            <td>Invio delle email del modulo contatti; nessun cookie</td>
            <td>
              <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                resend.com/legal/privacy-policy
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Niente cookie di marketing/terze parti</h2>
      <p>
        Non usiamo cookie pubblicitari, pixel di social network o strumenti di profilazione. Se in futuro cambierà,
        aggiorneremo questa pagina e — se richiesto — chiederemo il tuo consenso con un banner.
      </p>

      <h2>Come gestire i cookie</h2>
      <p>
        Puoi eliminare o bloccare i cookie dalle impostazioni del tuo browser. Bloccare i cookie tecnici potrebbe
        compromettere alcune funzioni del sito.
      </p>
    </LegalPage>
  );
}
