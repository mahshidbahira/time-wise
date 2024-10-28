import { SECONDS, MINUTES, HOURS, DAYS } from "../Units/Units";

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

  toISOString(): string {
    const milliseconds = Math.floor(this.milliseconds) % 1000;
    const seconds = Math.floor(this.seconds) % 60;
    const minutes = Math.floor(this.minutes) % 60;
    const hours = Math.floor(this.hours) % 24;
    const days = Math.floor(this.days);

    let isoStr = "P";
    if (days) isoStr += `${days}D`;
    if (hours || minutes || seconds || milliseconds) isoStr += "T";
    if (hours) isoStr += `${hours}H`;
    if (minutes) isoStr += `${minutes}M`;
    if (seconds || milliseconds)
      isoStr += `${seconds.toString().padStart(1, "0")}`;
    if (milliseconds) isoStr += `.${milliseconds.toString().padStart(3, "0")}`;
    if (seconds || milliseconds) isoStr += "S";

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

  // ----------------------------------------------------------------
  // static

  static compare(duration1: Duration, duration2: Duration): number {
    return duration1.milliseconds - duration2.milliseconds;
  }
}

export default Duration;
