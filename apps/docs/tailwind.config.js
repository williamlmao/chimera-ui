/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,

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
  ],
};
