/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerBg: "#7025FB",
        homeBg: "#FD5334",
      },
    },
  },
  plugins: [],
};
