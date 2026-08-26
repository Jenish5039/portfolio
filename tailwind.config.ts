import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "obsidian-canvas": "var(--color-obsidian-canvas)",
        "void-black": "var(--color-void-black)",
        "ember-surface": "var(--color-ember-surface)",
        "charcoal-rim": "var(--color-charcoal-rim)",
        "copper-wire": "var(--color-copper-wire)",
        "ash-text": "var(--color-ash-text)",
        "fog-text": "var(--color-fog-text)",
        limestone: "var(--color-limestone)",
        parchment: "var(--color-parchment)",
        "forest-deep": "var(--color-forest-deep)",
        "midnight-moss": "var(--color-midnight-moss)",
        "spectrum-shimmer": "var(--color-spectrum-shimmer)",
      },
      fontFamily: {
        sans: ["var(--font-saans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        saans: ["var(--font-saans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        grotesk: ["var(--font-pxgrotesk)", "Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-pt-serif)", "PT Serif", "Georgia", "serif"],
        "pt-serif": ["var(--font-pt-serif)", "PT Serif", "Georgia", "serif"],
      },
      fontWeight: {
        light: "300",
        w380: "380",
        regular: "400",
        w570: "570",
      },
      letterSpacing: {
        display: "-1.58px",
        "heading-lg": "-0.48px",
        heading: "-0.36px",
        "heading-sm": "-0.24px",
        subheading: "-0.18px",
        "body-sm": "0.14px",
        caption: "0.12px",
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "28": "28px",
        "32": "32px",
        "36": "36px",
        "40": "40px",
        "56": "56px",
        "64": "64px",
        "80": "80px",
        "120": "120px",
      },
      borderRadius: {
        none: "0px",
        square: "0px",
        tag: "4px",
        card: "8px",
        "card-lg": "12px",
        pill: "36px",
        full: "9999px",
      },
      boxShadow: {
        none: "none",
      },
      maxWidth: {
        page: "1200px",
        "7xl": "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
