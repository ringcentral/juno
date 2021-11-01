import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcThumbnail: React.ComponentType = ({
  _children,
  symbol,
  ...rest
}: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcThumbnail {...rest} symbol={lib.iconList[symbol]}>
        {_children}
      </lib.RcThumbnail>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcThumbnail, {
  src: {
    title: 'src',
    type: ControlType.Image,
    /** description: "Thumbnail background url", */
  },
  symbol: {
    title: 'symbol',
    type: ControlType.Enum,
    /** description: "that will render RcIcon when not have url", */
    defaultValue: 'NonEdit',
    options: [undefined, ...lib.iconOptions],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "thumbnail size, default is `large`", */
    defaultValue: 'large',
    options: ['small', 'large'],
  },
});

export default RcThumbnail;
