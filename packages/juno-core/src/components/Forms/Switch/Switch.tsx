import React, { ComponentProps, forwardRef, useMemo, useRef } from 'react';

import clsx from 'clsx';

import MuiSwitch from '@material-ui/core/Switch';

import {
  combineClasses,
  omit,
  RcPaletteProp,
  useThemeProps,
  useForkRef,
} from '../../../foundation';
import styled from '../../../foundation/styled-components';
import {
  RcBaseFormControlLabelProps,
  RcBaseLabelPlacement,
  RcBaseProps,
} from '../../../foundation/typings';
import { RcFormControlLabel } from '../FormControlLabel';
import { RcCheckedStyledProps } from '../utils';
import { SwitchStyle } from './styles';
import { RcSwitchClasses } from './utils';

type RcSwitchLabelPlacement = RcBaseLabelPlacement<'start' | 'end'>;

type RcSwitchFormControlLabelProps =
  RcBaseFormControlLabelProps<RcSwitchLabelPlacement>;

type RcSwitchProps = {
  /** custom trackColor when unchecked status */
  trackColor?: RcPaletteProp;
} & RcBaseProps<
  RcCheckedStyledProps<RcSwitchFormControlLabelProps>,
  'size' | 'error' | 'followColorWhenUnChecked'
> &
  RcBaseProps<
    ComponentProps<typeof MuiSwitch>,
    | 'size'
    | 'color'
    | 'edge'
    | 'checkedIcon'
    | 'icon'
    | 'disableFocusRipple'
    | 'centerRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'TouchRippleProps'
  >;

const _RcSwitch = forwardRef<any, RcSwitchProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcSwitch' });
  const {
    label,
    formControlLabelProps = {},
    focusVisibleClassName: focusVisibleClassNameProp,
    classes: classesProp,
    color,
    trackColor,
    inputRef: inputRefProp = null,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const classes = useMemo(
    () => combineClasses(omit(RcSwitchClasses, ['focusVisible']), classesProp),
    [classesProp],
  );

  const focusVisibleClassName = useMemo(
    () => clsx(RcSwitchClasses.focusVisible, focusVisibleClassNameProp),
    [focusVisibleClassNameProp],
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp);

  const Switch = (
    <MuiSwitch
      ref={ref}
      inputRef={handleInputRef}
      focusVisibleClassName={focusVisibleClassName}
      classes={classes}
      {...rest}
      color="default"
      size="medium"
      disableRipple
      disableTouchRipple
      onFocus={(e) => {
        if (inputRef.current?.matches('[data-focus-visible-added]')) {
          e.currentTarget.parentElement!.setAttribute(
            'data-focus-visible-within',
            '',
          );
        }
        onFocus?.(e);
      }}
      onBlur={(e) => {
        e.currentTarget.parentElement!.removeAttribute(
          'data-focus-visible-within',
        );
        onBlur?.(e);
      }}
    />
  );

  if (label) {
    return (
      <RcFormControlLabel
        {...formControlLabelProps}
        label={label}
        control={Switch}
      />
    );
  }

  return Switch;
});

const RcSwitch = styled(_RcSwitch)`
  ${SwitchStyle}
`;

RcSwitch.defaultProps = {
  color: 'interactive.f01',
};

RcSwitch.displayName = 'RcSwitch';

export { RcSwitch };
export type {
  RcSwitchFormControlLabelProps,
  RcSwitchLabelPlacement,
  RcSwitchProps,
};
