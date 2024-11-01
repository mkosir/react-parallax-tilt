import { test as setup } from '@playwright/test';

setup("remove Storybook 'what's new' popup", async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Event - Params' }).isVisible();

  console.log(
    '🔎 Log ~ setup ~ page.getByRole(link, { name: Keep floating }).isVisible():',
    page.getByRole('link', { name: 'Keep floating' }).isVisible(),
  );

  await page.getByTestId('topMidLeft').waitFor({
    state: 'visible', // Waits for the element to be visible
    timeout: 5000, // Timeout in milliseconds
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
