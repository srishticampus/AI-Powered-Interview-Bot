/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        lexiBlue: {
          800: '#384371',
          500: '#1967D2'
        }
      }
    },
  },
  plugins: [],
}

