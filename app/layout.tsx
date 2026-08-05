import type { Metadata } from "next";
import { SvgFilters } from "@/components/SvgFilters";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowente — Il lavoro che scorre",
  description:
    "Studio di AI applicata. Trasformiamo i processi più lenti in flussi che vanno da soli — dalla strategia al modello in produzione.",
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
        {children}
      </body>
    </html>
  );
}
