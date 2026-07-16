import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    },
    rules: {
      // Internal links pass through sitePath(), which applies the static Pages base path.
      'svelte/no-navigation-without-resolve': 'off'
    }
  },
  {
    files: [
      'src/lib/components/SearchDialog.svelte',
      'src/routes/editions/**/+page.svelte'
    ],
    rules: {
      'svelte/no-at-html-tags': 'off'
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    ignores: ['build/**', '.svelte-kit/**', 'node_modules/**']
  }
);
