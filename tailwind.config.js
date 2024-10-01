/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {
      screens: {
        large: "1406px",
        "3xl": "1180px",
        normal: "1000px",
        m: "768px",
        petit: "500px",
      },
      fontFamily: {
        fontArtifica: ["Artifica", "sans-serif"],
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn_custom": {
          padding: "0.20rem 0.5rem",
          fontWeight: "700",
          borderWidth: "2px",
          borderColor: "#374151",
          boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.2)",
          backgroundImage: "linear-gradient(to bottom right, #191111, #500F1C)",
        },
      });
    },
  ],
};
