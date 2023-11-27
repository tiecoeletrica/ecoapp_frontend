import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "blue-dark-900": "#0E0048",
      "blue-800": "#172C78",
      "blue-700": "#0b278c",
      "blue-600": "#13319e",
      "green-900": "#124503",
      "green-700": "#155508",
      "green-600": "#197716",
      "green-400": "#32B768",
      "black-900": "#000000",
      "gray-700": "#0D0D0D",
      "gray-600": "#1A1A1A",
      "gray-500": "#262626",
      "gray-400": "#333333",
      "gray-300": "#808080",
      "gray-200": "#D9D9D9",
      "gray-100": "#F2F2F2",

      red: "#E8232F",
      white: "#fff",
      gray: "#CDCDCD",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
