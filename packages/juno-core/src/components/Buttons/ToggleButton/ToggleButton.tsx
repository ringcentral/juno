import React, {
  ComponentProps,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import MuiToggleButton from '@material-ui/lab/ToggleButton';

import {
  combineClasses,
  RcBaseProps,
  removeClassName,
  styled,
  UnionPick,
  useForkRef,
  useThemeProps,
} from '../../../foundation';
import { RcIcon, RcIconProps } from '../../Icon';
import { withTooltip } from '../../Tooltip';
import { RcIconButtonProps } from '../IconButton';
import { ToggleButtonStyle } from './styles';
import { RcToggleButtonClasses } from './utils';

type RcToggleButtonVariant = 'standard' | 'box';

type RcToggleButtonProps = {
  /** variant type for different display `ToggleButton` */
  variant?: RcToggleButtonVariant;
  /** IconProps apply on symbol */
  IconProps?: RcBaseProps<RcIconProps, 'symbol'>;
  /** button size, with default with `medium`   */
  size?: UnionPick<
    NonNullable<RcIconButtonProps['size']>,
    'small' | 'medium' | 'large'
  >;
} & Pick<RcIconButtonProps, 'symbol'> &
  RcBaseProps<ComponentProps<typeof MuiToggleButton>, 'size'>;

const _RcToggleButton = forwardRef<any, RcToggleButtonProps>(
  (inProps: RcToggleButtonProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcToggleButton' });
    const {
      classes: classesProp,
      children,
      size,
      variant,
      symbol,
      IconProps,
      ...rest
    } = props;
    const innerRef = useRef<HTMLButtonElement>(null);

    const buttonRef = useForkRef(ref, innerRef);

    const classes = useMemo(
      () => combineClasses(RcToggleButtonClasses, classesProp),
      [classesProp],
    );

    // * need remove not need Mui-selected for render correct
    useLayoutEffect(() => {
      removeClassName(innerRef, 'Mui-selected');
    });

    return (
      <MuiToggleButton
        {...rest}
        ref={buttonRef}
        innerRef={buttonRef}
        classes={classes}
      >
        {symbol && <RcIcon symbol={symbol} size="inherit" {...IconProps} />}
        {children}
      </MuiToggleButton>
    );
  },
);

const RcToggleButton = styled(withTooltip(_RcToggleButton))`
  ${ToggleButtonStyle}
`;

RcToggleButton.defaultProps = {
  disableRipple: true,
  size: 'medium',
  variant: 'standard',
};

RcToggleButton.displayName = 'RcToggleButton';

export { RcToggleButton };
export type { RcToggleButtonProps, RcToggleButtonVariant };
