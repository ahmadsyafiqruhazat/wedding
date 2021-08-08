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
        'beige': '#b0a194',
      },
      textColor: {
        'beige': '#b0a194',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
