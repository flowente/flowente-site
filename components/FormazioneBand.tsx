import { Button } from "./Button";

// Stessa impaginazione della sezione "Manifesto / In cosa crediamo" in
// /chi-siamo: due colonne 0.9fr / 1.1fr, etichetta mono e titolo a sinistra,
// paragrafo a destra, filetto sotto. Copiata a mano e non estratta in un
// componente condiviso perche' le due sezioni non devono cambiare insieme:
// quella e' un manifesto, questa vende una cosa.
//
// Il titolo pero' NON e' quello del Manifesto: clamp(2rem,4vw,3rem) come Numeri
// e ServiceCards, invece del 2.6rem di /chi-siamo. Qui la fascia sta in mezzo
// ad altri due titoli di quella misura, e uno piu' piccolo si leggeva come una
// sottosezione dei numeri sopra invece che come una sezione sua.
//
// Nessuna scheda e nessun elenco puntato: sta sopra la fila dei tre riquadri e
// deve leggersi come un'altra cosa, non come il primo di quattro.
//
// SUL 58,6%. La fonte e' l'ISTAT, "Imprese e ICT — Anno 2025", la stessa dei
// numeri in home. Il dato dice: fra le imprese che hanno VALUTATO l'IA e non
// l'hanno poi adottata, il 58,6% indica la mancanza di competenze come primo
// ostacolo. NON dice che il 58% di chi valuta l'AI non la adotta — quello
// sarebbe un altro numero, e non e' pubblicato. Il confronto con il costo
// (43,0%) viene dalla stessa tabella, ed e' il motivo per cui la riga puo'
// dire "piu' del costo" senza tirare a indovinare.
export function FormazioneBand() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Formazione</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Si parte da qui.
          </h2>
        </div>
        <div className="max-w-[560px]">
          <p className="text-fg-2 text-[1.06rem]">
            Fra chi valuta l&apos;AI e poi non la adotta, il 58,6% indica la mancanza di competenze — più del costo,
            che si ferma al 43%. Il team Flowente vi accompagna nella comprensione e utilizzo efficace degli
            strumenti.
          </p>
          <div className="mt-7">
            <Button variant="ghost" href="/contatti">
              Scopri la formazione
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
