import { test as setup } from '@playwright/test';

setup("remove Storybook 'what's new' popup", async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Keep floating' }).isVisible();

  console.log(
    '🔎 Log ~ setup ~ page.getByRole(link, { name: Keep floating }).isVisible():',
    page.getByRole('link', { name: 'Keep floating' }).isVisible(),
  );

  await page.getByRole('link', { name: 'Keep floating' }).waitFor({
    state: 'visible',
    timeout: 5000,
  });

  console.log(
    '🔎 Log ~ setup ~ await page.getByTestId(topMidLeft).isVisible():',
    await page.getByTestId('topMidLeft').isVisible(),
  );

  console.log(
    '🔎 Log ~ setup ~ await page.isVisible("text=Learn whats new in Storybook"):',
    await page.isVisible("text='Learn what's new in Storybook'"),
  );

  if (await page.isVisible("text='Learn what's new in Storybook'")) {
    await page.getByRole('button', { name: 'Dismiss notification' }).click();
  }
});
