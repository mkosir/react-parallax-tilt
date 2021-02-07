const path = require('path');

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
