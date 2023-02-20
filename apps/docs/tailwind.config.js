/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  important: true,
  jit: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./examples/**/*.{js,ts,jsx,tsx,mdx}",
    "./nextra-theme-docs/**/*.{js,tsx}",
    "./theme.config.jsx",
    "../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
    "../../packages/@chimera-ui/tw-plugin/**/*{.js,.ts,.jsx,.tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      colors: {
        "base-content-2": "var(--base-content-2)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@chimera-ui/tw-plugin"),
  ],
};
