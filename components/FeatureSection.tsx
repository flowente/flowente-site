import { Button } from "./Button";
import { MarkBadge } from "./MarkBadge";
import type { Mark } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  text: string;
  note?: string;
  ctaLabel?: string;
  ctaHref?: string;
  mark: Mark;
  shape?: ShapeKind;
  reverse?: boolean;
};

export function FeatureSection({ eyebrow, title, text, note, ctaLabel, ctaHref, mark, shape = "square", reverse }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 md:gap-14 items-center md:grid-cols-2">
        <div className={reverse ? "md:order-2" : ""}>
          {eyebrow && (
            <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted mb-4">{eyebrow}</p>
          )}
          <h2
            className="font-display font-semibold tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.02 }}
          >
            {title}
          </h2>
          <p className="mt-5 max-w-[420px] text-fg-2 text-[1.06rem]">{text}</p>
          {note && (
            <p className="mt-5 max-w-[420px] text-fg-muted text-[0.9rem] pl-4 border-l border-border">{note}</p>
          )}
          {ctaLabel && (
            <div className="mt-6">
              <Button variant="ghost" href={ctaHref || "#"}>{ctaLabel}</Button>
            </div>
          )}
        </div>
        <div
          className={`flex items-center justify-center rounded-[20px] bg-surface-2 h-[240px] md:h-[260px] ${
            reverse ? "md:order-1" : ""
          }`}
        >
          <MarkBadge mark={mark} shape={shape} boxW={280} boxH={160} shapeSize={120} markW={250} markH={140} />
        </div>
      </div>
    </section>
  );
}
