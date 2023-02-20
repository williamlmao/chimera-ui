/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx, mdx}",
    "../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
    "../../packages/ui/**/*{.js,.ts,.jsx,.tsx,.mjs}",
  ],
  plugins: [],
};
