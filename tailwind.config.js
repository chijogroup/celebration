/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./_includes/*.html",
    "./_layouts/*.html",
    "./_pages/*.html",
    "./_posts/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
