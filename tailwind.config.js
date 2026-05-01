/** @type {import('tailwindcss').Config} */

// -------------------------------------------------------
// Font setup — add these to your HTML <head>:
//
// Clash Display + Satoshi (Fontshare):
// <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
//
// JetBrains Mono (Google Fonts):
// <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
// -------------------------------------------------------

module.exports = {
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
      // Format: [fontSize, { lineHeight, letterSpacing }]
      fontSize: {
        // Clash Display scale
        "display": ["4.5rem",  { lineHeight: "1.05", letterSpacing: "-0.04em" }], // 72px — hero
        "h1":      ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.03em" }], // 56px
        "h2":      ["2.5rem",  { lineHeight: "1.15", letterSpacing: "-0.02em" }], // 40px
        "h3":      ["1.75rem", { lineHeight: "1.2",  letterSpacing: "-0.01em" }], // 28px

        // Satoshi scale
        "subtitle": ["1.25rem", { lineHeight: "1.4",  letterSpacing: "-0.01em" }], // 20px
        "body-lg":  ["1.125rem",{ lineHeight: "1.7",  letterSpacing: "0em"     }], // 18px
        "body":     ["1rem",    { lineHeight: "1.7",  letterSpacing: "0em"     }], // 16px — default
        "small":    ["0.875rem",{ lineHeight: "1.6",  letterSpacing: "0em"     }], // 14px
        "label":    ["0.75rem", { lineHeight: "1.5",  letterSpacing: "0.06em"  }], // 12px — uppercase labels

        // JetBrains Mono scale
        "code":    ["0.9375rem", { lineHeight: "1.7", letterSpacing: "0em" }], // 15px
        "code-sm": ["0.8125rem", { lineHeight: "1.6", letterSpacing: "0em" }], // 13px
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
