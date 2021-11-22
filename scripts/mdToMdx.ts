import fs from 'fs-extra';
import path from 'path';

import { Lib } from './utils/lib';

console.log('[Release]: update doc');

const rootPath = process.cwd();
const readMePath = path.join(rootPath, 'README.md');
const changelogPath = path.join(rootPath, 'CHANGELOG.md');
const contributionPath = path.join(rootPath, 'CONTRIBUTION.md');
const storybookDocPath = path.join(rootPath, './src/storybook/docs');

Lib.makeDirExit(storybookDocPath);

[
  {
    title: '<Meta title="README" />\n',
    path: readMePath,
  },
  {
    title: `<Meta title="CHANGELOG" />

# CHANGELOG

<br />\n`,
    path: changelogPath,
  },
  {
    title: `<Meta title="CONTRIBUTION/1. Contribution Guide" />

# CONTRIBUTION

<br />\n`,
    path: contributionPath,
  },
].forEach((doc) => {
  const name = path.basename(doc.path, '.md');
  const target = path.join(storybookDocPath, `${name}.story.mdx`);

  const template = fs.readFileSync(doc.path).toString();

  fs.writeFileSync(
    target,
    `import { Canvas, Meta, Story } from '@storybook/addon-docs';

${doc.title}\r\n${template}`,
  );
});

console.log('[Release]: update doc complete');
