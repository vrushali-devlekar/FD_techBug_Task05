/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        degular: ['"Degular Display"', "sans-serif"],
        cherry: ['"cherry bombone"', "sans-serif"],
      },
      colors: {
        primary: "#F1D5DC",
        blue: "#3238F2",
      },
    },
  },
  plugins: [],
};
