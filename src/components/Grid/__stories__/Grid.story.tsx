import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcPaper } from '../../Paper';
import { RcText } from '../../Text';
import { RcGrid } from '../Grid';

export default {
  title: '🚀 Cleanup Components/Grid',
  component: RcGrid,
  argTypes: {
    ...notControlInDocTable<keyof GridProps>(['container']),
    ...sortInDocTable<keyof GridProps>(['direction', 'wrap']),
    justify: {
      control: { type: 'radio' },
    },
    alignContent: {
      control: { type: 'radio' },
    },
    ...sortInDocTable<keyof GridProps>(['alignItems', 'spacing']),
    ...notShowInDocTable<keyof GridProps>([
      'item',
      'sm',
      'xl',
      'md',
      'xs',
      'lg',
      'zeroMinWidth',
    ]),
  },
} as Meta;

type GridProps = ComponentProps<typeof RcGrid>;

export const GridContainer: Story<GridProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <>
      <RcText noWrap={false}>
        <RcText highlight>align-content </RcText>
        determines the spacing between lines
      </RcText>
      <RcText noWrap={false} gutterBottom>
        <RcText highlight>align-items </RcText>
        determines how the items as a whole are aligned within the container.
      </RcText>

      <RcGrid container {...args}>
        <RcGrid item xs={4}>
          <RcPaper>1. xs=3</RcPaper>
        </RcGrid>
        <RcGrid item xs={4}>
          <RcPaper>2. xs=3</RcPaper>
        </RcGrid>
        <RcGrid item xs={5}>
          <RcPaper>3. xs=3</RcPaper>
        </RcGrid>
      </RcGrid>
    </>
  );
};

GridContainer.args = {
  spacing: 9,
};

GridContainer.argTypes = {};

GridContainer.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/grid/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
