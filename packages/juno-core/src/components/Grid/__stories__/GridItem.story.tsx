import React, { ComponentProps } from 'react';

import { RcGrid, RcPaper } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Grid/Grid Item',
  component: RcGrid,
  argTypes: {
    ...sortInDocTable<keyof GridProps>([
      'item',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'zeroMinWidth',
    ]),
    ...notControlInDocTable<keyof GridProps>(['item']),
    ...notShowInDocTable<keyof GridProps>([
      'container',
      'direction',
      'wrap',
      'justify',
      'alignContent',
      'alignItems',
      'spacing',
    ]),
  },
} as Meta;

type GridProps = ComponentProps<typeof RcGrid>;

export const GridItem: Story<GridProps> = ({ children, ...args }) => {
  const items = [...new Array(6)].map((x, i) => i);

  return (
    <RcGrid container>
      {items.map((item) => (
        <RcGrid key={item} item {...args}>
          <RcPaper>{item}</RcPaper>
        </RcGrid>
      ))}
    </RcGrid>
  );
};

GridItem.args = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

GridItem.argTypes = {};

GridItem.parameters = {
  tags: [],
};
