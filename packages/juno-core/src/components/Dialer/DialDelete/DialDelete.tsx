import React, { FunctionComponent } from 'react';

import {
  useForkRef,
  useLongPress,
  UseLongPressOutput,
  useThemeProps,
} from '../../../foundation';
import { RcDialPadOnChangeReason } from '../DialPad';
import { useRcDialerContext } from '../utils';

type RcDialDeleteProps = {
  /** that children for host delete behaviors */
  children: React.ReactElement;
  /** trigger when delete */
  onDelete?: (
    e:
      | React.MouseEvent<unknown, MouseEvent>
      | React.TouchEvent<unknown>
      | React.KeyboardEvent<unknown>,
    reason: RcDialPadOnChangeReason,
  ) => void;
  /** trigger when clear */
  onClear?: (
    e:
      | React.MouseEvent<unknown, MouseEvent>
      | React.TouchEvent<unknown>
      | React.KeyboardEvent<unknown>,
    reason: RcDialPadOnChangeReason,
  ) => void;
};

const holdTime = 1000;

const RcDialDelete: FunctionComponent<RcDialDeleteProps> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: 'RcDialDelete' });
  const { onDelete, onClear, children } = props;
  const { onClearRef, onDeleteRef } = useRcDialerContext();

  const handleClear: UseLongPressOutput<unknown>['onPress'] = (e, reason) => {
    onClear?.(e, reason);
    onClearRef?.current?.(e, reason);
  };

  const handleDelete: UseLongPressOutput<unknown>['onTap'] = (e, reason) => {
    onDelete?.(e, reason);
    onDeleteRef?.current?.(e, reason);
  };

  const { ref, ...events } = useLongPress(
    { onTap: handleDelete, onPress: handleClear },
    children.props,
    { delay: holdTime },
  );

  const forkEleRef = useForkRef(children.props.ref, ref);

  return React.cloneElement(children, {
    ref: forkEleRef,
    ...events,
  });
};

export { RcDialDelete };
export type { RcDialDeleteProps };
