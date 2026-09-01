import { Button } from "./Button";
import { HeroCases } from "./HeroCases";
import { ANCORA_CASI } from "@/lib/casi";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 items-center md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted mb-6">AI Systems Studio</p>
          {/* Due periodi, e il secondo porta il senso: per questo la prima riga
              resta in grigio e la seconda in nero. Stesso espediente di prima,
              invertito - li' il grigio chiudeva, qui apre. */}
          <h1
            className="font-display font-semibold tracking-[-0.045em]"
            // 5rem e non 4.4: il titolo torna vicino alla misura che aveva prima
            // del cambio di copy. Il salto e' netto — sopra i 70px la seconda
            // frase si spezza in tre pezzi e il titolo va a quattro righe — e si
            // paga allargando la colonna del testo da 1.05fr a 1.15fr. La pila
            // di schede non ci rimette: e' gia' limitata a 420px, quindi lo
            // spazio che perde non lo usava.
            style={{ fontSize: "clamp(2.6rem, 6.2vw, 5rem)", lineHeight: 0.98 }}
          >
            <span className="text-fg-muted font-normal">L&apos;AI &egrave; gi&agrave; qui.</span>
            <br />
            Facciamole fare qualcosa di utile.
          </h1>
          <p className="mt-7 max-w-[460px] text-fg-2 text-[1.05rem]">
            Soluzioni AI concrete, pensate per il lavoro di ogni giorno.
          </p>
          <a
            href={ANCORA_CASI}
            className="mt-4 inline-flex items-center gap-2 text-fg text-[0.98rem] font-medium hover:underline underline-offset-4"
          >
            Scopri i casi di successo
            <span aria-hidden="true">→</span>
          </a>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button href="/contatti" size="lg">Parliamone</Button>
            <Button href="/metodo" variant="ghost" size="lg">Scopri come lavoriamo</Button>
          </div>
        </div>
        <HeroCases />
      </div>
    </section>
  );
}
