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
        'primary-blue': '#1B315B',
        'primary-amber': '#EAB707',
        'amber': '#FFF2CC',
        'green':'#12E520',
        'blue':'#D3E1F1',
        'grey':'#D9D9D9',
        'cream':'#EEEEEE',
        'red':'#ED2D4D',

      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
