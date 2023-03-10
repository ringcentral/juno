import { TIME_SYSTEM_TEXT } from '../constant';

const parseNumber = (value: number, isTwelveHourSystem?: boolean) => {
  const count = isTwelveHourSystem ? value % 12 : value;
  if (isTwelveHourSystem && count === 0) return 12;

  return count;
};

const parseNumberToString = (value: number, isTwelveHourSystem?: boolean) => {
  const count = parseNumber(value, isTwelveHourSystem);

  return pad(count);
};

/** add miss zero */
const pad = (num: number, size = 2) => {
  let s = `${num}`;
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
};

type GetFormattedTimeOption = {
  hour: number;
  minute: number;
  period: TIME_SYSTEM_TEXT;
  periodTexts: { AM: string; PM: string };
};

/**
 * get formatted time hh:mm
 * @param option `{hour, min, period}`
 * @param isTwelveHourSystem boolean
 * @returns `hh:mm AM` or `hh:mm PM` or `hh:mm`
 */
const getFormattedTime = (
  { hour, minute, period, periodTexts }: GetFormattedTimeOption,
  isTwelveHourSystem?: boolean,
) => {
  const formattedHour = parseNumberToString(hour, isTwelveHourSystem);
  const formattedMinute = parseNumberToString(minute);
  const periodText = isTwelveHourSystem ? ` ${periodTexts[period]}` : '';

  return `${formattedHour}:${formattedMinute}${periodText}`;
};

const HALF_DAY_HOURS = 12;
const HOUR_MINUTES = 60;
const TIME_GAP = 15;

const ONE_HOUR = HOUR_MINUTES * HOUR_MINUTES * 1000;
const ONE_MINUTE = HOUR_MINUTES * 1000;

const buildConsecutiveNumberToArray = (min: number, max: number) => {
  const array: number[] = [];
  if (min > max) return array;
  let count = min;
  while (count <= max) {
    array.push(count);
    count++;
  }
  return array;
};

const twelveHourSystemSource = buildConsecutiveNumberToArray(0, 11);
const twentyFourHourSystemSource = buildConsecutiveNumberToArray(0, 23);
const minuteSource = [0, 15, 30, 45];
const lastMinute = 45;

/**
 * hour and minute timestamp
 */
const getTimestampFromDate = (date: Date) => {
  return date.getHours() * ONE_HOUR + date.getMinutes() * ONE_MINUTE;
};

/**
 * hour and minute number
 */
const getHourAndMinute = (times: number | null) => {
  if (times === null) {
    return {
      hour: 0,
      minute: 0,
    };
  }

  const minute = times % ONE_HOUR;
  const hour = (times - minute) / ONE_HOUR;
  return {
    hour,
    minute: Math.floor(minute / ONE_MINUTE),
  };
};

function getTimestamp(nowTime: number | Date): number;
function getTimestamp(nowTime: null): null;
function getTimestamp(nowTime: number | Date | null): number | null;
/**
 * get timestamp from date or timestamp
 *
 * if nowTime is number, it must be hour and minute timestamp
 */
function getTimestamp(nowTime: number | Date | null): number | null {
  return nowTime instanceof Date ? getTimestampFromDate(nowTime) : nowTime;
}

/**
 * hour and min object to timestamp
 */
const getTimestampFromHourAndMin = (option: {
  hour: number;
  minute: number;
}) => {
  return option.hour * ONE_HOUR + option.minute * ONE_MINUTE;
};

/**
 * get period, `PM` or `AM`
 */
function getPeriod(currHour: number) {
  return currHour >= HALF_DAY_HOURS ? TIME_SYSTEM_TEXT.PM : TIME_SYSTEM_TEXT.AM;
}

const getRecoupHour = (currHour: number, period?: TIME_SYSTEM_TEXT) => {
  switch (period) {
    case TIME_SYSTEM_TEXT.PM:
      if (currHour < HALF_DAY_HOURS) {
        return HALF_DAY_HOURS;
      }
      break;
    case TIME_SYSTEM_TEXT.AM:
      if (currHour < HALF_DAY_HOURS) {
        if (currHour >= HALF_DAY_HOURS) {
          return -HALF_DAY_HOURS;
        }
      }
      break;
    default:
      break;
  }

  return 0;
};

export {
  getFormattedTime,
  getHourAndMinute,
  getPeriod,
  getRecoupHour,
  getTimestamp,
  getTimestampFromDate,
  getTimestampFromHourAndMin,
  HALF_DAY_HOURS,
  HOUR_MINUTES,
  lastMinute,
  minuteSource,
  ONE_HOUR,
  pad,
  parseNumber,
  parseNumberToString,
  TIME_GAP,
  twelveHourSystemSource,
  twentyFourHourSystemSource,
};
