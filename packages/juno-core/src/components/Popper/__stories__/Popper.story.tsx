import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcButton } from '../../Buttons/Button';
import { RcTypography } from '../../Typography';
import { RcPopper } from '../Popper';

export default {
  title: '🚀 Cleanup Components/Popper',
  component: RcPopper,
  argTypes: {
    ...sortInDocTable<keyof PopperProps>([]),
    ...notControlInDocTable<keyof PopperProps>([]),
    ...notShowInDocTable<keyof PopperProps>([]),
  },
} as Meta;

type PopperProps = Partial<ComponentProps<typeof RcPopper>>;

export const Popper: Story<PopperProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <RcButton aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </RcButton>
      <RcPopper {...args} id={id} open={open} anchorEl={anchorEl}>
        <div>
          <RcTypography color="neutral.f06">
            The content of the Popper.
          </RcTypography>
        </div>
      </RcPopper>
    </div>
  );
};

Popper.args = {};

Popper.argTypes = {
  ...notControlInDocTable<keyof PopperProps>([]),
};

Popper.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/popper/#popper',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
