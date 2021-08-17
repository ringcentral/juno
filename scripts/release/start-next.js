const { writeChangelog } = require('./utils');

writeChangelog({
  releaseAs: 'patch',
  skip: {
    tag: true,
    changelog: true,
  },
  releaseCommitMessageFormat: 'chore(next): start next {{currentTag}}',
});
