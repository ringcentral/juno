import fs from 'fs';
import path from 'path';

import { Lib } from '../../utils';

export class MdxGenerator {
  constructor(private url: string) {}

  async createFile() {
    const target = Lib.camelize(this.url);

    const replaceFrag = '__name__';

    const filePath = path.join(__dirname, '__name__.story.mdx');

    const content = fs.readFileSync(filePath).toString();

    const result = content.replace(new RegExp(`${replaceFrag}`, 'g'), target);

    const targetUrl = path.join(Lib.getCMDUrl(), `${target}.story.mdx`);

    Lib.makeDirExit(path.dirname(targetUrl));

    await Lib.writeFile(targetUrl, result);
  }
}
