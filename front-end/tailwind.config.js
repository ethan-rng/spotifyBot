/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E2E9D9",
        secondary: "#EB5174",
        tertiary: "#AAAAAA",
        gray: {
          400: "#171717",
          300: "#1E1E1E",
          200: "#222222",
          100: "#6C6C6C",
          50: "#848484",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionDuration: {
        600: "600ms",
      },
      width: {
        "300-custom": "260px",
      },
      height: {
        "300-custom": "300px",
        "18-custom": "90px",
      },
      margin: {
        "300-custom": "260px",
      },
      gridTemplateColumns: {
        player: "85px repeat(10, minmax(0, 1fr)) 85px",
        playlist: "repeat(6, minmax(0, 1fr))",
      },
    },

    animation: {
      slideup: "slideup 1s ease-in-out",
      slidedown: "slidedown 1s ease-in-out",
      slideleft: "slideleft 1s ease-in-out",
      slideright: "slideright 1s ease-in-out",
      wave: "wave 1.2s linear infinite",
      slowfade: "slowfade 2.2s ease-in-out",
    },

    keyframes: {
      slowfade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideup: {
        from: { opacity: 0, transform: "translateY(25%)" },
        to: { opacity: 1, transform: "none" },
      },
      slidedown: {
        from: { opacity: 0, transform: "translateY(-25%)" },
        to: { opacity: 1, transform: "none" },
      },
      slideleft: {
        from: { opacity: 0, transform: "translateX(-20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      slideright: {
        from: { opacity: 0, transform: "translateX(20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      wave: {
        "0%": { transform: "scale(0)" },
        "50%": { transform: "scale(1)" },
        "100%": { transform: "scale(0)" },
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
