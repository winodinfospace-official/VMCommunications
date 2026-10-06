import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F2A2B",
        charcoal: "#163B3D",
        gold: "#F0A81A",
        goldlight: "#F7CF73",
        blue: "#163B3D",
        ivory: "#F2F1EA",
        ink: "#0E1F20",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        irisGrow: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "30%": { opacity: "1" },
          "100%": { opacity: "1", transform: "scale(60)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        iris: "irisGrow 1.1s cubic-bezier(.6,0,.15,1) forwards",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
