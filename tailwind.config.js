/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        'linearBorder': "linear-gradient(179.95deg, #67B9DE 22.59%, #1D96C9 56.84%, #00A3FF 99.95%, #1E82BB 99.96%)",
        'whiteGradient': "linear-gradient(123.9deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.03) 101.73%)",
        'blueBtnGradient': "linear-gradient(130.02deg, #00FFE1 12.76%, #6E5DF6 91.81%)",
        'videoBorderGradient': "linear-gradient(175.68deg, #00FFE1 39.97%, #6E5DF6 107.69%)",
        'purpleGradient': "linear-gradient(0deg, #8753A4, #8753A4),linear-gradient(260.94deg, #F07CBD 9.82%, #8753A4 104.93%)",
        'textGradient': "url(./assets/images/png/dancer.png)",
        'layerBlackGradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 7.25%, #010609 110.64%)",
        'heroAiStock': "url(./assets/images/webp/hero.webp)",
        'dining': "url(./assets/images/png/dining.png)",
      },
      colors: {
        'offBlack': "#010101",
        'offWhite': "#FFFFFF12",
        'zircon': "#FAFBFF",
        'lightBlack': "#0000000F",
        'guardsmanRed': "#C20000"
      },
      fontSize: {
        'custom-xl': '26px',
        'custom-2xl': '28px',
        'custom-3xl': '30px',
        'custom-xxl': '52px',
      },
    },
  },
  plugins: [],
}

//         'videoBorderGradient': "",