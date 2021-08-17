import { MdxGenerator } from './mdx.generator';

const [url] = process.argv.slice(2);

new MdxGenerator(url).createFile();
