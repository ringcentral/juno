import { palette2, UnitMap } from '../../../foundation';
import { RcPresenceSize, RcPresenceType } from '../Presence';

// first is width, second is border
export const RcPresenceSizes: UnitMap<RcPresenceSize, [number, number]> = {
  xxsmall: [8, 1],
  xsmall: [10, 1],
  small: [10, 2],
  medium: [12, 2],
  large: [16, 2],
  xlarge: [20, 2],
};

const presenceOn = palette2('presence', 'available');
const presenceBusy = palette2('presence', 'busy');
const presenceOff = palette2('presence', 'invisible');

export const RcPresenceColors: UnitMap<RcPresenceType> = {
  // positive
  available: presenceOn,
  attended: presenceOn,
  // negative
  unAttended: presenceBusy,
  onCall: presenceBusy,
  inMeeting: presenceBusy,
  DND: presenceBusy,
  busy: presenceBusy,
  // grey
  unavailable: presenceOff,
  notReady: presenceOff,
  offline: presenceOff,
};
