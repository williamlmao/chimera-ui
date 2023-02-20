const plugin = require("tailwindcss/plugin");

const chimeraPlugin = plugin(function ({ addUtilities, theme, e }) {}, {
  theme: {
    extend: {
      colors: {
        test: "#FF0000",
      },
    },
  },
});

module.exports = chimeraPlugin;
