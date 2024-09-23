/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        sans: ['SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: colors.purple,
        secondary: colors.pink,
        dark: {
          DEFAULT: '#121212',
          100: '#1E1E1E',
          200: '#2A2A2A',
          300: '#363636',
        }
      },
    },
  },
  plugins: [],
}

