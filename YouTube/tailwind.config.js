/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm: "480px",
      ssm: "490px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {},
  },
  plugins: [],
}