import React, { forwardRef } from 'react';

import {
  RcBaseSize,
  RcPaletteProp,
  styled,
  useThemeProps,
} from '../../foundation';
import { RcIcon } from '../Icon';
import { Attended, Unattended } from './assets';
import { StyledPresence } from './styles';
import { PresenceAvailable, PresenceDnd } from '@ringcentral/juno-icon';

type RcPresenceType =
  | 'notReady'
  | 'unavailable'
  | 'available'
  | 'onCall'
  | 'DND'
  | 'inMeeting'
  | 'busy'
  | 'offline'
  | 'attended'
  | 'unAttended';

type RcPresenceSize = RcBaseSize<
  'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
>;

type RcPresenceProps = {
  /** presence type */
  type?: RcPresenceType;
  /** size of presence */
  size?: RcPresenceSize;
  /** custom presence border, default is equal to size */
  borderSize?: RcPresenceSize;
  /** other custom color with presence */
  color?: RcPaletteProp;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>;

const _RcPresence = forwardRef<any, RcPresenceProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcPresence' });
  const { type } = props;

  const symbol = (() => {
    switch (type) {
      case 'DND':
        return PresenceDnd;
      case 'available':
        return PresenceAvailable;
      case 'attended':
        return Attended;
      case 'unAttended':
        return Unattended;
      default:
        return null;
    }
  })();

  const symbolElm = symbol ? (
    <RcIcon symbol={symbol} color="neutral.f01" size="inherit" />
  ) : null;

  return (
    <StyledPresence ref={ref} {...props}>
      {symbolElm}
    </StyledPresence>
  );
});

/** @release */
const RcPresence = styled(_RcPresence)``;

RcPresence.defaultProps = {
  size: 'xsmall',
  type: 'notReady',
};

RcPresence.displayName = 'RcPresence';

export { RcPresence };
export type { RcPresenceProps, RcPresenceSize, RcPresenceType };
