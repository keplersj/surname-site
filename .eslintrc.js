module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "prettier/react"
  ],
  settings: {
    react: {
      version: "detect" // React version. "detect" automatically picks the version you have installed.
    }
  },
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
