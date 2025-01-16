import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */
export default [
 { files: ['**/*.{js,mjs,cjs,jsx}'] },
 { languageOptions: { globals: {
    ...globals.browser, // Include browser globals
    ...globals.node,    // Include Node.js globals (e.g., __dirname, module, require)
    ...globals.jest,    // Include Jest globals (e.g., describe, it, expect)
  }, } },
 pluginJs.configs.recommended,
 {
  ...pluginReact.configs.flat.recommended, // React recommended config
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
 },
 {
  plugins: {
    jest: pluginJest, // Jest plugin
  },
  rules: {
    // Jest-specific rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
},
];
