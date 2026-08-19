// Email di conferma a chi compila il form. Non è marketing: è una ricevuta.
// Deve dire tre cose e fermarsi — "è arrivato", "cosa succede adesso", "cosa
// ci hai scritto" — perché chi la riceve ha appena finito di scrivere e non
// vuole leggere altro.
//
// PERCHÉ GEORGIA E NON ERODE/RECIA. I client di posta non caricano i webfont:
// Gmail li ignora, Outlook desktop pure. Georgia è il fallback dichiarato in
// DESIGN.md §5 per entrambi, ed è installata ovunque da vent'anni. Quindi
// l'email non "sbaglia" font: usa la seconda scelta del sistema, che è una
// scelta e non un ripiego. Il mono dell'etichetta sopra la citazione è generico
// per lo stesso motivo.
//
// PERCHÉ TABELLE E STILI IN LINEA. Outlook rende l'HTML con il motore di Word:
// niente flexbox, niente grid, e i fogli di stile <style> vengono ignorati da
// diversi client. È brutto da scrivere e funziona ovunque, che è quello che
// serve a una ricevuta.

const INK = "#0B0B0C";
const TESTO = "#3A3A40";
const MUTED = "#8A8A92";
const BORDO = "#D9D9D6";
const CARTA = "#FBFBF9";
const SUPERFICIE = "#FFFFFF";
const SUPERFICIE2 = "#F5F5F2";
const ACCENTO = "#2540FF";

// Indirizzo assoluto e in chiaro: se un domani il dominio cambia, questa e'
// l'unica riga da toccare. Il file sta in public/media/email/ del sito, quindi
// vive e muore con i deploy — nessun servizio esterno da tenere acceso.
const LOGO = "https://www.flowente.com/media/email/logo-2x.png";

const SERIF = "Georgia, 'Times New Roman', serif";
const MONO = "'Courier New', Courier, monospace";

export type DatiConferma = {
  nome: string;
  messaggio: string;
  azienda?: string;
};

function esc(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Il nome arriva da un campo libero: se qualcuno ci scrive dentro un indirizzo
// o una frase intera, in apertura ci finirebbe tutto. Prendiamo la prima parola
// e la lasciamo com'è — non la capitalizziamo, perché "LUCA" scritto così
// magari è voluto.
function primoNome(v: string) {
  const p = v.trim().split(/\s+/)[0] || "";
  return p.length > 24 ? "" : p;
}

export function confermaOggetto() {
  return "Abbiamo ricevuto il tuo messaggio";
}

export function confermaTesto({ nome, messaggio, azienda }: DatiConferma) {
  const n = primoNome(nome);
  return [
    "PERFETTO, CI È ARRIVATO TUTTO.",
    "",
    n
      ? `Grazie ${n} per averci scritto, ti risponderemo al più presto.`
      : "Grazie per averci scritto, ti risponderemo al più presto.",
    "Hai fatto il primo passo. Al resto ci pensiamo insieme.",
    "",
    "— Quello che ci hai scritto —",
    azienda ? `Azienda: ${azienda}` : null,
    "",
    messaggio,
    "",
    "—",
    "Flowente — studio di AI applicata, Milano",
    "hello@flowente.com · www.flowente.com",
  ]
    .filter((r) => r !== null)
    .join("\n");
}

export function confermaHtml({ nome, messaggio, azienda }: DatiConferma) {
  const n = primoNome(nome);
  const saluto = n
    ? `Grazie ${esc(n)} per averci scritto, ti risponderemo al più presto.`
    : "Grazie per averci scritto, ti risponderemo al più presto.";
  // Gli a capo scritti nel form vanno tenuti: chi ha impaginato il proprio
  // messaggio non deve ritrovarselo in un blocco unico.
  const corpo = esc(messaggio).replace(/\r?\n/g, "<br />");

  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light" />
<title>${confermaOggetto()}</title>
<style>
  /* Outlook desktop ignora questo blocco, ma li' la finestra e' sempre larga
     ~600px e il titolo ci sta comunque. Serve per i telefoni. */
  @media only screen and (max-width: 480px) {
    .scheda { padding: 32px 24px !important; }
    .titolo { font-size: 30px !important; letter-spacing: -0.8px !important; }
    .apertura { font-size: 16px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${CARTA};">
<!-- Anteprima nella lista dei messaggi, poi nascosta: senza, i client mostrano
     le prime parole del markup. -->
<div style="display:none;font-size:1px;color:${CARTA};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
  Il tuo messaggio è arrivato. Lo leggiamo noi, e ti rispondiamo di persona.
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${CARTA};">
  <tr>
    <td align="center" style="padding:40px 20px;">

      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;">

        <!-- Marchio. Immagine e non SVG: Gmail elimina l'SVG. E' il lockup vero,
             marchio in Flow Blue e wordmark in Erode, reso al doppio e servito a
             meta' misura perche' sugli schermi retina un PNG 1x si sgrana.
             L'indirizzo e' assoluto: dentro un'email non esistono percorsi
             relativi. L'alt fa il suo lavoro quando le immagini sono bloccate,
             che nella posta e' il caso normale e non l'eccezione. -->
        <tr>
          <td style="padding:0 0 32px 0;line-height:0;">
            <a href="https://www.flowente.com" style="text-decoration:none;">
              <img src="${LOGO}" width="177" height="23" alt="flowente"
                   style="display:block;width:177px;height:23px;border:0;outline:none;text-decoration:none;font-family:${SERIF};font-size:18px;color:${INK};" />
            </a>
          </td>
        </tr>

        <!-- Scheda -->
        <tr>
          <td class="scheda" style="background:${SUPERFICIE};border:1px solid ${BORDO};border-radius:14px;padding:48px 40px;">

            <h1 class="titolo" style="margin:0 0 24px 0;font-family:${SERIF};font-size:38px;line-height:1.06;letter-spacing:-1.1px;font-weight:600;color:${INK};text-align:center;">Perfetto, ci è arrivato tutto.</h1>

            <p class="apertura" style="margin:0 0 38px 0;font-family:${SERIF};font-size:17px;line-height:1.6;color:${TESTO};text-align:center;">${saluto}<br />Hai fatto il primo passo. Al resto ci pensiamo insieme.</p>

            <!-- Copia di quello che ha scritto: serve a chi non tiene una copia
                 dei form che compila, cioè quasi tutti. -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SUPERFICIE2};border-radius:10px;">
              <tr>
                <td style="padding:24px 26px;">
                  <p style="margin:0 0 14px 0;font-family:${MONO};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${MUTED};">Quello che ci hai scritto</p>
                  ${
                    azienda
                      ? `<p style="margin:0 0 12px 0;font-family:${SERIF};font-size:15px;line-height:1.5;color:${MUTED};">${esc(azienda)}</p>`
                      : ""
                  }
                  <p style="margin:0;font-family:${SERIF};font-size:16px;line-height:1.65;color:${TESTO};">${corpo}</p>
                </td>
              </tr>
            </table>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="padding:34px 0 0 0;border-top:1px solid ${BORDO};"></td></tr>
            </table>

            <p style="margin:0;font-family:${SERIF};font-size:17px;line-height:1.6;color:${TESTO};">A presto,<br />Flowente</p>

          </td>
        </tr>

        <!-- Piede -->
        <tr>
          <td style="padding:28px 40px 0 40px;">
            <p style="margin:0 0 6px 0;font-family:${SERIF};font-size:14px;line-height:1.6;color:${MUTED};">Flowente — studio di AI applicata, Milano</p>
            <p style="margin:0;font-family:${SERIF};font-size:14px;line-height:1.6;color:${MUTED};">
              <a href="mailto:hello@flowente.com" style="color:${MUTED};text-decoration:underline;">hello@flowente.com</a>
              &nbsp;·&nbsp;
              <a href="https://www.flowente.com" style="color:${MUTED};text-decoration:underline;">www.flowente.com</a>
              &nbsp;·&nbsp;
              <a href="https://www.flowente.com/privacy" style="color:${MUTED};text-decoration:underline;">Privacy</a>
            </p>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>
</body>
</html>`;
}
