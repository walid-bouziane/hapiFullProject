module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-console": 0
  }
};
