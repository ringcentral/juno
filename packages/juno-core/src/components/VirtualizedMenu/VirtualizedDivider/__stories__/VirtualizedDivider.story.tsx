import React, { ComponentProps } from 'react';

import range from 'lodash/range';

import {
  RcListItemText,
  RcMenuItem,
  RcVirtualizedDivider,
  Virtuoso,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Virtuoso/VirtualizedDivider',
  component: RcVirtualizedDivider,
  argTypes: {
    ...sortInDocTable<keyof VirtualizedDividerProps>([]),
    ...notControlInDocTable<keyof VirtualizedDividerProps>([]),
    ...notShowInDocTable<keyof VirtualizedDividerProps>([]),
  },
} as Meta;

type VirtualizedDividerProps = ComponentProps<typeof RcVirtualizedDivider>;

const menus = range(0, 1000);

export const VirtualizedDivider: Story<VirtualizedDividerProps> = ({
  children,
  ...args
}) => {
  return (
    <>
      <Title variant="body1">
        Virtuoso can't calculate item height correctly, should always use
        padding when you need space between items
      </Title>
      <Virtuoso
        style={{ height: '200px' }}
        totalCount={1000}
        data={menus}
        itemContent={(index) => {
          const label = `${index}-MenuItem`;
          return index % 10 !== 0 ? (
            <RcMenuItem key={index} data-search-text={label}>
              <RcListItemText primary={label} />
            </RcMenuItem>
          ) : (
            <RcVirtualizedDivider {...args}>{children}</RcVirtualizedDivider>
          );
        }}
      />
    </>
  );
};

VirtualizedDivider.storyName = 'VirtualizedDivider';

VirtualizedDivider.args = {};

VirtualizedDivider.argTypes = {
  ...notControlInDocTable<keyof VirtualizedDividerProps>([]),
};

VirtualizedDivider.parameters = {
  tags: [],
};
