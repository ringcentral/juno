import React, { forwardRef } from 'react';

import {
  RcBaseSize,
  RcPaletteProp,
  styled,
  useThemeProps,
} from '../../foundation';
import { RcIcon } from '../Icon';
import { Unattended, Dnd, Check, Offline, Default } from './assets';
import { StyledPresence, PresenceContainer } from './styles';
import { RcPresenceColors, RcPresenceSizes } from './utils';

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

type PresenceSizeProps = {
  /** sizeValue in px */
  iconSizeValue: number;
  /** border size value in px * */
  borderSizeValue: number;
  /** presence type */
  type?: RcPresenceType;
  /** other custom color with presence */
  color?: RcPaletteProp;
};

const _RcPresence = forwardRef<any, RcPresenceProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcPresence' });
  const { type, color, size, borderSize } = props;
  const sizeProps = {
    iconSizeValue: RcPresenceSizes[size!][0],
    borderSizeValue: RcPresenceSizes[borderSize || size!][1],
    borderSize,
    type,
  };

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
    <PresenceContainer {...sizeProps}>
      <StyledPresence ref={ref} {...sizeProps} color={color}>
        <RcIcon
          symbol={symbol}
          color={color || RcPresenceColors[type!]}
          size="inherit"
        />
      </StyledPresence>
    </PresenceContainer>
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
export type {
  RcPresenceProps,
  RcPresenceSize,
  RcPresenceType,
  PresenceSizeProps,
};
