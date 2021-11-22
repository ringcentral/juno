import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiCheckbox from '@material-ui/core/Checkbox';

import {
  combineClasses,
  RcBaseFormControlLabelProps,
  RcBaseLabelPlacement,
  RcBaseProps,
  styled,
  useThemeProps,
  withDeprecatedCheck,
} from '../../../foundation';
import indeterminateIcon from '../../../icon/Indeterminate';
import selectIcon from '../../../icon/Selects';
import unSelectIcon from '../../../icon/Unselect';
import { RcIconButtonSize } from '../../Buttons/IconButton';
import { withTooltip } from '../../Tooltip';
import { RcFormControlLabel } from '../FormControlLabel';
import { CustomIconPropsGetter, RcCheckedStyledProps } from '../utils';
import { CheckboxStyle } from './styles';
import { RcCheckboxClasses } from './utils';

type RcCheckboxLabelPlacement = RcBaseLabelPlacement;

type RcCheckboxFormControlLabelProps =
  RcBaseFormControlLabelProps<RcCheckboxLabelPlacement>;

type RcCheckboxProps = {
  /** @deprecated using size to replace that */
  iconSize?: RcIconButtonSize;
} & RcCheckedStyledProps<RcCheckboxFormControlLabelProps> &
  RcBaseProps<
    ComponentProps<typeof MuiCheckbox>,
    'size' | 'color' | 'title' | 'edge'
  >;

const getIconProps = CustomIconPropsGetter({
  icon: unSelectIcon,
  checkedIcon: selectIcon,
  indeterminateIcon,
});

const _RcCheckbox = forwardRef<any, RcCheckboxProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcCheckbox' });
  const {
    label,
    formControlLabelProps,
    color,
    error,
    followColorWhenUnChecked,
    classes: classesProp,
    iconSize,
    size: sizeProp,
    icon,
    checkedIcon,
    ...rest
  } = props;

  let size = sizeProp;
  // TODO: switch to size
  if (iconSize) {
    size = iconSize;
  }

  const classes = useMemo(
    () => combineClasses(RcCheckboxClasses, classesProp),
    [classesProp],
  );

  const iconProps = useMemo(
    () => getIconProps({ size, icon, checkedIcon }),
    [checkedIcon, icon, size],
  );

  const Checkbox = (
    <MuiCheckbox
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
        control={Checkbox}
      />
    );
  }
  return Checkbox;
});

const RcCheckbox = styled(
  withDeprecatedCheck(
    withTooltip(_RcCheckbox),
    [
      {
        prop: 'iconSize',
        time: '2021-4',
        comment: `@deprecated using size to replace that`,
      },
    ],
    'RcCheckbox',
  ),
)`
  ${CheckboxStyle}
`;

RcCheckbox.displayName = 'RcCheckbox';

RcCheckbox.defaultProps = {
  color: 'interactive.f01',
  size: 'medium',
};

export { RcCheckbox };
export type {
  RcCheckboxFormControlLabelProps,
  RcCheckboxLabelPlacement,
  RcCheckboxProps,
};
