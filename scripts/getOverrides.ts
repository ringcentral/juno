/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable security/detect-non-literal-require */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

console.log(`[JUNO] add overrides fields...`);

const paths = [
  '../src/foundation/theme/ThemeSwitcherProvider/rcHighContrast.json',
  '../src/foundation/theme/ThemeSwitcherProvider/rcDark.json',
];

paths.forEach((sourcePath) => {
  const targetPath = path.join(__dirname, sourcePath);
  const themeConfig = require(targetPath);
  const elevationOverrides = {};

  if (path.basename(sourcePath, '.json') === 'rcHighContrast') {
    for (let i = 1; i <= 24; ++i) {
      elevationOverrides[`elevation${i}`] = {
        'box-shadow': `0 0 0 1px ${themeConfig.palette.highContrast}`,
      };
    }
  }

  const result = {
    ...themeConfig,
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: themeConfig.palette.neutral.elevation,
          color: themeConfig.palette.neutral.f06,
        },
        ...elevationOverrides,
      },
    },
  };

  fs.writeFileSync(targetPath, JSON.stringify(result, null, 2));
  console.log(`[JUNO] ${targetPath} add overrides fields completed`);
});
