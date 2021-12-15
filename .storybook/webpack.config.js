// @ts-nocheck
const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const smp = new SpeedMeasurePlugin({ disable: !process.env.MEASURE });

module.exports = async ({ config }) => {
  config = {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(ts|tsx)$/,
          include: path.resolve(__dirname, '../src'),
          use: [
            {
              loader: 'thread-loader',
              options: {
                // the number of spawned workers, defaults to (number of cpus - 1) or
                // fallback to 1 when require('os').cpus() is undefined
                workers: Number(process.env.TS_WORKER_NUMBER) || 8,

                // number of jobs a worker processes in parallel
                // defaults to 20
                workerParallelJobs: 20,

                // Allow to respawn a dead worker pool
                // respawning slows down the entire compilation
                // and should be set to false for development
                poolRespawn: false,

                // timeout for killing the worker processes when idle
                // defaults to 500 (ms)
                // can be set to Infinity for watching builds to keep workers alive
                poolTimeout: 4000,

                // number of jobs the poll distributes to the workers
                // defaults to 200
                // decrease of less efficient but more fair distribution
                poolParallelJobs: 200,

                // name of the pool
                // can be used to create different pools with elsewise identical options
                name: 'ts-worker-pool',
              },
            },
            {
              loader: 'ts-loader',
              options: { happyPackMode: true, transpileOnly: true },
            },
          ],
        },
      ],
    },
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

  return smp.wrap(config);
};
