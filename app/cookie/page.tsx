import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — Flowente",
  description: "Quali cookie usa il sito Flowente. Puntiamo a un sito il più possibile senza tracciamento.",
};

export default function Cookie() {
  return (
    <LegalPage title="Cookie Policy" updated="[gg mese 2026]">
      <p className="muted">
        Bozza da validare e da compilare con i cookie realmente presenti dopo il build. Sostituire i campi tra parentesi
        quadre.
      </p>

      <h2>In breve</h2>
      <p>
        Flowente cerca di rispettare la tua privacy anche nella pratica, non solo a parole. Per questo puntiamo a un sito
        il più possibile senza cookie di tracciamento.
      </p>

      <h2>Cookie tecnici (necessari)</h2>
      <p>
        Usiamo solo i cookie/tecnologie necessari a far funzionare il sito (es. preferenze di base, sicurezza). Non
        richiedono consenso.
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
            <td>[es. preferenze]</td>
            <td>Ricordare impostazioni di base</td>
            <td>[sessione / X mesi]</td>
            <td>Tecnico</td>
          </tr>
        </tbody>
      </table>
      <p className="muted">
        Compila la tabella con i cookie realmente presenti dopo il build. Se non ce ne sono, dichiaralo.
      </p>

      <h2>Statistiche (analytics)</h2>
      <p>
        Per capire cosa funziona nel sito usiamo [Plausible / Umami / …], uno strumento di analytics rispettoso della
        privacy (senza cookie, con IP anonimizzati, dati aggregati). In questa configurazione, di norma, non è necessario
        un banner di consenso. [Da confermare in base al tool e alla configurazione effettiva.]
      </p>

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
