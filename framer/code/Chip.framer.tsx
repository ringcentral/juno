import { addPropertyControls, ControlType } from 'framer';
import { cloneElement } from 'react';

import * as lib from '../src';

const RcChip: React.ComponentType = ({
  avatar,
  deleteIcon,
  onDelete,
  ...rest
}: any) => {
  const inputAvatar = avatar?.[0];
  const ava = inputAvatar
    ? cloneElement(inputAvatar, {
        size: 'xxsmall',
      })
    : undefined;

  return (
    <lib.RcThemeProvider>
      <lib.RcChip
        {...rest}
        avatar={ava}
        onDelete={
          deleteIcon
            ? (e) => {
                onDelete(e);
              }
            : undefined
        }
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcChip, {
  label: {
    title: 'label',
    type: ControlType.String,
    /** description: "The content of the label.", */
    defaultValue: 'Basic Chip',
  },
  clickable: {
    title: 'clickable',
    type: ControlType.Boolean,
    /** description: "If `true`, the chip will appear clickable, and will raise when pressed,
even if the onClick prop is not defined.
If false, the chip will not be clickable, even if onClick prop is defined.
This can be used, for example,
along with the component prop to indicate an anchor Chip is clickable.", */
    defaultValue: false,
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the chip should be displayed in a disabled state.", */
    defaultValue: false,
  },
  error: {
    title: 'error',
    type: ControlType.Boolean,
    /** description: "is that error chip", */
    defaultValue: false,
  },
  avatar: {
    title: 'avatar',
    type: ControlType.ComponentInstance,
    /** description: "Avatar element.", */
  },
  onDelete: {
    title: 'deleteIcon',
    type: ControlType.EventHandler,
  },
  deleteIcon: {
    title: 'deleteIcon',
    type: ControlType.Boolean,
    defaultValue: false,
    /** description: "Override the default delete icon element. Shown only if `onDelete` is set.", */
  },
});

export default RcChip;
