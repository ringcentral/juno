const baseConfig = require('./jest-base.config');

module.exports = {
  ...baseConfig,
  projects: ['<rootDir>/jest-default.config.js'],
};
