const fs = require('fs');
const path = require('path');

exports.textReplacePlugin = {
  name: 'textReplace',
  setup(build) {
    build.onLoad({ filter: /.*.tsx|.*.ts|.*.js/ }, async (args) => {
      const loader = path.extname(args.path).replace('.', '');

      const source = await fs.promises.readFile(args.path, 'utf8');

      const contents = source
        .replace(
          '@material-ui/core/Radio/RadioButtonIcon',
          '@material-ui/core/esm/Radio/RadioButtonIcon',
        )
        .replace(
          "import MuiSlideTransition from '@material-ui/pickers/views/Calendar/SlideTransition'",
          "import { SlideTransition as MuiSlideTransition } from '@material-ui/pickers/esm/Calendar-11ae61f6'",
        )
        .replace(
          '@material-ui/pickers/_shared/hooks/useKeyDown',
          '@material-ui/pickers/esm/Calendar-11ae61f6',
        )
        .replace(
          `console.error('Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');`,
          ``,
        );

      return { contents, loader };
    });
  },
};
