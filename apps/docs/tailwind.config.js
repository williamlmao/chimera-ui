/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./examples/**/*.{js,ts,jsx,tsx,mdx}",
    "./nextra-theme-docs/**/*.{js,tsx}",
    "./theme.config.jsx",
    "../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
    "../../packages/components/**/*{.js,.ts,.jsx,.tsx,.mjs}",
  ],
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@chimera-ui/tw-plugin"),
    require("@tailwindcss/line-clamp"),
  ],
};
