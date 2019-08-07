const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
