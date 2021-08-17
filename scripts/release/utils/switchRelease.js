const { execSync } = require('child_process');

const exec = (cmd) => {
  const [result] = execSync(cmd)
    .toString()
    .split('\n');
  return result;
};

const switchRelease = async (fn) => {
  const random = Math.random()
    .toString(35)
    .substr(2, 22);

  const tmpDev = `tmp_release_develop_${random}`;
  const tmpMaster = `tmp_release_master_${random}`;

  // get current branch as A
  const currentBranch = exec('git symbolic-ref --short HEAD');
  const currentCommitSHA = exec('git rev-parse HEAD');

  execSync('git fetch');

  // switch to remote develop, create B branch
  execSync(`git checkout origin/develop -b ${tmpDev}`);

  // merge A branch into B branch
  execSync(`git merge ${currentBranch}`);

  // switch to master branch, create C branch
  execSync(`git checkout origin/master -b ${tmpMaster}`);
  // merge B branch into C branch
  execSync(`git merge ${tmpDev}`);

  try {
    await fn();
  } catch (e) {
    console.log(e);
  }

  // get the latest commit message
  const message = exec('git log -1 --pretty=%B');

  // mixed reset this branch to A
  execSync(`git reset ${currentCommitSHA} --mixed`);
  execSync(`git checkout ${currentBranch}`);

  // commit message with previous save message
  execSync(`git add .`);
  execSync(`git commit -m '${message}'`);

  // delete all create branch
  execSync(`git branch -D '${tmpDev}'`);
  execSync(`git branch -D '${tmpMaster}'`);
};

module.exports = {
  switchRelease,
};
