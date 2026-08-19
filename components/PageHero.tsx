import type { ReactNode } from "react";
import { Button } from "./Button";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "center" | "left";
};

export function PageHero({ eyebrow, title, text, ctaLabel, ctaHref, align = "center" }: Props) {
  const centered = align === "center";
  return (
    <section className="border-b border-border">
      <div
        className={`mx-auto max-w-content px-6 md:px-10 py-24 md:py-28 ${
          centered ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted mb-5">{eyebrow}</p>
        )}
        <h1
          className={`font-display font-semibold tracking-[-0.035em] text-[clamp(2.6rem,6.4vw,4.6rem)] leading-[0.98] ${
            centered ? "max-w-[860px] mx-auto" : "max-w-[900px]"
          }`}
        >
          {title}
        </h1>
        {/* Una riga vuota nel testo separa due paragrafi. Serve dove la hero
            deve dire due cose distinte — il problema e poi la risposta — che in
            un blocco solo si impastano. */}
        {text &&
          text.split("\n\n").map((blocco, i) => (
            <p
              key={i}
              className={`text-fg-2 text-[1.08rem] max-w-[560px] ${i === 0 ? "mt-6" : "mt-4"} ${
                centered ? "mx-auto" : ""
              }`}
            >
              {blocco}
            </p>
          ))}
        {ctaLabel && (
          <div className={`mt-8 flex ${centered ? "justify-center" : ""}`}>
            <Button href={ctaHref || "/contatti"} size="lg">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
