module.exports = {
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/cssMock.js',
  },
  transform: {
    '^.+\\.story\\.tsx$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.(jsx?|tsx?)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: './tsconfig.test.json',
      babelConfig: {
        plugins: ['require-context-hook'],
      },
    },
  },
  reporters: ['default', 'jest-html-reporters'],
};
