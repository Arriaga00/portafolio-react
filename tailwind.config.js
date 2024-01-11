/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'bangers': ['Bangers', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

