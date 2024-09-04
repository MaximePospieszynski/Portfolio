/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,scss,ts}", // Inclut tous les fichiers HTML et TypeScript
  ],
  theme: {
    extend: {
      fontFamily: {
        fontArtifica : ["Artifica", "sans-serif"],
        fontKaiseiDecol: ["KaiseiDecol", "sans-serif"],
      },
      colors: {
        bgRouge: "#201314",
        h1Rouge: "#FFD1D9",
        borderRouge: "#500F1C",
        bgButton: "#E5484D",
        borderButton: "#B54548",
        textRouge: "#FF9592",
        boxRouge: "#191111",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}