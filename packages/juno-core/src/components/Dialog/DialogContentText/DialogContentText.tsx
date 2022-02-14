import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiDialogContentText from '@material-ui/core/DialogContentText';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcTypographyProps } from '../../Typography';
import { TypographyStyle } from '../../Typography/styles';
import {
  MuiDefaultColor,
  RcCustomTypographyVariant,
} from '../../Typography/utils';
import { RcDialogChildrenProps, useDialogDefaultProps } from '../utils';
import { DialogContentTextStyle } from './styles';
import { RcDialogContentTextClasses } from './utils';

type RcDialogContentTextProps = {} & Pick<
  RcTypographyProps,
  'variant' | 'color' | 'weight' | 'component'
> &
  RcDialogChildrenProps &
  RcBaseProps<ComponentProps<typeof MuiDialogContentText>, 'variant' | 'color'>;

const _RcDialogContentText = forwardRef<any, RcDialogContentTextProps>(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'RcDialogContentText',
    });
    const {
      color: colorProp,
      component: componentProp,
      classes: classesProp,
      variant,
      weight,
      size,
      children,
      ...rest
    } = props;

    const component = componentProp || RcCustomTypographyVariant[variant!];

    const classes = useMemo(
      () => combineClasses(RcDialogContentTextClasses, classesProp),
      [classesProp],
    );

    const color = useMemo(
      () =>
        MuiDefaultColor.includes(colorProp!) ? (colorProp as any) : undefined,
      [colorProp],
    );

    return (
      <MuiDialogContentText
        // * for use html view variant
        data-variant={variant}
        // * for use html view color
        data-color={color}
        color={color}
        ref={ref}
        classes={classes}
        component={component}
        {...rest}
      >
        {children}
      </MuiDialogContentText>
    );
  },
);

const RcDialogContentText = styled(_RcDialogContentText).attrs(
  (props: RcDialogContentTextProps) => {
    const toProps = useDialogDefaultProps(props);

    return {
      variant: toProps.size === 'small' ? 'caption1' : 'body1',
      color: 'neutral.f04',
      ...toProps,
    } as RcDialogContentTextProps;
  },
)`
  ${DialogContentTextStyle}
  ${TypographyStyle}
`;

RcDialogContentText.defaultProps = {};

RcDialogContentText.displayName = 'RcDialogContentText';

export { RcDialogContentText };
export type { RcDialogContentTextProps };
