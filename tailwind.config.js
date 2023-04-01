/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'f1':'Merriweather',
        'f2':'Montserrat',
        'f3':'Roboto'
      }
    },
  },
  plugins: [],
}

