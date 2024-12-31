import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-instrumentalSans)"],
      },
      colors: {
        gray: {
          100: "#fcfcfc",
          200: "#ebebeb",
          500: "#5c5c5c",
          900: "#272727",
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
