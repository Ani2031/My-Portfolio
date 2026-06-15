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
        light: {
          bg: '#f5f5f7',
          text: '#0f172a',
        },
        dark: {
          bg: '#030014',
          text: '#f1f5f9',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'premium': '0 12px 30px -10px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.03)',
        'premium-dark': '0 10px 30px -15px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(255, 255, 255, 0.05)',
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.25)',
        'indigo-glow': '0 0 25px rgba(99, 102, 241, 0.25)',
        'purple-glow': '0 0 25px rgba(139, 92, 246, 0.25)',
      },
    },
  },
  plugins: [],
};
