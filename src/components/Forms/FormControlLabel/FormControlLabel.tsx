import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { FormControlLabelStyle } from './styles';
import { RcFormControlLabelClasses } from './utils';

type RcFormControlLabelProps = {} & RcBaseProps<
  ComponentProps<typeof MuiFormControlLabel>
>;

const _RcFormControlLabel = forwardRef<any, RcFormControlLabelProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcFormControlLabel' });
    const { classes: classesProp, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcFormControlLabelClasses, classesProp),
      [classesProp],
    );

    return <MuiFormControlLabel {...rest} ref={ref} classes={classes} />;
  },
);

const RcFormControlLabel = styled(_RcFormControlLabel)`
  ${FormControlLabelStyle}
`;

RcFormControlLabel.defaultProps = {};

RcFormControlLabel.displayName = 'RcFormControlLabel';

export { RcFormControlLabel };
export type { RcFormControlLabelProps };
