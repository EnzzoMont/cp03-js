
/** @type {import('tailwindcss').Config} */

const withMt = require("@material-tailwind/react/utils/withMT");
module.exports = withMt({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {

    fontFamily: {
      'Jacquard ' :['Jacquard 12', 'system-ui'],
      'Orbitron' :['Orbitron', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(55, 47, 47)'
        },
        brand: {
          100: '#2C3033',
          200: '#2C3033'
        }
      },
      screens: {
        'sm': '640px', // Small screens, mobile phones
        'md': '768px', // Medium screens, tablets
        'lg': '1024px', // Large screens, laptops/desktops
        'xl': '1280px', // Extra large screens, larger desktops
      },
    },
  },
  plugins: [],
});
