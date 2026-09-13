import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FAFAF9",
          ink: "#1A1D21",
          muted: "#565D66",
          navy: "#1E3A5F",
          slate: "#2D5F8A",
          border: "#DDE1E6",
          footer: "#12212F",
          "footer-text": "#F3F4F5",
          "footer-muted": "#9AACBC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
