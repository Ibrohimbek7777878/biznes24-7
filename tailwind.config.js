/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bank: {
          primary: "#0052CC",
          dark: "#172B4D",
          light: "#F4F5F7",
          success: "#36B37E",
          error: "#FF5630",
        },
      },
    },
  },
  plugins: [],
};
