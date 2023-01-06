module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-chimera`
  extends: ["chimera"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
