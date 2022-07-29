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
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { tableData } from '../../__stories__/utils';

export default {
  title: '🚀 Cleanup Components/Table/TableCell',
  component: RcTableCell,
  argTypes: {
    ...sortInDocTable<keyof TableCellProps>([]),
    ...notControlInDocTable<keyof TableCellProps>([]),
    ...notShowInDocTable<keyof TableCellProps>([]),
  },
} as Meta;

type TableCellProps = ComponentProps<typeof RcTableCell>;

const data = tableData.slice(0, 5);

export const TableCell: Story<TableCellProps> = ({ children, ...args }) => {
  return (
    <RcTableContainer bordered>
      <RcTable>
        <RcTableHead>
          <RcTableRow>
            <RcTableCell>age</RcTableCell>
          </RcTableRow>
        </RcTableHead>
        <RcTableBody>
          {data.map(({ age }) => {
            return (
              <RcTableRow>
                <RcTableCell {...args}>{age}</RcTableCell>
              </RcTableRow>
            );
          })}
        </RcTableBody>
      </RcTable>
    </RcTableContainer>
  );
};

TableCell.storyName = 'TableCell';

TableCell.args = {};

TableCell.argTypes = {
  ...notControlInDocTable<keyof TableCellProps>([]),
};

TableCell.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
