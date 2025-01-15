import Duration from "../Duration/Duration";
import DateTimeInfo from "./DateTimeInfo";

class DateTime {
  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly millisecond: number;

  get millisecondsSinceEpoch(): number {
    return Date.UTC(
      this.year,
      this.month,
      this.day,
      this.hour,
      this.minute,
      this.second,
      this.millisecond
    );
  }

  constructor(millisecondsSinceEpoch: number) {
    const jsDate = new Date(millisecondsSinceEpoch);

    this.year = jsDate.getUTCFullYear();
    this.month = jsDate.getUTCMonth();
    this.day = jsDate.getUTCDate();
    this.hour = jsDate.getUTCHours();
    this.minute = jsDate.getUTCMinutes();
    this.second = jsDate.getUTCSeconds();
    this.millisecond = jsDate.getUTCMilliseconds();

    Object.freeze(this);
  }

  valueOf(): number {
    return this.millisecondsSinceEpoch;
  }

  toString(): string {
    return this.toJSDate().toUTCString();
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

  toObject(): DateTimeInfo {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
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
    });
  }

  plus(duration: Duration): DateTime {
    return DateTime.of(this.millisecondsSinceEpoch + duration.inMilliseconds);
  }

  minus(duration: Duration): DateTime {
    return DateTime.of(this.millisecondsSinceEpoch - duration.inMilliseconds);
  }

  static of(millisecondsSinceEpoch: number): DateTime {
    return new DateTime(millisecondsSinceEpoch);
  }

  static fromObject(object: DateTimeInfo): DateTime {
    const { year, month, day, hour, minute, second, millisecond } = object;
    const millisecondsSinceEpoch = Date.UTC(
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecond
    );

    return DateTime.of(millisecondsSinceEpoch);
  }

  static parse(str: string): DateTime | null {
    const millisecondsSinceEpoch = Date.parse(str);

    if (!millisecondsSinceEpoch) {
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
