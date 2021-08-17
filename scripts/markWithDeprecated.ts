// reference: https://tsquery-playground.firebaseapp.com/
import { tsquery } from '@phenomnomnominal/tsquery';
import fs from 'fs';

const sourcePath = process.argv[2];
console.log(`[JUNO] auto bind withDeprecatedCheck from props...`);

type DeprecatedItem = { name: string; comment: string };

const markWithDeprecated = (filePath: string) => {
  const f = fs.readFileSync(filePath);

  const template = f.toString();

  const ast = tsquery.ast(template);

  const exportNodes = tsquery(
    ast,
    `ExportDeclaration NamedExports ExportSpecifier > Identifier[name=/.*Props$/]`,
  );

  const propsTypeName = exportNodes[0].getText();
  const componentName = propsTypeName.replace('Props', '');

  const [propsTypeContent] = tsquery(
    ast,
    `TypeAliasDeclaration:has(Identifier[name=${propsTypeName}])`,
  );

  const content = propsTypeContent.getText();

  const contentAst = tsquery.ast(content);

  const properties = tsquery(contentAst, `PropertySignature`);

  const items = properties.reduce<DeprecatedItem[]>((acc, property) => {
    const propertyContent = property.getFullText();
    const property_ast = tsquery.ast(propertyContent);

    const [identifier] = tsquery(property_ast, `Identifier`);
    const comment = propertyContent.slice(0, identifier.getStart());

    const searchRegex = /(@deprecated [\S\s].*)([\S\s]*\*\/)/g;
    // const searchRegex = /(\/\*\*.)(@deprecated.)(\S.*)(\*\/)/g;

    const deprecatedTexts = comment.match(searchRegex);

    if (deprecatedTexts) {
      acc.push({
        name: identifier.getText(),
        comment: deprecatedTexts[0],
        // (deprecatedTexts[0] || '').replace(
        //   searchRegex,
        //   (match, p1, p2, p3) => {
        //     return p3;
        //   },
        // ),
      });
    }

    return acc;
  }, []);

  // const componentNode = tsquery(
  //   ast,
  //   `VariableStatement TaggedTemplateExpression:has(CallExpression:has([name=_${componentName}]))`,
  // );

  const time = new Date();

  time.setMonth(time.getMonth() + 3);

  const targetTemplate = `
  withDeprecatedCheck(
    _${componentName},
    [
      ${items
        .map((x) => {
          return `{
          prop: '${x.name}',
          time: '${time.getFullYear()}-${time.getMonth()}',
          comment: \`${x.comment.replace(/`/g, '\\`')}\`,
        }`;
        })
        .join(',\r\n')}
    ],
    '${componentName}',
  )`;

  console.log(targetTemplate);
};

markWithDeprecated(sourcePath);

// currently only console.log not do any thing, just copy past by yourself, and confirm all message correct
console.log(`[JUNO] mark with deprecated completed!`);
