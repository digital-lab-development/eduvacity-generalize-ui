/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#1e136b',
        'lightPink': '#fffcfe'
      },
      spacing: {
        100: '26rem',
      },
      backgroundImage: {
        'jumbotron-section': "url('src/assets/img/landing/sprite.png')",
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
