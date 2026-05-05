// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */

// -------------------------------------------------------
// Font setup — add these to your HTML <head>:
// ...
// -------------------------------------------------------

export default {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      // ── Font families ──────────────────────────────────
      fontFamily: {
        display: ["'Clash Display'", "system-ui", "sans-serif"],  // headings
        sans:    ["'Satoshi'", "system-ui", "sans-serif"],         // body, UI
        mono:    ["'JetBrains Mono'", "'Fira Code'", "'Inconsolata'", "Consolas", "monospace"], // code
      },

      // ── Font sizes + line heights ──────────────────────
      fontSize: {
        "display": ["4.5rem",  { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "h1":      ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.03em" }],
        "h2":      ["2.5rem",  { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h3":      ["1.75rem", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "subtitle": ["1.25rem", { lineHeight: "1.4",  letterSpacing: "-0.01em" }],
        "body-lg":  ["1.125rem",{ lineHeight: "1.7",  letterSpacing: "0em"     }],
        "body":     ["1rem",    { lineHeight: "1.7",  letterSpacing: "0em"     }],
        "small":    ["0.875rem",{ lineHeight: "1.6",  letterSpacing: "0em"     }],
        "label":    ["0.75rem", { lineHeight: "1.5",  letterSpacing: "0.06em"  }],
        "code":    ["0.9375rem", { lineHeight: "1.7", letterSpacing: "0em" }],
        "code-sm": ["0.8125rem", { lineHeight: "1.6", letterSpacing: "0em" }],
      },

      // ── Font weights ───────────────────────────────────
      fontWeight: {
        regular: "400",
        medium:  "500",
        semibold: "600",
        bold:    "700",
      },
    },
  },
  plugins: [],
};