import Hour from "../Hour/Hour";
import Millisecond from "../Millisecond/Millisecond";
import Minute from "../Minute/Minute";
import Second from "../Second/Second";
import DurationObjectLiteral from "./DurationObjectLiteral";

const MILLISECONDS_IN_A_SECOND: number = 1000;
const MILLISECONDS_IN_A_MINUTE: number = 60 * MILLISECONDS_IN_A_SECOND;
const MILLISECONDS_IN_AN_HOUR: number = 60 * MILLISECONDS_IN_A_MINUTE;
const MILLISECONDS_IN_A_DAY: number = 24 * MILLISECONDS_IN_AN_HOUR;
const SECONDS_IN_A_MINUTE: number = 60;
const MINUTES_IN_AN_HOUR: number = 60;
const HOURS_IN_A_DAY: number = 24;

class Duration {
  readonly isPositive: boolean;
  readonly day: number;
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly millisecond: number;

  get inDays(): number {
    return this.inMilliseconds / MILLISECONDS_IN_A_DAY;
  }

  get inHours(): number {
    return this.inMilliseconds / MILLISECONDS_IN_AN_HOUR;
  }

  get inMinutes(): number {
    return this.inMilliseconds / MILLISECONDS_IN_A_MINUTE;
  }

  get inSeconds(): number {
    return this.inMilliseconds / MILLISECONDS_IN_A_SECOND;
  }

  get inMilliseconds(): number {
    const sign = this.isPositive ? 1 : -1;
    const dayInMilliseconds = this.day * MILLISECONDS_IN_A_DAY;
    const hourInMilliseconds = this.hour * MILLISECONDS_IN_AN_HOUR;
    const minuteInMilliseconds = this.minute * MILLISECONDS_IN_A_MINUTE;
    const secondInMilliseconds = this.second * MILLISECONDS_IN_A_SECOND;
    return (
      sign *
      (dayInMilliseconds +
        hourInMilliseconds +
        minuteInMilliseconds +
        secondInMilliseconds +
        this.millisecond)
    );
  }

  constructor(
    isPositive: boolean,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number
  ) {
    this.isPositive = isPositive; // TODO: make sure this throws an error
    this.day = day; // TODO: make sure this is positive and throws an error
    this.hour = new Hour(hour).value;
    this.minute = new Minute(minute).value;
    this.second = new Second(second).value;
    this.millisecond = new Millisecond(millisecond).value;
    Object.freeze(this);
  }

  valueOf(): number {
    return this.inMilliseconds;
  }

  toString(): string {
    const signStr = this.isPositive ? "" : "-";
    const dayStr =
      (this.day > 1 && `${this.day} days `) ||
      (this.day === 1 && `${this.day} day `) ||
      "";
    const hourStr = this.hour.toString().padStart(2, "0");
    const minuteStr = this.minute.toString().padStart(2, "0");
    const secondStr = this.second.toString().padStart(2, "0");
    const dotStr = this.millisecond !== 0 ? "." : "";
    const millisecondStr =
      this.millisecond !== 0
        ? this.millisecond.toString().padStart(3, "0")
        : "";

    const str = `${signStr}${dayStr}${hourStr}:${minuteStr}:${secondStr}${dotStr}${millisecondStr}`;
    return str;
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
    const signStr = this.isPositive ? "" : "-";
    const dayStr = this.day !== 0 ? `${this.day.toString()}D` : "";
    const timeStr =
      this.hour !== 0 ||
      this.minute !== 0 ||
      this.second !== 0 ||
      this.millisecond !== 0
        ? "T"
        : "";
    const hourStr = this.hour !== 0 ? `${this.hour.toString()}H` : "";
    const minuteStr = this.minute !== 0 ? `${this.minute.toString()}M` : "";
    const secondStr =
      this.second !== 0 || this.millisecond !== 0
        ? `${this.second.toString()}`
        : "";
    const dotStr = this.millisecond !== 0 ? "." : "";
    const millisecondStr =
      this.millisecond !== 0
        ? (this.millisecond / 1000).toString().slice(2)
        : "";
    const unitStr = this.second !== 0 || this.millisecond !== 0 ? "S" : "";

    const isoStr = `${signStr}P${dayStr}${timeStr}${hourStr}${minuteStr}${secondStr}${dotStr}${millisecondStr}${unitStr}`;
    return isoStr;
  }

  toObject(): DurationObjectLiteral {
    const object: DurationObjectLiteral = {};
    if (!this.isPositive) {
      object.isPositive = false;
    }
    if (this.day !== 0) {
      object.day = this.day;
    }
    if (this.hour !== 0) {
      object.hour = this.hour;
    }
    if (this.minute !== 0) {
      object.minute = this.minute;
    }
    if (this.second !== 0) {
      object.second = this.second;
    }
    if (this.millisecond !== 0) {
      object.millisecond = this.millisecond;
    }
    return object;
  }

  equals(other: Duration): boolean {
    return this.inMilliseconds === other.inMilliseconds;
  }

  isLongerThan(other: Duration): boolean {
    return this.inMilliseconds > other.inMilliseconds;
  }

  isShorterThan(other: Duration): boolean {
    return this.inMilliseconds < other.inMilliseconds;
  }

  // TODO: write test for this
  withIsPositive(isPositive: boolean): Duration {
    return Duration.fromObject({
      isPositive: isPositive,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
    });
  }

  withDay(day: number): Duration {
    return Duration.fromObject({
      isPositive: this.isPositive,
      day: day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
    });
  }

  withHour(hour: number): Duration {
    return Duration.fromObject({
      isPositive: this.isPositive,
      day: this.day,
      hour: hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
    });
  }

  withMinute(minute: number): Duration {
    return Duration.fromObject({
      isPositive: this.isPositive,
      day: this.day,
      hour: this.hour,
      minute: minute,
      second: this.second,
      millisecond: this.millisecond,
    });
  }

  withSecond(second: number): Duration {
    return Duration.fromObject({
      isPositive: this.isPositive,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: second,
      millisecond: this.millisecond,
    });
  }

  withMillisecond(millisecond: number): Duration {
    return Duration.fromObject({
      isPositive: this.isPositive,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: millisecond,
    });
  }

  plus(other: Duration): Duration {
    return Duration.fromMilliseconds(
      this.inMilliseconds + other.inMilliseconds
    );
  }

  minus(other: Duration): Duration {
    return Duration.fromMilliseconds(
      this.inMilliseconds - other.inMilliseconds
    );
  }

  multiplyBy(factor: number): Duration {
    return Duration.fromMilliseconds(this.inMilliseconds * factor);
  }

  divideBy(divisor: number): Duration {
    return Duration.fromMilliseconds(this.inMilliseconds / divisor);
  }

  negate(): Duration {
    return Duration.fromMilliseconds(-this.inMilliseconds);
  }

  absolute(): Duration {
    return Duration.fromMilliseconds(Math.abs(this.inMilliseconds));
  }

  static fromDays(inDays: number): Duration {
    return Duration.fromMilliseconds(inDays * MILLISECONDS_IN_A_DAY);
  }

  static fromHours(inHours: number): Duration {
    return Duration.fromMilliseconds(inHours * MILLISECONDS_IN_AN_HOUR);
  }

  static fromMinutes(inMinutes: number): Duration {
    return Duration.fromMilliseconds(inMinutes * MILLISECONDS_IN_A_MINUTE);
  }

  static fromSeconds(inSeconds: number): Duration {
    return Duration.fromMilliseconds(inSeconds * MILLISECONDS_IN_A_SECOND);
  }

  static fromMilliseconds(inMilliseconds: number): Duration {
    const absInMilliseconds = Math.abs(inMilliseconds);
    const isPositive = inMilliseconds >= 0;
    const day = Math.floor(absInMilliseconds / MILLISECONDS_IN_A_DAY);
    const hour =
      Math.floor(absInMilliseconds / MILLISECONDS_IN_AN_HOUR) % HOURS_IN_A_DAY;
    const minute =
      Math.floor(absInMilliseconds / MILLISECONDS_IN_A_MINUTE) %
      MINUTES_IN_AN_HOUR;
    const second =
      Math.floor(absInMilliseconds / MILLISECONDS_IN_A_SECOND) %
      SECONDS_IN_A_MINUTE;
    const millisecond =
      Math.floor(absInMilliseconds) % MILLISECONDS_IN_A_SECOND;

    return Duration.fromObject({
      isPositive,
      day,
      hour,
      minute,
      second,
      millisecond,
    });
  }

  static fromObject(object: DurationObjectLiteral): Duration {
    const isPositive = object.isPositive ?? true;
    const day = object.day ? object.day : 0;
    const hour = object.hour ? object.hour : 0;
    const minute = object.minute ? object.minute : 0;
    const second = object.second ? object.second : 0;
    const millisecond = object.millisecond ? object.millisecond : 0;

    return new Duration(isPositive, day, hour, minute, second, millisecond);
  }

  static fromString(str: string): Duration {
    const regexp = /^(-?)((\d+) days? )?(\d{2}):(\d{2}):(\d{2})(.(\d{3}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`duration string is invalid: ${str}`);
    }

    const isPositive = result[1] ? false : true;
    const day = result[3] ? parseInt(result[3]) : 0;
    const hour = result[4] ? parseInt(result[4]) : 0;
    const minute = result[5] ? parseInt(result[5]) : 0;
    const second = result[6] ? parseInt(result[6]) : 0;
    const millisecond = result[8] ? parseInt(result[8]) : 0;

    return Duration.fromObject({
      isPositive: isPositive,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
    });
  }

  static fromISOString(str: string): Duration {
    const regexp =
      /^(-?)P(?=\d|T)((\d+)D)?(T(?=\d)((\d{1,2})H)?((\d{1,2})M)?((\d{1,2})(.(\d{1,3}))?S)?)?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`duration iso string is invalid: ${str}`);
    }

    const isPositive = result[1] ? false : true;
    const day = result[3] ? parseInt(result[3]) : 0;
    const hour = result[6] ? parseInt(result[6]) : 0;
    const minute = result[8] ? parseInt(result[8]) : 0;
    const second = result[10] ? parseInt(result[10]) : 0;
    const millisecond = result[12] ? parseInt(result[12].padEnd(3, "0")) : 0;

    return Duration.fromObject({
      isPositive: isPositive,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
    });
  }

  static parse(str: string): Duration {
    const parsers: Array<(s: string) => Duration> = [
      Duration.fromString,
      Duration.fromISOString,
    ];

    for (const parse of parsers) {
      try {
        return parse(str);
      } catch {} // eslint-disable-line no-empty
    }

    throw new Error(`duration parse failed`);
  }

  static compare(duration1: Duration, duration2: Duration): number {
    return duration1.inMilliseconds - duration2.inMilliseconds;
  }
}

export default Duration;
