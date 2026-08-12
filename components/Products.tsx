import { Button } from "./Button";
import { MarkBadge } from "./MarkBadge";
import { Spunta } from "./Spunta";
import { PRODOTTI, percorso } from "@/lib/prodotti";

// Tre prodotti distinti e indipendenti. Nessuna scheda è messa in evidenza — né
// bordo più marcato né etichetta "consigliato": nei listini a livelli serve a
// indicare il piano da comprare, ma qui non c'è una scala e suggerirne una
// direbbe il contrario di quello che i prodotti sono.
//
// I dati stanno in lib/prodotti.ts: li condivide con le pagine di dettaglio e
// con la tendina della barra in alto.

export function Products() {
  return (
    // Senza titolo visibile la sezione resterebbe anonima per chi naviga a voce:
    // aria-label le dà un nome senza aggiungere testo alla pagina.
    <section className="border-b border-border" aria-label="I tre prodotti">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        {/* Niente items-start: le schede si allungano tutte all'altezza della più
            alta, e l'elenco in fondo assorbe la differenza. */}
        <div className="grid gap-5 md:grid-cols-3">
          {PRODOTTI.map((p) => (
            <div
              key={p.slug}
              className="rounded-[16px] border border-border bg-surface flex flex-col overflow-hidden"
            >
              <div className="p-7 flex flex-col">
                <div className="h-[104px] flex items-center justify-start">
                  <MarkBadge mark={p.mark} shape={p.shape} boxW={120} boxH={100} shapeSize={96} markW={92} markH={63} />
                </div>
                <h3 className="font-display font-semibold text-[1.35rem] tracking-[-0.02em] mt-2">{p.nome}</h3>

                {/* Altezze minime su descrizione, prezzo e area del bottone: senza,
                    il filetto cadrebbe a un'altezza diversa in ogni scheda, perché
                    i tre contenuti hanno ingombri diversi. Sono i tre punti che
                    tengono allineate le schede senza obbligare i testi a essere
                    della stessa misura. */}
                <p className="text-fg-2 text-[0.96rem] mt-3 min-h-[5.25rem]">{p.descrizione}</p>

                <div className="mt-6 min-h-[52px] flex items-baseline gap-2.5">
                  {p.prezzo ? (
                    <>
                      <span className="font-display font-semibold text-[2.2rem] tracking-[-0.03em] leading-none">
                        {p.prezzo.importo}
                      </span>
                      <span className="text-fg-muted text-[0.88rem]">{p.prezzo.cadenza}</span>
                    </>
                  ) : (
                    // Nel corpo del testo, non nel corpo della cifra: qui non c'è un
                    // numero da confrontare, e scriverlo grande fingerebbe che ci sia.
                    <a
                      href="/contatti"
                      className="text-[1.05rem] text-fg underline underline-offset-4 hover:text-fg-muted transition-colors inline-flex items-center gap-2"
                    >
                      Contatta il team
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>

                <div className="mt-6 min-h-[64px]">
                  {/* !whitespace-normal: .btn impone nowrap per la barra in alto, e
                      un'etichetta lunga sfonderebbe la scheda. La regola di .btn
                      vince sulle utility, serve il bang. */}
                  <Button href={percorso(p.slug)} className="w-full justify-center text-center !whitespace-normal">
                    {p.cta}
                  </Button>
                </div>
              </div>

              <div className="border-t border-border p-7 grow">
                <ul className="space-y-2.5">
                  {p.esempi.map((e) => (
                    <li key={e} className="flex gap-2.5 text-[0.94rem] text-fg-2">
                      <Spunta className="mt-[5px]" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
