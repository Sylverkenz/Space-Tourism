/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,}"],
  theme: {
    screens: {
      sm: "480px",
      md: "767px",
      lg: "976px",
      xlg: "1281px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: "hsl(230, 35%, 7%)",
        secondary: "hsl(231, 77%, 90%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        BarlowN: ["Barlow", "sans-serif"],
        Barlow: ["Barlow Condensed", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
