/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#3498db",
        customGreen: "#2ecc71",
        disablecolor: "#9A9A9A",
      },

      width: {
        300: "300px",
        100: "100px",
      },
      height: {
        300: "300px",
        100: "100px",
      },
      screens: {
        "sm-200": "200px",
      },
    },
  },
  plugins: [],
};
