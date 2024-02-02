import { test as setup } from '@playwright/test';

setup("remove Storybook 'what's new' popup", async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Dismiss notification' }).click();
});
