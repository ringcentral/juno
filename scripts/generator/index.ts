import { ComponentGenerator } from './component';

export * from './component';

const [url, ...args] = process.argv.slice(2);

new ComponentGenerator(url, args).createFile();
