import React, { ComponentProps, useState } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcBox } from '../../../Box';
import { RcSwitch } from '../../../Forms/Switch';
import { RcSlide } from '../Slide';

export default {
  title: '🚀 Cleanup Components/🌈Animations/Transition/Slide',
  component: RcSlide,
  argTypes: {
    ...sortInDocTable<keyof SlideProps>([]),
    ...notControlInDocTable<keyof SlideProps>([]),
    ...notShowInDocTable<keyof SlideProps>([]),
  },
} as Meta;

type SlideProps = ComponentProps<typeof RcSlide>;

export const Slide: Story<SlideProps> = ({
  children,
  in: openProp,
  ...args
}) => {
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
        <RcSlide in={open} {...args}>
          <RcBox width="100px" height="100px" bgcolor="neutral.b03" />
        </RcSlide>
      </RcBox>
    </>
  );
};

Slide.storyName = 'Slide';

Slide.args = {};

Slide.argTypes = {
  ...notControlInDocTable<keyof SlideProps>([]),
};

Slide.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/transitions/#slide',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
