module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: '#264653',
        persianGreen: '#2a9d8f',
        orangeYellow: '#e9c46a',
        sandyBrown: '#f4a261',
        burntSienna: '#e76f51',
        dark: {
          900: '#0f172a',  // very dark (mostly black) background
          800: '#1e293b',  // dark grey used for the navbar and footer
          700: '#334155',  // lighter grey for card backgrounds
        },
      },
      fontFamily: {
        sans: ['UI-Sans-Serif', 'system-ui'],
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadein 1s ease-out',
      }
    },
  },
  plugins: [],
}
