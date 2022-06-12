/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "peach":  "#E7816B",
        "myBlack": "#1D1C1E",
        "myWhite": "#FFFFFF",
        "lightPeach":  "#FFAD9B",
        "myDarkGrey": "#333136",
        "myLightGrey": "#F1F3F5"
      },

      fontFamily: {
        "jost":  ['Jost', 'sans-serif']
      },
    },
  },
  plugins: [],
}
