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

      backgroundImage: {
        "phone":  "url(assets/home/desktop/image-hero-phone.png)",
        "web-mobile":  "url(assets/home/mobile/image-web-design.jpg)",
        "app-mobile":  "url(assets/home/mobile/image-app-design.jpg)",
        "graphic-mobile":  "url(assets/home/mobile/image-graphic-design.jpg)",

        "web-tablet":  "url(assets/home/tablet/image-web-design.jpg)",
        "app-tablet":  "url(assets/home/tablet/image-app-design.jpg)",
        "graphic-tablet":  "url(assets/home/tablet/image-graphic-design.jpg)",

        "passionate-mobile":  "url(assets/home/desktop/illustration-passionate.svg)",
        "resource-mobile":  "url(assets/home/desktop/illustration-resourceful.svg)",
        "friendly-mobile":  "url(assets/home/desktop/illustration-friendly.svg)",
      },
    },
  },
  plugins: [],
}
