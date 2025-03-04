/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],  // ✅ from old config
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"], // ✅ from old config
      },
    },
  },
  plugins: [],
}
