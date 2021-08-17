const fs = require('fs-extra');
const path = require('path');
const { writePackageJson } = require('./writePackageJson.plugin');

const rootPath = process.cwd();
const pkg = require(path.join(rootPath, 'package.json'));

const targetPath = 'dist';
const targetFolder = path.join(rootPath, targetPath);
const targetFolderES6 = path.join(targetFolder, 'es6');

console.log('[Release]: prepare package start');

const srcMovePaths = [
  'README.md',
  'CHANGELOG.md',
  {
    source: 'src/components/Dialer/DialPad/assets/RcDialerPadSounds.json',
    to: 'RcDialerPadSounds.json',
  },
  { source: 'src/components/Icon/assets', to: 'icons' },
  { source: 'src/components/Icon/assets', to: 'components/Icon/assets' },
  { source: 'src/scss', to: 'scss' },
];

const subModules = ['icon'];

srcMovePaths.forEach((distMovePath) => {
  if (typeof distMovePath === 'string') {
    fs.copySync(
      path.join(rootPath, distMovePath),
      path.join(targetFolder, distMovePath),
    );
  } else {
    fs.copySync(
      path.join(rootPath, distMovePath.source),
      path.join(targetFolder, distMovePath.to),
    );
    fs.copySync(
      path.join(rootPath, distMovePath.source),
      path.join(targetFolderES6, distMovePath.to),
    );
  }
});

const writePackageJsonHandler = writePackageJson(pkg, targetFolder);
writePackageJsonHandler.generateBundle();
writePackageJsonHandler.generateSubBundles(subModules);

console.log('[Release]: prepare package complete');
