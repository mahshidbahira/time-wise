import DateTime from "../DateTime/DateTime";
import Duration from "../Duration/Duration";

interface ObjectDetails {
  start: DateTime;
  end: DateTime;
}

class Interval {
  readonly start: DateTime;
  readonly end: DateTime;

  get duration(): Duration {
    return Duration.of(
      this.end.millisecondsSinceEpoch - this.start.millisecondsSinceEpoch
    );
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

  equals(other: Interval): boolean {
    return this.duration.inMilliseconds === other.duration.inMilliseconds;
  }

  isLongerThan(other: Interval): boolean {
    return this.duration.inMilliseconds > other.duration.inMilliseconds;
  }

  isShorterThan(other: Interval): boolean {
    return this.duration.inMilliseconds < other.duration.inMilliseconds;
  }

  withStart(start: DateTime): Interval {
    return Interval.between(start, this.end);
  }

  withEnd(end: DateTime): Interval {
    return Interval.between(this.start, end);
  }

  static between(start: DateTime, end: DateTime): Interval {
    return new Interval(start, end);
  }

  static since(datetime: DateTime): Interval {
    const now = DateTime.now();
    return Interval.between(datetime, now);
  }

  static until(datetime: DateTime): Interval {
    const now = DateTime.now();
    return Interval.between(now, datetime);
  }
}

export default Interval;
