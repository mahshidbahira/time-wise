import DateTime from "../DateTime/DateTime";
import DurationObjectLiteral from "./DurationObjectLiteral";

const MILLISECONDS_IN_A_SECOND: number = 1000;
const MILLISECONDS_IN_A_MINUTE: number = 60 * MILLISECONDS_IN_A_SECOND;
const MILLISECONDS_IN_AN_HOUR: number = 60 * MILLISECONDS_IN_A_MINUTE;
const MILLISECONDS_IN_A_DAY: number = 24 * MILLISECONDS_IN_AN_HOUR;

class Duration {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly milliseconds: number;

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
      this.days * MILLISECONDS_IN_A_DAY +
      this.hours * MILLISECONDS_IN_AN_HOUR +
      this.minutes * MILLISECONDS_IN_A_MINUTE +
      this.seconds * MILLISECONDS_IN_A_SECOND +
      this.milliseconds
    );
  }

  constructor(inMilliseconds: number) {
    const fn = inMilliseconds < 0 ? Math.ceil : Math.floor;

    this.days = fn(inMilliseconds / MILLISECONDS_IN_A_DAY);
    this.hours = fn(inMilliseconds / MILLISECONDS_IN_AN_HOUR) % 24;
    this.minutes = fn(inMilliseconds / MILLISECONDS_IN_A_MINUTE) % 60;
    this.seconds = fn(inMilliseconds / MILLISECONDS_IN_A_SECOND) % 60;
    this.milliseconds = fn(inMilliseconds) % 1000;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.inMilliseconds;
  }

  toString(): string {
    const absoluteDuration = this.absolute();

    const signStr = this.inMilliseconds < 0 ? "-" : "";
    const daysStr =
      (absoluteDuration.days > 1 && `${absoluteDuration.days} days `) ||
      (absoluteDuration.days === 1 && `${absoluteDuration.days} day `) ||
      "";
    const hoursStr = absoluteDuration.hours.toString().padStart(2, "0");
    const minutesStr = absoluteDuration.minutes.toString().padStart(2, "0");
    const secondsStr = absoluteDuration.seconds.toString().padStart(2, "0");
    const millisecondsStr =
      absoluteDuration.milliseconds !== 0
        ? `.${absoluteDuration.milliseconds.toString().padStart(3, "0")}`
        : "";

    const str = `${signStr}${daysStr}${hoursStr}:${minutesStr}:${secondsStr}${millisecondsStr}`;

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
    const absoluteDuration = this.absolute();

    const signStr = this.inMilliseconds < 0 ? "-" : "";
    const daysStr =
      absoluteDuration.days !== 0 ? `${absoluteDuration.days}D` : "";
    const hoursStr =
      absoluteDuration.hours !== 0 ? `${absoluteDuration.hours}H` : "";
    const minutesStr =
      absoluteDuration.minutes !== 0 ? `${absoluteDuration.minutes}M` : "";
    const millisecondsStr =
      absoluteDuration.milliseconds !== 0
        ? `${(absoluteDuration.milliseconds / 1000).toString().slice(1)}`
        : "";
    const secondsStr =
      absoluteDuration.seconds !== 0 || absoluteDuration.milliseconds !== 0
        ? `${absoluteDuration.seconds.toString()}${millisecondsStr}S`
        : "";

    const tStr = hoursStr || minutesStr || secondsStr ? `T` : "";
    const isoStr = `${signStr}P${daysStr}${tStr}${hoursStr}${minutesStr}${secondsStr}`;

    return isoStr;
  }

  toObject(): DurationObjectLiteral {
    const object: DurationObjectLiteral = {};

    if (this.days) {
      object.days = this.days;
    }
    if (this.hours) {
      object.hours = this.hours;
    }
    if (this.minutes) {
      object.minutes = this.minutes;
    }
    if (this.seconds) {
      object.seconds = this.seconds;
    }
    if (this.milliseconds) {
      object.milliseconds = this.milliseconds;
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

  withDays(days: number): Duration {
    return Duration.fromObject({
      days: days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
      milliseconds: this.milliseconds,
    });
  }

  withHours(hours: number): Duration {
    return Duration.fromObject({
      days: this.days,
      hours: hours,
      minutes: this.minutes,
      seconds: this.seconds,
      milliseconds: this.milliseconds,
    });
  }

  withMinutes(minutes: number): Duration {
    return Duration.fromObject({
      days: this.days,
      hours: this.hours,
      minutes: minutes,
      seconds: this.seconds,
      milliseconds: this.milliseconds,
    });
  }

  withSeconds(seconds: number): Duration {
    return Duration.fromObject({
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: seconds,
      milliseconds: this.milliseconds,
    });
  }

  withMilliseconds(milliseconds: number): Duration {
    return Duration.fromObject({
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
      milliseconds: milliseconds,
    });
  }

  plus(other: Duration): Duration {
    return Duration.of(this.inMilliseconds + other.inMilliseconds);
  }

  minus(other: Duration): Duration {
    return Duration.of(this.inMilliseconds - other.inMilliseconds);
  }

  multiplyBy(factor: number): Duration {
    return Duration.of(this.inMilliseconds * factor);
  }

  divideBy(divisor: number): Duration {
    return Duration.of(this.inMilliseconds / divisor);
  }

  negate(): Duration {
    return Duration.of(-this.inMilliseconds);
  }

  absolute(): Duration {
    return Duration.of(Math.abs(this.inMilliseconds));
  }

  after(datetime: DateTime): DateTime {
    return DateTime.of(datetime.millisecondsSinceEpoch + this.inMilliseconds);
  }

  before(datetime: DateTime): DateTime {
    return DateTime.of(datetime.millisecondsSinceEpoch - this.inMilliseconds);
  }

  static of(inMilliseconds: number): Duration {
    return new Duration(inMilliseconds);
  }

  static fromObject(object: DurationObjectLiteral): Duration {
    const days = object.days ? object.days : 0;
    const hours = object.hours ? object.hours : 0;
    const minutes = object.minutes ? object.minutes : 0;
    const seconds = object.seconds ? object.seconds : 0;
    const milliseconds = object.milliseconds ? object.milliseconds : 0;

    return Duration.of(
      days * MILLISECONDS_IN_A_DAY +
        hours * MILLISECONDS_IN_AN_HOUR +
        minutes * MILLISECONDS_IN_A_MINUTE +
        seconds * MILLISECONDS_IN_A_SECOND +
        milliseconds
    );
  }

  static fromString(str: string): Duration | null {
    const regexp = /^(-?)((\d+) days? )?(\d{2}):(\d{2}):(\d{2})(.(\d{3}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      return null;
    }

    const sign = result[1] ? -1 : 1;
    const days = result[3] ? parseInt(result[3]) : 0;
    const hours = result[4] ? parseInt(result[4]) : 0;
    const minutes = result[5] ? parseInt(result[5]) : 0;
    const seconds = result[6] ? parseInt(result[6]) : 0;
    const milliseconds = result[8] ? parseInt(result[8]) : 0;

    const totalMilliseconds =
      sign *
      (days * MILLISECONDS_IN_A_DAY +
        hours * MILLISECONDS_IN_AN_HOUR +
        minutes * MILLISECONDS_IN_A_MINUTE +
        seconds * MILLISECONDS_IN_A_SECOND +
        milliseconds);

    return Duration.of(totalMilliseconds);
  }

  static fromISOString(str: string): Duration | null {
    const regexp =
      /^(-?)P(?=\d|T)((\d+)D)?(T(?=\d)((\d{1,2})H)?((\d{1,2})M)?((\d{1,2})(.(\d{1,3}))?S)?)?$/;
    const result = regexp.exec(str);

    if (!result) {
      return null;
    }

    const sign = result[1] ? -1 : 1;
    const days = result[3] ? parseInt(result[3]) : 0;
    const hours = result[6] ? parseInt(result[6]) : 0;
    const minutes = result[8] ? parseInt(result[8]) : 0;
    const seconds = result[10] ? parseInt(result[10]) : 0;
    const milliseconds = result[12] ? parseInt(result[12].padEnd(3, "0")) : 0;

    const totalMilliseconds =
      sign *
      (days * MILLISECONDS_IN_A_DAY +
        hours * MILLISECONDS_IN_AN_HOUR +
        minutes * MILLISECONDS_IN_A_MINUTE +
        seconds * MILLISECONDS_IN_A_SECOND +
        milliseconds);

    return Duration.of(totalMilliseconds);
  }

  static parse(str: string): Duration | null {
    return Duration.fromString(str) || Duration.fromISOString(str);
  }

  static compare(duration1: Duration, duration2: Duration): number {
    return duration1.inMilliseconds - duration2.inMilliseconds;
  }
}

export default Duration;
