import type { Metadata } from "next";
import { SvgFilters } from "@/components/SvgFilters";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flowente.com"),
  title: {
    default: "Flowente — Il lavoro che scorre",
    template: "%s",
  },
  description:
    "Studio di AI applicata. Scegliamo la soluzione di AI giusta per il tuo caso e la portiamo in produzione, in sicurezza — dalla strategia al modello.",
  openGraph: {
    title: "Flowente — Il lavoro che scorre",
    description:
      "Studio di AI applicata. Dalla strategia al modello in produzione, in sicurezza. Anche AI privata on-premise.",
    type: "website",
    locale: "it_IT",
    siteName: "Flowente",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <SvgFilters />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
