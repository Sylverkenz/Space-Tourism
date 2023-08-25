/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,}"],
  theme: {
    screens: {
      xsm: "300px",
      sm: "400px",
      md: "767px",
      lg: "976px",
      xlg: "1281px",
      xl: "1400px",
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
