/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        world: `url('https://i.ibb.co.com/9VM1CPx/csm-Winter-02-e702758b7e.jpg')`,
      },
      colors: {
        darkGray: "#2E2E2E",
        lightGray: "#F5F5F5",
        softGreen: "#4CAF50",
        warmOrange: "#FFB74D",
      },
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
      },
      // colors: {
      //   darkGray: "#333333",
      //   lightGray: "#FFFFFF",
      //   brightBlue : "#007BFF",
      //   warmOrange: "#FFC107",
      // },
    },
  },
  plugins: [],
};
