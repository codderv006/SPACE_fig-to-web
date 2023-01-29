/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        tomato: "#ff5a5a",
        snow: "#fff9f9",
        black: "#000",
        red: { "100": "#ff0000", "200": "#da0000" },
      },
      fontFamily: {
        "kumar-one": "'Kumar One'",
        kokoro: "Kokoro",
        aldrich: "Aldrich",
      },
      borderRadius: { base: "30px" },
    },
    fontSize: { base: "15px", lg: "35px", xl: "100px" },
    screens: { md: { max: "960px" }, sm: { max: "420px" } },
  },
  corePlugins: { preflight: false },
};
