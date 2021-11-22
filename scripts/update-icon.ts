import axios from 'axios';
import fs from 'fs';
import path from 'path';

import { Lib } from './utils/lib';

const svgSpritePath = path.join(
  process.cwd(),
  './src/components/Icon/icon-symbol.ts',
);

const isTmp = !!process.argv[2];

const JunoIconPath = path.join(
  process.cwd(),
  isTmp ? './src/icon/tmp' : './src/components/Icon/assets',
);

const iconSet = {};

const iconMap = {};

axios
  // @ts-ignore
  .get(
    `https://i.icomoon.io/public/6483cc0f53/Jupiternewicontest/symbol-defs.svg?${Math.random()}`,
  )
  .then((res) => {
    fs.writeFile(
      svgSpritePath,
      `export default \`${res.data}\`;\r\n`,
      'utf8',
      (err) => {
        if (err) throw err;
        console.log('[Juno Icon]: get new icon list.');

        const markup = res.data;
        const lines = markup.split(/\n/g);
        const symbols = {};
        let currentSymbol: any = null;

        const startReg = /symbol.*?id="(.*?)".*?viewBox="(.*?)"/i;
        const endReg = /<\/symbol>/i;

        lines.forEach((line: any) => {
          const start = line.match(startReg);
          const close = line.match(endReg);

          if (close) {
            currentSymbol = null;
          } else if (currentSymbol !== null) {
            if (!currentSymbol['content']) {
              currentSymbol['content'] = [];
            }
            currentSymbol['content'].push(line);
          } else if (start) {
            const currentSymbolId = start[1];
            const currentSymbolViewBox = start[2];
            symbols[currentSymbolId] = {};
            symbols[currentSymbolId]['id'] = currentSymbolId;
            symbols[currentSymbolId]['viewBox'] = currentSymbolViewBox;
            currentSymbol = symbols[currentSymbolId];
          }
        });

        function deletePath(path: string) {
          fs.unlinkSync(path);
        }

        function generateSVGFile({
          width = null,
          height = null,
          viewBox = null,
          content = null,
        }) {
          if (!content) return null;
          const widthValue = width !== null ? `width="${width}px" ` : '';
          const heightValue = height !== null ? `height="${height}px" ` : '';
          const viewBoxValue = viewBox !== null ? `viewBox="${viewBox}" ` : '';
          const contentValue = (content as any as string[]).join('\n');

          return `<?xml version="1.0" encoding="UTF-8"?>
<svg ${widthValue}${heightValue}${viewBoxValue}version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
${contentValue}
</svg>
`;
        }

        if (fs.existsSync(JunoIconPath)) {
          const files = fs.readdirSync(JunoIconPath);
          files.forEach((file) => {
            const curPath = `${JunoIconPath}/${file}`;
            const svgName = file.match(/(.+)\.svg$/)?.[1];
            if (svgName && !symbols[svgName]) {
              console.log(`[Juno Icon]: add new icon ${file}`);
            } else if (svgName && symbols[svgName]) {
              deletePath(curPath);
            }
          });
        }

        if (!fs.existsSync(JunoIconPath)) {
          fs.mkdirSync(JunoIconPath);
        } else {
          const files = fs.readdirSync(JunoIconPath);
          if (files && files.length !== 0) {
            files.forEach((file) => {
              const curPath = `${JunoIconPath}/${file}`;
              console.log(`[Juno Icon]: remove icon ${file}`);
              deletePath(curPath);
            });
          }
        }

        Object.keys(symbols).forEach((symbolId) => {
          const symbol = symbols[symbolId];
          const svg = generateSVGFile({
            viewBox: symbol.viewBox,
            content: symbol.content,
          });
          if (svg) {
            if (isTmp) {
              const fileName = symbolId.replace('icon-', '');

              const key = fileName.replace(/_/, '-');

              if (iconSet[key]) {
                iconSet[key] += 1;
              } else {
                iconSet[key] = 1;
              }

              const fName = `${key}${
                iconSet[key] > 1 ? `-${iconSet[key]}` : ''
              }`;

              iconMap[Lib.camelize(fName) || '0'] = fileName;

              fs.writeFileSync(`${JunoIconPath}/${fName}.svg`, svg);
            } else {
              fs.writeFileSync(`${JunoIconPath}/${symbolId}.svg`, svg);
            }
          }
        });
        if (isTmp) {
          fs.writeFileSync(
            path.join(__dirname, './utils/svgToComponentMapping.js'),
            `module.exports = ${JSON.stringify(iconMap, null, 2)};`,
          );
        }

        console.log('[Juno Icon]: updated');
      },
    );
  })
  .catch((e) => {
    console.log(e);
  });
