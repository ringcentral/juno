import fs from 'fs';
import path from 'path';

import { getIconsFromTemplate } from '../../../../scripts/update-icon-source';
import { getFolderTree } from '../../../../scripts/utils/getFolderTree';

describe('icon svg file', () => {
  const mapFileTemplate = fs.readFileSync(
    path.join(__dirname, '../icon-symbol.ts'),
    'utf8',
  );

  const icons = getIconsFromTemplate(mapFileTemplate);

  it('contain all the icons that needed', () => {
    const files = getFolderTree(path.join(__dirname, '/../assets'));
    Object.values(files).forEach((file: string) => {
      const fileName = path.parse(file).name;
      expect(icons.includes(fileName.replace('icon-', ''))).toBeTruthy();
    });
  });

  it('expect svg file to match snapshot', () => {
    expect(mapFileTemplate).toMatchSnapshot();
  });
});
