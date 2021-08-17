import MuiAccordion from '@material-ui/core/Accordion';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../foundation';
import { AccordionStyle } from './styles';
import { RcAccordionClasses } from './utils';

type RcAccordionProps = {} & RcBaseProps<
  ComponentProps<typeof MuiAccordion>,
  'square'
>;

const _RcAccordion = forwardRef<any, RcAccordionProps>(
  (inProps: RcAccordionProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcAccordion' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcAccordionClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiAccordion square {...rest} ref={ref} classes={classes}>
        {children}
      </MuiAccordion>
    );
  },
);

const RcAccordion = styled(_RcAccordion)`
  ${AccordionStyle}
`;

RcAccordion.defaultProps = {};

RcAccordion.displayName = 'RcAccordion';

export { RcAccordion, RcAccordionProps };
