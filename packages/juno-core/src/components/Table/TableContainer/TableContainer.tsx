import MuiTableContainer from '@material-ui/core/TableContainer';
import React, { ComponentProps, forwardRef } from 'react';
import { RcBaseProps, styled, useThemeProps } from '../../../foundation';
import { TableContainerStyle } from './styles';

type RcTableContainerProps = {
  /**
   * Add border to container
   * @default false
   */
  bordered?: boolean;
  /**
   * If `true`, rounded corners to be square that only work if bordered is `true`.
   * @default false
   */
  square?: boolean;
} & RcBaseProps<ComponentProps<typeof MuiTableContainer>>;

const _RcTableContainer = forwardRef<any, RcTableContainerProps>(
  (props, ref) => {
    const { children, bordered, ...rest } = useThemeProps({
      props,
      name: 'RcTableContainer',
    });

    return (
      <MuiTableContainer {...rest} ref={ref}>
        {children}
      </MuiTableContainer>
    );
  },
);

const RcTableContainer = styled(_RcTableContainer)`
  ${TableContainerStyle}
`;

RcTableContainer.defaultProps = {
  bordered: false,
  square: false,
};

RcTableContainer.displayName = 'RcTableContainer';

export { RcTableContainer, RcTableContainerProps };
