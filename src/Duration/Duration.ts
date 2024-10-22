import { SECONDS, MINUTES, HOURS, DAYS } from "../Units/Units";

class Duration {
  private _milliseconds: number;

  get milliseconds(): number {
    return this._milliseconds;
  }

  get seconds(): number {
    return this._milliseconds / SECONDS;
  }

  get minutes(): number {
    return this._milliseconds / MINUTES;
  }

  get hours(): number {
    return this._milliseconds / HOURS;
  }

  get days(): number {
    return this._milliseconds / DAYS;
  }

  constructor(milliseconds: number) {
    this._milliseconds = milliseconds;
  }
}

export default Duration;
