/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'marine-blue': '#02295A',
        'purplish-blue': '#473DFF',
        'pastel-blue': '#ADBEFF',
        'light-blue': '#BFE2FD',
        'strawberry-res': '#ED3548',

        'cool-gray': '#9699AB',
        'light-gray': '#D6D9E6',
        'magnolia': '#F0F6FF',
        'alabaster': '#FAFBFF',
        'white': '#FFFFFF',
      },
      screens: {
        '2xl': '1440px'
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

