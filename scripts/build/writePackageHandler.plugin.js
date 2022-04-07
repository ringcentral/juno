const fs = require('fs');
const path = require('path');

const createWritePackageHandler = (pkg, targetPath) => {
  return {
    generateBundle() {
      const output = {
        name: pkg.name,
        version: pkg.version,
        author: pkg.author,
        license: pkg.license,
        main: pkg.main || './index.js',
        module: pkg.module || './es6/index.js',
        typings: pkg.typings || './index.d.ts',
        bugs: pkg.bugs,
        homepage: pkg.homepage,
        repository: pkg.repository,
        dependencies: pkg.dependencies,
        peerDependencies: pkg.peerDependencies,
        sideEffects: false,
        exports: {
          '.': {
            node: {
              module: './es6/index.js',
              require: './index.js',
            },
            default: './es6/index.js',
          },
          './*': {
            node: {
              module: './es6/*',
              require: './*',
            },
            default: './es6/*',
          },
        },
      };

      fs.writeFileSync(
        path.join(targetPath, 'package.json'),
        JSON.stringify(output, null, 2),
      );
    },
  };
};

module.exports = { createWritePackageHandler };
