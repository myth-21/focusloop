/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#182230",
        mist: "#f5f7fb",
        sage: "#7bb49d",
        coral: "#f08f7f",
        lilac: "#a99cf3",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(30, 41, 59, 0.12)",
      },
    },
  },
  plugins: [],
};
