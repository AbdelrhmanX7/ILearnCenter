import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        item: "shadow-[0,1px,2px,0,_rgba(0,0,0,0.05)]",
      },
      fontFamily: {
        "montserrat-medium": ["Montserrat-Medium"],
        "montserrat-semibold": ["Montserrat-SemiBold"],
      },
    },
  },
  plugins: [],
};
export default config;
