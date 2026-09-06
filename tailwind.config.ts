import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        "canvas-subtle": "var(--color-canvas-subtle)",
        "canvas-deep": "var(--color-canvas-deep)",
        "surface-glass": "var(--color-surface-glass)",
        "surface-glass-hover": "var(--color-surface-glass-hover)",
        "surface-solid": "var(--color-surface-solid)",
        "rim-glass": "var(--color-rim-glass)",
        "rim-subtle": "var(--color-rim-subtle)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        "text-light": "var(--color-text-light)",
        "ember-red": "var(--color-ember-red)",
        "crimson-glow": "var(--color-crimson-glow)",
        "warm-amber": "var(--color-warm-amber)",
        "copper-wire": "var(--color-copper-wire)",
        "emerald-live": "var(--color-emerald-live)",
      },
      fontFamily: {
        sans: ["var(--font-saans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        saans: ["var(--font-saans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        grotesk: ["var(--font-pxgrotesk)", "Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-pt-serif)", "PT Serif", "Georgia", "serif"],
        "pt-serif": ["var(--font-pt-serif)", "PT Serif", "Georgia", "serif"],
        "serif-display": ["var(--font-serif-display)", "Cormorant Garamond", "Georgia", "serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
      },
      maxWidth: {
        page: "1240px",
        "7xl": "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
