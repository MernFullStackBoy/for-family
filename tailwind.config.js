/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "heart": "url(./src/images/heart.jpg)",
        "heart2": "url(./src/images/heart2.webp)",
      },
      animation: {
        "spinner": "spin 5s linear infinite",
        "pause": "pause"
      }
    },
  },
  plugins: [],
}