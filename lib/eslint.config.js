import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
 { files: ['**/*.{js,mjs,cjs,jsx}'] },
 { languageOptions: { globals: {
    ...globals.browser, // Include browser globals
    ...globals.node,    // Include Node.js globals (e.g., __dirname, module, require)
    ...globals.jest,    // Include Jest globals (e.g., describe, it, expect)
  }, } },
 pluginJs.configs.recommended,
 pluginReact.configs.flat.recommended,
 {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
 },
];
