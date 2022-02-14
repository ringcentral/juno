import React, { ComponentProps, FunctionComponent, useMemo } from 'react';

import clsx from 'clsx';

import MuiButtonBase from '@material-ui/core/ButtonBase';

import {
  omit,
  RcBaseProps,
  RcClassesProps,
  RcPaletteProp,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcIcon, RcIconProps, SvgSymbol } from '../../Icon';
import { RcSnackbarContent, RcSnackbarContentSize } from '../SnackbarContent';
import { snackbarContentActionStyle } from './styles';
import { RcSnackbarActionClasses } from './utils';

type RcSnackbarActionProps = {
  /** variant of action */
  variant?: 'text' | 'icon';
  /** text color */
  color?: RcPaletteProp;
  /** size for action */
  size?: RcSnackbarContentSize;
  /** @deprecated should use symbol to replace that */
  icon?: SvgSymbol;
} & RcClassesProps<'icon' | 'text'> &
  RcBaseProps<ComponentProps<typeof MuiButtonBase>, 'color'> &
  Pick<RcIconProps, 'symbol'>;

const _RcSnackbarAction: FunctionComponent<RcSnackbarActionProps> = (
  inProps,
) => {
  const props = useThemeProps({ props: inProps, name: 'RcSnackbarAction' });
  const {
    children,
    variant,
    size,
    icon,
    symbol = icon,
    classes: classesProp,
    color,
    className: classNameProp,
    ...rest
  } = props;

  const className = useMemo(
    () =>
      clsx(classNameProp, {
        [RcSnackbarActionClasses.text]: variant === 'text',
        [RcSnackbarActionClasses.icon]: variant === 'icon',
      }),
    [classNameProp, variant],
  );

  const classes = useMemo(
    () => omit(classesProp, ['text', 'icon']),
    [classesProp],
  );

  return (
    <MuiButtonBase className={className} classes={classes} {...rest}>
      {variant === 'icon' ? (
        <RcIcon size={size} symbol={symbol}>
          {children}
        </RcIcon>
      ) : (
        children
      )}
    </MuiButtonBase>
  );
};

const RcSnackbarAction = styled(_RcSnackbarAction)`
  ${snackbarContentActionStyle}
`;

RcSnackbarAction.displayName = 'RcSnackbarAction';

RcSnackbarAction.defaultProps = {
  disableRipple: true,
  variant: 'text',
  size: RcSnackbarContent.defaultProps!.size,
};

export { RcSnackbarAction };
export type { RcSnackbarActionProps };
