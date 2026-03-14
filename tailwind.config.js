/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        about: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#00C9A7',
        secondary: '#A4B43B',
        dark: '#1D2939',
        grayText: '#475467',
      },
    },
  },
  plugins: [],
}