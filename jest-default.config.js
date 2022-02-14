const baseConfig = require('./jest-base.config');
const path = require('path');

module.exports = {
  ...baseConfig,

  displayName: {
    name: 'UT',
    color: 'blue',
  },

  testMatch: [`**/*/__tests__/**/*.test?(s).[jt]s?(x)`],
  setupFiles: [
    path.join(__dirname, './tests/setup/jest.testingLibraryConfig.js'),
  ],
  setupFilesAfterEnv: [
    path.join(__dirname, './tests/setup/setupTest.js'),
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
};
