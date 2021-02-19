const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-controls'],
  typescript: { reactDocgen: 'react-docgen' },

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Required for absolute imports in Storybook
    config.resolve.modules.push(path.resolve(process.cwd(), 'src'));

    return config;
  },
};
