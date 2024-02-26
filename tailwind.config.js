/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        buttonColor: "#7164f0",
        tabColor: "#e8e6f9",
        grayText: "#6D757C",
      },
      boxShadow: {
        '3xl': '0 0 1rem 0.3rem rgba(0, 0, 0, 0.3)',
      },
      zIndex: {
        "8" : "8",
      }
    },
  },
  plugins: [],
}