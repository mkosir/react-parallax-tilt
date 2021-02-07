const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  // addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-storysource'],
  typescript: { reactDocgen: 'react-docgen' },

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
