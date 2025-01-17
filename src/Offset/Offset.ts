import Duration from "../Duration/Duration";
import OffsetObjectLiteral from "./OffsetObjectLiteral";

const MINUTES_IN_AN_HOUR = 60;

class Offset {
  readonly hour: number;
  readonly minute: number;

  get inHours(): number {
    return this.inMinutes / MINUTES_IN_AN_HOUR;
  }

  get inMinutes(): number {
    return this.hour * MINUTES_IN_AN_HOUR + this.minute;
  }

  constructor(hour: number, minute: number) {
    if (hour > 23 || hour < -23) {
      throw new Error(`offset hour is invalid: ${hour}`);
    }
    if (minute > 59 || minute < -59) {
      throw new Error(`offset minute is invalid: ${minute}`);
    }

    if (Object.is(hour, -0)) {
      hour = 0;
    }
    if (Object.is(minute, -0)) {
      minute = 0;
    }

    this.hour = hour;
    this.minute = minute;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.toDuration().inMilliseconds;
  }

  toString(): string {
    const signStr = this.inMinutes < 0 ? "-" : "+";
    const absoluteOffset = this.absolute();
    const hourStr = absoluteOffset.hour.toString().padStart(2, "0");
    const minuteStr = absoluteOffset.minute.toString().padStart(2, "0");

    const str = `UTC${signStr}${hourStr}:${minuteStr}`;

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
    const hourStr = absoluteOffset.hour.toString().padStart(2, "0");
    const minuteStr = absoluteOffset.minute.toString().padStart(2, "0");

    const isoStr = `${signStr}${hourStr}:${minuteStr}`;

    return isoStr;
  }

  toObject(): OffsetObjectLiteral {
    const object: OffsetObjectLiteral = {};

    if (this.hour) {
      object.hour = this.hour;
    }
    if (this.minute) {
      object.minute = this.minute;
    }

    return object;
  }

  toDuration(): Duration {
    return Duration.fromObject({ hour: this.hour, minute: this.minute });
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

  withHour(hour: number): Offset {
    return Offset.fromObject({
      hour: hour,
      minute: this.minute,
    });
  }

  withMinute(minute: number): Offset {
    return Offset.fromObject({
      hour: this.hour,
      minute: minute,
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

  static UTC = Offset.fromObject({ hour: 0, minute: 0 });

  static fromHours(inHours: number): Offset {
    return Offset.fromMinutes(inHours * MINUTES_IN_AN_HOUR);
  }

  static fromMinutes(inMinutes: number): Offset {
    const fn = inMinutes < 0 ? Math.ceil : Math.floor;

    const hour = fn(inMinutes / MINUTES_IN_AN_HOUR);
    const minute = fn(inMinutes) % MINUTES_IN_AN_HOUR;

    return Offset.fromObject({ hour, minute });
  }

  static fromObject(object: OffsetObjectLiteral): Offset {
    const hour = object.hour ? object.hour : 0;
    const minute = object.minute ? object.minute : 0;

    return new Offset(hour, minute);
  }

  static fromString(str: string): Offset {
    const regexp = /^UTC(-|\+)(\d{2})(:(\d{2}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`offset string is invalid: ${str}`);
    }

    const sign = result[1] === "-" ? -1 : 1;
    const hour = result[2] ? parseInt(result[2]) : 0;
    const minute = result[4] ? parseInt(result[4]) : 0;

    return Offset.fromObject({ hour: sign * hour, minute: sign * minute });
  }

  static fromISOString(str: string): Offset {
    const regexp = /^(-|\+)(\d{2})(:(\d{2}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`offset iso string is invalid: ${str}`);
    }

    const sign = result[1] === "-" ? -1 : 1;
    const hour = result[2] ? parseInt(result[2]) : 0;
    const minute = result[4] ? parseInt(result[4]) : 0;

    return Offset.fromObject({ hour: sign * hour, minute: sign * minute });
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
      const now = new Date();
      const nowStringInUTC = now.toLocaleString("en-US", {
        timeZone: "UTC",
      });
      const nowStringInTz = now.toLocaleString("en-US", {
        timeZone: zoneName,
      });

      const utcDate = new Date(nowStringInUTC);
      const tzDate = new Date(nowStringInTz);

      const diffInMilliseconds = tzDate.getTime() - utcDate.getTime();
      const diff = Duration.fromMilliseconds(diffInMilliseconds);

      return Offset.fromDuration(diff);
    } catch {
      throw new Error(`offset zone name is invalid: ${zoneName}`);
    }
  }

  static local(): Offset {
    const offsetInMinutes = new Date().getTimezoneOffset();
    return Offset.fromMinutes(-1 * offsetInMinutes);
  }

  static compare(offset1: Offset, offset2: Offset): number {
    return offset1.inMinutes - offset2.inMinutes;
  }
}

export default Offset;
