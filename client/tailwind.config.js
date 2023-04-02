/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "gray-300-opacity-45": "rgba(222, 226, 230, 0.45)",
      },
      keyframes: {
      "bounces": {
          "0%": {
            transform: "translateX(0) scale(1)",
          },
          "50%": {
            transform: "translateX(-4px) scale(1.03)",
          },
          "75%": {
            transform: "translateX(-2px) scale(1.03)",
          },
          "100%": {
            transform: "translateX(0) scale(1)",
          },          
        },
      },
      animation: {
        "bounces": "bounces 7000ms ease-in-out infinite"
      },
    },
  },
  plugins: [],
};
