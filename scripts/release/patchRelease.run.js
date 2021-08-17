const { writeChangelog } = require('./utils');

writeChangelog({
  releaseAs: 'patch',
  skip: {
    tag: true,
    bump: true,
  },
});
