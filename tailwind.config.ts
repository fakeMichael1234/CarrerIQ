import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050605",
        carbon: "#10120f",
        fog: "#f4f4ee",
        acid: "#92f23b",
        mint: "#c9ff7a",
        signal: "#29d3c4",
        ember: "#ffb84d",
        rose: "#ff6b7a"
      },
      boxShadow: {
        glow: "0 0 38px rgba(146, 242, 59, 0.28)",
        soft: "0 28px 90px rgba(0, 0, 0, 0.22)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "ui-monospace", "monospace"]
      },
      borderRadius: {
        shell: "2rem"
      },
      animation: {
        pulseGlow: "pulseGlow 3.2s ease-in-out infinite",
        scan: "scan 6s linear infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        },
        scan: {
          "0%": { transform: "translateY(-35%)" },
          "100%": { transform: "translateY(135%)" }
        }
      }
    },
  },
  plugins: [],
};

export default config;
