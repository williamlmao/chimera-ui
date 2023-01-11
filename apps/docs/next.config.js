const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  ignoreBuildErrors: true,
});

module.exports = withNextra();
