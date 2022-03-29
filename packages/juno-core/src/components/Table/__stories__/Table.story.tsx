import {
  RcTable,
  RcTableBody,
  RcTableCell,
  RcTableCellProps,
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
import { RcCheckbox } from '../../Forms';
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

const defaultSortDir = 'desc';
const defaultSortKey = 'firstName';

const StyledTableContainer = styled(RcTableContainer)`
  max-height: 500px;
`;

export const Table: Story<TableProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  const [data, setData] = useState(
    [...tableData].sort(sortHandle[defaultSortDir](defaultSortKey)),
  );
  const [activatedSortId, setActivatedSortId] =
    useState<string>(defaultSortKey);
  const [dir, setDir] =
    useState<RcTableCellProps['sortDirection']>(defaultSortDir);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  return (
    <StyledTableContainer bordered>
      <RcTable stickyHeader {...args}>
        <RcTableHead>
          <RcTableRow>
            {headRow.map(({ label, align, key }) => (
              <RcTableCell
                key={key}
                align={align}
                activeSort={activatedSortId === key}
                sortDirection={activatedSortId === key ? dir : defaultSortDir}
                onClick={() => {
                  if (activatedSortId !== key) {
                    setActivatedSortId(key);
                    setDir(defaultSortDir);
                    setData((pre) =>
                      [...pre].sort(sortHandle[defaultSortDir](key)),
                    );
                  } else if (dir === 'desc') {
                    setDir('asc');
                    setData((pre) => [...pre].sort(sortHandle.asc(key)));
                  } else {
                    setDir('desc');
                    setData((pre) => [...pre].sort(sortHandle.desc(key)));
                  }
                }}
              >
                {label}
              </RcTableCell>
            ))}
          </RcTableRow>
        </RcTableHead>
        <RcTableBody>
          {data.map(({ id, firstName, lastName, age }) => {
            const checked = selectedItems.includes(id);
            return (
              <RcTableRow key={id} selected={checked}>
                <RcTableCell>
                  <RcCheckbox
                    checked={checked}
                    onClick={() =>
                      setSelectedItems((pre) => {
                        const idx = pre.indexOf(id);
                        if (idx !== -1) {
                          pre.splice(idx, 1);
                          return [...pre];
                        }
                        return [...pre, id];
                      })
                    }
                    label={firstName}
                  />
                </RcTableCell>
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
