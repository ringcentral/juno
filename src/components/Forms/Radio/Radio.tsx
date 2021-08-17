import MuiRadio from '@material-ui/core/Radio';
// @ts-ignore
import RadioButtonIcon from '@material-ui/core/Radio/RadioButtonIcon';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseFormControlLabelProps,
  RcBaseLabelPlacement,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { withTooltip } from '../../Tooltip';
import { RcFormControlLabel } from '../FormControlLabel';
import { CustomIconPropsGetter, RcCheckedStyledProps } from '../utils';
import { RadioStyle } from './styles';
import { RadioButtonIconClasses, RcRadioClasses } from './utils';

// * remember when upgrade version with Mui, should check that classes have change in 4.11.0
type RcRadioLabelPlacement = RcBaseLabelPlacement<'start' | 'end'>;

type RcRadioFormControlLabelProps = RcBaseFormControlLabelProps<
  RcRadioLabelPlacement
>;

type RcRadioProps = {} & RcCheckedStyledProps<RcRadioFormControlLabelProps> &
  RcBaseProps<
    ComponentProps<typeof MuiRadio>,
    'size' | 'color' | 'title' | 'edge'
  >;

const getIconProps = CustomIconPropsGetter({
  checkedIcon: <RadioButtonIcon checked classes={RadioButtonIconClasses} />,
  icon: <RadioButtonIcon classes={RadioButtonIconClasses} />,
});

const _RcRadio = forwardRef<any, RcRadioProps>((inProps: RcRadioProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcRadio' });
  const {
    label,
    formControlLabelProps,
    color,
    error,
    followColorWhenUnChecked,
    classes: classesProp,
    size,
    icon,
    checkedIcon,
    ...rest
  } = props;

  const classes = useMemo(() => combineClasses(RcRadioClasses, classesProp), [
    classesProp,
  ]);

  const iconProps = useMemo(() => getIconProps({ size, icon, checkedIcon }), [
    checkedIcon,
    icon,
    size,
  ]);

  const Radio = (
    <MuiRadio
      {...iconProps}
      {...rest}
      ref={ref}
      color="default"
      classes={classes}
    />
  );

  if (label) {
    return (
      <RcFormControlLabel
        {...formControlLabelProps}
        label={label}
        control={Radio}
      />
    );
  }

  return Radio;
});

const RcRadio = styled(withTooltip(_RcRadio))`
  ${RadioStyle}
`;

RcRadio.defaultProps = {
  color: 'interactive.f01',
  size: 'medium',
};

RcRadio.displayName = 'RcRadio';

export {
  RcRadio,
  RcRadioProps,
  RcRadioLabelPlacement,
  RcRadioFormControlLabelProps,
};
