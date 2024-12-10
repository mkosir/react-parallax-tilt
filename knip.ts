import type { KnipConfig } from 'knip';

const knipConfig: KnipConfig = {
  entry: ['src/index.ts'],
  ignore: [
    'dist/**',
    'compiled/**',
    'build-storybook-static/**',
    'test-unit-report/**',
    'test-e2e-results/**',
    'test-e2e-report/**',
  ],
};

// eslint-disable-next-line import/no-default-export
export default knipConfig;
