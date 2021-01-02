module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn2: "2s ease 0s normal forwards 1 fadeIn",
        fadeIn3: "3s ease 0s normal forwards 1 fadeIn",
        fadeIn4: "4s ease 0s normal forwards 1 fadeIn",
        fadeIn5: "5s ease 0s normal forwards 1 fadeIn"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0},
          "66%": { opacity: 0},
          "100%": { opacity: 1}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
