/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      mytheme: {
        "base-100": "#FFFFFF"
      }
    },
  },
  plugins: [require("daisyui")],
}

