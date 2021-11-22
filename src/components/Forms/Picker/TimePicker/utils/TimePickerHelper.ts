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
};

const getFormattedTime = (
  { hour, minute, period }: GetFormattedTimeOption,
  isTwelveHourSystem?: boolean,
) => {
  const formattedHour = parseNumberToString(hour, isTwelveHourSystem);
  const formattedMinute = parseNumberToString(minute);
  const periodText = isTwelveHourSystem ? ` ${period}` : '';

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

const getTimestampFromDate = (date: Date) => {
  return date.getHours() * ONE_HOUR + date.getMinutes() * ONE_MINUTE;
};

const getHourAndMinute = (times?: number) => {
  if (!times) {
    return {
      hour: 0,
      minute: 0,
    };
  }

  const minute = times % ONE_HOUR;
  const hour = (times - minute) / ONE_HOUR;
  return {
    hour,
    minute: minute / ONE_MINUTE,
  };
};

const timestampToDate = (times?: number) => {
  const { hour, minute } = getHourAndMinute(times);

  const date = new Date();
  date.setHours(hour, minute, 0, 0);

  return date;
};

function getTimestamp(nowTime: number | Date) {
  return nowTime instanceof Date ? getTimestampFromDate(nowTime) : nowTime;
}

const getTimestampFromHourAndMin = (option: {
  hour: number;
  minute: number;
}) => {
  return option.hour * ONE_HOUR + option.minute * ONE_MINUTE;
};

function getPeriod(currHour: number) {
  return currHour >= HALF_DAY_HOURS ? TIME_SYSTEM_TEXT.PM : TIME_SYSTEM_TEXT.AM;
}

export {
  getFormattedTime,
  getHourAndMinute,
  getPeriod,
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
  timestampToDate,
  twelveHourSystemSource,
  twentyFourHourSystemSource,
};
