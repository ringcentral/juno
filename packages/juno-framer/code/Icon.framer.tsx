import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcIcon: React.ComponentType = ({ symbol, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcIcon symbol={lib.iconList[symbol]} {...rest} />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcIcon, {
  symbol: {
    title: 'symbol',
    type: ControlType.Enum,
    /** description: "Component for render", */
    defaultValue: 'Help',
    options: lib.iconOptions,
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "color of icon", */
    defaultValue: undefined,
    options: [undefined, ...lib.colorOptions],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size of icon", */
    defaultValue: 'large',
    options: [
      'small',
      'inherit',
      'medium',
      'large',
      'xsmall',
      'xlarge',
      'xxlarge',
      'xxxlarge',
    ],
  },
  loading: {
    title: 'loading',
    type: ControlType.Boolean,
    /** description: "is that icon replace to loading", */
    defaultValue: false,
  },
  // CircularProgressProps: {
  //   title: "CircularProgressProps",
  //   type: ControlType.Object,
  //   /** description: "Props send to `RcCircularProgress` when loading is `true`", */
  //   defaultValue: undefined,
  // },
});

export default RcIcon;
