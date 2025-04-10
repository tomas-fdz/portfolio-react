// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  corePlugins: {
    // Habilita solo lo necesario para React
    preflight: false,
  },
  plugins: [],
}