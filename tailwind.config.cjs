/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Odasans: ["Odasans Semibold", "sans-serif"],
        Wulkan: ["Wulkan", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "rgba(var(--background))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tertiary: "rgba(var(--tertiary))",
        highlight: "rgba(var(--highlight))",
        brown: "rgba(var(--brown))",
        beige: "rgba(var(--beige))",
        offWhite: "rgba(var(--offWhite))"
      },
    },
  },
};
