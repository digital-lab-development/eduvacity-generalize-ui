/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#1e136b',
        'lightPink': '#fffcfe',
        'pinkBGColor': '#fff3f8',
        'comingsoonColor': '#ebdfeb',
        'studentsBGColor': '#fff8fb'
      },
      spacing: {
        85: '23rem',
        100: '26rem',
        110: '30rem',
        120: '36rem',
      },
      backgroundImage: {
        'jumbotron-section': "url('src/assets/img/landing/sprite.png')",
        'small-jumbotron-section': "url('src/assets/img/landing/small-sprite.png')",
        'learning-section': "url('src/assets/img/landing/sprite2.png')",
        'students-section': "url('src/assets/img/landing/sprite3.png')",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
