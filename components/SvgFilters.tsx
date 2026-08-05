// 3 filtri "pencil" con seed diversi = 3 fotogrammi disegnati a mano (effetto boiling).
// Renderizzati una sola volta a livello di layout.
export function SvgFilters() {
  const filters = [
    { id: "flowente-p1", seed: 1 },
    { id: "flowente-p2", seed: 7 },
    { id: "flowente-p3", seed: 13 },
  ];
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        {filters.map((f) => (
          <filter key={f.id} id={f.id} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves={2} seed={f.seed} result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="6" />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
