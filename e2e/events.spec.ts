import { test, expect } from '@playwright/test';

const IFRAME_LOCATOR = 'iframe[title="storybook-preview-iframe"]';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Event - Params' }).click();
});

test('should trigger onMove event when hovers tilt element', async ({ page }) => {
  const content = page.frameLocator(IFRAME_LOCATOR);

  await content.getByTestId('topMidLeft').hover({ position: { x: 10, y: 10 } });
  await expect(content.getByTestId('evenDescription')).toHaveText(
    "Event 'onMove' triggered by 'mousemove' event type.",
  );
});
