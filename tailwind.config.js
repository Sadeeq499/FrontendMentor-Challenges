/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          Pale: "hsl(225, 100%, 94%)", // background
          Bright: "hsl(245, 75%, 52%)", // top bg
        },
        neutral: {
          VeryPale: "hsl(0, 0%, 98%)", // card bg
          Desaturated: "hsl(224, 23%, 55%)", // text
          DarkBlue: "hsl(223, 47%, 23%)", // headings
        },
      },
    },
  },
  plugins: [],
};
