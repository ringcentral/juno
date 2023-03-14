import { palette2, UnitMap } from '../../../foundation';
import { RcPresenceSize, RcPresenceType } from '../Presence';

// first is width, second is border
export const RcPresenceSizes: UnitMap<RcPresenceSize, [number, number]> = {
  xxsmall: [8, 1],
  xsmall: [8, 2],
  small: [10, 2],
  medium: [12, 2],
  large: [16, 2],
  xlarge: [20, 2],
};

// width, height
export const RcPresenceInnerIconSizes: UnitMap<RcPresenceSize, number> = {
  xxsmall: 8,
  xsmall: 8,
  small: 10,
  medium: 12,
  large: 16,
  xlarge: 20,
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

export const RcPresenceBackgroundColors: UnitMap<RcPresenceType> = {
  // positive
  available: '#FFFFFF',
  attended: '#FFFFFF',
  // negative
  unAttended: '#FFFFFF',
  onCall: '#FFFFFF',
  inMeeting: '#FFFFFF',
  DND: '#FFFFFF',
  busy: '#FFFFFF',

  unavailable: palette2('neutral', 'l01'),
  notReady: palette2('neutral', 'l01'),
  offline: palette2('neutral', 'l01'),
};
