import { RcPopoverProps } from '@ringcentral/juno';

type OriginType = NonNullable<RcPopoverProps['anchorOrigin']>;

const verticalOption: OriginType['vertical'][] = ['top', 'center', 'bottom'];

const horizontalOption: OriginType['horizontal'][] = [
  'left',
  'center',
  'right',
];

export const originChoice = (() => {
  const originArr: string[] = [];
  verticalOption.forEach((v) => {
    horizontalOption.forEach((h) => {
      originArr.push(`{ "vertical": "${v}", "horizontal": "${h}" }`);
    });
  });
  return originArr;
})();

export const originChoiceStringToObj = (str: string) => {
  return str
    ? (JSON.parse(str) as OriginType)
    : {
        vertical: verticalOption[0],
        horizontal: horizontalOption[0],
      };
};
