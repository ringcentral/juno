import React, { FunctionComponent } from 'react';

import { styled, useLongPress } from '../../../foundation';
import { RcIconButton, RcIconButtonProps } from '../../Buttons';
import { RcDialPadOnChangeReason } from '../DialPad';
import { buttonWrapperStyle } from './styles';

export type DialPadButtonProps = {
  /** output value when press */
  value: string;
  /** output value when long press */
  longPressValue?: string;
  /** time for long press delay trigger */
  longPressDelay?: number;
  /** emit effect when trigger number enter */
  onKeyEffect: (value: string, reason: RcDialPadOnChangeReason) => void;
} & Pick<
  RcIconButtonProps,
  | 'shouldPersistBg'
  | 'symbol'
  | 'classes'
  | 'tabIndex'
  | 'onKeyDown'
  | 'onFocus'
>;

const _DialPadButton: FunctionComponent<DialPadButtonProps> = (props) => {
  const { value, longPressValue, longPressDelay, onKeyEffect, ...rest } = props;

  const isPressEvent =
    typeof longPressDelay === 'number' && typeof longPressValue === 'string';

  const { ref, ...events } = useLongPress(
    {
      onTap: (e, reason) => {
        onKeyEffect(value, reason);
      },
      onPress: isPressEvent
        ? (e, reason) => {
            onKeyEffect(longPressValue!, reason);
          }
        : undefined,
    },
    rest as any,
    { delay: longPressDelay },
  );

  return (
    <RcIconButton ref={ref} variant="round" stretchIcon {...rest} {...events} />
  );
};

const DialPadButton = styled(_DialPadButton)`
  ${buttonWrapperStyle}
`;

DialPadButton.displayName = 'DialPadButton';

export { DialPadButton };
