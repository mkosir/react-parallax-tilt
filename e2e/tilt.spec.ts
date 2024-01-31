import { test, expect } from '@playwright/test';

import { OnMoveParams } from 'index';

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

  const topLeftParamsString = await content.getByTestId('params').innerText();
  const topLeftParams = JSON.parse(topLeftParamsString) as OnMoveParams;

  // const TOP_LEFT_FLAKINESS_TOLERANCE = 0;

  expect(topLeftParams.tiltAngleX).toBeLessThanOrEqual(-20);
  expect(topLeftParams.tiltAngleY).toBeGreaterThanOrEqual(20);
  expect(topLeftParams.tiltAngleXPercentage).toBeLessThanOrEqual(-100);
  expect(topLeftParams.tiltAngleYPercentage).toBeGreaterThanOrEqual(100);
  expect(topLeftParams.glareAngle).toBeLessThanOrEqual(-45);
  expect(topLeftParams.glareOpacity).toBe(0);

  await content.getByTestId('topRight').hover({ position: { x: 25, y: 10 } });

  const topRightParamsString = await content.getByTestId('params').innerText();
  const topRightParams = JSON.parse(topRightParamsString) as OnMoveParams;

  // const TOP_RIGHT_FLAKINESS_TOLERANCE = 1.5;

  expect(topRightParams.tiltAngleX).toBeLessThanOrEqual(-20);
  expect(topRightParams.tiltAngleY).toBeLessThanOrEqual(-19);
  expect(topRightParams.tiltAngleXPercentage).toBeLessThanOrEqual(-100);
  expect(topRightParams.tiltAngleYPercentage).toBeLessThanOrEqual(-95);
  expect(topRightParams.glareAngle).toBeGreaterThanOrEqual(44);
  expect(topRightParams.glareOpacity).toBe(0);

  await content.getByTestId('bottomRight').hover({ position: { x: 19, y: 19 } });

  const bottomRightParamsString = await content.getByTestId('params').innerText();
  const bottomRightParams = JSON.parse(bottomRightParamsString) as OnMoveParams;

  // const TOP_RIGHT_FLAKINESS_TOLERANCE = 1.5;

  expect(bottomRightParams.tiltAngleX).toBeLessThanOrEqual(20);
  expect(bottomRightParams.tiltAngleY).toBeLessThanOrEqual(-20);
  expect(bottomRightParams.tiltAngleXPercentage).toBeLessThanOrEqual(-100);
  expect(bottomRightParams.tiltAngleYPercentage).toBeLessThanOrEqual(-100);
  expect(bottomRightParams.glareAngle).toBeGreaterThanOrEqual(44);
  expect(bottomRightParams.glareOpacity).toBe(0);

  await content.getByTestId('bottomLeft').hover({ position: { x: 1, y: 19 } });

  const bottomLeftParamsString = await content.getByTestId('params').innerText();
  const bottomLeftParams = JSON.parse(bottomLeftParamsString) as OnMoveParams;

  // const TOP_RIGHT_FLAKINESS_TOLERANCE = 1.5;

  expect(bottomLeftParams.tiltAngleX).toBeLessThanOrEqual(20);
  expect(bottomLeftParams.tiltAngleY).toBeLessThanOrEqual(20);
  expect(bottomLeftParams.tiltAngleXPercentage).toBeLessThanOrEqual(100);
  expect(bottomLeftParams.tiltAngleYPercentage).toBeLessThanOrEqual(100);
  expect(bottomLeftParams.glareAngle).toBeGreaterThanOrEqual(44);
  expect(bottomLeftParams.glareOpacity).toBe(0);
});

// const testEEEE = () => {
//   await page.goto('http://localhost:9009');
//   await page.getByRole('link', { name: 'Event - Params' }).click();

//   const content = page.frameLocator('iframe[title="storybook-preview-iframe"]');

//   await content.getByTestId('topMidLeft').hover({ position: { x: 10, y: 10 } });
//   await expect(content.getByTestId('tiltAngleX')).toHaveText('-9.65° / -48.24%');
// };

// test('should get half of max value when mouse is positioned in the middle of tilt element', async ({ page }) => {
//   await page.goto('http://localhost:9009');
//   await page.getByRole('link', { name: 'Event - Params' }).click();

//   const content = page.frameLocator('iframe[title="storybook-preview-iframe"]');

//   await content.getByTestId('topMidLeft').hover({ position: { x: 10, y: 10 } });
//   await expect(content.getByTestId('tiltAngleX')).toHaveText('-9.65° / -48.24%');
// });
