const fs = require('fs-extra');
const path = require('path');

function getFolderTree(sourceUrl) {
  const returnObj = [];
  const files = fs.readdirSync(sourceUrl);
  files.forEach((file) => {
    const url = path.join(sourceUrl, file);
    if (fs.lstatSync(url).isDirectory()) {
      returnObj.push(...getFolderTree(url));
    } else {
      returnObj.push(url);
    }
  });
  return returnObj;
}

const { writePackageJson } = require('./writePackageJson.plugin');

const rootPath = process.cwd();

const pkg = require(path.join(rootPath, 'package.json'));

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
  'LICENSE',
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
