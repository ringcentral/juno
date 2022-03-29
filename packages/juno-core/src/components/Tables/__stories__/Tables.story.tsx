import React, { useState } from 'react';

import { Meta } from '@storybook/react';

import { RcTable, RcTableBodyCellContent, RcTableProps } from '..';
import { palette2, styled } from '../../../foundation';
import { RcTableHeadView } from '../TableHead';
import { RcTableRow } from '../TableRow';
import {
  COLUMN_TEXT_ALIGN,
  ColumnProps,
  ORDER_TABLE_BY,
  TABLE_BORDER_TYPE,
  TABLE_STICKY_TYPE,
  TABLE_TYPE,
} from '../types';

import arrayFixture from './RcTableMUIDataArray.fixture.json';

export default {
  title: '🖤 deprecated Components/Tables',
  component: RcTable,
} as Meta;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  margin: 25px 0;
  background: ${palette2('neutral', 'b01')};
  border: 1px solid ${palette2('neutral', 'l02')};
  display: flex;
  overflow: scroll;
`;

const HeadRowWithSort = () => {
  const sortMap = { sortKey: 1, sortDirection: ORDER_TABLE_BY.ASC };
  const [columnSortMap, setSortMap] = useState(sortMap);
  const columnData: ColumnProps[] = [
    {
      title: 'Name',
      sortKey: 1,
    },
    {
      title: 'Assignee',
      sortKey: 2,
    },
    {
      title: 'Start',
      sortKey: 3,
    },
    {
      title: 'Due',
      sortKey: 4,
    },
  ];

  return (
    <RcTableHeadView
      columnData={columnData}
      width={400}
      data-test-automation-id={'table-head'}
      sortHandler={(sortDirection, sortKey) => {
        setSortMap({
          sortDirection,
          sortKey,
        });
      }}
      sortMap={columnSortMap}
    />
  );
};

const HeadRow = () => {
  const columnData: ColumnProps[] = [
    {
      title: 'Name',
    },
    {
      title: 'Assignee',
    },
    {
      title: 'Start',
    },
    {
      title: 'Due',
    },
  ];

  return (
    <RcTableHeadView
      columnData={columnData}
      width={400}
      data-test-automation-id={'table-head'}
    />
  );
};

const getTableRows = (numberOfRows: number) => {
  const row = (props: any) => (
    <RcTableRow {...props}>
      <td>
        <RcTableBodyCellContent>Item</RcTableBodyCellContent>
      </td>
      <td>
        <RcTableBodyCellContent>Body</RcTableBodyCellContent>
      </td>
      <td>
        <RcTableBodyCellContent>123</RcTableBodyCellContent>
      </td>
      <td>
        <RcTableBodyCellContent>456</RcTableBodyCellContent>
      </td>
    </RcTableRow>
  );
  return [...new Array(numberOfRows)].map((x, i) => {
    return row({ key: i });
  });
};

export const Sizes = () => {
  const tableProps: RcTableProps = {
    tableBorder: TABLE_BORDER_TYPE.NONE,
    tableSticky: TABLE_STICKY_TYPE.NONE,
    header: <HeadRow />,
    desc: 'Table sizes example',
  };

  return (
    <>
      <Wrapper>
        <RcTable tableType={TABLE_TYPE.AUTO} {...tableProps}>
          {getTableRows(3)}
        </RcTable>
      </Wrapper>

      <Wrapper>
        <RcTable tableType={TABLE_TYPE.CARD} {...tableProps}>
          {getTableRows(3)}
        </RcTable>
      </Wrapper>

      <Wrapper>
        <RcTable tableType={TABLE_TYPE.FULL} {...tableProps}>
          {getTableRows(3)}
        </RcTable>
      </Wrapper>
    </>
  );
};
export const StickyHeader = () => {
  const tableProps: RcTableProps = {
    tableBorder: TABLE_BORDER_TYPE.NONE,
    tableSticky: TABLE_STICKY_TYPE.STICKY,
    tableType: TABLE_TYPE.FULL,
    header: <HeadRow />,
    desc: 'Table sticky header example',
  };

  return (
    <Wrapper style={{ height: '500px' }}>
      <RcTable {...tableProps}>{getTableRows(30)}</RcTable>
    </Wrapper>
  );
};
export const Borders = () => {
  const tableProps: RcTableProps = {
    tableBorder: TABLE_BORDER_TYPE.BORDERED,
    tableSticky: TABLE_STICKY_TYPE.NONE,
    tableType: TABLE_TYPE.AUTO,
    header: <HeadRow />,
    desc: 'Table borders example',
  };

  return (
    <Wrapper>
      <RcTable {...tableProps}>{getTableRows(6)}</RcTable>
    </Wrapper>
  );
};

export const SortStates = () => {
  const tableProps: RcTableProps = {
    tableBorder: TABLE_BORDER_TYPE.NONE,
    tableSticky: TABLE_STICKY_TYPE.NONE,
    tableType: TABLE_TYPE.AUTO,
    header: <HeadRowWithSort />,
    desc: 'Table sort states example',
  };

  return (
    <Wrapper>
      <RcTable
        {...tableProps}
        classes={{ root: 'custom-root', table: 'custom-table' }}
      >
        {getTableRows(12)}
      </RcTable>
    </Wrapper>
  );
};

/**
 * Accessibility example
 */

function accessibilityExampleStory() {
  type HeaderRowProps = {
    sortHandler: Function;
  };

  const HeaderRow = (props: HeaderRowProps) => {
    const initialSortMap = { sortKey: 0, sortDirection: ORDER_TABLE_BY.ASC };
    const [sortMap, setSortMap] = useState(initialSortMap);
    const [columnData] = useState(
      arrayFixture.columns.map((columnValue, index) => ({
        title: columnValue,
        sortKey: index > 0 ? index : undefined,
      })),
    );
    const sortHandler = (sortDirection: ORDER_TABLE_BY, sortKey: number) => {
      setSortMap({ sortDirection, sortKey });
      props.sortHandler(sortDirection, sortKey);
    };

    return (
      <RcTableHeadView
        columnData={columnData}
        data-test-automation-id={'table-head'}
        sortHandler={sortHandler}
        sortMap={sortMap}
      />
    );
  };

  const getTableRowsNew = (numberOfRows: number, tableData: any[]) => {
    const row = (props: any, data: any[]) => (
      <RcTableRow {...props}>
        {data.map((cellData, cellIndex) => {
          return (
            <td key={`${props.key}_${arrayFixture.columns[cellIndex]}`}>
              <RcTableBodyCellContent>{cellData}</RcTableBodyCellContent>
            </td>
          );
        })}
      </RcTableRow>
    );

    return tableData
      .slice(0, numberOfRows)
      .map((data, i) => row({ key: i }, data));
  };

  return () => {
    const [rowData, setRowData] = useState([...arrayFixture.data]);
    const sortHandler = (sortDirection: ORDER_TABLE_BY, sortKey: number) => {
      setRowData((currentRowData) =>
        [...currentRowData].sort((a, b) => {
          let result = 0;
          const sortDirectionMultiplier =
            sortDirection === ORDER_TABLE_BY.DESC ? -1 : 1;
          const valueA = a[sortKey];
          const valueB = b[sortKey];

          // Sort null values to the end
          if (valueA === null && valueB === null) {
            return 0;
          }
          if (valueA === null) {
            return 1;
          }
          if (valueB === null) {
            return -1;
          }

          if (valueA < valueB) {
            result = -1;
          } else if (valueA > valueB) {
            result = 1;
          }

          return result * sortDirectionMultiplier;
        }),
      );
    };

    const tableProps: RcTableProps = {
      tableBorder: TABLE_BORDER_TYPE.NONE,
      tableSticky: TABLE_STICKY_TYPE.STICKY,
      tableType: TABLE_TYPE.AUTO,
      header: <HeaderRow sortHandler={sortHandler} />,
      desc: 'Accessibility compliant table example',
    };

    return (
      <Wrapper>
        <RcTable {...tableProps}>{getTableRowsNew(100, rowData)}</RcTable>
      </Wrapper>
    );
  };
}

export const Accessibility = accessibilityExampleStory();

/**
 * Right-aligned column example -- Requires custom table data cell styles
 * The significant items to note are:
 *   - textAlign on the applicable columnData definitions
 *   - textAlign on the RcTableBodyCellContent component
 */
function rightAlignedColumnExampleStory() {
  type HeaderRowProps = {
    sortHandler: Function;
  };

  const numericCols = ['runtimeMinutes', 'numVotes'];
  const HeaderRow = (props: HeaderRowProps) => {
    const initialSortMap = { sortKey: 0, sortDirection: ORDER_TABLE_BY.ASC };
    const [sortMap, setSortMap] = useState(initialSortMap);
    const [columnData] = useState(
      arrayFixture.columns.map((columnValue, index) => ({
        title: columnValue,
        sortKey: index > 0 ? index : undefined,
        textAlign: numericCols.includes(columnValue)
          ? COLUMN_TEXT_ALIGN.RIGHT
          : COLUMN_TEXT_ALIGN.LEFT,
      })),
    );
    const sortHandler = (sortDirection: ORDER_TABLE_BY, sortKey: number) => {
      setSortMap({ sortDirection, sortKey });
      props.sortHandler(sortDirection, sortKey);
    };

    return (
      <RcTableHeadView
        columnData={columnData}
        data-test-automation-id={'table-head'}
        sortHandler={sortHandler}
        sortMap={sortMap}
      />
    );
  };

  const getTableRows = (numberOfRows: number, tableData: any[]) => {
    const row = (props: any, data: any[]) => (
      <RcTableRow {...props}>
        {data.map((cellData, cellIndex) => {
          const textAlign = numericCols.includes(
            arrayFixture.columns[cellIndex],
          )
            ? COLUMN_TEXT_ALIGN.RIGHT
            : COLUMN_TEXT_ALIGN.LEFT;

          return (
            <td key={`${props.key}_${arrayFixture.columns[cellIndex]}`}>
              <RcTableBodyCellContent textAlign={textAlign}>
                {cellData}
              </RcTableBodyCellContent>
            </td>
          );
        })}
      </RcTableRow>
    );

    return tableData
      .slice(0, numberOfRows)
      .map((data, i) => row({ key: i }, data));
  };

  return () => {
    const [rowData, setRowData] = useState([...arrayFixture.data]);
    const sortHandler = (sortDirection: ORDER_TABLE_BY, sortKey: number) => {
      setRowData((currentRowData) =>
        [...currentRowData].sort((a, b) => {
          let result = 0;
          const sortDirectionMultiplier =
            sortDirection === ORDER_TABLE_BY.DESC ? -1 : 1;
          const valueA = a[sortKey];
          const valueB = b[sortKey];

          // Sort null values to the end
          if (valueA === null && valueB === null) {
            return 0;
          }
          if (valueA === null) {
            return 1;
          }
          if (valueB === null) {
            return -1;
          }

          if (valueA < valueB) {
            result = -1;
          } else if (valueA > valueB) {
            result = 1;
          }

          return result * sortDirectionMultiplier;
        }),
      );
    };

    const tableProps: RcTableProps = {
      tableBorder: TABLE_BORDER_TYPE.NONE,
      tableSticky: TABLE_STICKY_TYPE.STICKY,
      tableType: TABLE_TYPE.AUTO,
      header: <HeaderRow sortHandler={sortHandler} />,
      desc: 'Right-aligned columns example',
    };

    return (
      <Wrapper>
        <RcTable {...tableProps}>{getTableRows(100, rowData)}</RcTable>
      </Wrapper>
    );
  };
}

export const RightAlignedColumn = rightAlignedColumnExampleStory();
