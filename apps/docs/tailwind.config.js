/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  important: true,
  jit: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}",
    "./nextra-theme-docs/**/*.{js,tsx}",
    "./theme.config.jsx",
    "../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("chimera-tw-plugin"),
  ],
};
