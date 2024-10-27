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

  add(other: Duration): Duration {
    return new Duration(this.milliseconds + other.milliseconds);
  }
}

export default Duration;
