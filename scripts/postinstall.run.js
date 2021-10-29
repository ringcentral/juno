const fs = require('fs');
const path = require('path');

console.log('---------------Fix node_modules issue start------------------');

const changeComment = '/** [Juno] postinstall fix */';

const fixTypeFile = [
  {
    url:
      'node_modules/@material-ui/pickers/views/Calendar/SlideTransition.d.ts',
    content: 'interface SlideTransitionProps',
    replaceTo: 'export interface SlideTransitionProps',
  },
  // for esbuild build esm correct
  {
    url: 'node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js',
    content:
      'export { Calendar as C, Calendar$1 as a, isYearAndMonthViews as b, getFormatByViews as g, isYearOnlyView as i, styles as s }',
    replaceTo:
      'export { Calendar as C, Calendar$1 as a, isYearAndMonthViews as b, getFormatByViews as g, isYearOnlyView as i, styles as s, SlideTransition, runKeyHandler }',
  },
];

fixTypeFile.forEach((o) => {
  const filePath = path.join(process.cwd(), o.url);
  if (fs.existsSync(filePath)) {
    const template = fs.readFileSync(filePath).toString();
    if (!template.includes(changeComment) && template.includes(o.content)) {
      fs.writeFileSync(
        filePath,
        template.replace(o.content, changeComment + o.replaceTo),
      );
      console.log('Fix:' + filePath);
    }
  }
});

console.log('---------------Fix node_modules issue end------------------');
