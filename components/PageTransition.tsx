"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const FADE_OUT_MS = 450;

// useLayoutEffect avvisa in SSR: in quel caso non serve, non c'è DOM da ripulire.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Intercetta i click sui link interni: fade-out della pagina corrente, poi
// navigazione client-side; il fade-in lo fa template.tsx (.page-fade).
//
// La classe di uscita va messa sull'elemento che esce, mai su <html>: quando
// template.tsx rimonta, il nuovo .page-fade erediterebbe una regola globale e
// verrebbe dipinto a opacità 1 per un fotogramma prima di ripartire da zero —
// uno scatto visibile a ogni cambio pagina.
export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  // Rete di sicurezza: se React riusasse il nodo invece di ricrearlo, la classe
  // resterebbe attaccata e la pagina nuova non comparirebbe. Gira prima del
  // paint, quindi non introduce sfarfallii.
  useIsoLayoutEffect(() => {
    document.querySelectorAll(".page-fade.is-leaving").forEach((el) => el.classList.remove("is-leaving"));
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
      document.querySelector(".page-fade")?.classList.add("is-leaving");
      window.setTimeout(go, FADE_OUT_MS);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
