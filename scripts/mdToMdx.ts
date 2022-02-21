import fs from 'fs-extra';
import path from 'path';

console.log('[Release]: update doc');

const rootPath = process.cwd();
const readMePath = path.join(rootPath, 'README.md');
const changelogPath = path.join(rootPath, './packages/juno-core/CHANGELOG.md');
const iconChangelogPath = path.join(
  rootPath,
  './packages/juno-icon/CHANGELOG.md',
);
const contributionPath = path.join(rootPath, 'CONTRIBUTION.md');
const storybookDocPath = path.join(
  rootPath,
  './packages/juno-storybook/src/docs',
);

fs.ensureDirSync(storybookDocPath);

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
    title: `<Meta title="ICON-CHANGELOG" />

# CHANGELOG

<br />\n`,
    path: iconChangelogPath,
    filename: 'icon-$basename',
  },
  {
    title: `<Meta title="CONTRIBUTION/Contribution Guide" />

# CONTRIBUTION

<br />\n`,
    path: contributionPath,
  },
].forEach((doc) => {
  if (!fs.existsSync(doc.path)) return;

  const name = path.basename(doc.path, '.md');

  const targetFileName = doc.filename
    ? doc.filename.replace('$basename', name)
    : name;

  const target = path.join(storybookDocPath, `${targetFileName}.story.mdx`);

  const template = fs.readFileSync(doc.path).toString();

  fs.writeFileSync(
    target,
    `import { Canvas, Meta, Story } from '@storybook/addon-docs';

${doc.title}\r\n${template}`,
  );
});

console.log('[Release]: update doc complete');
