import fs from 'fs';
import { pick } from 'lodash';
import path from 'path';

import { Lib } from './utils/lib';

const jsonSass = require('json-sass');

const targetUrl = path.join(__dirname, '../src/scss');
const themePath = path.join(targetUrl, 'themes');

console.log(`[JUNO] Json to Scss...`);

const fileList = Lib.getFileTree(
  path.join(__dirname, '../src/foundation/theme/assets'),
);

const darkThemePath = path.join(
  __dirname,
  '../src/foundation/theme/ThemeSwitcherProvider/rcDark.json',
);
const highContrastThemePath = path.join(
  __dirname,
  '../src/foundation/theme/ThemeSwitcherProvider/rcHighContrast.json',
);

Lib.makeDirExit(themePath);

const importArr: string[] = [];
const tmpPath = path.join(__dirname, './tmp.json');

fileList.forEach((filePath) => {
  const variableName = path.basename(filePath, '.json');

  if (variableName === 'shadows') {
    // eslint-disable-next-line import/no-dynamic-require
    const obj: string[] = require(filePath);

    // * box-shadow need to be a array with each children, view src/scss/themes/_shadows.scss
    const tmpObj = obj.map((x) => {
      return [x];
    });

    fs.writeFileSync(tmpPath, JSON.stringify(tmpObj));
    filePath = tmpPath;
  }

  const target = path.join(themePath, `_${variableName}.scss`);

  fs.createReadStream(filePath)
    .pipe(
      jsonSass({
        prefix: `$rc-${variableName.replace('.', '-')}-variable: `,
      }),
    )
    .pipe(fs.createWriteStream(target))
    .on('finish', () => {
      switch (variableName) {
        case 'typography':
          {
            let fileContent = fs.readFileSync(target).toString();

            fileContent = fileContent.replace(
              /Lato, Helvetica, Arial, sans-serif/g,
              "'Lato, Helvetica, Arial, sans-serif'",
            );

            Lib.writeFile(target, fileContent);
          }
          break;
        case 'opacity':
          {
            let fileContent = fs.readFileSync(target).toString();

            fileContent = fileContent.replace(/(\d.*)(:)/g, (match, p1) => {
              return `'${p1}':`;
            });

            Lib.writeFile(target, fileContent);
          }
          break;
        default:
          break;
      }
    });

  importArr.push(`@import './${variableName}';`);
});

Lib.deleteFile(tmpPath);

Lib.writeFile(path.join(themePath, '_index.scss'), `${importArr.join('\r\n')}`);

[darkThemePath, highContrastThemePath].forEach((filePath) => {
  const variableName = path.basename(filePath, '.json');
  const target = path.join(targetUrl, `_${variableName}.scss`);

  const sourceValue = require(filePath);

  const paletteOnly = pick(sourceValue, ['palette']);

  fs.writeFileSync(tmpPath, JSON.stringify(paletteOnly));

  filePath = tmpPath;

  fs.createReadStream(filePath)
    .pipe(
      jsonSass({
        prefix: `$rc-${variableName}-variable: `,
      }),
    )
    .pipe(fs.createWriteStream(target))
    .on('finish', () => {
      let fileContent = fs.readFileSync(target).toString();

      fileContent = fileContent.replace(
        /Lato, Helvetica, Arial, sans-serif/g,
        "'Lato, Helvetica, Arial, sans-serif'",
      );

      switch (variableName) {
        case 'dark':
          {
            fileContent = fileContent.replace('gray:', "'gray':");
            fileContent = fileContent.replace('type: dark', "type: 'dark'");
          }
          break;
        default:
          break;
      }

      Lib.writeFile(target, fileContent);
    });
});

Lib.deleteFile(tmpPath);
