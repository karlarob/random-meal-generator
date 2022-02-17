module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixelBold: ["Pixel-Burguer", "cursive"],
        pixelMix: ["Pixel-Mix", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "move-bkg": "move 300s infinite linear",
      },
    },
  },
  plugins: [],
};
