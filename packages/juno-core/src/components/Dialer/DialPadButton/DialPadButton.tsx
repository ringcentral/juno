import React, { FunctionComponent } from 'react';

import { styled, useLongPress } from '../../../foundation';
import { RcIconButton, RcIconButtonProps } from '../../Buttons';
import { RcDialPadOnChangeReason } from '../DialPad';
import { buttonWrapperStyle } from './styles';

export type RcDialPadButtonProps = {
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
  // TODO: pick type when icon button ready
>;

const _RcDialPadButton: FunctionComponent<RcDialPadButtonProps> = (props) => {
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

const RcDialPadButton = styled(_RcDialPadButton)`
  ${buttonWrapperStyle}
`;

RcDialPadButton.displayName = 'RcDialPadButton';

export { RcDialPadButton };
