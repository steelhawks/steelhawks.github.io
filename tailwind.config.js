const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "6px 6px #830419",
      },
      colors: {
        primary: "#830419",
        secondary: "#C4403F",
        background: "#151515",
      },
      dropdown: {
        hd: "5px 5px 0 #FFFFFF",
      },
      fontFamily: {
        sans: ["mundial", "sans-serif"],
        display: ["komet", '"Trebuchet MS"'],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
