import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
  originChoice,
  originChoiceStringToObj,
} from '../../../storybook';
import { RcButton } from '../../Buttons';
import { RcTypography } from '../../Typography';
import { RcPopover } from '../Popover';

export default {
  title: '🚀 Cleanup Components/Popover',
  component: RcPopover,
  argTypes: {
    ...sortInDocTable<keyof PopoverProps>(['open', 'anchorEl']),
    anchorOrigin: {
      control: {
        type: 'select',
        options: originChoice,
      },
    },
    ...sortInDocTable<keyof PopoverProps>([
      'anchorPosition',
      'anchorReference',
      'container',
      'getContentAnchorEl',
      'elevation',
      'marginThreshold',
      'PaperProps',

      'transformOrigin',
      'TransitionComponent',
      'transitionDuration',
      'TransitionProps',
    ]),
    transformOrigin: {
      control: {
        type: 'select',
        options: originChoice,
      },
    },
    ...sortInDocTable<keyof PopoverProps>([
      'TransitionComponent',
      'transitionDuration',
      'TransitionProps',
    ]),
    ...notControlInDocTable<keyof PopoverProps>(['open', 'anchorEl']),
    ...notShowInDocTable<keyof PopoverProps>([]),
  },
} as Meta;

type PopoverProps = Partial<ComponentProps<typeof RcPopover>>;

export const Popover: Story<PopoverProps> = ({
  children,
  anchorOrigin: anchorOriginProp,
  transformOrigin: transformOriginProp,
  ...args
}) => {
  switchToControlKnobs();

  const anchorOrigin = originChoiceStringToObj(anchorOriginProp as any);
  const transformOrigin = originChoiceStringToObj(transformOriginProp as any);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget as HTMLButtonElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'middle',
      }}
    >
      <RcButton aria-describedby={id} onClick={handleClick}>
        Open Popover
      </RcButton>
      <RcPopover
        {...args}
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        onClose={handleClose}
      >
        <RcTypography>The content of the Popover.</RcTypography>
      </RcPopover>
    </div>
  );
};

Popover.args = {
  anchorOrigin: originChoice[0] as any,
};

Popover.argTypes = {
  ...notControlInDocTable<keyof PopoverProps>([]),
};

Popover.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/popover/#popover',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
