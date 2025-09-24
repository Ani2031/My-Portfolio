/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // enables dark mode using class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // keep only one font family
      },
      colors: {
        // optional: custom palette for portfolio
        light: {
          bg: '#ffffff',
          text: '#1a1a1a',
        },
        dark: {
          bg: '#0f172a',
          text: '#f1f5f9',
        },
      },
    },
  },
  plugins: [],
};
