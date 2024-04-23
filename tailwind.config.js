/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        darkGradient:
          "linear-gradient(0deg, rgba(32,32,32,0.7) 0%, rgba(32,32,32,1) 5%, rgba(32,32,32,1) 95%, rgba(32,32,32,0.7) 100%);",
      },
      colors: {
        noir: "#202020",
        grisTxt: "#454545",
        littleDarkOrange: "#F9E4D0",
        littleDarkPurple: "#E9E2FA",
        littleDarkGreen: "#D9E9D9",
        mainColor: "#FF9E3B",
        DarkmainColor: "#E17A10",
        lightOrange: "#FFF5EB",
        lightGreen: "#EBF4EB",
        lightPurple: "#F4F0FD",
        mainGreen: "#077069",
        mainPurple: "#8052E4",
      },
    },
    borderRadius: {
      none: "0",
      sm: "8px",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "12px",
      lg: "24px",
      full: "9999px",
      large: "34px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      baloo: ["baloo"],
    },
  },
  plugins: [],
};
