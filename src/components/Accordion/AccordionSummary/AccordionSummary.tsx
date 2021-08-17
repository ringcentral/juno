import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import ArrowDown2 from '../../../icon/ArrowDown2';
import { RcIconButton, RcIconButtonProps } from '../../Buttons/IconButton';
import { AccordionSummaryStyle } from './styles';
import { RcAccordionSummaryClasses } from './utils';

type RcAccordionSummaryProps = {
  /** The props apply on `RcIconButton` */
  IconButtonProps?: Partial<RcIconButtonProps>;
  /** The icon to display as the expand indicator, default is `ArrowUp2` */
  expandIcon?: RcIconButtonProps['symbol'] | boolean;
} & RcBaseProps<
  ComponentProps<typeof MuiAccordionSummary>,
  'IconButtonProps' | 'expandIcon'
>;

const defaultIconButtonProps = { disableRipple: true };

const _RcAccordionSummary = forwardRef<any, RcAccordionSummaryProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcAccordionSummary' });
    const {
      classes: classesProp,
      expandIcon: expandIconProp,
      IconButtonProps,
      children,
      ...rest
    } = props;

    const classes = useMemo(
      () => combineClasses(RcAccordionSummaryClasses, classesProp),
      [classesProp],
    );

    const expandIcon = useMemo(
      () =>
        expandIconProp ? (
          <RcIconButton
            symbol={expandIconProp === true ? ArrowDown2 : expandIconProp}
            tabIndex={-1}
            {...IconButtonProps}
          />
        ) : (
          undefined
        ),
      [IconButtonProps, expandIconProp],
    );

    return (
      <MuiAccordionSummary
        {...rest}
        ref={ref}
        classes={classes}
        // * hide that IconButtonProps, for user use Jsx paa from outside directly
        IconButtonProps={defaultIconButtonProps}
        expandIcon={expandIcon}
      >
        {children}
      </MuiAccordionSummary>
    );
  },
);

const RcAccordionSummary = styled(_RcAccordionSummary)`
  ${AccordionSummaryStyle}
`;

RcAccordionSummary.defaultProps = {
  disableRipple: false,
};

RcAccordionSummary.displayName = 'RcAccordionSummary';

export { RcAccordionSummary, RcAccordionSummaryProps };
