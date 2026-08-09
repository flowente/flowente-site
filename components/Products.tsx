type Product = { title: string; text: string };

// Il catalogo di cosa si costruisce, non i tre pilastri: qui stanno le cose che
// il cliente riceve. Va tenuto vero — si aggiunge solo ciò che sappiamo consegnare.
//
// "Skills" e "plugin" sono i nomi che usa chi lavora con questi strumenti, ma per
// chi compra non vogliono dire niente: la descrizione sotto deve tradurli senza
// che serva sapere il gergo. Stessa regola per cui "inferenza" è uscita dal sito.
const PRODUCTS: Product[] = [
  {
    title: "Applicativi su misura",
    text: "L'applicazione che serve al lavoro, collegata ai dati e ai programmi già in uso. Il modello che ci sta sotto resta sostituibile.",
  },
  {
    title: "Agenti",
    text: "Procedure che si svolgono da sole: leggono, decidono entro i limiti che hai fissato e si fermano dove serve una tua approvazione.",
  },
  {
    title: "Skills",
    text: "Competenze specifiche aggiunte all'assistente — il tuo metodo, i tuoi documenti, il tuo modo di scrivere. Smette di rispondere in generale.",
  },
  {
    title: "Plugin",
    text: "Estensioni per gli strumenti che il team apre già ogni giorno, così l'AI sta dentro il lavoro invece che in una scheda del browser a parte.",
  },
  {
    title: "Ricerca sui documenti",
    text: "Risposte prese dai tuoi archivi invece che dalla memoria del modello, con il documento di origine sempre risalibile.",
  },
  {
    title: "Modello privato",
    text: "Il modello installato sui tuoi server. Domande, documenti e risposte non escono dal perimetro aziendale.",
  },
];

export function Products() {
  return (
    // Senza titolo visibile la sezione resterebbe anonima per chi naviga a voce:
    // aria-label le dà un nome senza aggiungere testo alla pagina.
    <section className="border-b border-border" aria-label="Cosa costruiamo">
      <div className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-20">
        <div className="grid gap-9 md:gap-0 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.title}
              className={[
                "md:px-8",
                // Filetto verticale fra le colonne, non prima della prima.
                i % 3 === 0 ? "md:pl-0" : "md:border-l md:border-border",
                // Seconda riga: filetto orizzontale e respiro simmetrico sopra e
                // sotto, altrimenti le due file si toccherebbero da un lato solo.
                i < 3 ? "md:pb-11" : "md:border-t md:border-border md:pt-11",
              ].join(" ")}
            >
              <h3 className="font-display font-semibold text-[1.35rem] tracking-[-0.02em]">{p.title}</h3>
              <p className="text-fg-2 text-[0.98rem] mt-2.5 max-w-[300px]">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
