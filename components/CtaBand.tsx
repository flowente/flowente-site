import { Button } from "./Button";
import { MarkBadge } from "./MarkBadge";
import { marks } from "@/lib/marks";

type Props = {
  title: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// CTA band: banda scura (ink-950, testo paper), l'unico "blocco pieno" della pagina.
// I MarkBadge sbordano dagli angoli, marks in paper (vedi .cta-dark in globals.css).
export function CtaBand({ title, text, ctaLabel = "Contattaci", ctaHref = "/contatti" }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-24">
        <div className="cta-dark relative rounded-3xl bg-ink-950 text-paper px-6 md:px-10 py-20 md:py-28 text-center">
          <span className="absolute -top-10 -left-3 md:-top-12 md:-left-5" aria-hidden="true">
            <MarkBadge mark={marks.coil} shape="circle" boxW={120} boxH={120} shapeSize={118} markW={88} markH={60} rotate={0} />
          </span>
          <span className="absolute -bottom-9 -right-3 md:-bottom-10 md:-right-5" aria-hidden="true">
            <MarkBadge mark={marks.onda} shape="circle" boxW={108} boxH={108} shapeSize={106} markW={70} markH={46} rotate={0} />
          </span>
          <div className="relative z-10">
            <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] max-w-[720px] mx-auto">
              {title}
            </h2>
            {text && <p className="text-ink-300 text-[1.06rem] mt-5 max-w-[520px] mx-auto">{text}</p>}
            <div className="mt-8 flex justify-center">
              <Button href={ctaHref} size="lg" variant="paper">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
