import { defineConfig, devices } from '@playwright/test';

const IS_CI = process.env.CI === 'true';
const BASE_URL = 'http://localhost:9009';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: true,
  retries: IS_CI ? 2 : 0,
  workers: IS_CI ? 1 : undefined,
  outputDir: 'test-e2e-results',
  reporter: [['list'], ['html', { outputFolder: 'test-e2e-report' }]],
  timeout: 20000,
  use: {
    baseURL: BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run dev server before starting the tests */
  webServer: {
    command: 'npm run start',
    url: BASE_URL,
    reuseExistingServer: !IS_CI,
  },
});
