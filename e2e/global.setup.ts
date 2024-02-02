import { test as setup } from '@playwright/test';

setup("remove Storybook 'what's new' popup", async ({ page }) => {
  await page.goto('/');

  if (await page.isVisible("button:has-text('Dismiss notification')")) {
    await page.getByRole('button', { name: 'Dismiss notification' }).click();
  }
});
