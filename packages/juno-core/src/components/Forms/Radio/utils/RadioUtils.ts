import { RcClasses, RcClassesProps } from '../../../../foundation';
import { RcRadioProps } from '../Radio';

export const RcRadioClasses = RcClasses<RcRadioProps>(
  ['root', 'checked', 'disabled'],
  'RcRadio',
);

export const RadioButtonIconClasses = RcClasses<RcClassesProps<'root'>>(
  ['root'],
  'RadioButtonIcon',
);
