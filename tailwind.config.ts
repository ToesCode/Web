import type { Config } from "tailwindcss";

// Tokens tomados 1:1 de la paleta v3 (toes.css :root) para que el diseño
// aprobado no cambie al migrar — solo cambia dónde vive el valor.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8F8F5",
        surface: "#FFFFFF",
        text: "#171A1F",
        muted: "#6D737C",
        line: "#E4E5E2",
        accent: {
          DEFAULT: "#4D7CFE",
          soft: "#E9EEFF",
          hover: "#3F6AE0",
        },
        warm: {
          DEFAULT: "#E2A17E",
          soft: "#FBF0E7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1080px",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "13": "3.25rem",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(.22,.61,.36,1)",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
