import { FrameLocator, Page } from '@playwright/test';

const IFRAME_SELECTOR = 'iframe[title="storybook-preview-iframe"]';

export const getIframeContent = (page: Page): FrameLocator => {
  const content = page.frameLocator(IFRAME_SELECTOR);
  return content;
};
