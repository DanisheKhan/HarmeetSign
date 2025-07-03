/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0f0f0f",
          secondary: "#1a1a1a",
          tertiary: "#2d2d2d",
        },
        gold: {
          primary: "#d4af37",
          light: "#ffd700",
          dark: "#b8860b",
        },
      },
    },
  },
  plugins: [],
};
