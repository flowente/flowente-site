import type { CSSProperties } from "react";
import type { Mark } from "@/lib/marks";

const FRAMES = ["flowente-p1", "flowente-p2", "flowente-p3"];

type Props = { mark: Mark; className?: string; style?: CSSProperties; animated?: boolean };

// Renderizza il segno come 3 fotogrammi sovrapposti (boiling) o statico se animated=false.
export function FlowMark({ mark, className = "", style, animated = true }: Props) {
  const frames = animated ? FRAMES : [FRAMES[0]];
  return (
    <span className={`boil ${className}`} style={style} aria-hidden="true">
      {frames.map((f) => (
        <svg key={f} viewBox={mark.viewBox}>
          {mark.draw(f)}
        </svg>
      ))}
    </span>
  );
}
