import Day from "../Day/Day";
import Duration from "../Duration/Duration";
import Hour from "../Hour/Hour";
import Millisecond from "../Millisecond/Millisecond";
import Minute from "../Minute/Minute";
import Month from "../Month/Month";
import Offset from "../Offset/Offset";
import Second from "../Second/Second";
import Year from "../Year/Year";
import DateTimeObjectLiteral from "./DateTimeObjectLiteral";

class DateTime {
  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly millisecond: number;
  readonly offset: Offset; // TODO: change this object to a number of minutes

  get daysSinceEpoch(): number {
    return this.durationSinceEpoch.inDays;
  }

  get hoursSinceEpoch(): number {
    return this.durationSinceEpoch.inHours;
  }

  get minutesSinceEpoch(): number {
    return this.durationSinceEpoch.inMinutes;
  }

  get secondsSinceEpoch(): number {
    return this.durationSinceEpoch.inSeconds;
  }

  get millisecondsSinceEpoch(): number {
    return this.durationSinceEpoch.inMilliseconds;
  }

  get durationSinceEpoch(): Duration {
    const wrongMillisecondsSinceEpoch = Date.UTC(
      this.year,
      this.month - 1,
      this.day,
      this.hour,
      this.minute,
      this.second,
      this.millisecond
    );
    const offsetInMilliseconds = this.offset.toDuration().inMilliseconds;
    const correctMillisecondsSinceEpoch =
      wrongMillisecondsSinceEpoch - offsetInMilliseconds;

    return Duration.fromMilliseconds(correctMillisecondsSinceEpoch);
  }

  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number,
    offset: Offset
  ) {
    this.year = new Year(year).value;
    this.month = new Month(month).value;
    this.day = new Day(day).value;
    this.hour = new Hour(hour).value;
    this.minute = new Minute(minute).value;
    this.second = new Second(second).value;
    this.millisecond = new Millisecond(millisecond).value;
    this.offset = offset;
    Object.freeze(this);
  }

  valueOf(): number {
    return this.millisecondsSinceEpoch;
  }

  toString(): string {
    const year = this.year.toString().padStart(4, "0");
    const month = this.month.toString().padStart(2, "0");
    const day = this.day.toString().padStart(2, "0");
    const hour = this.hour.toString().padStart(2, "0");
    const minute = this.minute.toString().padStart(2, "0");
    const second = this.second.toString().padStart(2, "0");
    const millisecond = this.millisecond.toString().padStart(2, "0");
    const offset = this.offset.toString();

    return `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond} ${offset}`;
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
    const year = this.year.toString().padStart(4, "0");
    const month = this.month.toString().padStart(2, "0");
    const day = this.day.toString().padStart(2, "0");
    const hour = this.hour.toString().padStart(2, "0");
    const minute = this.minute.toString().padStart(2, "0");
    const second = this.second.toString().padStart(2, "0");
    const millisecond = this.millisecond.toString().padStart(2, "0");
    const offset = this.offset.toISOString();

    return `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}${offset}`;
  }

  toLocaleString(localeName: string): string {
    const adjustedDate = new Date(
      this.millisecondsSinceEpoch + this.offset.toDuration().inMilliseconds
    );
    const adjustedZone = "UTC";
    return adjustedDate.toLocaleString(localeName, {
      timeZone: adjustedZone,
    });
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

  withOffset(offset: Offset): DateTime {
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

  inOffset(offset: Offset): DateTime {
    const diff = this.offset.minus(offset).toDuration();
    const instanceEquivalentInLocal = this.withOffset(Offset.local());

    return DateTime.fromMillisecondsSinceEpoch(
      instanceEquivalentInLocal.millisecondsSinceEpoch - diff.inMilliseconds
    ).withOffset(offset);
  }

  inZone(zoneName: string): DateTime {
    return this.inOffset(Offset.fromZoneName(zoneName));
  }

  inUTC(): DateTime {
    return this.inOffset(Offset.UTC);
  }

  plus(duration: Duration): DateTime {
    return DateTime.fromMillisecondsSinceEpoch(
      this.millisecondsSinceEpoch + duration.inMilliseconds
    ).inOffset(this.offset);
  }

  minus(duration: Duration): DateTime {
    return DateTime.fromMillisecondsSinceEpoch(
      this.millisecondsSinceEpoch - duration.inMilliseconds
    ).inOffset(this.offset);
  }

  static fromDaysSinceEpoch(daysSinceEpoch: number): DateTime {
    const durationSinceEpoch = Duration.fromDays(daysSinceEpoch);
    return DateTime.fromDurationSinceEpoch(durationSinceEpoch);
  }

  static fromHoursSinceEpoch(hoursSinceEpoch: number): DateTime {
    const durationSinceEpoch = Duration.fromHours(hoursSinceEpoch);
    return DateTime.fromDurationSinceEpoch(durationSinceEpoch);
  }

  static fromMinutesSinceEpoch(minutesSinceEpoch: number): DateTime {
    const durationSinceEpoch = Duration.fromMinutes(minutesSinceEpoch);
    return DateTime.fromDurationSinceEpoch(durationSinceEpoch);
  }

  static fromSecondsSinceEpoch(secondsSinceEpoch: number): DateTime {
    const durationSinceEpoch = Duration.fromSeconds(secondsSinceEpoch);
    return DateTime.fromDurationSinceEpoch(durationSinceEpoch);
  }

  static fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number): DateTime {
    const durationSinceEpoch = Duration.fromMilliseconds(
      millisecondsSinceEpoch
    );
    return DateTime.fromDurationSinceEpoch(durationSinceEpoch);
  }

  static fromDurationSinceEpoch(durationSinceEpoch: Duration): DateTime {
    const jsDate = new Date(durationSinceEpoch.inMilliseconds);

    const year = jsDate.getFullYear();
    const month = jsDate.getMonth() + 1;
    const day = jsDate.getDate();
    const hour = jsDate.getHours();
    const minute = jsDate.getMinutes();
    const second = jsDate.getSeconds();
    const millisecond = jsDate.getMilliseconds();
    const offset = Offset.local();

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
      Offset.fromObject(offset)
    );
  }

  static fromString(str: string): DateTime {
    const regexp =
      /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})\.(\d{3}) (UTC(([+-])(\d{2})(:(\d{2}))?)?)$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`date time string is invalid: ${str}`);
    }

    const year = result[1] ? parseInt(result[1]) : 0;
    const month = result[2] ? parseInt(result[2]) : 0;
    const day = result[3] ? parseInt(result[3]) : 0;
    const hour = result[4] ? parseInt(result[4]) : 0;
    const minute = result[5] ? parseInt(result[5]) : 0;
    const second = result[6] ? parseInt(result[6]) : 0;
    const millisecond = result[7] ? parseInt(result[7]) : 0;
    const offset = Offset.fromString(result[8]);

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

  static fromISOString(str: string): DateTime {
    const regexp =
      /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})((Z)|(([+-])(\d{2})(:(\d{2}))?))$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`date time iso string is invalid: ${str}`);
    }

    const year = result[1] ? parseInt(result[1]) : 0;
    const month = result[2] ? parseInt(result[2]) : 0;
    const day = result[3] ? parseInt(result[3]) : 0;
    const hour = result[4] ? parseInt(result[4]) : 0;
    const minute = result[5] ? parseInt(result[5]) : 0;
    const second = result[6] ? parseInt(result[6]) : 0;
    const millisecond = result[7] ? parseInt(result[7]) : 0;
    const offset = Offset.fromISOString(result[8]);

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

  static parse(str: string): DateTime {
    try {
      return DateTime.fromString(str);
    } catch {
      try {
        return DateTime.fromISOString(str);
      } catch {
        const millisecondsSinceEpoch = Date.parse(str);
        if (Number.isNaN(millisecondsSinceEpoch)) {
          throw new Error(`date time parse failed: ${str}`);
        }
        return DateTime.fromMillisecondsSinceEpoch(millisecondsSinceEpoch);
      }
    }
  }

  static fromJSDate(date: Date): DateTime {
    const millisecondsSinceEpoch = date.getTime();

    return DateTime.fromMillisecondsSinceEpoch(millisecondsSinceEpoch);
  }

  static now(): DateTime {
    return DateTime.fromMillisecondsSinceEpoch(Date.now());
  }

  static compare(datetime1: DateTime, datetime2: DateTime): number {
    return datetime1.millisecondsSinceEpoch - datetime2.millisecondsSinceEpoch;
  }
}

export default DateTime;
