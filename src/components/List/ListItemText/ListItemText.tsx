import MuiListItemText from '@material-ui/core/ListItemText';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  omit,
  RcBaseProps,
  RcPaletteProp,
  styled,
  withDeprecatedCheck,
  useThemeProps,
} from '../../../foundation';
import { RcTypographyProps } from '../../Typography';
import { ListItemTextStyle } from './styles';
import { RcListItemTextClasses } from './utils';

type TypographyProps = RcBaseProps<RcTypographyProps, 'weight'>;

type RcListItemTextProps = {
  /** is text Ellipsis, default is true. */
  isEllipsis?: boolean;
  /** These props will be forwarded to the primary typography component (as long as disableTypography is not true). */
  primaryTypographyProps?: TypographyProps;
  /** These props will be forwarded to the secondary typography component (as long as disableTypography is not true). */
  secondaryTypographyProps?: TypographyProps;
  /** @deprecated define color for primary, recommend use primaryTypographyProps color prop */
  primaryColor?: RcPaletteProp;
  /** @deprecated is alignCenter, recommend using classes to define it. */
  alignCenter?: boolean;
  /** @deprecated is lineThrough, recommend using classes to define it. */
  lineThrough?: boolean;
} & RcBaseProps<
  ComponentProps<typeof MuiListItemText>,
  'primaryTypographyProps' | 'secondaryTypographyProps'
>;

const _RcListItemText = forwardRef<any, RcListItemTextProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcListItemText' });
  const {
    classes: classesProp,
    children,
    isEllipsis,
    primaryTypographyProps: primaryTypographyPropsProp,
    secondaryTypographyProps: secondaryTypographyPropsProp,
    primaryColor,
    alignCenter,
    lineThrough,
    ...rest
  } = props;

  const classes = useMemo(
    () => combineClasses(RcListItemTextClasses, classesProp),
    [classesProp],
  );

  const primaryTypographyProps = useMemo(
    () => omit(primaryTypographyPropsProp, ['color', 'variant']),
    [primaryTypographyPropsProp],
  );

  const secondaryTypographyProps = useMemo(
    () => omit(secondaryTypographyPropsProp, ['color', 'variant']),
    [secondaryTypographyPropsProp],
  );

  return (
    <MuiListItemText
      {...rest}
      ref={ref}
      classes={classes}
      primaryTypographyProps={primaryTypographyProps}
      secondaryTypographyProps={secondaryTypographyProps}
    >
      {children}
    </MuiListItemText>
  );
});

const RcListItemText = styled(
  withDeprecatedCheck(
    _RcListItemText,
    [
      {
        prop: 'primaryColor',
        time: '2021-4',
        comment: 'recommend use primaryTypographyProps color prop',
      },
      {
        prop: 'alignCenter',
        time: '2021-4',
        comment: `recommend using classes to define it`,
      },
      {
        prop: 'lineThrough',
        time: '2021-4',
        comment: `recommend using classes to define it`,
      },
    ],
    'RcListItemText',
  ),
)`
  ${ListItemTextStyle}
`;

RcListItemText.defaultProps = {
  isEllipsis: true,
  primaryTypographyProps: {
    variant: 'body1',
    color: 'neutral.f06',
  },
  secondaryTypographyProps: {
    variant: 'caption1',
    color: 'neutral.f04',
  },
};

RcListItemText.displayName = 'RcListItemText';

export { RcListItemText };
export type { RcListItemTextProps };
