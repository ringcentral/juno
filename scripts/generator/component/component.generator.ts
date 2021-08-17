import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

import { Lib } from '../../utils';

type TypeValue = 'function' | 'class';

export class ComponentGenerator {
  componentType: TypeValue = 'function';

  constructor(private url: string, private args: string[]) {
    this.args.forEach((arg) => {
      if (arg.includes('--type')) {
        const result = arg.replace('--type=', '');
        if (result !== 'function' && result !== 'class') {
          console.log(`${chalk.red('fail: ')} type only can be fun or class`);
          process.exit();
        } else {
          this.componentType = result;
        }
        return;
      }
    });
  }

  async createFile() {
    const target = Lib.camelize(this.url);

    const replaceFrag = '__name__';

    const rootPath = path.join(__dirname, 'Function');

    const filePaths = Lib.getFileTree(rootPath);

    for (const filePath of filePaths) {
      const content = fs.readFileSync(filePath).toString();

      const result = content.replace(new RegExp(`${replaceFrag}`, 'g'), target);

      const targetUrl = path
        .join(Lib.getCMDUrl(), target, filePath.replace(rootPath, ''))
        .replace(`${replaceFrag}`, target);

      Lib.makeDirExit(path.dirname(targetUrl));

      await Lib.writeFile(targetUrl, result);
    }
  }
}
