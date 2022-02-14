import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { useTheme } from '../../../foundation';
import { RcBox } from '../../Box';
import { RcButton } from '../../Buttons';
import { RcGrid } from '../../Grid';
import { RcHidden } from '../Hidden';

export default {
  title: '🚀 Cleanup Components/Hidden',
  component: RcHidden,
  argTypes: {
    ...sortInDocTable<keyof HiddenProps>([]),
    ...notControlInDocTable<keyof HiddenProps>([]),
    ...notShowInDocTable<keyof HiddenProps>([]),
  },
} as Meta;

type HiddenProps = ComponentProps<typeof RcHidden>;

export const Hidden: Story<HiddenProps> = ({ ...args }) => {
  switchToControlKnobs();

  const theme = useTheme();

  return (
    <>
      <RcBox color="neutral.f06" bgcolor="neutral.elevation">
        <pre>{JSON.stringify(theme.breakpoints.values, null, 2)}</pre>
      </RcBox>
      <RcGrid container>
        <RcGrid item xs>
          <RcHidden smDown {...args}>
            <RcButton color="highlight.b03">smDown</RcButton>
          </RcHidden>
        </RcGrid>
        <RcGrid item xs>
          <RcHidden lgUp {...args}>
            <RcButton>lgUp</RcButton>
          </RcHidden>
        </RcGrid>
        <RcGrid item xs>
          <RcHidden only="md">
            <RcButton color="danger.b03">Hidden on md</RcButton>
          </RcHidden>
        </RcGrid>
        <RcGrid item xs>
          <RcHidden only={['lg', 'sm']}>
            <RcButton>Hidden on lg and sm</RcButton>
          </RcHidden>
        </RcGrid>
      </RcGrid>
    </>
  );
};

Hidden.storyName = 'Hidden';

Hidden.args = {};

Hidden.argTypes = {
  ...notControlInDocTable<keyof HiddenProps>([]),
};

Hidden.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/hidden',
    },
  ],
};
