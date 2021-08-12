const baseConfig = require('./jest-base.config');

module.exports = {
  ...baseConfig,

  displayName: {
    name: 'UT',
    color: 'blue',
  },

  testMatch: [`**/*/__tests__/**/*.test?(s).[jt]s?(x)`],
  setupFiles: [
    '<rootDir>/config/jest/polyfills.js',
    '<rootDir>/config/jest/jest.testingLibraryConfig.js',
    '<rootDir>/config/jest/enzymeTestAdapterSetup.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
