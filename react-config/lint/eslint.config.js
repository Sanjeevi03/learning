module.exports = {
  ignorePatterns: ["src/*"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y"
  ],
  rules: {
    "no-console":"error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
};
