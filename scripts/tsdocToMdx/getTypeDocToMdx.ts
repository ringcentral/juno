import path from 'path';

import { Lib } from '../utils/lib';

const sourcePath = process.argv[2];
const category = process.argv[3];
console.log(`[TypeDoc] get typedoc to mdx list`);

const getTypeDocToMdx = (filePath: string) => {
  const fileList = Lib.getFileTree(filePath)
    .filter(
      (x) =>
        !/test.ts|test.tsx|story.tsx|stories.ts|index.ts|story.mdx/.test(x),
    )
    .reduce((prev, curr, i) => {
      const result = path.parse(curr);
      prev[curr] = {
        name: path.join(category, result.name),
        title: result.name,
      };
      return prev;
    }, {});

  console.log(JSON.stringify(fileList, null, 2));
};

getTypeDocToMdx(sourcePath);

console.log(`[TypeDoc] completed!`);
