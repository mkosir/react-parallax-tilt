import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const storybookConfig: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (storybookConfig) => {
    return {
      ...storybookConfig,
      plugins: [...(storybookConfig.plugins ?? []), tsconfigPaths()],
    };
  },
};

// eslint-disable-next-line import-x/no-default-export
export default storybookConfig;
