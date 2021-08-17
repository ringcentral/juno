import { RcClasses } from '../../../../foundation';
import { RcSwitchProps } from '../Switch';

type RcSwitchClassesType = RcSwitchProps & {
  classes?: RcSwitchProps['classes'] & { focusVisible: boolean };
};

export const RcSwitchClasses = RcClasses<RcSwitchClassesType>(
  [
    'root',
    'switchBase',
    'thumb',
    'track',
    'checked',
    'disabled',
    'focusVisible',
  ],
  'RcSwitch',
);
