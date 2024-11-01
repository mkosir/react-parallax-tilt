import { test as setup } from '@playwright/test';

setup("remove Storybook 'what's new' popup", async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Keep floating' }).isVisible();

  console.log(
    '🔎 Log ~ setup ~ await page.isVisible("text=Learn whats new in Storybook"):',
    await page.isVisible("text='Learn what's new in Storybook'"),
  );

  if (await page.isVisible("text='Learn what's new in Storybook'")) {
    await page.getByRole('button', { name: 'Dismiss notification' }).click();
  }
});
