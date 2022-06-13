/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#1e136b'
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
