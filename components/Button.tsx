import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

// Bottone: primary = pill ink; ghost = hairline. Hover = micro-zoom. Niente frecce di default.
export function Button({ children, href, variant = "primary", size = "md", className = "", type = "button", disabled }: Props) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${size === "lg" ? "btn-lg" : ""} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
