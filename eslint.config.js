import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Enables Prettier as an ESLint rule
      "prettier/prettier": "error",
    },
  },
  pluginJs.configs.recommended, // JavaScript rules
  pluginReact.configs.flat.recommended, // React rules
  configPrettier, // Disables conflicting ESLint rules with Prettier
];
