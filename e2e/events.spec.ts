import { test, expect } from '@playwright/test';

import { getIframeContent } from './consts';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Event - Params' }).click();
});

test("should trigger 'onMove' event with 'mousemove' event type when mouse hovers tilt element", async ({ page }) => {
  const content = getIframeContent(page);

  await content.getByTestId('topMidLeft').hover({ position: { x: 10, y: 10 } });
  await expect(content.getByTestId('evenDescription')).toHaveText(
    "Event 'onMove' triggered by 'mousemove' event type.",
  );
});

test("should trigger 'onMove' event with 'autoreset' event type when mouse leaves tilt element", async ({ page }) => {
  const content = getIframeContent(page);

  await content.getByTestId('topMidLeft').hover({ position: { x: 10, y: 10 } });
  await content.getByText('Track events:').hover();
  await expect(content.getByTestId('evenDescription')).toHaveText(
    "Event 'onMove' triggered by 'autoreset' event type.",
  );
});

test("should trigger 'onEnter' event with 'mouseenter' event type when mouse enters tilt element", async ({ page }) => {
  const content = getIframeContent(page);

  await content.getByLabel('onMove').uncheck();
  await content.getByTestId('topMidLeft').hover({ position: { x: 10, y: 10 } });
  await expect(content.getByTestId('evenDescription')).toHaveText(
    "Event 'onEnter' triggered by 'mouseenter' event type.",
  );
});

test("should trigger 'onLeave' event with 'mouseleave' event type when mouse enters tilt element", async ({ page }) => {
  const content = getIframeContent(page);

  await content.getByLabel('onMove').uncheck();
  await content.getByTestId('topMidLeft').hover({ position: { x: 10, y: 10 } });
  await content.getByText('Track events:').hover();
  await expect(content.getByTestId('evenDescription')).toHaveText(
    "Event 'onLeave' triggered by 'mouseleave' event type.",
  );
});
