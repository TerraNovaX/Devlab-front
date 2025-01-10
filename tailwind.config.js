/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      title: ["Fjalla One", "sans-serif"],
      texte: ["Roboto", "sans-serif"],
    },
    colors: {
      darkBlue: "#004D94",
      skyBlue: "#06CDFC",
      green: "#A6C356",
      yellow: "#FFD539",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
