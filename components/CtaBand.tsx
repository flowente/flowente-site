import { Button } from "./Button";

type Props = {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBand({ title, text, ctaLabel = "Parliamone", ctaHref = "/contatti" }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-24 md:py-28 text-center">
        <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] max-w-[720px] mx-auto">
          {title}
        </h2>
        <p className="text-fg-2 text-[1.06rem] mt-5 max-w-[520px] mx-auto">{text}</p>
        <div className="mt-8 flex justify-center">
          <Button href={ctaHref} size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
