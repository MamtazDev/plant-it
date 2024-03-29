/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
        fieldWorkGeoRegular: "Fieldwork Geo Regular",
        fieldworkGeoLight: "Fieldwork Geo Light",
        fieldworkGeoBold: "Fieldwork Geo DemiBold",
        fieldworkGeoThin: "Fieldwork Geo Thin",
      },
      colors: {
        mint: "#B2DBBA",
        offWhite: "#F7F4F0",
        deepBlue: "#0E203A",
        lemon: "#EBF2BD",
      },
    },
  },
  plugins: [],
};
