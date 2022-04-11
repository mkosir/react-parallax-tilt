module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],

  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|sass|scss)$': 'jest-transform-css',
  },

  testRegex: '(/test/.*|\\.)\\.(test|spec)\\.(ts|tsx|js)$',

  moduleFileExtensions: ['ts', 'tsx', 'js'],

  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
