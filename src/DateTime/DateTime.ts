import Duration from "../Duration/Duration";
import { MINUTE } from "../Units/Units";
import DateTimeObjectLiteral from "./DateTimeObjectLiteral";

class DateTime {
  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly millisecond: number;
  readonly offset: Duration;

  get millisecondsSinceEpoch(): number {
    const wrongMillisecondsSinceEpoch = Date.UTC(
      this.year,
      this.month,
      this.day,
      this.hour,
      this.minute,
      this.second,
      this.millisecond
    );
    const offsetInMilliseconds = this.offset.inMilliseconds;
    const correctMillisecondsSinceEpoch =
      wrongMillisecondsSinceEpoch - offsetInMilliseconds;

    return correctMillisecondsSinceEpoch;
  }

  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number,
    offset: Duration
  ) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.millisecond = millisecond;
    this.offset = offset;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.millisecondsSinceEpoch;
  }

  toString(): string {
    return this.toJSDate().toString();
  }

  [Symbol.toPrimitive](hint: string): number | string {
    switch (hint) {
      case "number":
        return this.valueOf();
      case "string":
        return this.toString();
      default:
        return this.toString();
    }
  }

  toJSON(): string {
    return this.toISOString();
  }

  toISOString(): string {
    return this.toJSDate().toISOString();
  }

  toObject(): DateTimeObjectLiteral {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
      offset: this.offset.toObject(),
    };
  }

  toJSDate(): Date {
    return new Date(this.millisecondsSinceEpoch);
  }

  equals(other: DateTime): boolean {
    return this.millisecondsSinceEpoch === other.millisecondsSinceEpoch;
  }

  isLaterThan(other: DateTime): boolean {
    return this.millisecondsSinceEpoch > other.millisecondsSinceEpoch;
  }

  isEarlierThan(other: DateTime): boolean {
    return this.millisecondsSinceEpoch < other.millisecondsSinceEpoch;
  }

  withYear(year: number): DateTime {
    return DateTime.fromObject({
      year: year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
      offset: this.offset.toObject(),
    });
  }

  withMonth(month: number): DateTime {
    return DateTime.fromObject({
      year: this.year,
      month: month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
      offset: this.offset.toObject(),
    });
  }

  withDay(day: number): DateTime {
    return DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
      offset: this.offset.toObject(),
    });
  }

  withHour(hour: number): DateTime {
    return DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
      hour: hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
      offset: this.offset.toObject(),
    });
  }

  withMinute(minute: number): DateTime {
    return DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: minute,
      second: this.second,
      millisecond: this.millisecond,
      offset: this.offset.toObject(),
    });
  }

  withSecond(second: number): DateTime {
    return DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: second,
      millisecond: this.millisecond,
      offset: this.offset.toObject(),
    });
  }

  withMillisecond(millisecond: number): DateTime {
    return DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: millisecond,
      offset: this.offset.toObject(),
    });
  }

  withOffset(offset: Duration): DateTime {
    return DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
      offset: offset.toObject(),
    });
  }

  plus(duration: Duration): DateTime {
    return DateTime.of(this.millisecondsSinceEpoch + duration.inMilliseconds);
  }

  minus(duration: Duration): DateTime {
    return DateTime.of(this.millisecondsSinceEpoch - duration.inMilliseconds);
  }

  static of(millisecondsSinceEpoch: number): DateTime {
    const jsDate = new Date(millisecondsSinceEpoch);

    const year = jsDate.getFullYear();
    const month = jsDate.getMonth();
    const day = jsDate.getDate();
    const hour = jsDate.getHours();
    const minute = jsDate.getMinutes();
    const second = jsDate.getSeconds();
    const millisecond = jsDate.getMilliseconds();
    const offset = Duration.of(-1 * jsDate.getTimezoneOffset() * MINUTE);

    return DateTime.fromObject({
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecond,
      offset,
    });
  }

  static fromObject(object: DateTimeObjectLiteral): DateTime {
    const { year, month, day, hour, minute, second, millisecond, offset } =
      object;

    return new DateTime(
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecond,
      Duration.fromObject(offset)
    );
  }

  static parse(str: string): DateTime | null {
    const millisecondsSinceEpoch = Date.parse(str);

    if (Number.isNaN(millisecondsSinceEpoch)) {
      return null;
    }

    return DateTime.of(millisecondsSinceEpoch);
  }

  static fromJSDate(date: Date): DateTime {
    const millisecondsSinceEpoch = date.getTime();

    return DateTime.of(millisecondsSinceEpoch);
  }

  static now(): DateTime {
    return DateTime.of(Date.now());
  }

  static compare(datetime1: DateTime, datetime2: DateTime): number {
    return datetime1.millisecondsSinceEpoch - datetime2.millisecondsSinceEpoch;
  }
}

export default DateTime;
