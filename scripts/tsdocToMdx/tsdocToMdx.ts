// https://typedoc.org/guides/doccomments/
import { execSync } from 'child_process';
import fs from 'fs-extra';
import os from 'os';
import path from 'path';
// @ts-ignore
import prettier from 'prettier';

import { Lib } from '../utils/lib';

console.log('[Stories Doc]: start create docs');

const tmpFolder = path.join(__dirname, 'tmp');

const historyFilePath = path.resolve(__dirname, 'typedoc-history.json');

const historyFileMap = fs.existsSync(historyFilePath)
  ? fs.readJSONSync(historyFilePath)
  : {};

function getContent(doc: { name: string; title: string }, template: string) {
  return prettier.format(
    `
<!-- This file generate automatically, should not modify that directly -->

import { Canvas, Meta, Story } from '@storybook/addon-docs';

<Meta title="${doc.name}" />

${template}`.replace(/\.\.\/index.md/g, ''),
    { parser: 'markdown' },
  );
}

const typedocMdxPath = path.resolve(process.cwd(), 'typedoc-mdx.json');

const mdxList = fs.readJsonSync(typedocMdxPath) as Record<
  string,
  {
    name: string;
    title: string;
  }
>;

Object.entries(mdxList).forEach(([currFilePath, doc]) => {
  const currFileAbsolutePath = path.join(process.cwd(), currFilePath);
  const folderPath = path.dirname(currFilePath);
  const storybookDocPath = path.join(folderPath, '__stories__');

  try {
    const result = execSync(`git diff HEAD ${currFileAbsolutePath}`).toString();

    let newToken = 'un-commit';

    if (result === '') {
      const [SHA] = execSync(
        `git show HEAD -n 1 --pretty=format:"%h" --no-patch ${currFileAbsolutePath}`,
      )
        .toString()
        .split('\n');

      const historyToken = historyFileMap[currFilePath];

      newToken = `${JSON.stringify(doc)}${SHA}`;
      if (historyToken === newToken) {
        return;
      }
    }

    execSync(`npx typedoc -out ${tmpFolder} ${currFileAbsolutePath}`);

    const files = Lib.getFileTree(tmpFolder);

    const target = path.join(
      storybookDocPath,
      `${path.parse(currFilePath).name}.story.mdx`,
    );

    let content = '';

    files
      .sort((p) => {
        const fileName = path.basename(p, '.md');
        return fileName === 'index' ? -1 : 1;
      })
      .forEach((file, i) => {
        let template = fs.readFileSync(file).toString();

        const findString = '## Index';
        const index = template.indexOf(findString) + findString.length;

        const title =
          i === 0
            ? doc.title
            : template
                .slice(0, index)
                .match(/title: "+.*/g)?.[0]
                .match(/"+.*."/)?.[0]
                .replace(/\"/g, '');

        const fileName = path.basename(file);

        template = template
          .slice(index)
          .replace(
            /##\sIndex\n\n###\sFunctions\n\n.+\n\n##\sFunctions\n\n###\s\s[a-zA-Z]+\n\n/,
            '',
          )
          .replace(new RegExp(`${fileName}`, 'g'), '');

        const sees = template.match(/\*\*`see`\*\* stories .*/g);

        if (sees && sees.length > 0) {
          for (let i = sees.length - 1; i >= 0; i--) {
            const see = sees[i];
            const storyName = see.match(/\[.*.\]/)?.[0];

            const storyId = storyName?.replace(/(\[)|(\])/g, '');

            template = template.replace(
              see,
              `${see}${os.EOL}${os.EOL}
[Go to this canvas](?path=/story/${storyId})

<Canvas>
  <Story id="${storyId}" />
</Canvas>
            `,
            );
          }
        }

        content += `## ${title}${os.EOL}${os.EOL}${template}`;
      });

    fs.ensureDirSync(path.dirname(target));

    fs.writeFileSync(target, getContent(doc, content));
    console.log(`[Stories Doc]: write ${target}`);

    historyFileMap[currFilePath] = newToken;
  } catch (error) {
    console.log(error);
  }
});

fs.writeFileSync(historyFilePath, JSON.stringify(historyFileMap, null, 2));

Lib.deleteDir(tmpFolder);

console.log('[Stories Doc]: complete!');
