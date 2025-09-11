
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
    
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto-light': ['roboto-light', 'sans-serif'],
        'roboto-regular': ['roboto-regular', 'sans-serif'],
        'roboto-medium': ['roboto-medium', 'sans-serif'],
        'roboto-bold': ['roboto-bold', 'sans-serif'],
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
