module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}','./public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['coffee', 'light'],
  },
}
