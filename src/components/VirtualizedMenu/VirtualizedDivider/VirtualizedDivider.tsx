import React, { forwardRef } from 'react';

import { spacing, styled, useThemeProps } from '../../../foundation';
import { RcDivider, RcDividerProps } from '../../Divider';

type RcVirtualizedDividerProps = {} & RcDividerProps;

const _RcVirtualizedDivider = forwardRef<any, RcDividerProps>(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'RcVirtualizedDivider',
    });
    const { className, ...rest } = props;
    return (
      <li className={className} data-disabled-focus>
        <RcDivider {...rest} ref={ref} />
      </li>
    );
  },
);

/**
 * that virtualized divider is same as normal divider,
 * but that use a `li` to wrap outside,
 * use padding inside to prevent dynamic container height error calculate
 * and make that not be focusable
 */
const RcVirtualizedDivider = styled(_RcVirtualizedDivider)`
  padding: ${spacing(2, 0)};
  list-style: none;
`;

RcVirtualizedDivider.defaultProps = {};

RcVirtualizedDivider.displayName = 'RcVirtualizedDivider';

export { RcVirtualizedDivider, RcVirtualizedDividerProps };
