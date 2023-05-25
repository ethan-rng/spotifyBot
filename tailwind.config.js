/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E2E9D9",
        secondary: "#EB5174",
        gray: {
          400: '#171717',
          300: '#1E1E1E',
          200: '#222222',
          100: '#6C6C6C',
          50: '#848484',
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionDuration: { 
        600: "600ms",
      },
      width: {  
        '300-custom': '260px',
      },
      height: { 
        '300-custom': '300px',
        '18-custom':'90px'
      },
      margin: {
        '300-custom': '260px',
      },
      gridTemplateColumns: {  
        player: '85px repeat(10, minmax(0, 1fr)) 85px',
        playlist: 'repeat(6, minmax(0, 1fr))',
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
