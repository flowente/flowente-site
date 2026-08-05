import type { CSSProperties, ReactNode } from "react";

export type ShapeKind = "square" | "circle" | "triangle" | "blob";

const SHAPES: Record<ShapeKind, (f: string) => ReactNode> = {
  square: (f) => <path filter={`url(#${f})`} d="M12,10 L88,8 L92,86 L10,90 Z" />,
  circle: (f) => <circle filter={`url(#${f})`} cx="50" cy="50" r="43" />,
  triangle: (f) => <path filter={`url(#${f})`} d="M50,12 L91,88 L9,88 Z" />,
  blob: (f) => (
    <path filter={`url(#${f})`} d="M50,8 C76,8 93,30 88,55 C83,80 60,93 39,88 C17,83 7,58 14,38 C20,21 30,8 50,8 Z" />
  ),
};

type Props = { kind?: ShapeKind; filter?: string; className?: string; style?: CSSProperties };

// Forma accento piena in Flow Blue con bordi disegnati a mano (filtro pencil).
export function AccentShape({ kind = "square", filter = "flowente-p2", className = "", style }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={`shape-fill ${className}`} style={style} aria-hidden="true">
      {SHAPES[kind](filter)}
    </svg>
  );
}
