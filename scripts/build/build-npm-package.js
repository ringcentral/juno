const fs = require('fs-extra');
const path = require('path');
const { createWritePackageHandler } = require('./writePackageHandler.plugin');

const rootPath = process.cwd();
const pkg = require(path.join(rootPath, 'package.json'));

const licensePath = path.join(__dirname, '../../LICENSE');

const targetPath = 'dist';
const targetFolder = path.join(rootPath, targetPath);
const targetFolderES6 = path.join(targetFolder, 'es6');

console.log('[Release]: prepare package start');

// write package.json
const packageHandler = createWritePackageHandler(pkg, targetFolder);
packageHandler.generateBundle();

const [moveConfigPath, ...args] = process.argv.slice(2);

const configPath = moveConfigPath && path.join(rootPath, moveConfigPath);

// copy license
fs.copyFileSync(licensePath, path.join(targetFolder, 'LICENSE'));

if (fs.existsSync(configPath)) {
  console.log('[Release]: start copy files');
  const npmPackageOptions = require(configPath);

  // copy addition files
  npmPackageOptions.movePaths.forEach((distMovePath) => {
    if (typeof distMovePath === 'string') {
      fs.copySync(
        path.join(rootPath, distMovePath),
        path.join(targetFolder, distMovePath),
      );
    } else {
      fs.copySync(
        path.join(rootPath, distMovePath.from),
        path.join(targetFolder, distMovePath.to),
      );
      fs.copySync(
        path.join(rootPath, distMovePath.from),
        path.join(targetFolderES6, distMovePath.to),
      );
    }
  });

  console.log('[Release]: copy files completed');

  if (npmPackageOptions.subModules) {
    packageHandler.generateSubBundles(npmPackageOptions.subModules);
  }
}

console.log('[Release]: prepare package complete');
