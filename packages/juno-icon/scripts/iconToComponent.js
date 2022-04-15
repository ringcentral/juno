const path = require('path');
const fs = require('fs');
// @ts-ignore
const svgToComponentMapping = require('../devUtils/svgToComponentMapping.ts');

const svgAssetsDirPath = path.join(process.cwd(), './assets');

function template(variables, arg) {
  const { componentName, props, jsx, imports } = variables;
  const { options, tpl } = arg;

  const filePath = path.parse(options.state.filePath);
  const iconName = filePath.name;
  const withoutSvgName = componentName.replace('Svg', '');

  let outPutName = withoutSvgName;

  // mean that name to be number
  if (!isNaN(+outPutName)) {
    outPutName = `Icon${outPutName}`;
  }

  const svgName = svgToComponentMapping[withoutSvgName];
  const darkSvgName = svgToComponentMapping[`${withoutSvgName}D`];

  const hasDark =
    darkSvgName &&
    fs.existsSync(path.join(svgAssetsDirPath, `icon-${darkSvgName}.svg`));

  if (hasDark) {
    // dark parameter AST
    const propTypeAst = props[0].typeAnnotation;
    const darkObjTypeAst = {
      type: 'ObjectTypeAnnotation',
      properties: [
        {
          type: 'ObjectTypeProperty',
          key: {
            type: 'Identifier',
            name: 'themeType',
          },
          value: {
            type: 'GenericTypeAnnotation',
            id: {
              type: 'Identifier',
              name: 'PaletteType',
            },
          },
          optional: true,
        },
      ],
    };
    const intersectionAst = {
      type: 'IntersectionTypeAnnotation',
      types: [propTypeAst, darkObjTypeAst],
    };
    props[0].typeAnnotation = intersectionAst;
    props[0].name = 'inProps';
  }

  return hasDark
    ? tpl`
    import { useTheme, PaletteType } from '@material-ui/core';\n\n
    ${imports};

    ${`import ${outPutName}D from './${outPutName}D'`};\n\n

    const ${outPutName} = memo(forwardRef((${props}) => {
      const theme = useTheme();
      const { themeType=theme.palette.type, ...props } = inProps;

      return themeType === 'dark' ? ${`<${outPutName}D {...props} ref={ref} />`} : ${jsx};
    }));\n\n

    ${outPutName}.displayName = '${outPutName}';\n\n

    ${outPutName}['iconName'] = '${svgName || iconName}';\n\n

    export default ${outPutName};
  `
    : tpl`
    ${imports};

    const ${outPutName} = memo(forwardRef((${props}) => ${jsx}));\n\n

    ${outPutName}.displayName = '${outPutName}';\n\n

    ${outPutName}['iconName'] = '${svgName || iconName}';\n\n

    export default ${outPutName};
  `;
}
module.exports = template;
