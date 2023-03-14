import React, { forwardRef } from 'react';

import {
  RcBaseSize,
  RcPaletteProp,
  styled,
  useThemeProps,
} from '../../foundation';
import { RcIcon } from '../Icon';
import { Unattended, Dnd, Check, Offline, Default } from './assets';
import { StyledPresence } from './styles';
import { RcPresenceColors } from './utils';

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
  const { type, color } = props;

  const symbol = (() => {
    switch (type) {
      case 'DND':
        return Dnd;
      case 'available':
      case 'attended':
        return Check;
      case 'unAttended':
        return Unattended;
      case 'offline':
      case 'unavailable':
      case 'notReady':
        return Offline;
      default:
        return Default;
    }
  })();

  return (
    <StyledPresence ref={ref} {...props}>
      <RcIcon
        symbol={symbol}
        color={color || RcPresenceColors[type!]}
        size="inherit"
      />
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
