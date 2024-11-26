import { DAY, HOUR, MILLISECOND, MINUTE, SECOND } from "../Units/Units";

interface ObjectDetails {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

class Duration {
  // ----------------------------------------------------------------
  // instance

  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly milliseconds: number;

  get inDays(): number {
    return this.inMilliseconds / DAY;
  }

  get inHours(): number {
    return this.inMilliseconds / HOUR;
  }

  get inMinutes(): number {
    return this.inMilliseconds / MINUTE;
  }

  get inSeconds(): number {
    return this.inMilliseconds / SECOND;
  }

  get inMilliseconds(): number {
    return (
      this.days * DAY +
      this.hours * HOUR +
      this.minutes * MINUTE +
      this.seconds * SECOND +
      this.milliseconds * MILLISECOND
    );
  }

  constructor(inMilliseconds: number) {
    const fn = inMilliseconds < 0 ? Math.ceil : Math.floor;

    this.days = fn(inMilliseconds / DAY);
    this.hours = fn(inMilliseconds / HOUR) % 24;
    this.minutes = fn(inMilliseconds / MINUTE) % 60;
    this.seconds = fn(inMilliseconds / SECOND) % 60;
    this.milliseconds = fn(inMilliseconds / MILLISECOND) % 1000;

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

  toObject(): ObjectDetails {
    const object: ObjectDetails = {};

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
    return new Duration(
      days * DAY +
        this.hours * HOUR +
        this.minutes * MINUTE +
        this.seconds * SECOND +
        this.milliseconds * MILLISECOND
    );
  }

  withHours(hours: number): Duration {
    return new Duration(
      this.days * DAY +
        hours * HOUR +
        this.minutes * MINUTE +
        this.seconds * SECOND +
        this.milliseconds * MILLISECOND
    );
  }

  withMinutes(minutes: number): Duration {
    return new Duration(
      this.days * DAY +
        this.hours * HOUR +
        minutes * MINUTE +
        this.seconds * SECOND +
        this.milliseconds * MILLISECOND
    );
  }

  withSeconds(seconds: number): Duration {
    return new Duration(
      this.days * DAY +
        this.hours * HOUR +
        this.minutes * MINUTE +
        seconds * SECOND +
        this.milliseconds * MILLISECOND
    );
  }

  withMilliseconds(milliseconds: number): Duration {
    return new Duration(
      this.days * DAY +
        this.hours * HOUR +
        this.minutes * MINUTE +
        this.seconds * SECOND +
        milliseconds * MILLISECOND
    );
  }

  plus(other: Duration): Duration {
    return new Duration(this.inMilliseconds + other.inMilliseconds);
  }

  minus(other: Duration): Duration {
    return new Duration(this.inMilliseconds - other.inMilliseconds);
  }

  multiplyBy(factor: number): Duration {
    return new Duration(this.inMilliseconds * factor);
  }

  divideBy(divisor: number): Duration {
    return new Duration(this.inMilliseconds / divisor);
  }

  negate(): Duration {
    return new Duration(-this.inMilliseconds);
  }

  absolute(): Duration {
    return new Duration(Math.abs(this.inMilliseconds));
  }

  after(date: Date): Date {
    return new Date(date.getTime() + this.inMilliseconds);
  }

  before(date: Date): Date {
    return new Date(date.getTime() - this.inMilliseconds);
  }

  // ----------------------------------------------------------------
  // static

  static of(inMilliseconds: number): Duration {
    return new Duration(inMilliseconds);
  }

  static fromObject(object: ObjectDetails): Duration {
    const days = object.days ? object.days : 0;
    const hours = object.hours ? object.hours : 0;
    const minutes = object.minutes ? object.minutes : 0;
    const seconds = object.seconds ? object.seconds : 0;
    const milliseconds = object.milliseconds ? object.milliseconds : 0;

    return new Duration(
      days * DAY +
        hours * HOUR +
        minutes * MINUTE +
        seconds * SECOND +
        milliseconds * MILLISECOND
    );
  }

  static fromString(str: string): Duration | null {
    const regexp = /^(-?)((\d+) days? )?(\d{2}):(\d{2}):(\d{2})(.(\d{3}))?$/;
    const result = regexp.exec(str);

    if (result) {
      const sign = result[1] ? -1 : 1;
      const days = result[3] ? parseInt(result[3]) : 0;
      const hours = result[4] ? parseInt(result[4]) : 0;
      const minutes = result[5] ? parseInt(result[5]) : 0;
      const seconds = result[6] ? parseInt(result[6]) : 0;
      const milliseconds = result[8] ? parseInt(result[8]) : 0;

      const totalMilliseconds =
        sign *
        (days * DAY +
          hours * HOUR +
          minutes * MINUTE +
          seconds * SECOND +
          milliseconds * MILLISECOND);

      return new Duration(totalMilliseconds);
    }

    return null;
  }

  static fromISOString(str: string): Duration | null {
    const regexp =
      /^(-?)P(?=\d|T)((\d+)D)?(T(?=\d)((\d{1,2})H)?((\d{1,2})M)?((\d{1,2})(.(\d{1,3}))?S)?)?$/;
    const result = regexp.exec(str);

    if (result) {
      const sign = result[1] ? -1 : 1;
      const days = result[3] ? parseInt(result[3]) : 0;
      const hours = result[6] ? parseInt(result[6]) : 0;
      const minutes = result[8] ? parseInt(result[8]) : 0;
      const seconds = result[10] ? parseInt(result[10]) : 0;
      const milliseconds = result[12] ? parseInt(result[12].padEnd(3, "0")) : 0;

      const totalMilliseconds =
        sign *
        (days * DAY +
          hours * HOUR +
          minutes * MINUTE +
          seconds * SECOND +
          milliseconds * MILLISECOND);

      return new Duration(totalMilliseconds);
    }

    return null;
  }

  static parse(str: string): Duration | null {
    return Duration.fromString(str) || Duration.fromISOString(str);
  }

  static between(since: Date, until: Date): Duration {
    return new Duration(until.getTime() - since.getTime());
  }

  static since(date: Date): Duration {
    const now = new Date();
    return new Duration(now.getTime() - date.getTime());
  }

  static until(date: Date): Duration {
    const now = new Date();
    return new Duration(date.getTime() - now.getTime());
  }

  static compare(duration1: Duration, duration2: Duration): number {
    return duration1.inMilliseconds - duration2.inMilliseconds;
  }
}

export default Duration;
