import { test, expect } from '@playwright/test';

import { OnMoveParams } from 'index';

// const FLAKINESS_TOLERANCE = 1.5;

test('should get max values of move params rendered when mouse is positioned at top left corner of tilt element', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Event - Params' }).click();

  const content = page.frameLocator('iframe[title="storybook-preview-iframe"]');

  await content.getByTestId('topLeft').hover({ position: { x: 10, y: 10 } });
  await expect(content.getByTestId('tiltAngleX')).toHaveText('-20.00° / -100.00%');
  await expect(content.getByTestId('tiltAngleY')).toHaveText('20.00° / 100.00%');
  await expect(content.getByTestId('glareAngle')).toHaveText('-45.00°');
  await expect(content.getByTestId('glareOpacity')).toHaveText('0.00');
});

test('should get max values of move params when mouse is positioned at corners of tilt element', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Event - Params' }).click();

  const content = page.frameLocator('iframe[title="storybook-preview-iframe"]');

  await content.getByTestId('topLeft').hover({ position: { x: 10, y: 10 } });
  const paramsString = await content.getByTestId('params').innerText();
  const params = JSON.parse(paramsString) as OnMoveParams;

  expect(params).toStrictEqual({
    tiltAngleX: -20,
    tiltAngleY: 20,
    tiltAngleXPercentage: -100,
    tiltAngleYPercentage: 100,
    glareAngle: -45,
    glareOpacity: 0,
  });

  // await content.getByTestId('topRight').hover({ position: { x: 10, y: 1 } });
  // await expect(content.getByTestId('tiltAngleX')).toHaveText('-20.00° / -100.00%');
  // await expect(content.getByTestId('tiltAngleY')).toHaveText('-20.00° / -100.00%');

  // await content.getByTestId('bottomRight').hover({ position: { x: 19, y: 19 } });
  // await expect(content.getByTestId('tiltAngleX')).toHaveText('20.00° / 100.00%');
  // await expect(content.getByTestId('tiltAngleY')).toHaveText('-20.00° / -100.00%');

  // await content.getByTestId('bottomLeft').hover({ position: { x: 1, y: 19 } });
  // await expect(content.getByTestId('tiltAngleX')).toHaveText('20.00° / 100.00%');
  // await expect(content.getByTestId('tiltAngleY')).toHaveText('20.00° / 100.00%');
});

// test('should get half of max value when mouse is positioned in the middle of tilt element', async ({ page }) => {
//   await page.goto('http://localhost:9009');
//   await page.getByRole('link', { name: 'Event - Params' }).click();

//   const content = page.frameLocator('iframe[title="storybook-preview-iframe"]');

//   await content.getByTestId('topMidLeft').hover({ position: { x: 10, y: 10 } });
//   await expect(content.getByTestId('tiltAngleX')).toHaveText('-9.65° / -48.24%');
// });
