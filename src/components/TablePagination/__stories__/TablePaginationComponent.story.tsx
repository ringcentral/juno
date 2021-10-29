import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useState } from 'react';

import { styled } from '../../../foundation';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { Title } from '../../../storybook/components';
import { RcTablePagination } from '../TablePagination';

export default {
  title: '🚀 Cleanup Components/TablePagination',
  component: RcTablePagination,
  argTypes: {
    ...sortInDocTable<keyof TablePaginationProps>([]),
    ...notControlInDocTable<keyof TablePaginationProps>([]),
    ...notShowInDocTable<keyof TablePaginationProps>([]),
  },
} as Meta;

const Table = styled.table`
  width: 100%;
`;

type TablePaginationProps = ComponentProps<typeof RcTablePagination>;

export const TablePagination: Story<TablePaginationProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    console.log('page change', newPage);
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log('RowsPerPage change', event);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table>
        <tfoot>
          <tr>
            <RcTablePagination
              {...args}
              type="pageSelection"
              nextIconButtonProps={{
                title: 'next',
              }}
              backIconButtonProps={{
                title: 'prev',
              }}
              page={page}
              onPageChange={handlePageChange}
              rowsPerPageOptions={[]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </tr>
        </tfoot>
      </Table>
      <Table>
        <tfoot>
          <tr>
            <RcTablePagination
              {...args}
              type="displayedRows"
              page={page}
              onPageChange={handlePageChange}
              rowsPerPageOptions={[]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </tr>
        </tfoot>
      </Table>
      <Title align="right">Page Selection</Title>
      <Table>
        <tfoot>
          <tr>
            <RcTablePagination
              {...args}
              type="pageSelection"
              nextIconButtonProps={{}}
              backIconButtonProps={{}}
              page={page}
              onPageChange={handlePageChange}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </tr>
        </tfoot>
      </Table>
      <Table>
        <tfoot>
          <tr>
            <RcTablePagination
              {...args}
              page={page}
              type="pageSelection"
              nextIconButtonProps={{}}
              backIconButtonProps={{}}
              onPageChange={handlePageChange}
              rowsPerPage={rowsPerPage}
              labelOfPage={({ totalPage }) => `之 ${totalPage} 頁`}
              onRowsPerPageChange={handleRowsPerPageChange}
              labelRowsPerPage="每頁幾筆"
            />
          </tr>
        </tfoot>
      </Table>
      <Title align="right">Displayed Rows</Title>
      <Table>
        <tfoot>
          <tr>
            <RcTablePagination
              {...args}
              type="displayedRows"
              nextIconButtonProps={{}}
              backIconButtonProps={{}}
              page={page}
              onPageChange={handlePageChange}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </tr>
        </tfoot>
      </Table>
      <Table>
        <tfoot>
          <tr>
            <RcTablePagination
              {...args}
              type="displayedRows"
              nextIconButtonProps={{}}
              backIconButtonProps={{}}
              page={page}
              onPageChange={handlePageChange}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[
                {
                  label: '10👌',
                  value: 10,
                },
                {
                  label: '100👌',
                  value: 100,
                },
              ]}
              labelRowsPerPage="每頁幾筆"
              // eslint-disable-next-line @typescript-eslint/no-shadow
              labelDisplayedRows={({ count, from, page, to }) =>
                `第${page + 1}頁 ${from}-${to} 共 ${count} 筆`
              }
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </tr>
        </tfoot>
      </Table>
      <Title align="right">Non Table Pagination</Title>{' '}
      <RcTablePagination
        {...args}
        component="div"
        type="displayedRows"
        nextIconButtonProps={{}}
        backIconButtonProps={{}}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[
          {
            label: '10👌',
            value: 10,
          },
          {
            label: '100👌',
            value: 100,
          },
        ]}
        labelRowsPerPage="每頁幾筆"
        // eslint-disable-next-line @typescript-eslint/no-shadow
        labelDisplayedRows={({ count, from, page, to }) =>
          `第${page + 1}頁 ${from}-${to} 共 ${count} 筆`
        }
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

TablePagination.storyName = 'TablePagination';

TablePagination.args = {
  count: 10000,
};

TablePagination.argTypes = {
  ...notControlInDocTable<keyof TablePaginationProps>([]),
};

TablePagination.parameters = {
  tags: [
    {
      name: 'Mui',
      href: '',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
