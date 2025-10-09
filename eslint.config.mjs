import eslint from '@eslint/js';
import eslintPluginVitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import * as eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginJestDom from 'eslint-plugin-jest-dom';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import * as tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  eslint.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReactHooks.configs.flat.recommended,
  eslintPluginTestingLibrary.configs['flat/react'],
  eslintPluginVitest.configs.recommended,
  eslintPluginJestDom.configs['flat/recommended'],
  eslintPluginPlaywright.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  // https://eslint.org/docs/latest/use/configure/configuration-files#excluding-files-with-ignores
  // When in their own config block without files, it tells ESLint to ignore those files.
  // When in a config block with files, it stops that specific config block from affecting those ignored files.
  {
    ignores: ['!.*', '**/*.css', 'dist', 'node_modules', 'test-e2e-report', 'test-e2e-results', 'test-unit-report'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import-x/resolver-next': [createTypeScriptImportResolver()],
      react: { version: 'detect' },
    },
  },
  {
    files: ['**/*.{js,ts,tsx}'],

    rules: {
      'react/react-in-jsx-scope': 'off',

      'prefer-template': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'spaced-comment': 'error',
      'no-console': 'error',

      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          // Generic type parameter must start with letter T, followed by any uppercase letter.
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: { regex: '^T[A-Z]', match: true },
        },
      ],

      'import-x/no-default-export': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'vitest/valid-title': [
        'error',
        {
          mustMatch: {
            it: [/should.*when/u.source, "Test title must include 'should' and 'when'"],
          },
        },
      ],

      'playwright/valid-title': [
        'error',
        {
          mustMatch: {
            test: [/should.*when/u.source, "Test title must include 'should' and 'when'"],
          },
        },
      ],
    },
  },
  {
    files: ['stories/**/*.demozap.*', '**/*.stories.*'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.spec.*', 'e2e/global.setup.ts'],
    rules: {
      // Turn off (ideally all the rules) from eslint-plugin-testing-library plugin, since it's not applicable for Playwright tests.
      // 'testing-library/*': 'off',
      'testing-library/prefer-screen-queries': 'off',
      'testing-library/no-node-access': 'off',
    },
  },
  {
    files: ['**/*.test.*'],
    rules: {
      // Turn off all the rules from eslint-plugin-playwright plugin, since it's not applicable for Vitest tests.
      // 'playwright/*': 'off',
      'playwright/missing-playwright-await': 'off',
      'playwright/no-standalone-expect': 'off',
    },
  },
);
