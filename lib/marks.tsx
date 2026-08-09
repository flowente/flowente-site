import type { ReactNode } from "react";

export type Mark = { viewBox: string; draw: (filter: string) => ReactNode };

// Segni gestuali (Flow Marks). Ogni "draw" riceve l'id del filtro (fotogramma).
export const marks: Record<string, Mark> = {
  coil: {
    viewBox: "0 0 340 230",
    draw: (f) => (
      <path
        className="mark-stroke"
        filter={`url(#${f})`}
        d="M20,150 C20,105 60,105 60,150 C60,105 100,105 100,150 C100,105 140,105 145,150 C152,190 200,190 205,140 C210,95 250,95 258,150 C265,195 315,195 320,120"
      />
    ),
  },
  onde: {
    viewBox: "0 0 280 150",
    draw: (f) => (
      <g filter={`url(#${f})`}>
        <path className="mark-stroke" d="M12,40 Q52,15 92,40 T172,40 T268,40" />
        <path className="mark-stroke" d="M12,80 Q52,55 92,80 T172,80 T268,80" />
        <path className="mark-stroke" d="M12,120 Q52,95 92,120 T172,120 T268,120" />
      </g>
    ),
  },
  flusso: {
    viewBox: "0 0 120 80",
    draw: (f) => (
      <path className="mark-stroke" filter={`url(#${f})`} d="M12,55 C34,55 28,25 48,38 C68,52 36,72 45,50 C52,32 78,42 108,48" />
    ),
  },
  onda: {
    viewBox: "0 0 120 80",
    draw: (f) => <path className="mark-stroke" filter={`url(#${f})`} d="M10,42 Q40,15 70,42 T112,40" />,
  },
  freccia: {
    viewBox: "0 0 120 80",
    draw: (f) => <path className="mark-stroke" filter={`url(#${f})`} d="M20,58 C50,18 75,70 108,44" />,
  },
  // Lucchetto: corpo, staffa a doppia linea, buco della serratura.
  // Stesso viewBox di flusso/onda/freccia (120x80) perché è quello che tiene lo
  // spessore del tratto uguale agli altri segni: la stroke-width è in unità del
  // viewBox, quindi un box più grande a parità di resa dà una linea più sottile.
  // Le linee restano pulite: a sporcarle è il filtro dei fotogrammi.
  lucchetto: {
    viewBox: "0 0 120 80",
    draw: (f) => (
      <g filter={`url(#${f})`}>
        <path
          className="mark-stroke"
          d="M36,38 L84,38 Q90,38 90,44 L90,68 Q90,74 84,74 L36,74 Q30,74 30,68 L30,44 Q30,38 36,38 Z"
        />
        <path className="mark-stroke" d="M39,40 L39,26 Q39,10 60,10 Q81,10 81,26 L81,40" />
        <path className="mark-stroke" d="M50,40 L50,26 Q50,20 60,20 Q70,20 70,26 L70,40" />
        <circle className="mark-stroke" cx="60" cy="51" r="5.5" />
        <path className="mark-stroke" d="M56.5,55 L53,67 L67,67 L63.5,55" />
      </g>
    ),
  },
};
