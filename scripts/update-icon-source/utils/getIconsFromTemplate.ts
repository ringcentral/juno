export function getIconsFromTemplate(
  svgData: string,
  re = /<title>(.+?)<\/title>/g,
): string[] {
  const matches: any = [];
  svgData.replace(re, (m: any, p1: any) => {
    matches.push(p1);
    return '';
  });
  return matches;
}
