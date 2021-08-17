import MuiSwitch from '@material-ui/core/Switch';
import clsx from 'clsx';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  omit,
  RcPaletteProp,
  useThemeProps,
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

type RcSwitchFormControlLabelProps = RcBaseFormControlLabelProps<
  RcSwitchLabelPlacement
>;

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

  const Switch = (
    <MuiSwitch
      ref={ref}
      focusVisibleClassName={focusVisibleClassName}
      classes={classes}
      {...rest}
      color="default"
      size="medium"
      disableRipple
      disableTouchRipple
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

export {
  RcSwitch,
  RcSwitchProps,
  RcSwitchLabelPlacement,
  RcSwitchFormControlLabelProps,
};
