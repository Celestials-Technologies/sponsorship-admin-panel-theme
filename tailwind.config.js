/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgPrimary: "#191153",
        primary: "#FFA51F",
        inputText: "#333333",
        btnPrimary: "#0E9E59",
        btnSecondary: "#E9901A",
        textPrimary: "#191153",
        sideBarBg: "#ffffff1a",
        "black-800": "#151515",
        translucentWhite: "#ffffff33",
      },
    },
  },
  plugins: [],
};
