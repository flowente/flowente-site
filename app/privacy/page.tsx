import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Flowente",
  description: "Come Flowente tratta i tuoi dati personali.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="[gg mese 2026]">
      <p className="muted">
        Bozza da validare da un professionista GDPR prima della pubblicazione. Sostituire i campi tra parentesi quadre.
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        Il titolare del trattamento è [Nome e cognome / Ragione sociale], con sede in [indirizzo], P.IVA […], email{" "}
        <a href="mailto:ciao@flowente.com">ciao@flowente.com</a>.
      </p>

      <h2>Quali dati raccogliamo</h2>
      <ul>
        <li>
          <strong>Dati dal form contatti:</strong> nome, email, azienda (facoltativa) e il messaggio che scrivi.
        </li>
        <li>
          <strong>Dati di navigazione (aggregati/anonimi):</strong> raccolti tramite uno strumento di analytics
          rispettoso della privacy. Non ti profiliamo e non ti identifichiamo tramite questi dati.
        </li>
      </ul>
      <p>Non raccogliamo categorie particolari di dati e non chiediamo più informazioni di quelle necessarie a risponderti.</p>

      <h2>Perché li trattiamo</h2>
      <ul>
        <li>
          <strong>Rispondere alle tue richieste</strong> e organizzare un primo contatto. Base giuridica: misure
          precontrattuali su tua richiesta e/o legittimo interesse (art. 6.1.b / 6.1.f GDPR).
        </li>
        <li>
          <strong>Migliorare il sito</strong> tramite statistiche aggregate e anonime. Base giuridica: legittimo
          interesse (art. 6.1.f GDPR).
        </li>
      </ul>
      <p>Non usiamo i tuoi dati per newsletter o marketing, se non con un tuo consenso separato ed esplicito.</p>

      <h2>Con chi li condividiamo</h2>
      <p>
        I dati non vengono venduti né ceduti. Possono essere trattati da fornitori tecnici in qualità di responsabili del
        trattamento: hosting/deploy [Railway / provider, regione], invio email [Resend / provider, regione], analytics
        [Plausible / Umami / provider, regione]. [Indicare eventuali trasferimenti extra-UE e relative garanzie.]
      </p>

      <h2>Per quanto tempo li conserviamo</h2>
      <p>
        Conserviamo i messaggi ricevuti dal form per il tempo necessario a gestire la richiesta e gli eventuali contatti
        successivi, e comunque non oltre [es. 24 mesi] dall&apos;ultimo contatto, salvo obblighi di legge.
      </p>

      <h2>I tuoi diritti</h2>
      <p>
        Puoi chiedere accesso, rettifica, cancellazione, limitazione o portabilità dei tuoi dati, e opporti al
        trattamento basato sul legittimo interesse, scrivendo a <a href="mailto:ciao@flowente.com">ciao@flowente.com</a>.
        Hai diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).
      </p>

      <h2>Modifiche</h2>
      <p>Possiamo aggiornare questa informativa; la data in alto indica l&apos;ultima revisione.</p>
    </LegalPage>
  );
}
