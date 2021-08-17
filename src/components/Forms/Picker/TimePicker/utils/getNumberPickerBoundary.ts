import { TimeBoundary } from './TimeBoundary';
import { HALF_DAY_HOURS, lastMinute } from './TimePickerHelper';

type GetNumberPickerBoundaryOptions = {
  range: {
    min: TimeBoundary;
    max: TimeBoundary;
  };
  isTwelveHourSystem?: boolean;
};

/**
 * get range from current hour
 */
export function getNumberPickerBoundary(
  currentHour: number,
  { range, isTwelveHourSystem }: GetNumberPickerBoundaryOptions,
) {
  const currentIsPM = currentHour >= HALF_DAY_HOURS;

  let maxHour = range.max.hour ?? 23;
  let maxMinute = range.max.minute ?? lastMinute;

  let minHour = range.min.hour ?? 0;
  let minMinute = range.min.minute ?? 0;

  if (isTwelveHourSystem) {
    if (currentIsPM) {
      if (minHour < HALF_DAY_HOURS) {
        minHour = 0;
        minMinute = 0;
      }
    } else if (maxHour >= HALF_DAY_HOURS) {
      maxHour = 11;
      maxMinute = lastMinute;
    }
  }

  if (maxMinute !== lastMinute && currentHour < maxHour) {
    maxMinute = lastMinute;
  }

  if (minMinute !== 0 && currentHour > minHour) {
    minMinute = 0;
  }

  if (isTwelveHourSystem) {
    maxHour = maxHour % HALF_DAY_HOURS;
    minHour = minHour % HALF_DAY_HOURS;
  }

  return {
    hour: {
      min: minHour,
      max: maxHour,
    },
    minute: {
      min: minMinute,
      max: maxMinute,
    },
  };
}
