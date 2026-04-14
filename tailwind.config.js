/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Instrument Serif", "Georgia", "serif"],
        logo: ["Syne", "DM Sans", "system-ui", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        neu: {
          50: "#f8f7f5",
          100: "#e6e1d7",
          200: "#c8b4a0",
          300: "#a89080",
          400: "#8a7060",
          500: "#6b5545",
          600: "#544237",
          700: "#3c4237",
          800: "#2a2e26",
          900: "#1a1d18",
        },
      },
      boxShadow: {
        lift: "0 18px 40px -12px rgba(26, 29, 24, 0.45), 0 0 0 1px rgba(200, 180, 160, 0.08)",
        card: "0 12px 32px -8px rgba(26, 29, 24, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      },
    },
  },
  plugins: [],
};
