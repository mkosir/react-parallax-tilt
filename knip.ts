import type { KnipConfig } from 'knip';

const knipConfig: KnipConfig = {
  // Playwright loads it via a project `testMatch` regex, which knip can't detect
  entry: ['src/index.ts', 'e2e/global.setup.ts'],
};

// eslint-disable-next-line import-x/no-default-export
export default knipConfig;
