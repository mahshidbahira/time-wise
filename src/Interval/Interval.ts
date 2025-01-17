import DateTime from "../DateTime/DateTime";
import Duration from "../Duration/Duration";
import IntervalObjectLiteral from "./IntervalObjectLiteral";

class Interval {
  readonly start: DateTime;
  readonly end: DateTime;

  get duration(): Duration {
    return Duration.fromMilliseconds(
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

    return `${startStr} / ${endStr}`;
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

  toObject(): IntervalObjectLiteral {
    const start = this.start.toObject();
    const end = this.end.toObject();
    return { start, end };
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

  static fromObject(object: IntervalObjectLiteral): Interval {
    const start = DateTime.fromObject(object.start);
    const end = DateTime.fromObject(object.end);
    return Interval.between(start, end);
  }

  static fromString(str: string): Interval | null {
    const regexp = /^(.+) \/ (.+)$/;
    const result = regexp.exec(str);

    if (!result) {
      return null;
    }

    const start = DateTime.parse(result[1]);
    const end = DateTime.parse(result[2]);

    if (!start || !end) {
      return null;
    }

    return Interval.between(start, end);
  }

  static fromISOString(str: string): Interval | null {
    const regexp = /^(.+)\/(.+)$/;
    const result = regexp.exec(str);

    if (!result) {
      return null;
    }

    const start = DateTime.parse(result[1]);
    const end = DateTime.parse(result[2]);

    if (!start || !end) {
      return null;
    }

    return Interval.between(start, end);
  }

  static parse(str: string): Interval | null {
    return Interval.fromString(str) || Interval.fromISOString(str);
  }

  static compare(interval1: Interval, interval2: Interval): number {
    return (
      interval1.duration.inMilliseconds - interval2.duration.inMilliseconds
    );
  }
}

export default Interval;
