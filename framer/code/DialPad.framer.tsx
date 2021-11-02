import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

/**
 * @framerIntrinsicWidth 200
 *
 * @framerSupportedLayoutWidth fixed
 */
const RcDialPad: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcDialPad {...rest} sounds={lib.RcDialerPadSounds} />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcDialPad, {
  muted: {
    title: 'muted',
    type: ControlType.Boolean,
    /** description: "is keypad sound muted", */
    defaultValue: false,
  },
  volume: {
    title: 'volume',
    type: ControlType.Number,
    /** description: "volume of keypad sound", */
    defaultValue: 1,
  },
  longPressDelay: {
    title: 'longPressDelay',
    type: ControlType.Number,
    /** description: "long press '0' time to typing '+'", */
    defaultValue: 1000,
  },
  persistBgTime: {
    title: 'persistBgTime',
    type: ControlType.Number,
    /** description: "time of persist button background when manual trigger by 'actionRef'
button background will not persist if persistBgTime less than 0", */
    defaultValue: 200,
  },
});

export default RcDialPad;
