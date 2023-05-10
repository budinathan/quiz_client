/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blackbg1: "#252526",
        blackbg2: "#0e1111",
        whitebg1: "#cccccc",
        lightorange: "#D28445",
        lightblue: "#62b2e9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
