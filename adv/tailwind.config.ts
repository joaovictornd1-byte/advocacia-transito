import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1F3A",
          light: "#13294B",
        },
        surface: {
          DEFAULT: "#FAFAF9",
          alt: "#F2F4F7",
        },
        line: "#E3E6EA",
        muted: "#5B6472",
        accent: {
          DEFAULT: "#0E7C86",
          dark: "#0A5F67",
          light: "#E4F1F2",
        },
        signal: {
          warn: "#B5792A",
          error: "#B3261E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,31,58,0.04), 0 8px 24px -8px rgba(11,31,58,0.08)",
        lift: "0 12px 32px -12px rgba(11,31,58,0.18)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-6%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(106%)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        scan: "scan 2.8s ease-in-out infinite",
        fadeUp: "fadeUp 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
