/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown100: "#8e3200",
        brown80: "#a55b33",
        brown60: "#bb8466",
        brown40: "#d2ad99",
        brown20: "#e8d6cc",
        brown10: "#f4ebe6",
        brown5: "#f9f5f2",
        cream: "#ffebc1",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        recoleta: ["Recoleta"],
      },
    },
  },
  plugins: [],
};
