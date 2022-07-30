const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = async ({ config }) => {
  return merge(config, {
    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: path.resolve(__dirname, '../package'),
          use: [
            {
              loader: 'ts-loader',
              options: { happyPackMode: true, transpileOnly: true },
            },
          ],
        },
      ],
    },
    plugins: [
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
  });
};
