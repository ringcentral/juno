import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcPresence: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcPresence {...rest}>{_children}</lib.RcPresence>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcPresence, {
  type: {
    title: 'type',
    type: ControlType.Enum,
    /** description: "presence type", */
    defaultValue: 'notReady',
    options: [
      'notReady',
      'unavailable',
      'available',
      'onCall',
      'DND',
      'inMeeting',
      'busy',
      'offline',
      'attended',
      'unAttended',
    ],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size of presence", */
    defaultValue: 'xsmall',
    options: ['small', 'medium', 'large', 'xxsmall', 'xsmall', 'xlarge'],
  },
  borderSize: {
    title: 'borderSize',
    type: ControlType.Enum,
    /** description: "custom presence border, default is equal to size", */
    defaultValue: undefined,
    options: [
      undefined,
      'small',
      'medium',
      'large',
      'xxsmall',
      'xsmall',
      'xlarge',
    ],
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "other custom color with presence", */
    defaultValue: undefined,
    options: [undefined, ...lib.colorOptions],
  },
});

export default RcPresence;
