import { Config } from 'jest';

const jestConfig: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
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
};

module.exports = jestConfig;
