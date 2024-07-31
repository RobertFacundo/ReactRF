/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'background': 'background-color',
        'text': 'color',
        'opacity': 'opacity'
      },
      fontFamily: {
        buda: ['"Buda"', 'serif'],
      },
      screens: {
        'md': '877px',
      }
    },
  },
  plugins: [],
}
