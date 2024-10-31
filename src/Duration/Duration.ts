import { SECONDS, MINUTES, HOURS, DAYS, MILLISECONDS } from "../Units/Units";

class Duration {
  // ----------------------------------------------------------------
  // instance

  readonly milliseconds: number;

  get seconds(): number {
    return this.milliseconds / SECONDS;
  }

  get minutes(): number {
    return this.milliseconds / MINUTES;
  }

  get hours(): number {
    return this.milliseconds / HOURS;
  }

  get days(): number {
    return this.milliseconds / DAYS;
  }

  constructor(milliseconds: number) {
    this.milliseconds = milliseconds;
  }

  valueOf(): number {
    return this.milliseconds;
  }

  toString(): string {
    const absoluted = this.absolute();
    const milliseconds = Math.floor(absoluted.milliseconds) % 1000;
    const seconds = Math.floor(absoluted.seconds) % 60;
    const minutes = Math.floor(absoluted.minutes) % 60;
    const hours = Math.floor(absoluted.hours) % 24;
    const days = Math.floor(absoluted.days);

    const millisecondsStr =
      milliseconds !== 0 ? `.${milliseconds.toString().padStart(3, "0")}` : "";
    const secondsStr = seconds.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    const hoursStr = hours.toString().padStart(2, "0");
    const daysStr = days !== 0 ? `${days} ${days === 1 ? "day" : "days"} ` : "";

    const minusStr = this.milliseconds < 0 ? "-" : "";
    const str = `${minusStr}${daysStr}${hoursStr}:${minutesStr}:${secondsStr}${millisecondsStr}`;

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
    const absoluted = this.absolute();
    const milliseconds = Math.floor(absoluted.milliseconds) % 1000;
    const seconds = Math.floor(absoluted.seconds) % 60;
    const minutes = Math.floor(absoluted.minutes) % 60;
    const hours = Math.floor(absoluted.hours) % 24;
    const days = Math.floor(absoluted.days);

    const millisecondsStr =
      milliseconds !== 0 ? `${(milliseconds / 1000).toString().slice(1)}` : "";

    const secondsStr =
      seconds !== 0 || milliseconds !== 0
        ? `${seconds.toString()}${millisecondsStr}S`
        : "";

    const minutesStr = minutes !== 0 ? `${minutes}M` : "";
    const hoursStr = hours !== 0 ? `${hours}H` : "";
    const daysStr = days !== 0 ? `${days}D` : "";

    const minusStr = this.milliseconds < 0 ? "-" : "";
    const tStr = hoursStr || minutesStr || secondsStr ? `T` : "";
    const isoStr = `${minusStr}P${daysStr}${tStr}${hoursStr}${minutesStr}${secondsStr}`;

    return isoStr;
  }

  equals(other: Duration): boolean {
    return this.milliseconds === other.milliseconds;
  }

  isLongerThan(other: Duration): boolean {
    return this.milliseconds > other.milliseconds;
  }

  isShorterThan(other: Duration): boolean {
    return this.milliseconds < other.milliseconds;
  }

  add(other: Duration): Duration {
    return new Duration(this.milliseconds + other.milliseconds);
  }

  subtract(other: Duration): Duration {
    return new Duration(this.milliseconds - other.milliseconds);
  }

  multiply(factor: number): Duration {
    return new Duration(this.milliseconds * factor);
  }

  divide(divisor: number): Duration {
    return new Duration(this.milliseconds / divisor);
  }

  negate(): Duration {
    return new Duration(-this.milliseconds);
  }

  absolute(): Duration {
    return new Duration(Math.abs(this.milliseconds));
  }

  after(date: Date): Date {
    return new Date(date.getTime() + this.milliseconds);
  }

  before(date: Date): Date {
    return new Date(date.getTime() - this.milliseconds);
  }

  // ----------------------------------------------------------------
  // static

  static parse(str: string): Duration | null {
    const regexp = /^(-?)((\d+) days? )?(\d{2}):(\d{2}):(\d{2})(.(\d{3}))?$/;
    const result = regexp.exec(str);

    if (result) {
      const sign = result[1] ? -1 : 1;
      const milliseconds = result[8] ? parseInt(result[8]) : 0;
      const seconds = result[6] ? parseInt(result[6]) : 0;
      const minutes = result[5] ? parseInt(result[5]) : 0;
      const hours = result[4] ? parseInt(result[4]) : 0;
      const days = result[3] ? parseInt(result[3]) : 0;

      const totalMilliseconds =
        sign *
        (days * DAYS +
          hours * HOURS +
          minutes * MINUTES +
          seconds * SECONDS +
          milliseconds * MILLISECONDS);

      return new Duration(totalMilliseconds);
    }
    return null;
  }

  static compare(duration1: Duration, duration2: Duration): number {
    return duration1.milliseconds - duration2.milliseconds;
  }
}

export default Duration;
