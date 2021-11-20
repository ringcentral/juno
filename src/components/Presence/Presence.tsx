import React, { forwardRef, useMemo } from 'react';

import {
  RcBaseSize,
  RcPaletteProp,
  styled,
  useThemeProps,
} from '../../foundation';
import { RcIcon } from '../Icon';
import { Attended, Unattended } from './assets';
import { StyledDND, StyledPresence } from './styles';

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
  const { type, size } = props;

  const innerChildren = useMemo(() => {
    switch (type) {
      case 'DND':
        return <StyledDND size={size} />;
      case 'attended':
        return <RcIcon symbol={Attended} color="neutral.f01" size="inherit" />;
      case 'unAttended':
        return (
          <RcIcon symbol={Unattended} color="neutral.f01" size="inherit" />
        );
      default:
        return null;
    }
  }, [size, type]);

  return (
    <StyledPresence ref={ref} {...props}>
      {innerChildren}
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
