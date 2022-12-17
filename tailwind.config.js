/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      myGreenLight: {
        100: "#ecf9f2",
        200: "#c5ecd9",
        300: "#9fdfc0",
        400: "#79d3a7",
        500: "#52c68e",
        600: "#39ad74",
        700: "#2c865a",
        800: "#206040",
        900: "#133a27",
      },
      myBlack: "#1b1b1b",
    },
  },
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
