/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#1e136b',
        'lightPink': '#fffcfe',
        'pinkBGColor': '#fff3f8',
        'comingsoonColor': '#ebdfeb'
      },
      spacing: {
        100: '26rem',
        110: '30rem',
        120: '36rem',
      },
      backgroundImage: {
        'jumbotron-section': "url('src/assets/img/landing/sprite.png')",
        'learning-section': "url('src/assets/img/landing/sprite2.png')",
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
