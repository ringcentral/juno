import MuiDialogTitle from '@material-ui/core/DialogTitle';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcTypography } from '../../Typography';
import { RcDialogChildrenProps, useDialogDefaultProps } from '../utils';
import { DialogTitleStyle } from './styles';
import { RcDialogTitleClasses, RcDialogTitleTypographyVariant } from './utils';

type RcDialogTitleProps = {
  display?: 'block' | 'flex';
  /** Define the padding size of that group wrapper. */
  space?: number | number[];
} & RcDialogChildrenProps &
  RcBaseProps<ComponentProps<typeof MuiDialogTitle>>;

const _RcDialogTitle = forwardRef<any, RcDialogTitleProps>(
  (inProps: RcDialogTitleProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDialogTitle' });

    const {
      classes: classesProp,
      display,
      space,
      children,
      disableTypography,
      size,
      ...rest
    } = props;

    const classes = useMemo(
      () => combineClasses(RcDialogTitleClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiDialogTitle {...rest} disableTypography ref={ref} classes={classes}>
        {disableTypography ? (
          children
        ) : (
          <RcTypography
            variant={RcDialogTitleTypographyVariant[size!]}
            component="h2"
          >
            {children}
          </RcTypography>
        )}
      </MuiDialogTitle>
    );
  },
);

const RcDialogTitle = styled(_RcDialogTitle).attrs(useDialogDefaultProps)`
  ${DialogTitleStyle}
`;

RcDialogTitle.defaultProps = {};

RcDialogTitle.displayName = 'RcDialogTitle';

export { RcDialogTitle, RcDialogTitleProps };
