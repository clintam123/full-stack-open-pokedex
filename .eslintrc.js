module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    "jest/globals": true,
    "cypress/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest", "cypress"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": "error",
    "react/prop-types": 0,
  },
};
