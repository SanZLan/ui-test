/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1100px',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundSize: {
        '30%': '30%',
        '50%': '50%',
      },
      backgroundPosition: {
        'left': 'left',
        'left-40': '0 40%'
      },
      colors: {
        'positive': '#3CBBB4',
        'negative': '#FBBD4A'
      }
    },
  },
  safelist: [
    'bg-positive',
    'bg-negative',
    'ps-2',
    'pe-2',
  ],
  mode: 'jit',
  plugins: [],
}

