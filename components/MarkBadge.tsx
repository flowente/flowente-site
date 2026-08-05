import { AccentShape, type ShapeKind } from "./AccentShape";
import { FlowMark } from "./FlowMark";
import type { Mark } from "@/lib/marks";

type Props = {
  mark: Mark;
  shape?: ShapeKind;
  boxW: number;
  boxH: number;
  shapeSize: number;
  markW: number;
  markH: number;
  rotate?: number;
  filter?: string;
  animated?: boolean;
};

// Composizione firma: forma accento dietro + Flow Mark che sborda dal perimetro.
export function MarkBadge({
  mark,
  shape = "square",
  boxW,
  boxH,
  shapeSize,
  markW,
  markH,
  rotate = -4,
  filter,
  animated = true,
}: Props) {
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: boxW, height: boxH }}>
      <AccentShape
        kind={shape}
        filter={filter}
        className="absolute"
        style={{
          width: shapeSize,
          height: shapeSize,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          zIndex: 0,
        }}
      />
      <FlowMark mark={mark} animated={animated} style={{ position: "relative", zIndex: 1, width: markW, height: markH }} />
    </span>
  );
}
