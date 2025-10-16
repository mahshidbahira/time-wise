import MinuteObjectLiteral from "./MinuteObjectLiteral";

const MINIMUM_MINUTE: number = 0;
const MAXIMUM_MINUTE: number = 59;

class Minute {
  readonly value: number;

  constructor(value: number) {
    if (typeof value !== "number") {
      throw new Error(`minute value type must be number`);
    }

    if (Number.isNaN(value)) {
      throw new Error(`minute value must be number`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`minute value must be an integer`);
    }

    if (value < MINIMUM_MINUTE || value > MAXIMUM_MINUTE) {
      throw new Error(
        `minute value range must be between ${MINIMUM_MINUTE} and ${MAXIMUM_MINUTE}`
      );
    }

    this.value = value;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
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
    return this.value.toString().padStart(2, "0");
  }

  toObject(): MinuteObjectLiteral {
    return {
      value: this.value,
    };
  }

  equals(other: Minute): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: Minute): boolean {
    return this.value > other.value;
  }

  isLessThan(other: Minute): boolean {
    return this.value < other.value;
  }

  withValue(value: number): Minute {
    return Minute.fromObject({ value });
  }

  static fromObject(object: MinuteObjectLiteral): Minute {
    return new Minute(object.value);
  }

  static fromString(str: string): Minute {
    const regexp = /^\d{1,2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(
        `minute string format must be 1 digit or 2 consecutive digits`
      );
    }

    const value = parseInt(str, 10);

    return Minute.fromObject({ value });
  }

  static fromISOString(str: string): Minute {
    const regexp = /^\d{2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`minute iso string format must be 2 consecutive digits`);
    }

    const value = parseInt(str, 10);

    return Minute.fromObject({ value });
  }

  static parse(str: string): Minute {
    const parsers: Array<(s: string) => Minute> = [
      Minute.fromString,
      Minute.fromISOString,
    ];

    for (const parseFn of parsers) {
      try {
        return parseFn(str);
      } catch {} // eslint-disable-line no-empty
    }

    throw new Error(`minute parse failed`);
  }

  static compare(minute1: Minute, minute2: Minute): number {
    return minute1.value - minute2.value;
  }
}

export default Minute;
