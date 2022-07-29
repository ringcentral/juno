import {
  RcTable,
  RcTableBody,
  RcTableCell,
  RcTableContainer,
  RcTableRow,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { tableData } from '../../__stories__/utils';

export default {
  title: '🚀 Cleanup Components/Table/TableRow',
  component: RcTableRow,
  argTypes: {
    ...sortInDocTable<keyof TableRowProps>([]),
    ...notControlInDocTable<keyof TableRowProps>([]),
    ...notShowInDocTable<keyof TableRowProps>([]),
  },
} as Meta;

type TableRowProps = ComponentProps<typeof RcTableRow>;

const data = tableData.slice(0, 5);

export const TableRow: Story<TableRowProps> = ({ children, ...args }) => {
  return (
    <RcTableContainer bordered>
      <RcTable>
        <RcTableBody>
          {data.map(({ firstName, lastName, age }) => {
            return (
              <RcTableRow {...args}>
                <RcTableCell>{firstName}</RcTableCell>
                <RcTableCell>{lastName}</RcTableCell>
                <RcTableCell align="right">{age}</RcTableCell>
              </RcTableRow>
            );
          })}
        </RcTableBody>
      </RcTable>
    </RcTableContainer>
  );
};

TableRow.storyName = 'TableRow';

TableRow.args = {};

TableRow.argTypes = {
  ...notControlInDocTable<keyof TableRowProps>([]),
};

TableRow.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
