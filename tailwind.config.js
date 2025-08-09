/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cc2b2b',
        primaryLight: '#d3c296', // lighter shade of primary for hover
        dark: '#212123',
        light: '#e3e3e4',
        lighter: '#f2f3f0',

        brandRed: '#fd3131',
        redLight: '#ff6666',
        redDark: '#b02020',

        neutralLight: '#fdfafa',
        neutralDark: '#1a1a1a',

        accentBlue: '#1e90ff',
        accentTeal: '#00c982',
        accentYellow: '#ffd166',
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out',
        slideUp: 'slideUp 0.3s ease-out',
      },
      keyframes: {
        slideIn: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
