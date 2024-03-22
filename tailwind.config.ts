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
      maxWidth: {
        "container" : "1170px" 
      },
      height: {
        "medium" : "80vh" 
      },
      colors:{
        "blue" : "#0057FF",
        "gray" : "#A3A3A3",
        "lightgray":"#595959",
        "lightgray-100": "#EEEEEE"
      },
    },
  },
  plugins: [],
};
export default config;
