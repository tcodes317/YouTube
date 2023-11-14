/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm: "480px",
      ssm: "699px",
      md: "768px",
      mmd: "",
      lg: "976px",
      llg: "",
      xl: "1440px",
      xxl: ""
    },
    extend: {
      backgroundColor: rgba()
    },
  },
  plugins: [],
}