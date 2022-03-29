import {
  RcTable,
  RcTableBody,
  RcTableCell,
  RcTableContainer,
  RcTableHead,
  RcTableRow,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { tableData } from '../../__stories__/utils';

export default {
  title: '🚀 Cleanup Components/Table/TableHead',
  component: RcTableCell,
  argTypes: {
    ...sortInDocTable<keyof TableHeadProps>([]),
    ...notControlInDocTable<keyof TableHeadProps>([]),
    ...notShowInDocTable<keyof TableHeadProps>([]),
  },
} as Meta;

type TableHeadProps = ComponentProps<typeof RcTableHead>;

const data = tableData.slice(0, 5);

export const TableHead: Story<TableHeadProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return (
    <RcTableContainer bordered>
      <RcTable>
        <RcTableHead {...args}>
          <RcTableRow>
            <RcTableCell align="right">age</RcTableCell>
          </RcTableRow>
        </RcTableHead>
        <RcTableBody>
          {data.map(({ age }) => {
            return (
              <RcTableRow>
                <RcTableCell align="right">{age}</RcTableCell>
              </RcTableRow>
            );
          })}
        </RcTableBody>
      </RcTable>
    </RcTableContainer>
  );
};

TableHead.storyName = 'TableHead';

TableHead.args = {};

TableHead.argTypes = {
  ...notControlInDocTable<keyof TableHeadProps>([]),
};

TableHead.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
