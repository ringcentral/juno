import { useRef } from 'react';

import { palette2, RcClasses } from '../../../../foundation';
import { RcStepIconProps } from '../StepIcon';

export const RcStepIconClasses = RcClasses<RcStepIconProps>(
  ['root', 'active', 'text'],
  'RcStepIcon',
);

export const iconColor = palette2('interactive', 'b02');
export const iconTextColor = palette2('neutral', 'f01');

/**
 * check is that editable state, if that have complete twice and is active, that will be true
 * because when user complete step first that should keep complete state,
 * only when user go back to that step that will be edit
 * @param props prop of `RcStepIconProps`
 */
export const useIsEditable = ({ active, completed }: RcStepIconProps) => {
  const completedTimesRef = useRef(0);
  const isEditRef = useRef(false);

  const { current: completedTimes } = completedTimesRef;
  const { current: isEdit } = isEditRef;

  if (completedTimes === 0 && !active && completed) {
    completedTimesRef.current = 1;
  } else if (completedTimes === 1 && !completed) {
    completedTimesRef.current = 0;
  }

  if (completedTimes === 1) {
    if (!isEdit && active) {
      isEditRef.current = true;
    } else if (isEdit && !active) {
      isEditRef.current = false;
    }
  }

  return isEditRef.current;
};
