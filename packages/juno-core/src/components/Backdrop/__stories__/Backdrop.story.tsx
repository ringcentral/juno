import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { styled, zIndex } from '../../../foundation';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcButton } from '../../Buttons/Button';
import { RcCircularProgress } from '../../Progress/CircularProgress';
import { RcBackdrop } from '../Backdrop';

export default {
  title: '🚀 Cleanup Components/Backdrop',
  component: RcBackdrop,
  argTypes: {
    ...sortInDocTable<keyof BackdropProps>([
      'open',
      'invisible',
      'timeout',
      'disableStrictModeCompat',
    ]),
    ...notControlInDocTable<keyof BackdropProps>([]),
    ...notShowInDocTable<keyof BackdropProps>(['in']),
  },
} as Meta;

const CustomZIndexBackdrop = styled(RcBackdrop)`
  z-index: ${zIndex('drawer')};
`;

type BackdropProps = ComponentProps<typeof RcBackdrop>;

export const Backdrop: Story<BackdropProps> = ({
  children,
  open: openProp,
  ...args
}) => {
  switchToControlKnobs();

  const [open, setOpen] = React.useState(openProp);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <RcButton
        variant="outlined"
        color="interactive.f01"
        onClick={handleToggle}
      >
        Show backdrop
      </RcButton>
      <CustomZIndexBackdrop {...args} open={open} onClick={handleClose}>
        <RcCircularProgress />
      </CustomZIndexBackdrop>
    </>
  );
};

Backdrop.args = {
  open: false,
};

Backdrop.argTypes = {
  ...notControlInDocTable<keyof BackdropProps>([]),
};

Backdrop.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/backdrop/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
