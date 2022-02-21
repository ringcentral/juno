const path = require('path');

module.exports = {
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/dist/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      path.join(__dirname, './tests/__mocks__/fileMock.js'),
    '\\.(css|less)$': path.join(__dirname, './tests/__mocks__/cssMock.js'),
    '@ringcentral/juno$': '<rootDir>/packages/juno-core/index.ts',
    '@ringcentral/juno-foundation$':
      'packages/juno-core/src/foundation/index.ts',
  },
  transform: {
    '^.+\\.story\\.tsx$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.(jsx?|tsx?)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: path.join(__dirname, './tsconfig.test.json'),
      babelConfig: {
        plugins: ['require-context-hook'],
      },
    },
  },
  reporters: ['default', 'jest-html-reporters'],
};
