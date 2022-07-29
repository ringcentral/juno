import {
  RcTable,
  RcTableBody,
  RcTableCell,
  RcTableContainer,
  RcTableHead,
  RcTableRow,
  RcTypography,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { RcTableContainerProps } from '../../../../../../juno-framer/src';
import { headRow, tableData } from '../../__stories__/utils';

export default {
  title: '🚀 Cleanup Components/Table/TableContainer',
  component: RcTableContainer,
  argTypes: {
    ...sortInDocTable<keyof TableContainerProps>([]),
    ...notControlInDocTable<keyof TableContainerProps>([]),
    ...notShowInDocTable<keyof TableContainerProps>([]),
  },
} as Meta;

type TableContainerProps = ComponentProps<typeof RcTableContainer>;

const data = tableData.slice(0, 5);

export const TableContainer: Story<TableContainerProps> = ({
  children,
  ...args
}) => {
  return (
    <RcTableContainer {...args}>
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
        <RcTableBody>
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

TableContainer.storyName = 'TableContainer';

TableContainer.args = {};

TableContainer.argTypes = {
  ...notControlInDocTable<keyof TableContainerProps>([]),
};

TableContainer.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const ContainerExample = (props: RcTableContainerProps) => {
  return (
    <RcTableContainer {...props}>
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
        <RcTableBody>
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

export const TableContainerExample: Story = () => {
  return (
    <>
      <RcTypography variant="title2" color="neutral.f05">
        No border
      </RcTypography>
      <ContainerExample />
      <br />
      <br />
      <RcTypography variant="title2" color="neutral.f05">
        Round border
      </RcTypography>
      <ContainerExample bordered />
      <br />
      <br />
      <RcTypography variant="title2" color="neutral.f05">
        Square border
      </RcTypography>
      <ContainerExample bordered square />
      <br />
      <br />
    </>
  );
};

TableContainer.storyName = 'Table Container Example';
