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
import { headRow, tableData } from '../../__stories__/utils';

export default {
  title: '🚀 Cleanup Components/Table/TableBody',
  component: RcTableBody,
  argTypes: {
    ...sortInDocTable<keyof TableBodyProps>([]),
    ...notControlInDocTable<keyof TableBodyProps>([]),
    ...notShowInDocTable<keyof TableBodyProps>([]),
  },
} as Meta;

type TableBodyProps = ComponentProps<typeof RcTableBody>;

const data = tableData.slice(0, 5);

export const TableBody: Story<TableBodyProps> = ({ children, ...args }) => {
  return (
    <RcTableContainer bordered>
      <RcTable>
        <RcTableHead>
          <RcTableRow>
            {headRow.map(({ label, align, key }) => (
              <RcTableCell key={key} align={align}>
                {label}
              </RcTableCell>
            ))}
          </RcTableRow>
        </RcTableHead>
        <RcTableBody {...args}>
          {data.map(({ firstName, lastName, age }) => {
            return (
              <RcTableRow>
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

TableBody.storyName = 'TableBody';

TableBody.args = {};

TableBody.argTypes = {
  ...notControlInDocTable<keyof TableBodyProps>([]),
};

TableBody.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
