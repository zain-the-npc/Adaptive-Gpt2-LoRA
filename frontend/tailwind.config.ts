import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        /* ── Surface scale ── */
        surface: "#f9f9f9",
        "surface-dim": "#dadada",
        "surface-bright": "#f9f9f9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f3",
        "surface-container": "#eeeeee",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        /* ── Ink ── */
        "on-surface": "#1a1c1c",
        "on-surface-variant": "#444748",
        "inverse-surface": "#2f3131",
        "inverse-on-surface": "#f0f1f1",
        /* ── Borders ── */
        outline: "#747878",
        "outline-variant": "#c4c7c7",
        /* ── Semantic ── */
        primary: "#000000",
        "on-primary": "#ffffff",
        background: "#f9f9f9",
        "on-background": "#1a1c1c",
        secondary: "#5e5e5e",
        "on-secondary-container": "#626262",
        error: "#ba1a1a",
        /* ── Persona accents ── */
        "persona-pirate": "#0d9488",
        "persona-shakespearean": "#dc2626",
        "persona-genz": "#db2777",
        "persona-coach": "#f59e0b",
        "persona-detective": "#334155",
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        lg: "6px",
        xl: "8px",
        full: "9999px",
        /* kill the old claymorphic radii */
        "3xl": "4px",
        "4xl": "4px",
      },
      spacing: {
        gutter: "16px",
        "container-max": "1280px",
        "margin-desktop": "32px",
        unit: "4px",
        "margin-mobile": "16px",
      },
    },
  },
  plugins: [],
};
export default config;
