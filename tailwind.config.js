/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sky: { hero: '#60BAFF' },
        red: {
          dice: '#D93A44',
          border: '#651014',
        },
      },
      fontFamily: {
        akshar: ['Akshar', 'sans-serif'],
        bangers: ['Bangers', 'cursive'],
      },
    },
  },
  plugins: [],
}
