/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Blackish_Green: "#112211",
        Mint_Green: "#8DD3BB",
        Slamon: "#FF8682",
        Neutrals: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
