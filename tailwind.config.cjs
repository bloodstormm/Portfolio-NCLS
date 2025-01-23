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
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
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
