import {
  RcCheckbox,
  RcTable,
  RcTableBody,
  RcTableCell,
  RcTableContainer,
  RcTableHead,
  RcTableRow,
  styled,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, useState } from 'react';
import { iterateMap } from './iterable';
import { useSelectTable } from './useSelectTable';
import { useSortTable } from './useSortTable';
import { headRow, sortHandle, tableData } from './utils';

export default {
  title: '🚀 Cleanup Components/Table/Table',
  component: RcTable,
  argTypes: {
    ...sortInDocTable<keyof TableProps>([]),
    ...notControlInDocTable<keyof TableProps>([]),
    ...notShowInDocTable<keyof TableProps>([]),
  },
} as Meta;

type TableProps = ComponentProps<typeof RcTable>;

const defaultSortDirection = 'desc';
const defaultSortKey = 'firstName';

const StyledTableContainer = styled(RcTableContainer)`
  max-height: 500px;
`;

export const Table: Story<TableProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  const [data, setData] = useState(() =>
    [...tableData].sort(sortHandle[defaultSortDirection](defaultSortKey)),
  );

  const { sortedKey, switchDirection, direction } = useSortTable(
    (order, key) => {
      if (key !== null) setData((pre) => [...pre].sort(sortHandle[order](key)));
    },
    {
      defaultKey: defaultSortKey,
      defaultDirection: defaultSortDirection,
    },
  );

  const { isSelected, switchSelectState, selectAll, isSelectedAll } =
    useSelectTable<number>({
      getAll: () => iterateMap(data, (value) => value.id),
    });

  return (
    <StyledTableContainer bordered>
      <RcTable stickyHeader {...args}>
        <RcTableHead>
          <RcTableRow>
            <RcTableCell padding="checkbox">
              <RcCheckbox
                checked={isSelectedAll()}
                onClick={() => selectAll()}
              />
            </RcTableCell>
            {headRow.map(({ label, align, key }) => (
              <RcTableCell
                key={key}
                align={align}
                activeSort={sortedKey === key}
                sortDirection={direction}
                onClick={() => {
                  switchDirection(key);
                }}
              >
                {label}
              </RcTableCell>
            ))}
          </RcTableRow>
        </RcTableHead>
        <RcTableBody>
          {data.map(({ id, firstName, lastName, age }) => {
            const checked = isSelected(id);
            return (
              <RcTableRow key={id} selected={checked}>
                <RcTableCell padding="checkbox">
                  <RcCheckbox
                    checked={checked}
                    onClick={() => switchSelectState(id)}
                  />
                </RcTableCell>
                <RcTableCell>{firstName}</RcTableCell>
                <RcTableCell>{lastName}</RcTableCell>
                <RcTableCell align="right">{age}</RcTableCell>
              </RcTableRow>
            );
          })}
        </RcTableBody>
      </RcTable>
    </StyledTableContainer>
  );
};

Table.args = {};

Table.argTypes = {
  ...notControlInDocTable<keyof TableProps>([]),
};

Table.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://ringcentral.invisionapp.com/share/MTELJMS5G8A#/screens/265488775_Session2_5-0',
    },
    {
      name: 'Mui',
      href: 'https://v4.mui.com/components/tables/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
