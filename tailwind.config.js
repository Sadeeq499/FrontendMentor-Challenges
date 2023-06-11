module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Order Summary Card
        primary: {
          Pale: "hsl(225, 100%, 94%)", // background
          Bright: "hsl(245, 75%, 52%)", // top bg
        },

        neutral: {
          VeryPale: "hsl(0, 0%, 98%)", // card bg
          Desaturated: "hsl(224, 23%, 55%)", // text
          DarkBlue: "hsl(223, 47%, 23%)", // headings
        },

        // Result Summary Card
        lightred: "hsl(0, 100%, 67%)",
        OrangeYellow: "hsl(34, 100%, 50%)",
        GreenTail: "hsl(166, 100%, 37%)",
        CobaltBlue: "hsl(234, 85%, 45%)",

        // Gradients
        LightBlueBG: "hsl(252, 100%, 67%)",
        LightRoyalBG: "hsl(241, 81%, 54%)",
        Violetbluecircle: "hsla(256, 72%, 46%, 1)",
        Persianbluecircle: "hsla(241, 72%, 46%, 0)",

        // Additional neutral colors
        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightGrayishBlue: "hsl(224, 30%, 27%)",
        LightLavender: "hsl(241, 100%, 89%)",
      },

      fontFamily: {
        One: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
