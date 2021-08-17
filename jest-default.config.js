const baseConfig = require('./jest-base.config');

module.exports = {
  ...baseConfig,

  displayName: {
    name: 'UT',
    color: 'blue',
  },

  testMatch: [`**/*/__tests__/**/*.test?(s).[jt]s?(x)`],
  setupFiles: [
    '<rootDir>/tests/setup/jest.testingLibraryConfig.js',
    '<rootDir>/tests/setup/enzymeTestAdapterSetup.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/tests/setup/setupTest.js',
    '@testing-library/jest-dom/extend-expect',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
