import React from 'react';

import { cleanup, render } from '@ringcentral/juno-test';
import { screen } from '@testing-library/react';

import { RcTableHeadCell } from '../TableHeadCell';
import { TableHeadCellProps } from '../types';

beforeEach(() => {});

afterEach(cleanup);

const title = 'Tell him about the twinkie, Egon.';

const getProps = (props = {}) => ({ title, ...props });

const renderComponent = (props: TableHeadCellProps) =>
  render(
    <table>
      <thead>
        <tr>
          <RcTableHeadCell {...props} />
        </tr>
      </thead>
    </table>,
  );

describe('TableHeadCell', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('renders', () => {
    test('when provided with only required props', () => {
      const props = getProps();
      renderComponent(props);

      expect(screen.queryByText(title)).toBeInTheDocument();
    });
  });

  describe('tabindex', () => {
    describe('is not set', () => {
      test('when sortKey is undefined', () => {
        const props = getProps({
          sortKey: undefined,
        });
        renderComponent(props);

        expect(
          screen.queryByRole('columnheader')?.getAttribute('tabindex'),
        ).toBeNull();
      });
    });
    describe('is set to a value of 0', () => {
      test('when sortKey is 0', () => {
        const props = getProps({
          sortKey: 0,
        });
        renderComponent(props);

        expect(
          screen.queryByRole('columnheader')?.getAttribute('tabindex'),
        ).toBe('0');
      });
      test('when sortKey is a string', () => {
        const props = getProps({
          sortKey: 'thatsABigTwinkie',
        });
        renderComponent(props);

        expect(
          screen.queryByRole('columnheader')?.getAttribute('tabindex'),
        ).toBe('0');
      });
    });
  });
});
