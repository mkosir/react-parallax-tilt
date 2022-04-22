import path from 'path';

import { StorybookConfig } from '@storybook/core-common';
// import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const storybookConfig: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  typescript: { reactDocgen: 'react-docgen' },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module!.rules!.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Resolve absolute imports
    config.resolve!.modules!.push(path.resolve(process.cwd(), 'src'));

    // Plugin 'TsconfigPathsPlugin' issue with Webpack v5 - https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/60
    // config.resolve!.plugins! = [
    //   new TsconfigPathsPlugin({
    //     configFile: path.resolve(__dirname, '../tsconfig.dev.json'),
    //   }),
    // ];

    return config;
  },
};

module.exports = storybookConfig;
