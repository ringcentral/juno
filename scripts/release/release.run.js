const standardVersion = require('standard-version');
const inquirer = require('inquirer');

const argPackageName = process.argv[2];
const argReleaseAs = process.argv[3];
const ignoreNext = process.argv.includes('--ignore-next');

(async () => {
  try {
    const packageOptions = ['juno-core', 'juno-icon'];

    const { packageName } = argPackageName
      ? { packageName: argPackageName }
      : await inquirer.prompt([
          {
            type: 'list',
            name: 'packageName',
            message: `Which package do you want to release?`,
            default: 'juno-core',
            choices: packageOptions,
          },
        ]);

    const packagePath = `packages/${packageName}`;

    const { currentRelease } = await inquirer.prompt([
      {
        type: 'list',
        name: 'currentRelease',
        message: `what kind of release do you want to do for ${packageName}?
        (current as release now package version without bump version)`,
        default: 'current',
        choices: ['current', 'patch', 'minor', 'major'],
      },
    ]);
    const isBump = currentRelease !== 'current';

    const pathOptions = {
      path: packagePath,
      infile: `${packagePath}/CHANGELOG.md`,
      packageFiles: [`${packagePath}/package.json`],
      bumpFiles: [`${packagePath}/package.json`],
    };

    await standardVersion({
      releaseAs: isBump ? currentRelease : 'patch',
      tagPrefix: `${packageName}-v`,
      header: '',
      ...pathOptions,
      commitAll: true,
      releaseCommitMessageFormat: `chore(release): [${packageName}] release {{currentTag}}`,
      scripts: {
        postchangelog: 'yarn update-mdx && git add .',
      },
      skip: {
        bump: !isBump,
      },
    });

    if (ignoreNext) return;

    const { releaseAs } = argReleaseAs
      ? argReleaseAs
      : await inquirer.prompt([
          {
            type: 'list',
            name: 'releaseAs',
            message: `what kind of next release do you want to do for ${packageName}?`,
            default: 'patch',
            choices: ['patch', 'minor', 'major'],
          },
        ]);

    await standardVersion({
      releaseAs,
      ...pathOptions,
      skip: {
        tag: true,
        changelog: true,
      },
      releaseCommitMessageFormat: `chore(next): [${packageName}] start next {{currentTag}}`,
    });
  } catch (error) {
    console.error(`standard-version failed with message: ${error.message}`);
  }
})();
