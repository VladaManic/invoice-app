/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
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
        draftDark: 'rgba(223, 227, 250, 0.1)',
        checkboxViolet: '#DFE3FA',
        deleteRed: '#EC5757',
        singleGrey: '#7E88C3',
        tableGrey: '#F9FAFE',
        overlayGrey: 'rgba(101, 101, 101, 0.5)',
        draftText: '#888EB0',
        errorRed: 'red',
        gradientGrey: 'rgba(218, 218, 218, 1)',
        themeDark: '#141625',
        asideDark: '#1E2139',

      }
    },
  },
  plugins: [],
}

