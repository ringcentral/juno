/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
// const { execSync } = require('child_process');

const { getFolderTree } = require('./getFolderTree');

const { writePackageJson } = require('../rollup/writePackageJson.plugin');

const rootPath = process.cwd();

// eslint-disable-next-line import/no-dynamic-require
const pkg = require(path.join(rootPath, 'package.json'));

// console.log('[Inner release]: checkout develop');
// execSync(`git checkout develop`);

// console.log(`[Inner release]: create ${pkg.version} version tag`);
// execSync(`git tag -a ${pkg.version} -m 'v${pkg.version}'`);

console.log('[Inner release]: source copy start');

const targetPath = 'dist-source';

const targetFolder = path.join(rootPath, targetPath);

const movePaths = [
  'src/components',
  'src/foundation',
  'src/icon',
  'src/index.ts',
  '.gitignore',
  '.npmrc',
  'README.md',
  'CHANGELOG.md',
];

fs.removeSync(targetFolder);

movePaths.forEach((movePath) => {
  fs.copySync(
    path.join(rootPath, movePath),
    path.join(targetFolder, path.basename(movePath)),
  );
});

// clear story
const filePaths = getFolderTree(targetFolder);

filePaths.forEach((filePath) => {
  if (new RegExp('__stories__|__tests__', 'gi').test(filePath)) {
    fs.removeSync(filePath);
  }
});

const fixedVersion = (packages) => {
  packages.forEach((p) => {
    pkg.dependencies[p] = pkg.dependencies[p].replace('^', '');
  });
};

fixedVersion([
  '@material-ui/core',
  '@material-ui/lab',
  '@material-ui/pickers',
  '@material-ui/styles',
]);

writePackageJson(pkg, targetFolder).generateBundle();

// console.log('[Inner release]: create tgz file');
// execSync(`cd ${targetPath} && npm pack`);

console.log('[Inner release]: source copy end');
