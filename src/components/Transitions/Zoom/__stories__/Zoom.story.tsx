import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, useState } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcBox } from '../../../Box';
import { RcSwitch } from '../../../Forms/Switch';
import { RcZoom } from '../Zoom';

export default {
  title: '🚀 Cleanup Components/🌈Animations/Transition/Zoom',
  component: RcZoom,
  argTypes: {
    ...sortInDocTable<keyof ZoomProps>([]),
    ...notControlInDocTable<keyof ZoomProps>([]),
    ...notShowInDocTable<keyof ZoomProps>([]),
  },
} as Meta;

type ZoomProps = ComponentProps<typeof RcZoom>;

export const Zoom: Story<ZoomProps> = ({ children, in: openProp, ...args }) => {
  switchToControlKnobs();
  const [open, setOpen] = useState(!!openProp);

  return (
    <>
      <RcSwitch
        checked={open}
        label="Show"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <br />
      <br />
      <RcBox display="flex">
        <RcZoom in={open} {...args}>
          <RcBox width="100px" height="100px" bgcolor="neutral.b03" />
        </RcZoom>
      </RcBox>
    </>
  );
};

Zoom.storyName = 'Zoom';

Zoom.args = {};

Zoom.argTypes = {
  ...notControlInDocTable<keyof ZoomProps>([]),
};

Zoom.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/transitions/#zoom',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
