/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(94.06deg, #CE1919 -1.21%, #FF5252 58.66%, #FFA3A3 116.84%)',
      },
    },
  },
  plugins: [],
}