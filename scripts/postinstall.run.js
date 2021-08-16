const fs = require('fs');
const path = require('path');

console.log('---------------Fix node_modules issue start------------------');

const changeComment = '/** fix type package */';

const fixTypeFile = [
  {
    url:
      'node_modules/@material-ui/pickers/views/Calendar/SlideTransition.d.ts',
    content: 'interface SlideTransitionProps',
    replaceTo: changeComment + 'export interface SlideTransitionProps',
  },
];

fixTypeFile.forEach((o) => {
  const filePath = path.join(process.cwd(), o.url);
  if (fs.existsSync(filePath)) {
    const template = fs.readFileSync(filePath).toString();
    if (!template.includes(changeComment)) {
      fs.writeFileSync(filePath, template.replace(o.content, o.replaceTo));
      console.log('Fix:' + filePath);
    }
  }
});

console.log('---------------Fix node_modules issue end------------------');
