import { Logo } from "./Logo";
import { Button } from "./Button";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-10 h-[66px] flex items-center justify-between">
        <Logo className="text-[1.25rem]" />
        <nav className="hidden md:flex gap-7 text-[0.9rem] text-fg-2">
          <a className="hover:text-fg transition-colors" href="#">Studio</a>
          <a className="hover:text-fg transition-colors" href="#">Advisory</a>
          <a className="hover:text-fg transition-colors" href="#">Lavori</a>
          <a className="hover:text-fg transition-colors" href="#">Blog</a>
        </nav>
        <div className="flex gap-2.5 items-center">
          <Button variant="ghost" href="#">Login</Button>
          <Button variant="primary" href="#">Parliamone</Button>
        </div>
      </div>
    </header>
  );
}
