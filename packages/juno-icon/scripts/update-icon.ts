import axios from 'axios';
import { spawnSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import camelCase from 'lodash/camelCase';

const baseDir = path.join(__dirname, '..');
const devUtilsDir = path.join(baseDir, 'devUtils');
const JunoIconPath = path.join(baseDir, 'assets');
const JunoTmpIconPath = path.join(baseDir, 'tmp');
const JunoIconCompPath = path.join(baseDir, 'src');
const svgSpritePath = path.join(devUtilsDir, 'iconSymbol.ts');
const svgJsonPath = path.join(devUtilsDir, 'iconJsonSymbol.json');

const iconSet = {};

const iconMap = {};

const handleProcessResult = ({
  error,
  stdout,
  stderr,
  status,
}: ReturnType<typeof spawnSync>) => {
  if (status === 0) return;
  throw error ?? Error(stderr.toString() || stdout.toString());
};

async function updateIconList() {
  const res = await axios.get(
    `https://i.icomoon.io/public/6483cc0f53/Jupiternewicontest/symbol-defs.svg?${Math.random()}`,
  );
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
    const contentValue = (content as any as string[])
      .join('\n')
      // * remove all style with fill attribute
      .replace(/ style="fill:.*\)"/g, '');
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
        // console.log(`[Juno Icon]: add new icon ${file}`);
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
        // console.log(`[Juno Icon]: remove icon ${file}`);
        deletePath(curPath);
      });
    }
  }
  if (fs.existsSync(JunoTmpIconPath))
    fs.rmSync(JunoTmpIconPath, { recursive: true });
  fs.mkdirSync(JunoTmpIconPath);
  Object.keys(symbols).forEach((symbolId) => {
    const symbol = symbols[symbolId];
    const svg = generateSVGFile({
      viewBox: symbol.viewBox,
      content: symbol.content,
    });
    if (svg) {
      // write assets
      fs.writeFileSync(`${JunoIconPath}/${symbolId}.svg`, svg);
      // write tmp
      const fileName = symbolId.replace('icon-', '');
      const key = fileName.replace(/_/, '-');
      if (iconSet[key]) {
        iconSet[key] += 1;
      } else {
        iconSet[key] = 1;
      }
      const fName = `${key}${iconSet[key] > 1 ? `-${iconSet[key]}` : ''}`;
      const camelText = camelCase(fName) || '0';
      const iconName = `${camelText[0].toUpperCase()}${camelText.slice(1)}`;
      iconMap[iconName] = fileName;
      fs.writeFileSync(`${JunoTmpIconPath}/${fName}.svg`, svg);
    }
  });
  fs.writeFileSync(
    path.join(devUtilsDir, './svgToComponentMapping.ts'),
    `module.exports = ${JSON.stringify(iconMap, null, 2)};`,
  );
  if (fs.existsSync(JunoIconCompPath))
    fs.rmSync(JunoIconCompPath, { recursive: true });
  fs.mkdirSync(JunoIconCompPath);
  fs.writeFileSync(
    svgSpritePath,
    `export default \`${res.data}\`;\r\n`,
    'utf8',
  );
  handleProcessResult(
    spawnSync('svgr', [
      '--ext',
      'tsx',
      '--svgo-config',
      './scripts/svgo-config.js',
      '--typescript',
      '--ref',
      '--memo',
      './tmp',
      '--template',
      './scripts/iconToComponent.js',
      '-d',
      './src',
    ]),
  );
  fs.rmSync(JunoTmpIconPath, { recursive: true });
  handleProcessResult(spawnSync('yarn', ['lint']));
}

(async () => {
  const p = updateIconList();

  const p2 = axios
    .get(
      `https://i.icomoon.io/public/6483cc0f53/Jupiternewicontest/selection-svg.json?${Math.random()}`,
    )
    .then((jsonFile) => {
      fs.writeJsonSync(svgJsonPath, jsonFile.data);
    });

  await Promise.all([p, p2]);

  console.log('[Juno Icon]: updated');
})();
