const eslintConfig = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },

  plugins: ['@typescript-eslint', 'testing-library', 'jest-dom', 'jest', 'import'],

  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:no-array-reduce/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:playwright/recommended',
    'plugin:storybook/recommended',
  ],

  rules: {
    'react/prop-types': 'off',

    'prefer-template': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'spaced-comment': 'error',
    'id-length': ['error', { min: 2, properties: 'never' }],

    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    '@typescript-eslint/restrict-template-expressions': 'off',

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

    'jest/valid-title': [
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

    'import/no-default-export': 'error',
    'import/order': [
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
  },

  overrides: [
    {
      files: ['stories/**/*.demozap.*', '**/*.stories.*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.spec.*', 'global.setup.ts'],
      rules: {
        // Turn off (ideally all the rules) from eslint-plugin-testing-library plugin, since it's not applicable for Playwright tests.
        // 'testing-library/*': 'off',
        'testing-library/prefer-screen-queries': 'off',
      },
    },
    {
      files: ['**/*.test.*'],
      rules: {
        // Turn off all the rules from eslint-plugin-playwright plugin, since it's not applicable for Jest tests.
        // 'playwright/*': 'off',
        'playwright/missing-playwright-await': 'off',
        'playwright/no-standalone-expect': 'off',
      },
    },
  ],

  // ESlint default behavior ignores file/folders starting with "." - https://github.com/eslint/eslint/issues/10341
  ignorePatterns: ['!.*', 'dist', 'node_modules', 'test-e2e-report', 'test-e2e-results', 'test-unit-report'],

  settings: {
    'import/resolver': {
      typescript: { project: 'tsconfigs/tsconfig.base.json' },
    },
    react: {
      version: 'detect',
    },
  },
};

module.exports = eslintConfig;
