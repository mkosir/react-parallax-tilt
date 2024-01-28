import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get move params', async ({ page }) => {
  await page.goto('http://localhost:9009');
  await page.getByRole('link', { name: 'Event - Params' }).click();

  const content = page.frameLocator('iframe[title="storybook-preview-iframe"]');

  await content.getByText('Axis x').hover();

  await expect(content.getByTestId('tiltAngleX')).toHaveText('-15.61° / -78.06%');
});
