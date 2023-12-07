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
        'spartanMedium': ['Spartan Medium', 'sans-serif'],
        'spartanBold': ['Spartan Bold', 'sans-serif']
      },
      colors: {
        lightBg: '#F8F8F8',
        defaultText: '#858BB2',
        defaultBlack: '#0C0D16',
        defaultWhite: '#FFF',
        asideBg: '#373B53',
        packmanUp: '#7C5DFA',
        packmanDown: '#9277FF',
        paidGreen: '#33D69F',
        paidBg: 'rgba(51, 214, 159, 0.1)',
        pendingOrange: '#FF8F00',
        pendingBg: 'rgba(255, 143, 0, 0.1)',
        draftGrey: '#373B53',
        draftBg: 'rgba(55, 59, 83, 0.1)',
        checkboxViolet: '#DFE3FA',
      }
    },
  },
  plugins: [],
}

