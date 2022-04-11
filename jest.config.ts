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

  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|sass|scss)$': 'jest-transform-css',
  },

  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
