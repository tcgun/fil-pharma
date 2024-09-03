// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['Exo 2', 'sans-serif'], // Google Fonts ile tanımladığınız fontu buraya ekleyin
      },
      colors: {
        'light-blue': '#ADD8E6', // Açık mavi renk kodu
      },
    },
  },
  plugins: [],
}
