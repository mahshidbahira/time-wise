import { MINUTE } from "../Units/Units";
import OffsetObjectLiteral from "./OffsetObjectLiteral";

class Offset {
  readonly hours: number;
  readonly minutes: number;

  get inHours(): number {
    return this.inMinutes / 60;
  }

  get inMinutes(): number {
    return this.hours * 60 + this.minutes;
  }

  constructor(hours: number, minutes: number) {
    this.hours = hours;
    this.minutes = minutes;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.inMinutes * MINUTE;
  }

  toString(): string {
    const absoluteOffset = this.absolute();

    const signStr = this.inMinutes < 0 ? "-" : "+";

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
    const absoluteOffset = this.absolute();

    const signStr = this.inMinutes < 0 ? "-" : "+";

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
    return Offset.of(this.inMinutes + other.inMinutes);
  }

  minus(other: Offset): Offset {
    return Offset.of(this.inMinutes - other.inMinutes);
  }

  negate(): Offset {
    return Offset.of(-this.inMinutes);
  }

  absolute(): Offset {
    return Offset.of(Math.abs(this.inMinutes));
  }

  static of(inMinutes: number): Offset {
    const fn = inMinutes < 0 ? Math.ceil : Math.floor;

    const hours = fn(inMinutes / 60);
    const minutes = fn(inMinutes) % 60;

    return Offset.fromObject({ hours, minutes: minutes });
  }

  static fromObject(object: OffsetObjectLiteral): Offset {
    const { hours, minutes: minutes } = object;

    return new Offset(hours, minutes);
  }

  static fromString(str: string): Offset | null {
    const regexp = /^UTC(-|\+)(\d{2})(:(\d{2}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      return null;
    }

    const sign = result[1] === "-" ? -1 : 1;
    const hours = result[2] ? parseInt(result[2]) : 0;
    const minutes = result[4] ? parseInt(result[4]) : 0;

    const totalMinutes = sign * (hours * 60 + minutes);
    return Offset.of(totalMinutes);
  }

  static fromISOString(str: string): Offset | null {
    const regexp = /^(-|\+)(\d{2})(:(\d{2}))?$/;
    const result = regexp.exec(str);

    if (!result) {
      return null;
    }

    const sign = result[1] === "-" ? -1 : 1;
    const hours = result[2] ? parseInt(result[2]) : 0;
    const minutes = result[4] ? parseInt(result[4]) : 0;

    const totalMinutes = sign * (hours * 60 + minutes);
    return Offset.of(totalMinutes);
  }

  static parse(str: string): Offset | null {
    return Offset.fromString(str) || Offset.fromISOString(str);
  }

  static compare(offset1: Offset, offset2: Offset): number {
    return offset1.inMinutes - offset2.inMinutes;
  }
}

export default Offset;
