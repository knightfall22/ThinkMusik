/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-light": "#191D31",
        "primary-dark": "#131627",
        "secondary-light": "#50B1D1",
        "secondary-grey": "#D1D2D6",
        "nav-color": "#4777E1",
        "coming-soon-color": "#3375D9",
      },
    },
  },
  plugins: [],
};
