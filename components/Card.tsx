import { MarkBadge } from "./MarkBadge";
import type { Mark } from "@/lib/marks";
import type { ShapeKind } from "./AccentShape";

type Props = { title: string; meta: string; tag: string; mark: Mark; shape?: ShapeKind };

export function Card({ title, meta, tag, mark, shape = "square" }: Props) {
  return (
    <a
      href="#"
      className="group block rounded-[16px] overflow-hidden border border-border bg-surface transition-[transform,box-shadow] duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(11,11,12,0.08)]"
    >
      <div className="h-[164px] flex items-center justify-center bg-surface-2">
        <MarkBadge mark={mark} shape={shape} boxW={132} boxH={104} shapeSize={86} markW={130} markH={86} />
      </div>
      <div className="p-[22px]">
        <h3 className="font-display font-semibold text-[1.15rem] tracking-[-0.01em]">{title}</h3>
        <div className="font-mono text-[0.68rem] text-fg-muted mt-2">{meta}</div>
        <div className="font-mono text-[0.64rem] text-fg-2 mt-4 inline-flex items-center gap-1.5 uppercase tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {tag}
        </div>
      </div>
    </a>
  );
}
