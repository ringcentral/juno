import { palette2, UnitMap } from '../../../foundation';
import { RcPresenceSize, RcPresenceType } from '../Presence';

// first is width, second is border
export const RcPresenceSizes: UnitMap<RcPresenceSize, [number, number]> = {
  xxsmall: [8, 1],
  xsmall: [8, 2],
  small: [10, 2],
  medium: [10, 2],
  large: [14, 2],
  xlarge: [18, 2],
};

// width, height
export const RcPresenceInnerIconSizes: UnitMap<
  RcPresenceSize,
  [number, number]
> = {
  xxsmall: [4, 2],
  xsmall: [6, 2],
  small: [6, 2],
  medium: [6, 2],
  large: [10, 4],
  xlarge: [14, 4],
};

// use scale rate to make that be odd value
// width, scaleRate
export const RcPresenceIconSizes: UnitMap<
  RcPresenceSize,
  [number, number | undefined]
> = {
  xxsmall: [10, 0.5],
  xsmall: [10, 0.5],
  small: [6, undefined],
  medium: [6, undefined],
  large: [10, undefined],
  xlarge: [12, undefined],
};

export const UnAvailableIconType: UnitMap<RcPresenceType, boolean> = {
  notReady: true,
  unavailable: true,
  offline: true,
  available: false,
  onCall: false,
  DND: false,
  inMeeting: false,
  busy: false,
  attended: false,
  unAttended: false,
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
