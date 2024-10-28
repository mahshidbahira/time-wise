import { SECONDS, MINUTES, HOURS, DAYS } from "../Units/Units";

class Duration {
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

  compare(other: Duration): number {
    return this.milliseconds - other.milliseconds;
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
}

export default Duration;
