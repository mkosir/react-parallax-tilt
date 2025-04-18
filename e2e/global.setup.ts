import { test as setup } from '@playwright/test';

setup("remove Storybook 'what's new' popup", async ({ page }) => {
  await page.goto('/');

  // Wait for sidebar to load.
  await page.getByRole('link', { name: 'Keep floating' }).waitFor({
    state: 'visible',
    timeout: 5000,
  });

  if (await page.isVisible("text='Learn what's new in Storybook'")) {
    await page.getByRole('button', { name: 'Dismiss notification' }).click();
  }
});
