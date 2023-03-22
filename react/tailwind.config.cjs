/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        svh: "100svh",
        svw: "100svw",
      },
    },
  },
  plugins: [],
};
