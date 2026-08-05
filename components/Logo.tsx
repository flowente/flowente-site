import type { CSSProperties } from "react";

const MARK_PATH =
  "M581.1,298.1c-23.8,83-100.8,136.5-161.7,105.5-76.7-39-56.5-207.7,36.3-290.2-25.6-27.3-67.2-51.3-107.6-40.4-36.9,10-61.4,43.1-85.9,71.6-62.2,72.2-151.8,122.5-249.7,110.1-20.9-2.7-12.7-53.7,4.9-58.4,81.8-3.2,149-37.8,201-103.9C254.4,46.3,300.9.2,364.5,0c58-.2,107.7,33.1,149.8,74.1,83-23.8,166.7-22.1,249.1,8.3l205.5,75.7c13,13.6-6,61.3-25.1,54.9l-175.4-59.5c-67.9-23-137.3-36.8-206.2-20.5,25.6,55.7,34.5,110.2,18.8,165ZM504.4,165.9c-65.2,50.4-82,163-52.9,177.4,30.5,15.1,112.2-84.8,52.9-177.4Z";

/** Il Nodo che si scioglie — colore SOLO sul marchio (Flow Blue). */
export function LogoMark({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 973.3 412.4" className={className} style={{ fill: "var(--accent)", ...style }} aria-hidden="true">
      <path d={MARK_PATH} />
    </svg>
  );
}

/** Lockup: marchio (accent) + wordmark "flowente" in Space Grotesk (ink). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.42em] font-display font-medium tracking-[-0.03em] leading-none ${className}`}>
      <LogoMark className="h-[0.8em] w-auto" />
      <span>flowente</span>
    </span>
  );
}
