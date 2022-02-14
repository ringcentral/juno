import {
  getHourAndMinute,
  getTimestamp,
  getTimestampFromDate,
  HOUR_MINUTES,
  TIME_GAP,
} from './TimePickerHelper';

const getDateBeginning = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

/**
 * get target time boundary, what time is nearest time with that timeGap
 */
export class TimeBoundary {
  private _hour?: number | undefined = undefined;

  get hour(): number | undefined {
    return this._hour;
  }

  private _minute?: number | undefined = undefined;

  get minute(): number | undefined {
    return this._minute;
  }

  private _date?: Date = undefined;

  public get date() {
    return this._date;
  }

  public set date(value: Date | undefined) {
    if (value) {
      this.timestamp = getTimestampFromDate(value);
    }

    this._date = value;
  }

  timestamp = 0;

  constructor(
    private value: number | Date | undefined,
    direction: 'after' | 'before',
    private timeGap: number,
  ) {
    if (value) {
      if (direction === 'after') {
        this.getAfterNearTime();
      } else {
        this.getBeforeNearTime();
      }

      this.date = new Date(
        getDateBeginning().setHours(this.hour!, this.minute, 0, 0),
      );
    }
  }

  private getAfterNearTime() {
    const time = this.getDateTime();

    let hour = time.getHours();
    let minute = time.getMinutes();

    const partCount = Math.ceil(minute / this.timeGap);

    // when time is the latest or more, add one hour
    if (partCount >= HOUR_MINUTES / this.timeGap) {
      hour++;
      minute = 0;
    }

    this._hour = hour;

    this._minute = (partCount * this.timeGap) % HOUR_MINUTES;
  }

  private getBeforeNearTime() {
    const time = this.getDateTime();

    this._hour = time.getHours();

    this._minute = Math.floor(time.getMinutes() / this.timeGap) * this.timeGap;
  }

  private getDateTime() {
    if (this.value instanceof Date) {
      return this.value;
    }

    const { hour, minute } = getHourAndMinute(this.value ?? 0);
    const date = new Date();
    date.setHours(hour, minute, 0, 0);

    return date;
  }
}

export const getRangeBoundary = ({
  min,
  max,
  gap = TIME_GAP,
}: {
  min?: number | Date;
  max?: number | Date;
  gap?: number;
}) => {
  if (min !== undefined && max !== undefined) {
    const minTimestamp = getTimestamp(min);
    const maxTimestamp = getTimestamp(max);

    if (minTimestamp > maxTimestamp) {
      throw new Error(
        `JUNO [RcTimePicker]: That boundary min ${minTimestamp} is bigger than max ${maxTimestamp}, please confirm your min and max range props`,
      );
    }
  }

  return {
    min: new TimeBoundary(min, 'after', gap),
    max: new TimeBoundary(max, 'before', gap),
  };
};
