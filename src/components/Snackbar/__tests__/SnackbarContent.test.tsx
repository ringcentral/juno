import React from 'react';

import { shallowWithTheme } from '../../../../tests';
import { RcSnackbarAction } from '../SnackbarAction/SnackbarAction';
import { RcSnackbarContent, RcSnackbarContentProps } from '../SnackbarContent';

describe('SnackbarContent', () => {
  let defaultProps: RcSnackbarContentProps;
  beforeEach(() => {
    jest.clearAllMocks();
    defaultProps = {
      message: 'default text',
    };
  });
  it('should render', () => {
    const wrapper = shallowWithTheme(<RcSnackbarContent {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Align action buttons to the first row when toast content with action and multiple lines of text [JPT-4487]', () => {
    const actions = [<RcSnackbarAction key="1">test</RcSnackbarAction>];
    const wrapper = shallowWithTheme(
      <RcSnackbarContent {...defaultProps} action={actions} />,
    );
    expect(
      wrapper
        .find(RcSnackbarContent)
        .at(0)
        .props().action,
    ).not.toEqual(null);
    expect(wrapper).toMatchSnapshot();
  });
});
