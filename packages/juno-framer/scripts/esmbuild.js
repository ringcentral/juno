/* eslint-disable no-console */
const { join, resolve } = require('path');
const esbuild = require('esbuild');
const { textReplacePlugin } = require('./plugin.textReplace');

const color = (n, v) => `\x1b[${n}m${v}\x1b[0m`;

function getBuildOptions(path) {
  return {
    entryPoints: [`${path}/index.ts`],
    // minify: true,
    format: 'esm',
    bundle: true,
    external: [
      'react',
      'react/jsx-runtime',
      'react-dom',
      'framer',
      'framer-motion',
    ],
    tsconfig: join(__dirname, './tsconfig.json'),
    plugins: [textReplacePlugin],
  };
}

async function build(path, outdir) {
  outdir = resolve(outdir);
  // @ts-ignore
  await esbuild.build({ outdir, ...getBuildOptions(path) });
  console.log(`Build done at ${outdir}`);
}

async function serve(path, port = 8000) {
  function onRequest(info) {
    const status = color(
      info.status.toString().startsWith('2') ? 32 : 31,
      info.status,
    );
    const line = color(
      37,
      `${info.method} ${status} ${info.path} [${info.timeInMS}ms]`,
    );
    console.log(line);
  }

  // @ts-ignore
  await esbuild.serve({ port, onRequest }, getBuildOptions(path));
  console.log(`Server listening at http://127.0.0.1:${port}`);
}

const [, , command, path, option] = process.argv;

const toPath = path && resolve(join(process.cwd(), path));

if (command === 'serve') {
  serve(toPath, option && parseInt(option, 10));
} else if (command === 'build') {
  build(toPath, option && resolve(join(process.cwd(), option)));
} else {
  console.log(`Usage:\n  $ esbuild serve src 8000\n  $ esbuild build src dist`);
}
