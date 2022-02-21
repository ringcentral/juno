const baseConfig = require('../../jest-base.config');

module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    '@ringcentral/juno$': '<rootDir>/../juno-core/index.ts',
    '@ringcentral/juno-foundation$':
      '<rootDir>/../juno-core/src/foundation/index.ts',
  },
};
