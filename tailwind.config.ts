import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // scala grezza Ink
        ink: {
          950: "#0B0B0C", 900: "#141416", 800: "#1D1D20", 700: "#29292E",
          600: "#3A3A40", 500: "#55555C", 400: "#8A8A92", 300: "#B4B4BA",
          200: "#D9D9D6", 100: "#ECECEA", 50: "#F5F5F2",
        },
        flow: { 700: "#1B2ED6", 600: "#2540FF", 500: "#3A55FF", 400: "#6B7CFF", 100: "#E4E7FF" },
        paper: "#FBFBF9",
        // ruoli semantici -> CSS vars (commutate per tema)
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        fg: "var(--text)",
        "fg-2": "var(--text-2)",
        "fg-muted": "var(--muted)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: { DEFAULT: "6px", lg: "10px", xl: "14px" },
      maxWidth: { content: "1160px" },
    },
  },
  plugins: [],
};
export default config;
