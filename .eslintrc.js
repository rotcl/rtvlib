module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config`
  extends: ["rtvlib"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
