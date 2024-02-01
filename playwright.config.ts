import { defineConfig, devices } from '@playwright/test';

const IS_CI = process.env.CI === 'true';
const BASE_URL = 'http://localhost:9009';
const TIMEOUT_SECONDS = IS_CI ? 15 : 5;

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: IS_CI,
  retries: IS_CI ? 2 : 0,
  workers: IS_CI ? 1 : undefined,
  outputDir: 'test-e2e-results',
  reporter: [['list'], ['html', { outputFolder: 'test-e2e-report' }]],
  timeout: TIMEOUT_SECONDS * 1000,
  use: {
    baseURL: BASE_URL,
    trace: 'on',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /global.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['setup'],
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['setup'],
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    //   dependencies: ['setup'],
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    //   dependencies: ['setup'],
    // },
  ],

  /* Run dev server before starting the tests */
  webServer: {
    command: 'npm run start',
    url: BASE_URL,
    reuseExistingServer: !IS_CI,
  },
});
