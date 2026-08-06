"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const FADE_OUT_MS = 450;

// Intercetta i click sui link interni: fade-out della pagina corrente, poi
// navigazione client-side; il fade-in lo fa template.tsx (.page-fade).
export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.remove("page-leaving");
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as Element).closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return;

      e.preventDefault();
      const go = () => router.push(url.pathname + url.search + url.hash);
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        go();
        return;
      }
      document.documentElement.classList.add("page-leaving");
      window.setTimeout(go, FADE_OUT_MS);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
