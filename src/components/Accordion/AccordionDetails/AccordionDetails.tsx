import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { AccordionDetailsStyle } from './styles';
import { RcAccordionDetailsClasses } from './utils';

type RcAccordionDetailsProps = {} & RcBaseProps<
  ComponentProps<typeof MuiAccordionDetails>
>;

const _RcAccordionDetails = forwardRef<any, RcAccordionDetailsProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcAccordionDetails' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcAccordionDetailsClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiAccordionDetails {...rest} ref={ref} classes={classes}>
        {children}
      </MuiAccordionDetails>
    );
  },
);

const RcAccordionDetails = styled(_RcAccordionDetails)`
  ${AccordionDetailsStyle}
`;

RcAccordionDetails.defaultProps = {};

RcAccordionDetails.displayName = 'RcAccordionDetails';

export { RcAccordionDetails, RcAccordionDetailsProps };
