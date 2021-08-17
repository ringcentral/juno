import { getIconsFromTemplate } from './getIconsFromTemplate';

export function getMapFileMaps(template: string) {
  return getIconsFromTemplate(template, /'(.+?)'/g);
}
