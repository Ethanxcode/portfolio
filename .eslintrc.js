module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "next",
		"next/core-web-vitals"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
		"react/no-unescaped-entities": "off",
		"react-hooks/exhaustive-deps": "off",
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        bracketSameLine: false,
        bracketSpacing: true,
        insertPragma: false,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        requirePragma: false,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: false,
        semi: true,
        trailingComma: "none",
        singleQuote: true,
        endOfLine: "crlf",
        // eslint-disable-next-line
      },
    ],
  },
};
