/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#B38B59",
        dark: "#1A1A1A",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};