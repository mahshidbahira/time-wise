import DateTime from "../DateTime/DateTime";
import Duration from "../Duration/Duration";

interface ObjectDetails {
  start: DateTime;
  end: DateTime;
}

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

  valueOf(): number {
    return this.duration.inMilliseconds;
  }

  toString(): string {
    const startStr = this.start.toString();
    const endStr = this.end.toString();

    return `from ${startStr} to ${endStr}`;
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
    const startISOStr = this.start.toISOString();
    const endISOStr = this.end.toISOString();

    return `${startISOStr}/${endISOStr}`;
  }

  toObject(): ObjectDetails {
    return { start: this.start, end: this.end };
  }

  equals(other: TimeInterval): boolean {
    return this.duration.inMilliseconds === other.duration.inMilliseconds;
  }

  isLongerThan(other: TimeInterval): boolean {
    return this.duration.inMilliseconds > other.duration.inMilliseconds;
  }

  isShorterThan(other: TimeInterval): boolean {
    return this.duration.inMilliseconds < other.duration.inMilliseconds;
  }

  withStart(start: DateTime): TimeInterval {
    return new TimeInterval(start, this.end);
  }

  withEnd(end: DateTime): TimeInterval {
    return new TimeInterval(this.start, end);
  }

  static between(start: DateTime, end: DateTime): TimeInterval {
    return new TimeInterval(start, end);
  }

  static since(datetime: DateTime): TimeInterval {
    const now = DateTime.now();
    return TimeInterval.between(datetime, now);
  }

  static until(datetime: DateTime): TimeInterval {
    const now = DateTime.now();
    return TimeInterval.between(now, datetime);
  }
}

export default TimeInterval;
