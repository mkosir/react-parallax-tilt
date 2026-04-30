import type { StorybookConfig } from '@storybook/react-vite';

const storybookConfig: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

// eslint-disable-next-line import-x/no-default-export
export default storybookConfig;
