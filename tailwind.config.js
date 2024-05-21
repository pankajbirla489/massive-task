/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fdfdfd",
          "200": "#8c8c8c",
          "300": "#1c1b1f",
          "400": "#161514",
          "500": "#0d0d0d",
        },
        white: "#fff",
        silver: "#c0c0c0",
        darkslategray: {
          "100": "#4b4b4b",
          "200": "#484644",
        },
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#e6e6e6",
        },
        seagreen: {
          "100": "#3d946e",
          "200": "#186e47",
          "300": "rgba(61, 148, 110, 0.09)",
        },
        whitesmoke: {
          "100": "#e8f0eb",
          "200": "rgba(232, 240, 235, 0.5)",
        },
        lightgray: "#cfd6d1",
        darkgray: "#9c9c9b",
        floralwhite: "#fffaf4",
      },
      spacing: {},
      fontFamily: {
        "qanelas-soft": "'Qanelas Soft'",
        montserrat: "Montserrat",
        manrope: "Manrope",
      },
      borderRadius: {
        "29xl": "48px",
        "45xl": "64px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      lgi: "19px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
