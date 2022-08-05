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
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

module.exports = jestConfig;
