/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        politiciandb: "url('/public/vercel.svg')",
      },
      keyframes: {
        hop: {
          "0%, 100%": { transform: "scale(1);" },
          "50%": { transform: "scale(1.5);" },
        },
      },
      animation: {
        hop: "hop 1s ease-in-out",
      },
    },
  },
  plugins: [],
});
