import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],  
    theme: {
        screens:{
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1280px",
            '2xl':"1280px",
        },
    },
    plugins: [],
  } satisfies Config;
  