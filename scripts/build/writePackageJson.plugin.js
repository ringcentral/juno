const { writeFileSync } = require('fs');
const path = require('path');

const writePackageJson = (pkg, targetPath) => {
  return {
    generateBundle() {
      const output = {
        name: pkg.name,
        version: pkg.version,
        main: pkg.main,
        module: pkg.module,
        // browser: pkg.browser,
        author: pkg.author,
        license: pkg.license,
        typings: pkg.typings,
        bugs: pkg.bugs,
        homepage: pkg.homepage,
        repository: pkg.repository,
        dependencies: {
          ...pkg.dependencies,
        },
        peerDependencies: pkg.peerDependencies,
        sideEffects: false,
        exports: pkg.exports,
      };
      writeFileSync(
        path.join(targetPath, 'package.json'),
        JSON.stringify(output, null, 2),
      );
    },
    generateSubBundles(subModules) {
      for (const subModule of subModules) {
        const output = {
          module: path.join('../es6', subModule, 'index.js'),
          typings: './index.d.ts',
          sideEffects: false,
        };

        writeFileSync(
          path.join(targetPath, subModule, 'package.json'),
          JSON.stringify(output, null, 2),
        );
      }
    },
  };
};

module.exports = { writePackageJson };
