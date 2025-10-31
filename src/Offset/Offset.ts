import Duration from "../Duration/Duration";
import Hour from "../Hour/Hour";
import Minute from "../Minute/Minute";
import OffsetObjectLiteral from "./OffsetObjectLiteral";

const MINUTES_IN_AN_HOUR = 60;

class Offset {
  readonly isPositive: boolean;
  readonly hour: number;
  readonly minute: number;

  get inHours(): number {
    return this.inMinutes / MINUTES_IN_AN_HOUR;
  }

  get inMinutes(): number {
    const sign = this.isPositive ? 1 : -1;
    const hourInMinutes = this.hour * MINUTES_IN_AN_HOUR;
    return sign * (hourInMinutes + this.minute);
  }

  constructor(isPositive: boolean, hour: number, minute: number) {
    this.isPositive = isPositive;
    this.hour = new Hour(hour).value;
    this.minute = new Minute(minute).value;
    Object.freeze(this);
  }

  valueOf(): number {
    return this.toDuration().inMilliseconds;
  }

  toString(): string {
    if (this.inMinutes === 0) {
      return "UTC";
    }

    const signStr = this.isPositive ? "+" : "-";
    const hourStr = this.hour.toString().padStart(2, "0");
    const minuteStr = this.minute.toString().padStart(2, "0");
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
    if (this.inMinutes === 0) {
      return "Z";
    }

    const signStr = this.isPositive ? "+" : "-";
    const hourStr = this.hour.toString().padStart(2, "0");
    const minuteStr = this.minute.toString().padStart(2, "0");
    const isoStr = `${signStr}${hourStr}:${minuteStr}`;
    return isoStr;
  }

  toObject(): OffsetObjectLiteral {
    const object: OffsetObjectLiteral = {};
    if (!this.isPositive) {
      object.isPositive = false;
    }
    if (this.hour) {
      object.hour = this.hour;
    }
    if (this.minute) {
      object.minute = this.minute;
    }
    return object;
  }

  toDuration(): Duration {
    return Duration.fromObject({
      isPositive: this.isPositive,
      hour: this.hour,
      minute: this.minute,
    });
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

  withIsPositive(isPositive: boolean): Offset {
    return Offset.fromObject({
      isPositive: isPositive,
      hour: this.hour,
      minute: this.minute,
    });
  }

  withHour(hour: number): Offset {
    return Offset.fromObject({
      isPositive: this.isPositive,
      hour: hour,
      minute: this.minute,
    });
  }

  withMinute(minute: number): Offset {
    return Offset.fromObject({
      isPositive: this.isPositive,
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

  static UTC = Offset.fromObject({ isPositive: true, hour: 0, minute: 0 });

  static fromHours(inHours: number): Offset {
    return Offset.fromMinutes(inHours * MINUTES_IN_AN_HOUR);
  }

  static fromMinutes(inMinutes: number): Offset {
    const absInMinutes = Math.abs(inMinutes);
    const isPositive = inMinutes >= 0;
    const hour = Math.floor(absInMinutes / MINUTES_IN_AN_HOUR);
    const minute = Math.floor(absInMinutes) % MINUTES_IN_AN_HOUR;

    return Offset.fromObject({ isPositive, hour, minute });
  }

  static fromObject(object: OffsetObjectLiteral): Offset {
    const isPositive = object.isPositive ?? true;
    const hour = object.hour ? object.hour : 0;
    const minute = object.minute ? object.minute : 0;

    return new Offset(isPositive, hour, minute);
  }

  static fromString(str: string): Offset {
    const regexp = /^UTC(([+-])(\d{2})(:(\d{2}))?)?$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`offset string is invalid: ${str}`);
    }

    const isPositive = result[2] === "-" ? false : true;
    const hour = result[3] ? parseInt(result[3]) : 0;
    const minute = result[5] ? parseInt(result[5]) : 0;

    return Offset.fromObject({
      isPositive: isPositive,
      hour: hour,
      minute: minute,
    });
  }

  static fromISOString(str: string): Offset {
    const regexp = /^(Z)|(([+-])(\d{2})(:(\d{2}))?)$/;
    const result = regexp.exec(str);

    if (!result) {
      throw new Error(`offset iso string is invalid: ${str}`);
    }

    if (result[1] === "Z") {
      return Offset.UTC;
    }

    const isPositive = result[3] === "-" ? false : true;
    const hour = result[4] ? parseInt(result[4]) : 0;
    const minute = result[6] ? parseInt(result[6]) : 0;

    return Offset.fromObject({
      isPositive: isPositive,
      hour: hour,
      minute: minute,
    });
  }

  static parse(str: string): Offset {
    const parsers: Array<(s: string) => Offset> = [
      Offset.fromString,
      Offset.fromISOString,
      Offset.fromZoneName,
    ];

    for (const parse of parsers) {
      try {
        return parse(str);
      } catch {} // eslint-disable-line no-empty
    }

    throw new Error(`offset parse failed`);
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
