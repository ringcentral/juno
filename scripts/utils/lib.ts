import fs from 'fs';
import path from 'path';

const mkdirFull = (dirname: string) => {
  if (fs.existsSync(dirname)) {
    return true;
  }
  if (mkdirFull(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
  return false;
};

export namespace Lib {
  export const makeDirExit = (url: string): boolean => {
    try {
      if (!fs.existsSync(url)) {
        mkdirFull(url);
      }
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  };

  export const writeFile = (url: string, value: string) => {
    return new Promise<string>((resolve, reject) => {
      try {
        const file = fs.createWriteStream(url);
        file.write(value);

        file.on('close', () => {
          resolve(value);
        });
        file.end();
      } catch (error) {
        reject(error);
      }
    });
  };

  export const deleteFile = (url: string): boolean => {
    try {
      if (fs.existsSync(url)) {
        fs.unlinkSync(url);
      }
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  };

  export const deleteDir = (url: string) => {
    let files = [];
    if (fs.existsSync(url)) {
      files = fs.readdirSync(url);
      files.forEach((file) => {
        const curPath = `${url}/${file}`;
        if (fs.statSync(curPath).isDirectory()) {
          // recurse
          deleteDir(curPath);
        } else {
          // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(url);
    }
  };

  export const getCMDUrl = () => {
    return process.cwd();
  };

  export const isDirExists = (filePath: string) => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  };

  export function getFileTree(sourceUrl: string, acceptFolder?: boolean) {
    const returnObj: string[] = [];
    const files = fs.readdirSync(sourceUrl);

    files.forEach((file) => {
      const url = path.join(sourceUrl, file);

      if (!url.includes('node_modules')) {
        if (fs.lstatSync(url).isDirectory()) {
          if (acceptFolder) {
            returnObj.push(url);
          } else {
            returnObj.push(...getFileTree(url));
          }
        } else {
          returnObj.push(url);
        }
      }
    });

    return returnObj;
  }

  function clearString(s: string) {
    const pattern = new RegExp(/[.\-_]/);
    let rs = '';
    for (let i = 0; i < s.length; i++) {
      rs = rs + s.substr(i, 1).replace(pattern, ' ');
    }
    return rs;
  }

  export function camelize(str: string) {
    let currentStr = ` ${str}`;
    currentStr = clearString(currentStr);
    return currentStr.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  export function uncamelize(text: string, separator = '_') {
    let currentText = text;
    let currentSeparator = separator;
    if (typeof currentSeparator === 'undefined') {
      currentSeparator = '_';
    }

    // Replace all capital letters and group of numbers by the
    // separator followed by lowercase version of the match
    currentText = currentText.replace(/[A-Z]|\d+/g, (match) => {
      return currentSeparator + match.toLowerCase();
    });

    // Remove first separator (to avoid _hello_world name)
    return currentText.replace(new RegExp(`^${separator}`), '');
  }

  export function upperCaseArray(str: string) {
    return str.split(/(?=[A-Z])/);
  }

  export function firstLowerCase(input: string): string {
    return input[0].toLowerCase() + input.substr(1);
  }
}
