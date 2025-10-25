/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pumpkin-skin': {
          DEFAULT: '#AE670B',
          50: '#FBE4C7',
          100: '#FADBB4',
          200: '#F8C98D',
          300: '#F5B767',
          400: '#F3A540',
          500: '#F1931A',
          600: '#D47E0D',
          700: '#AE670B',
          800: '#794808',
          900: '#442904',
          950: '#2A1903',
        },
      },
    },
  },
  plugins: [],
};
