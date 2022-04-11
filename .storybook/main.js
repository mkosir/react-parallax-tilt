const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  typescript: { reactDocgen: 'react-docgen' },

  core: {
    builder: 'webpack5',
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Resolve absolute imports
    config.resolve.modules.push(path.resolve(process.cwd(), 'src'));

    return config;
  },
};
