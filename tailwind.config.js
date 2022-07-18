module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Ubuntu': ['Ubuntu'],
        'Licorice': ['Licorice']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
