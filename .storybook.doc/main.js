const main = require('../.storybook/main');

const ignoreProps = ['theme', 'as', 'css'];

module.exports = {
  ...main,
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      // shouldRemoveUndefinedFromOptional: true,
      // detail type can view https://github.com/styleguidist/react-docgen-typescript/blob/048980ab8791452821aa75a06a7551a43e49a480/src/parser.ts#L28
      propFilter: (prop) => {
        if (ignoreProps.includes(prop.name)) {
          return false;
        }

        if (prop.parent) {
          return !/node_modules\/@types\/react/.test(prop.parent.fileName);
        }

        return true;
      },
    },
  },
};
