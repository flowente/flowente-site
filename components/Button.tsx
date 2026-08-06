import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "paper";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

// Bottone: primary = pill ink; ghost = hairline; paper = per superfici scure. Hover = micro-zoom. Niente frecce di default.
export function Button({ children, href, variant = "primary", size = "md", className = "", type = "button", disabled }: Props) {
  const variantCls = { primary: "btn-primary", ghost: "btn-ghost", paper: "btn-paper" }[variant];
  const cls = `btn ${variantCls} ${size === "lg" ? "btn-lg" : ""} ${className}`;
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
