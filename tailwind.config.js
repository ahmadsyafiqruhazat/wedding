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
        'cormorant-garamond': ['"Cormorant Garamond"', 'serif'],
        'great-vibes': ['"Great Vibes"', 'serif']
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
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),require('tailwindcss-textshadow')],
};
