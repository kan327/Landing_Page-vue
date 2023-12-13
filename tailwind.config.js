/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'b-09': '#091133',
        'b-11': '#111B47',
        'b-22': '#222F65',
        'b-37': '#37447E',
        'b-50': '#505F98', 
        'b-6f': '#6F7CB2', 
        'b-92': '#929ECC', 
        'g-5d': '#5D6970', 
        'g-93': '#939EA4', 
        'g-cd': '#CDD1D4',
        'w-e7': '#E7ECFF',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

