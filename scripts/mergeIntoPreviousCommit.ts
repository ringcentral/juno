import { execSync } from 'child_process';

console.log('[Release]: merge into previous commit');
const exec = (cmd: string) => {
  const [result] = execSync(cmd)
    .toString()
    .split('\n');
  return result;
};

const currentBranch = exec('git symbolic-ref --short HEAD');
const message = exec('git log -1 --pretty=%B');

execSync(`git reset ${currentBranch}^ --mixed`);

execSync(`git add .`);
execSync(`git commit -m '${message}'`);
console.log('[Release]: merge into previous commit complete');
