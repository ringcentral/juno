import fs from 'fs-extra';
import path from 'path';

export function getFileTree(
  sourceUrl: string,
  acceptFolder?: boolean,
  filterFn?: (filePath: string) => boolean,
) {
  const returnObj: string[] = [];
  const files = fs.readdirSync(sourceUrl);

  files.forEach((file) => {
    const url = path.join(sourceUrl, file);

    if (url.match(/node_modules|\.git$|\.gitconfig/gm)) {
      return;
    }

    if (fs.lstatSync(url).isDirectory()) {
      if (acceptFolder) {
        returnObj.push(url);
      } else {
        returnObj.push(...getFileTree(url, acceptFolder, filterFn));
      }
    } else if (!filterFn || filterFn?.(url)) {
      returnObj.push(url);
    }
  });

  return returnObj;
}
