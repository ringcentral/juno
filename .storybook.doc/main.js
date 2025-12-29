const main = require('../.storybook/main');

const ignoreProps = ['theme', 'as', 'css'];

module.exports = {
  ...main,
  typescript: {
    check: false,
    checkOptions: {},
    // Changed from 'react-docgen-typescript' to 'react-docgen' for TypeScript 5.x compatibility
    // The react-docgen-typescript-plugin uses deprecated TypeScript APIs (createIdentifier, etc.)
    // that were removed in TypeScript 5.0+
    reactDocgen: 'react-docgen',
  },
};
