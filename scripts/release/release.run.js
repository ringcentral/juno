const standardVersion = require('standard-version');
const inquirer = require('inquirer');

(async () => {
  try {
    const packageOptions = ['juno-core', 'juno-icon'];

    const { packageName } = await inquirer.prompt([
      {
        type: 'list',
        name: 'packageName',
        message: `Which package do you want to release?`,
        default: 'juno-core',
        choices: packageOptions,
      },
    ]);

    const packagePath = `packages/${packageName}`;

    const { releaseAs } = await inquirer.prompt([
      {
        type: 'list',
        name: 'releaseAs',
        message: `what kind of release do you want to do for ${packageName}?`,
        default: 'patch',
        choices: ['patch', 'minor', 'major'],
      },
    ]);

    const pathOptions = {
      path: packagePath,
      infile: `${packagePath}/CHANGELOG.md`,
      packageFiles: [`${packagePath}/package.json`],
      bumpFiles: [`${packagePath}/package.json`],
    };

    await standardVersion({
      releaseAs,
      tagPrefix: `${packageName}-v`,
      header: '',
      ...pathOptions,
      commitAll: true,
      releaseCommitMessageFormat: `chore(release): [${packageName}] release {{currentTag}}`,
      scripts: {
        postchangelog: 'yarn update-mdx && git add .',
      },
      skip: {
        bump: true,
      },
    });

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
