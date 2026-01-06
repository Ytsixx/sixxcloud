const animated = require("tailwindcss-animated");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");
const aspectRatio = require("@tailwindcss/aspect-ratio");
const borderGradients = require("tailwindcss-border-gradients");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animated,
    typography,
    forms,
    aspectRatio,
    borderGradients,
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-brutal': {
          textShadow: '6px 6px 0px #000',
        },
        '.text-shadow-white': {
          textShadow: '2px 2px 0px #fff',
        },
        '.text-shadow-black': {
          textShadow: '4px 4px 0px #000',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};