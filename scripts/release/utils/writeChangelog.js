const standardVersion = require('standard-version');

const writeChangelog = async (options = {}) => {
  console.log('[release]: changelog writing');

  await standardVersion({
    tagPrefix: '',
    header: '',
    skip: {
      tag: true,
    },
    ...options,
  })
    .then(() => {
      console.log(`[release]: changelog write completed, `);
    })
    .catch((err) => {
      console.error(`standard-version failed with message: ${err.message}`);
    });
};

module.exports = {
  writeChangelog,
};
