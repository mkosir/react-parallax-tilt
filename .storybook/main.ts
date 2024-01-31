import path from 'path';

import { StorybookConfig } from '@storybook/react-webpack5';

const STORYBOOK_CONFIG = {
  stories: ['../stories/**/*.stories.tsx'],
  typescript: { reactDocgen: 'react-docgen-typescript' },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: (config) => {
    // Resolve absolute imports
    config.resolve?.modules?.push(path.resolve(process.cwd(), 'src'));

    return config;
  },
} as const satisfies StorybookConfig;

// eslint-disable-next-line import/no-default-export
export default STORYBOOK_CONFIG;
