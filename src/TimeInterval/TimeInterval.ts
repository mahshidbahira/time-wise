import DateTime from "../DateTime/DateTime";
import { Duration } from "../main";

class TimeInterval {
  readonly start: DateTime;
  readonly end: DateTime;

  get duration(): Duration {
    return Duration.between(this.start, this.end);
  }

  constructor(start: DateTime, end: DateTime) {
    this.start = start;
    this.end = end;

    Object.freeze(this);
  }
}

export default TimeInterval;
