module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // textColor: {
    //   'primary': '#ffb53d',
    //   'dark-1': '#000101',
    //   'dark-2': '#191918',
    //   'danger': '#e3342f',
    // },
    extend: {
      colors: {
        accent: "#ffa30e",
        dark: '#000101',
        altDark: '#191918',
        hover: "#d68400"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
