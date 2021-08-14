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
        dependencies: {
          ...pkg.dependencies,
          // that for type issue with @emotion type in styled-component type issue,
          // that is fix in latest styled-component
          '@emotion/core': '^10.0.27',
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
