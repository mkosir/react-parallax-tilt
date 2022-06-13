import { Config } from 'jest';

const jestConfig: Config = {
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
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

module.exports = jestConfig;
