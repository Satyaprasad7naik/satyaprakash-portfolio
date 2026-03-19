import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        "bg-secondary": "#111118",
        surface: "#16161e",
        border: "rgba(255, 255, 255, 0.08)",
        primary: "#6366f1",
        "primary-glow": "rgba(99, 102, 241, 0.4)",
        accent: "#a855f7",
        text: "#f1f5f9",
        "text-muted": "#94a3b8",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
