import { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

module.exports = jestConfig;
