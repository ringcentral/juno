import React from 'react';

import { mountWithTheme } from '../../../../tests';
import { RcTableHeadCell } from '../TableHeadCell';
import { TableHeadCellProps } from '../types';

describe('TableHeadCell', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const getProps = (props = {}) => ({
    title: 'Tell him about the twinkie, Egon.',
    ...props,
  });
  const renderComponent = (props: TableHeadCellProps) =>
    mountWithTheme(
      <table>
        <thead>
          <tr>
            <RcTableHeadCell {...props} />
          </tr>
        </thead>
      </table>,
    );

  describe('renders', () => {
    test('when provided with only required props', () => {
      const props = getProps();
      const wrapper = renderComponent(props);

      expect(wrapper.text()).toBe(props.title);
    });
  });

  describe('tabindex', () => {
    describe('is not set', () => {
      test('when sortKey is undefined', () => {
        const props = getProps({
          sortKey: undefined,
        });
        const wrapper = renderComponent(props);

        expect(wrapper.find('th').getElement().props.tabIndex).toBeUndefined();
      });
    });
    describe('is set to a value of 0', () => {
      test('when sortKey is 0', () => {
        const props = getProps({
          sortKey: 0,
        });
        const wrapper = renderComponent(props);

        expect(wrapper.find('th').getElement().props.tabIndex).toBe(0);
      });
      test('when sortKey is a string', () => {
        const props = getProps({
          sortKey: 'thatsABigTwinkie',
        });
        const wrapper = renderComponent(props);

        expect(wrapper.find('th').getElement().props.tabIndex).toBe(0);
      });
    });
  });
});
