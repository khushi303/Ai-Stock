/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      backgroundImage: {
        'linearBorder': "linear-gradient(179.95deg, #67B9DE 22.59%, #1D96C9 56.84%, #00A3FF 99.95%, #1E82BB 99.96%)",
        'whiteGradient': "linear-gradient(123.9deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.03) 101.73%)",
      },
      colors: {
        'offBlack': "#010101"
      }
    },
  },
  plugins: [],
}

