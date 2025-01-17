import Duration from "../Duration/Duration";
import OffsetObjectLiteral from "./OffsetObjectLiteral";

const MINUTES_IN_AN_HOUR = 60;

class Offset {
  readonly hours: number;
  readonly minutes: number;

  get inHours(): number {
    return this.inMinutes / MINUTES_IN_AN_HOUR;
  }

  get inMinutes(): number {
    return this.hours * MINUTES_IN_AN_HOUR + this.minutes;
  }

  constructor(hours: number, minutes: number) {
    if (hours > 23 || hours < -23) {
      throw new Error(`offset hours is invalid: ${hours}`);
    }

    if (minutes > 59 || minutes < -59) {
      throw new Error(`offset minutes is invalid: ${minutes}`);
    }

    this.hours = hours;
    this.minutes = minutes;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.toDuration().inMilliseconds;
  }

  toString(): string {
    const signStr = this.inMinutes < 0 ? "-" : "+";
    const absoluteOffset = this.absolute();
    const hoursStr = absoluteOffset.hours.toString().padStart(2, "0");
    const minutesStr = absoluteOffset.minutes.toString().padStart(2, "0");

    const str = `UTC${signStr}${hoursStr}:${minutesStr}`;

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
    const signStr = this.inMinutes < 0 ? "-" : "+";
    const absoluteOffset = this.absolute();
    const hoursStr = absoluteOffset.hours.toString().padStart(2, "0");
    const minutesStr = absoluteOffset.minutes.toString().padStart(2, "0");

    const isoStr = `${signStr}${hoursStr}:${minutesStr}`;

    return isoStr;
  }

  toObject(): OffsetObjectLiteral {
    const object: OffsetObjectLiteral = {
      hours: this.hours,
      minutes: this.minutes,
    };
    return object;
  }

  toDuration(): Duration {
    return Duration.fromObject({ hours: this.hours, minutes: this.minutes });
  }

  equals(other: Offset): boolean {
    return this.inMinutes === other.inMinutes;
  }

  isEasterThan(other: Offset): boolean {
    return this.inMinutes > other.inMinutes;
  }

  isWesterThan(other: Offset): boolean {
    return this.inMinutes < other.inMinutes;
  }

  withHours(hours: number): Offset {
    return Offset.fromObject({
      hours: hours,
      minutes: this.minutes,
    });
  }

  withMinutes(minutes: number): Offset {
    return Offset.fromObject({
      hours: this.hours,
      minutes: minutes,
    });
  }

  plus(other: Offset): Offset {
    return Offset.fromMinutes(this.inMinutes + other.inMinutes);
  }

  minus(other: Offset): Offset {
    return Offset.fromMinutes(this.inMinutes - other.inMinutes);
  }

  negate(): Offset {
    return Offset.fromMinutes(-this.inMinutes);
  }

  absolute(): Offset {
    return Offset.fromMinutes(Math.abs(this.inMinutes));
  }

  static UTC = Offset.fromObject({ hours: 0, minutes: 0 });

  static fromHours(inHours: number): Offset {
    return Offset.fromMinutes(inHours * MINUTES_IN_AN_HOUR);
  }

  static fromMinutes(inMinutes: number): Offset {
    const fn = inMinutes < 0 ? Math.ceil : Math.floor;

    const hours = fn(inMinutes / MINUTES_IN_AN_HOUR);
    const minutes = fn(inMinutes) % MINUTES_IN_AN_HOUR;

    return Offset.fromObject({ hours, minutes });
  }

  static fromObject(object: OffsetObjectLiteral): Offset {
    const { hours, minutes } = object;

    return new Offset(hours, minutes);
  }

  static fromString(str: string): Offset {
    const regexp = /^UTC(-|\+)(\d{2})(:(\d{2}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`offset string is invalid: ${str}`);
    }

    const sign = result[1] === "-" ? -1 : 1;
    const hours = result[2] ? parseInt(result[2]) : 0;
    const minutes = result[4] ? parseInt(result[4]) : 0;

    return Offset.fromObject({ hours: sign * hours, minutes: sign * minutes });
  }

  static fromISOString(str: string): Offset {
    const regexp = /^(-|\+)(\d{2})(:(\d{2}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`offset iso string is invalid: ${str}`);
    }

    const sign = result[1] === "-" ? -1 : 1;
    const hours = result[2] ? parseInt(result[2]) : 0;
    const minutes = result[4] ? parseInt(result[4]) : 0;

    return Offset.fromObject({ hours: sign * hours, minutes: sign * minutes });
  }

  static parse(str: string): Offset {
    try {
      return Offset.fromString(str);
    } catch {
      try {
        return Offset.fromISOString(str);
      } catch {
        try {
          return Offset.fromZoneName(str);
        } catch {
          throw new Error(`offset parse failed: ${str}`);
        }
      }
    }
  }

  static fromDuration(duration: Duration): Offset {
    return Offset.fromMinutes(duration.inMinutes);
  }

  static fromZoneName(zoneName: string): Offset {
    try {
      const jsDate = new Date();
      const jsUTCDate = new Date(
        jsDate.toLocaleString("en-US", { timeZone: "UTC" })
      );
      const jsTzDate = new Date(
        jsDate.toLocaleString("en-US", { timeZone: zoneName })
      );

      return Offset.fromDuration(
        Duration.of(jsTzDate.getTime() - jsUTCDate.getTime())
      );
    } catch {
      throw new Error(`offset zone name is invalid: ${zoneName}`);
    }
  }

  static local(): Offset {
    const offsetInMinutes = new Date().getTimezoneOffset();
    return Offset.fromMinutes(offsetInMinutes !== 0 ? -1 * offsetInMinutes : 0);
  }

  static compare(offset1: Offset, offset2: Offset): number {
    return offset1.inMinutes - offset2.inMinutes;
  }
}

export default Offset;
