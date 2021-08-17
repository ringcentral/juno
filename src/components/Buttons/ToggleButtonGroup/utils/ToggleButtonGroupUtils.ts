import { RcClasses } from '../../../../foundation';
import { RcToggleButton } from '../../ToggleButton';
import { RcToggleButtonClasses } from '../../ToggleButton/utils';
import { RcToggleButtonGroupProps } from '../ToggleButtonGroup';

export const RcToggleButtonGroupClasses = RcClasses<RcToggleButtonGroupProps>(
  ['groupedHorizontal', 'groupedVertical'],
  'RcToggleButtonGroup',
);

// * Mui will set selected + selected margin order, need reset
export const toggleButtonBetweenClassName = `${RcToggleButton}.${RcToggleButtonClasses.selected} + ${RcToggleButton}.${RcToggleButtonClasses.selected}`;
