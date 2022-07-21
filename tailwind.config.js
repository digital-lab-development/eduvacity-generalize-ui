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
        'studentsBGColor': '#fff8fb',
        'palePinkColor': '#fff3f9',
        'joinBGColor': '#fff7fb',
        'pinkColor': '#e786d7'
      },
      spacing: {
        85: '23rem',
        100: '26rem',
        110: '30rem',
        120: '36rem',
        140: '45rem',
      },
      backgroundImage: {
        'jumbotron-section': "url('src/assets/img/landing/sprite.png')",
        'small-jumbotron-section': "url('src/assets/img/landing/small-sprite.png')",
        'learning-section': "url('src/assets/img/landing/sprite2.png')",
        'students-section': "url('src/assets/img/landing/sprite3.png')",
        'join-section': "url('src/assets/img/landing/sprite4.png')",
        'partner-section': "url('src/assets/img/landing/sprite5.png')",
        'login-section': "url('src/assets/img/landing/sprite6.png')",
        'login-small-section': "url('src/assets/img/landing/sprite7.png')",
        'about-section-first': "url('src/assets/img/landing/bgimage-one.png')",
        'partnership-sectiom': "url('src/assets/img/landing/partner.png')",
        'partnership-small-sectiom': "url('src/assets/img/landing/partner-small.png')",
        'partnership-mobile-sectiom': "url('src/assets/img/landing/partner-mobile.png')",
        'small-about-section-first': "url('src/assets/img/landing/small-bgimage-one.png')",
        'small-about-section-second': "url('src/assets/img/landing/small-bgimage-two.png')",
        'about-section-second': "url('src/assets/img/landing/bgimage-two.png')",
        'product-section': "url('src/assets/img/landing/product.png')",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
