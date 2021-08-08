module.exports = {
  mode: 'jit',
  prefix: '',
  purge: [
    './public/**/*.html',
    './src/**/*.{html,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'cormorant-garamond': ['"Cormorant Garamond"', 'serif']
      },
      colors: {
        'beige': '#ddcab9',
      },
      textColor: {
        'beige': '#ddcab9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
