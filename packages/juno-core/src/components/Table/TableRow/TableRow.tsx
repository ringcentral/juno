import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiTableRow, { TableRowClassKey } from '@material-ui/core/TableRow';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { TableRowStyle } from './styles';
import { RcTableRowClasses } from './utils';
import clsx from 'clsx';

type RcTableRowProps = {
  /**
   * `hover` and `selected` styles will be useless when it is `true`
   * @default false
   */
  disabled?: boolean;
  classes?: Partial<Record<TableRowClassKey | 'disabled', string>>;
} & RcBaseProps<ComponentProps<typeof MuiTableRow>, 'classes'>;

const _RcTableRow = forwardRef<any, RcTableRowProps>((props, ref) => {
  const {
    className,
    classes: classesProp,
    children,
    disabled,
    ...rest
  } = useThemeProps({ props, name: 'RcTableRow' });

  const classes = useMemo(
    () => combineClasses(RcTableRowClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiTableRow
      {...rest}
      ref={ref}
      classes={classes}
      className={clsx(className, { [RcTableRowClasses.disabled]: disabled })}
    >
      {children}
    </MuiTableRow>
  );
});

const RcTableRow = styled(_RcTableRow)`
  ${TableRowStyle}
`;

RcTableRow.defaultProps = {};

RcTableRow.displayName = 'RcTableRow';

export { RcTableRow, RcTableRowProps };
