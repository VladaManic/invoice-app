/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        'spartan-medium': ['Spartan Medium', 'sans-serif'],
        'spartan-bold': ['Spartan Bold', 'sans-serif']
      },
      colors: {
        lightBg: '#F8F8F8',
        asideBg: '#373B53',
        packmanUp: '#7C5DFA',
        packmanDown: '#9277FF',
      }
    },
  },
  plugins: [],
}

