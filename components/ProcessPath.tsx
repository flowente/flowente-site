import type { CSSProperties } from "react";

type Props = {
  /** colore del punto in movimento: accent (Flow Blue) o ink */
  dot?: "accent" | "ink";
  /** id del filtro pencil (fotogramma hand-drawn) */
  filter?: string;
  className?: string;
  style?: CSSProperties;
};

// Illustrazione "solo linea": un punto percorre un tracciato disegnato a mano
// dal prototipo (inizio) al codice in produzione </> (badge). Sostituisce la card.
export function ProcessPath({ dot = "accent", filter = "flowente-p2", className = "", style }: Props) {
  const dotFill = dot === "accent" ? "var(--accent)" : "var(--text)";
  return (
    <svg
      viewBox="0 0 480 300"
      className={className}
      style={style}
      role="img"
      aria-label="Un punto percorre una linea disegnata a mano dal prototipo al codice in produzione"
    >
      <g filter={`url(#${filter})`}>
        <path
          id="pmLine"
          className="pm-line"
          d="M44,86 C96,42 150,60 162,104 C172,143 116,158 128,192 C139,224 216,214 288,196 C346,181 356,224 300,232"
        />
        <rect className="pm-badge-fill" x="256" y="206" width="92" height="54" rx="26" />
        <rect className="pm-badge-stroke" x="256" y="206" width="92" height="54" rx="26" />
        <path className="pm-glyph" d="M292,220 L282,233 L292,246" />
        <path className="pm-glyph" d="M300,248 L312,218" />
        <path className="pm-glyph" d="M320,220 L330,233 L320,246" />
      </g>

      {/* punto viaggiante */}
      <g className="pm-dot-anim">
        <circle className="pm-dot-ring" r="10">
          <animateMotion
            dur="3.4s"
            repeatCount="indefinite"
            keyPoints="0;1;1"
            keyTimes="0;0.72;1"
            calcMode="spline"
            keySplines="0.45 0 0.2 1;0 0 1 1"
          >
            <mpath href="#pmLine" />
          </animateMotion>
        </circle>
        <circle className="pm-dot" r="6.5" style={{ fill: dotFill }}>
          <animateMotion
            dur="3.4s"
            repeatCount="indefinite"
            keyPoints="0;1;1"
            keyTimes="0;0.72;1"
            calcMode="spline"
            keySplines="0.45 0 0.2 1;0 0 1 1"
          >
            <mpath href="#pmLine" />
          </animateMotion>
        </circle>
      </g>

      {/* fallback statico per prefers-reduced-motion */}
      <circle className="pm-dot-rest pm-dot" cx="44" cy="86" r="6.5" style={{ fill: dotFill }} />
    </svg>
  );
}
