// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,astro,js,jsx,ts,tsx,vue,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Token-mapped colors (single source of truth = CSS variables)
        bg: "rgb(var(--c-bg) / <alpha-value>)",
        fg: "rgb(var(--c-fg) / <alpha-value>)",
        brand: "rgb(var(--c-brand) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        onbrand: "rgb(var(--c-onbrand) / <alpha-value>)",
      },

      // Fonts driven by CSS tokens (Inter + Literata)
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.fg"),
            maxWidth: "none",

            a: {
              color: theme("colors.accent"),
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              fontWeight: "600",
            },

            strong: { color: theme("colors.fg") },
            em: { color: theme("colors.fg") },

            h1: { color: theme("colors.brand") },
            h2: { color: theme("colors.brand") },
            h3: { color: theme("colors.brand") },
            h4: { color: theme("colors.brand") },

            code: { color: theme("colors.fg") },

            blockquote: {
              color: theme("colors.fg"),
              borderLeftColor: "rgb(var(--c-fg) / var(--border-alpha))",
              fontStyle: "normal",
            },

            hr: {
              borderColor: "rgb(var(--c-fg) / var(--border-alpha))",
            },

            figcaption: { color: theme("colors.muted") },

            ul: { paddingLeft: "1.25em" },
            ol: { paddingLeft: "1.25em" },
            li: { marginTop: "0.25em", marginBottom: "0.25em" },
          },
        },

        // Optional: for dark/brand sections: <article class="prose prose-invert">
        invert: {
          css: {
            color: theme("colors.onbrand"),
            a: {
              color: theme("colors.onbrand"),
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            },
            strong: { color: theme("colors.onbrand") },
            h1: { color: theme("colors.onbrand") },
            h2: { color: theme("colors.onbrand") },
            h3: { color: theme("colors.onbrand") },
            h4: { color: theme("colors.onbrand") },
            blockquote: {
              color: theme("colors.onbrand"),
              borderLeftColor: "rgb(var(--c-onbrand) / 0.45)",
            },
            hr: {
              borderColor: "rgb(var(--c-onbrand) / 0.35)",
            },
            figcaption: { color: "rgb(var(--c-onbrand) / 0.75)" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};