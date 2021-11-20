// @ts-nocheck
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = async ({ config }) => {
  config = {
    ...config,
    plugins: [
      ...config.plugins,
      new CopyPlugin({
        patterns: [{ from: './assets', to: 'assets' }],
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        onDetected({ paths, compilation }) {
          compilation.errors.push(new Error(paths.join(' -> ')));
        },
      }),
    ],
  };

  return config;
};
