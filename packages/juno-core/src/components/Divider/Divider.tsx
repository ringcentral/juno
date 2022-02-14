import React, { forwardRef } from 'react';

import { RcPaletteProp, styled, useThemeProps } from '../../foundation';
import { DividerStyle } from './styles';

type RcDividerProps = {
  /** is that vertical */
  vertical?: boolean;
  /** size of divider */
  size?: 'default' | 'bold';
  /** divider color */
  color?: RcPaletteProp;
  /** title on divider center, only work on horizontal */
  title?: string;
  /** title background color */
  titleBgColor?: RcPaletteProp;
  /** component for render root */
  component?: React.ElementType;
} & React.HTMLAttributes<HTMLHRElement>;

const _RcDivider = forwardRef<any, RcDividerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcDivider' });
  const {
    vertical,
    size,
    color,
    title,
    titleBgColor,
    component: ComponentProp = 'hr',
    ...rest
  } = props;
  return <ComponentProp ref={ref} role="separator" {...rest} />;
});

const RcDivider = styled(_RcDivider)`
  ${DividerStyle}
`;

RcDivider.displayName = 'RcDivider';

RcDivider.defaultProps = {
  color: 'neutral.l02',
  titleBgColor: 'neutral.b01',
  size: 'default',
};

export { RcDivider };
export type { RcDividerProps };
