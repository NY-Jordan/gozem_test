/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'notif_color': '#FFF4E3',
      },
    },
  },
  
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}