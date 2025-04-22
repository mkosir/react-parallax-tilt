import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

const storybookConfig: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  // JSX transform no longer requires importing React explicitly in every file.
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  webpackFinal: (config) => {
    // Resolve absolute imports
    config.resolve?.modules?.push(path.resolve(process.cwd(), 'src'));

    return config;
  },

  addons: ['@storybook/addon-webpack5-compiler-swc'],
};

// eslint-disable-next-line import-x/no-default-export
export default storybookConfig;
