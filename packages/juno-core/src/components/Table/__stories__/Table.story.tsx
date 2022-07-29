import {
  ItemProps,
  RcButton,
  RcCheckbox,
  RcTable,
  RcTableBody,
  RcTableCell,
  RcTableContainer,
  RcTableHead,
  RcTableRow,
  ScrollerProps,
  styled,
  TableProps as VirtuosoTableProps,
  TableVirtuoso,
  TableVirtuosoHandle,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';
import { range } from 'lodash';
import React, { ComponentProps, FC, forwardRef, useRef, useState } from 'react';
import { iterateMap } from './iterable';
import { useSelectTable } from './useSelectTable';
import { useSortTable } from './useSortTable';
import { createData, DataType, headRow, sortHandle, tableData } from './utils';

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

type VlContext = { isSelected: (key: number) => boolean; data: DataType[] };

const vldata = range(2000).map((v) =>
  createData(`firstName${v}`, `lastName${v}`, v),
);

const TableVirtuosoScroller = forwardRef<any, ScrollerProps>(
  ({ children, ...rest }, ref) => (
    <RcTableContainer {...rest} ref={ref} bordered>
      {children}
    </RcTableContainer>
  ),
);

const TableVirtuosoTable = forwardRef<any, VirtuosoTableProps>(
  ({ children, ...rest }, ref) => (
    <RcTable {...rest} ref={ref} stickyHeader>
      {children}
    </RcTable>
  ),
);

const TableVirtuosoRow: FC<ItemProps & { context: VlContext }> = ({
  children,
  'data-index': dataIndex,
  context: { isSelected, data },
  ...rest
}) => (
  <RcTableRow
    selected={isSelected(data[dataIndex].id)}
    data-index={dataIndex}
    {...rest}
  >
    {children}
  </RcTableRow>
);

export const VirtualizedTable: Story = () => {
  const [data, setData] = useState<DataType[]>(() => vldata.slice(0, 300));

  const { sortedKey, switchDirection, direction } = useSortTable(
    (order, key) => {
      if (key !== null)
        setData((pre) =>
          vldata.sort(sortHandle[order](key)).slice(0, pre.length),
        );
      virtuosoRef.current?.scrollToIndex(0);
    },
    {
      defaultKey: defaultSortKey,
      defaultDirection: defaultSortDirection,
    },
  );

  const loadMore = (i: number) => {
    console.log(i);
    setData((preData) => {
      return vldata.slice(0, preData.length + 200);
    });
  };

  const { isSelected, switchSelectState, selectAll, isSelectedAll } =
    useSelectTable<number>({
      getAll: () => iterateMap(data, (value) => value.id),
    });

  const virtuosoRef = useRef<TableVirtuosoHandle>(null);

  return (
    <TableVirtuoso<DataType, VlContext>
      ref={virtuosoRef}
      style={{ height: 800 }}
      data={data}
      endReached={loadMore}
      context={{ isSelected, data }}
      // overscan={1000}
      increaseViewportBy={1000}
      components={{
        Scroller: TableVirtuosoScroller,
        Table: TableVirtuosoTable,
        TableHead: RcTableHead as any,
        TableRow: TableVirtuosoRow,
        // need forward ref
        TableBody: RcTableBody as any,
      }}
      fixedHeaderContent={() => (
        <RcTableRow>
          <RcTableCell padding="checkbox">
            <RcCheckbox checked={isSelectedAll()} onClick={() => selectAll()} />
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
      )}
      itemContent={(_, { firstName, lastName, age, id }) => (
        <>
          <RcTableCell padding="checkbox">
            <RcCheckbox
              checked={isSelected(id)}
              onClick={() => switchSelectState(id)}
            />
          </RcTableCell>
          <RcTableCell>{firstName}</RcTableCell>
          <RcTableCell>{lastName}</RcTableCell>
          <RcTableCell align="right">{age}</RcTableCell>
        </>
      )}
    />
  );
};
