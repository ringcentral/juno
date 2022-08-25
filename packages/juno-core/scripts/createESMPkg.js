const path = require('path');
const glob = require('glob');
const fs = require('fs');
/**
 * Puts a package.json into every immediate child directory of rootDir.
 * That package.json contains information about esm for bundlers so that imports
 * like import Typography from '@mui/material/Typography' are tree-shakeable.
 *
 * It also tests that an this import can be used in TypeScript by checking
 * if an index.d.ts is present at that path.
 * @param {object} param0
 * @param {string} param0.from
 * @param {string} param0.to
 */
async function createESMPkg({ from, to }) {
  from = path.resolve(__dirname, from)
  to = path.resolve(__dirname, to)

  const directoryPackages = glob
    .sync('*/index.{js,ts,tsx}', { cwd: from })
    .map(path.dirname);

  directoryPackages.push('');

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const directoryPackagePath = path.join(from, directoryPackage);
      const packageJsonPath = path.join(directoryPackagePath, 'package.json');

      const packageJson = {
        sideEffects: false,
        module: path.relative(
          directoryPackagePath,
          path.join(to, directoryPackage, 'index.js'),
        ),
        typings: './index.d.ts',
      };

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

      return packageJsonPath;
    }),
  );
}

createESMPkg({
  from: '../dist/foundation',
  to: '../dist/es6/foundation',
});
createESMPkg({
  from: '../dist/components',
  to: '../dist/es6/components',
});
