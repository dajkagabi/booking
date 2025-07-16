/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ezzel mondod meg, hogy dark mode toggle class-al működjön
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // igazítsd a saját fájljaidhoz
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
