/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.{vue, js}',
  './resources/*.{vue, js}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}
