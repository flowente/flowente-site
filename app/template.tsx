// Re-monta a ogni navigazione → fade-in lento (0.7s), coerente col brand ("tempo lento").
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade">{children}</div>;
}
