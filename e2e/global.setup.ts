import { test as setup } from '@playwright/test';

setup("remove Storybook 'what's new' popup", async ({ page }) => {
  await page.goto('/');

  if (await page.isVisible("text='Learn what's new in Storybook'", { timeout: 10000 })) {
    await page.getByRole('button', { name: 'Dismiss notification' }).click();
  }
});
