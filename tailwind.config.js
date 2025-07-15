/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Itt definiáljuk az egyedi színeket a kép alapján
        'seaside-blue': '#22A3B3', // Egy türkizesebb kék a medencéhez
        'seaside-green': '#4CAF50', // Egy általános zöld a növényzethez
        'seaside-light-green': '#8BC34A', // Egy világosabb zöld
        'seaside-beige': '#F5DEB3', // Egy homokszínű árnyalat
        'seaside-dark-beige': '#D2B48C', // Sötétebb bézs
        'seaside-white': '#FFFFFF', // Tiszta fehér
        'seaside-light-gray': '#F0F0F0', // Nagyon világos szürke
        'seaside-dark-text': '#333333', // Sötét szöveg szín
      },
      backgroundImage: {
        'hero-pattern': "url('/path/to/your/image.jpg')", // Itt megadhatod a háttérkép elérési útját
      }
    },
  },
  plugins: [],
}