import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcPaper } from '../Paper';

export default {
  title: '🚀 Cleanup Components/Paper',
  component: RcPaper,
  argTypes: {
    ...sortInDocTable<keyof PaperProps>([]),
    ...notControlInDocTable<keyof PaperProps>([]),
    ...notShowInDocTable<keyof PaperProps>([]),
  },
} as Meta;

type PaperProps = ComponentProps<typeof RcPaper>;

export const Paper: Story<PaperProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcPaper {...args}>
      <h3>This is a sheet of paper.</h3>
      <p>
        Paper can be used to build surface or other elements for your
        application.
      </p>
    </RcPaper>
  );
};

Paper.args = {
  elevation: 1,
};

Paper.argTypes = {
  ...notControlInDocTable<keyof PaperProps>([]),
};

Paper.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/paper/#paper',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
