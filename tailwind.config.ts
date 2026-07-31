import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0E1A3D",
        charcoal: "#152244",
        gold: "#C6A15B",
        goldlight: "#E4CE9C",
        blue: "#2E5FE8",
        ivory: "#F7F4EC",
        ink: "#0D0F14",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
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
