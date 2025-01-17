import DurationObjectLiteral from "./DurationObjectLiteral";

const MILLISECONDS_IN_A_SECOND: number = 1000;
const MILLISECONDS_IN_A_MINUTE: number = 60 * MILLISECONDS_IN_A_SECOND;
const MILLISECONDS_IN_AN_HOUR: number = 60 * MILLISECONDS_IN_A_MINUTE;
const MILLISECONDS_IN_A_DAY: number = 24 * MILLISECONDS_IN_AN_HOUR;
const SECONDS_IN_A_MINUTE: number = 60;
const MINUTES_IN_AN_HOUR: number = 60;
const HOURS_IN_A_DAY: number = 24;

class Duration {
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
    return (
      this.day * MILLISECONDS_IN_A_DAY +
      this.hour * MILLISECONDS_IN_AN_HOUR +
      this.minute * MILLISECONDS_IN_A_MINUTE +
      this.second * MILLISECONDS_IN_A_SECOND +
      this.millisecond
    );
  }

  constructor(
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number
  ) {
    if (hour < -23 || hour > 23) {
      throw new Error(`duration hour is invalid: ${hour}`);
    }
    if (minute < -59 || minute > 59) {
      throw new Error(`duration minute is invalid: ${minute}`);
    }
    if (second < -59 || second > 59) {
      throw new Error(`duration second is invalid: ${second}`);
    }
    if (millisecond < -999 || millisecond > 999) {
      throw new Error(`duration millisecond is invalid: ${millisecond}`);
    }

    if (Object.is(day, -0)) {
      day = 0;
    }
    if (Object.is(hour, -0)) {
      hour = 0;
    }
    if (Object.is(minute, -0)) {
      minute = 0;
    }
    if (Object.is(second, -0)) {
      second = 0;
    }
    if (Object.is(millisecond, -0)) {
      millisecond = 0;
    }

    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.millisecond = millisecond;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.inMilliseconds;
  }

  toString(): string {
    const signStr = this.inMilliseconds < 0 ? "-" : "";
    const absoluteDuration = this.absolute();
    const dayStr =
      (absoluteDuration.day > 1 && `${absoluteDuration.day} days `) ||
      (absoluteDuration.day === 1 && `${absoluteDuration.day} day `) ||
      "";
    const hourStr = absoluteDuration.hour.toString().padStart(2, "0");
    const minuteStr = absoluteDuration.minute.toString().padStart(2, "0");
    const secondStr = absoluteDuration.second.toString().padStart(2, "0");
    const millisecondStr =
      absoluteDuration.millisecond !== 0
        ? `.${absoluteDuration.millisecond.toString().padStart(3, "0")}`
        : "";

    const str = `${signStr}${dayStr}${hourStr}:${minuteStr}:${secondStr}${millisecondStr}`;

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
    const signStr = this.inMilliseconds < 0 ? "-" : "";
    const absoluteDuration = this.absolute();
    const dayStr = absoluteDuration.day !== 0 ? `${absoluteDuration.day}D` : "";
    const hourStr =
      absoluteDuration.hour !== 0 ? `${absoluteDuration.hour}H` : "";
    const minuteStr =
      absoluteDuration.minute !== 0 ? `${absoluteDuration.minute}M` : "";
    const millisecondStr =
      absoluteDuration.millisecond !== 0
        ? `${(absoluteDuration.millisecond / 1000).toString().slice(1)}`
        : "";
    const secondStr =
      absoluteDuration.second !== 0 || absoluteDuration.millisecond !== 0
        ? `${absoluteDuration.second.toString()}${millisecondStr}S`
        : "";

    const tStr = hourStr || minuteStr || secondStr ? `T` : "";
    const isoStr = `${signStr}P${dayStr}${tStr}${hourStr}${minuteStr}${secondStr}`;

    return isoStr;
  }

  toObject(): DurationObjectLiteral {
    const object: DurationObjectLiteral = {};

    if (this.day) {
      object.day = this.day;
    }
    if (this.hour) {
      object.hour = this.hour;
    }
    if (this.minute) {
      object.minute = this.minute;
    }
    if (this.second) {
      object.second = this.second;
    }
    if (this.millisecond) {
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

  withDay(day: number): Duration {
    return Duration.fromObject({
      day: day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
    });
  }

  withHour(hour: number): Duration {
    return Duration.fromObject({
      day: this.day,
      hour: hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
    });
  }

  withMinute(minute: number): Duration {
    return Duration.fromObject({
      day: this.day,
      hour: this.hour,
      minute: minute,
      second: this.second,
      millisecond: this.millisecond,
    });
  }

  withSecond(second: number): Duration {
    return Duration.fromObject({
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: second,
      millisecond: this.millisecond,
    });
  }

  withMillisecond(millisecond: number): Duration {
    return Duration.fromObject({
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
    const fn = inMilliseconds < 0 ? Math.ceil : Math.floor;

    const day = fn(inMilliseconds / MILLISECONDS_IN_A_DAY);
    const hour = fn(inMilliseconds / MILLISECONDS_IN_AN_HOUR) % HOURS_IN_A_DAY;
    const minute =
      fn(inMilliseconds / MILLISECONDS_IN_A_MINUTE) % MINUTES_IN_AN_HOUR;
    const second =
      fn(inMilliseconds / MILLISECONDS_IN_A_SECOND) % SECONDS_IN_A_MINUTE;
    const millisecond = fn(inMilliseconds) % MILLISECONDS_IN_A_SECOND;

    return Duration.fromObject({
      day,
      hour,
      minute,
      second,
      millisecond,
    });
  }

  static fromObject(object: DurationObjectLiteral): Duration {
    const day = object.day ? object.day : 0;
    const hour = object.hour ? object.hour : 0;
    const minute = object.minute ? object.minute : 0;
    const second = object.second ? object.second : 0;
    const millisecond = object.millisecond ? object.millisecond : 0;

    return new Duration(day, hour, minute, second, millisecond);
  }

  static fromString(str: string): Duration {
    const regexp = /^(-?)((\d+) days? )?(\d{2}):(\d{2}):(\d{2})(.(\d{3}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`duration string is invalid: ${str}`);
    }

    const sign = result[1] ? -1 : 1;
    const day = result[3] ? parseInt(result[3]) : 0;
    const hour = result[4] ? parseInt(result[4]) : 0;
    const minute = result[5] ? parseInt(result[5]) : 0;
    const second = result[6] ? parseInt(result[6]) : 0;
    const millisecond = result[8] ? parseInt(result[8]) : 0;

    return Duration.fromObject({
      day: sign * day,
      hour: sign * hour,
      minute: sign * minute,
      second: sign * second,
      millisecond: sign * millisecond,
    });
  }

  static fromISOString(str: string): Duration {
    const regexp =
      /^(-?)P(?=\d|T)((\d+)D)?(T(?=\d)((\d{1,2})H)?((\d{1,2})M)?((\d{1,2})(.(\d{1,3}))?S)?)?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`duration iso string is invalid: ${str}`);
    }

    const sign = result[1] ? -1 : 1;
    const day = result[3] ? parseInt(result[3]) : 0;
    const hour = result[6] ? parseInt(result[6]) : 0;
    const minute = result[8] ? parseInt(result[8]) : 0;
    const second = result[10] ? parseInt(result[10]) : 0;
    const millisecond = result[12] ? parseInt(result[12].padEnd(3, "0")) : 0;

    return Duration.fromObject({
      day: sign * day,
      hour: sign * hour,
      minute: sign * minute,
      second: sign * second,
      millisecond: sign * millisecond,
    });
  }

  static parse(str: string): Duration {
    try {
      return Duration.fromString(str);
    } catch {
      try {
        return Duration.fromISOString(str);
      } catch {
        throw new Error(`duration parse failed: ${str}`);
      }
    }
  }

  static compare(duration1: Duration, duration2: Duration): number {
    return duration1.inMilliseconds - duration2.inMilliseconds;
  }
}

export default Duration;
