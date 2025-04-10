// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // 👉 Agregá esta línea

  corePlugins: {
    // Habilita solo lo necesario para React
    preflight: false,
  },
  plugins: [],
}
