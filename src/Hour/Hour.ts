import HourObjectLiteral from "./HourObjectLiteral";

const MINIMUM_HOUR: number = 0;
const MAXIMUM_HOUR: number = 23;

class Hour {
  readonly value: number;

  constructor(value: number) {
    if (typeof value !== "number") {
      throw new Error(`hour value type must be number`);
    }

    if (Number.isNaN(value)) {
      throw new Error(`hour value must be number`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`hour value must be an integer`);
    }

    if (value < MINIMUM_HOUR || value > MAXIMUM_HOUR) {
      throw new Error(
        `hour value range must be between ${MINIMUM_HOUR} and ${MAXIMUM_HOUR}`
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

  toObject(): HourObjectLiteral {
    return {
      value: this.value,
    };
  }

  equals(other: Hour): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: Hour): boolean {
    return this.value > other.value;
  }

  isLessThan(other: Hour): boolean {
    return this.value < other.value;
  }

  withValue(value: number): Hour {
    return Hour.fromObject({ value });
  }

  static fromObject(object: HourObjectLiteral): Hour {
    return new Hour(object.value);
  }

  static fromString(str: string): Hour {
    const regexp = /^\d{1,2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`hour string format must be 1 or 2 digits`);
    }

    const value = parseInt(str, 10);

    return Hour.fromObject({ value });
  }

  static fromISOString(str: string): Hour {
    const regexp = /^\d{2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`hour iso string format must be 2 digits`);
    }

    const value = parseInt(str, 10);

    return Hour.fromObject({ value });
  }

  static parse(str: string): Hour {
    const parsers: Array<(s: string) => Hour> = [
      Hour.fromString,
      Hour.fromISOString,
    ];

    for (const parseFn of parsers) {
      try {
        return parseFn(str);
      } catch {} // eslint-disable-line no-empty
    }

    throw new Error(`hour parse failed`);
  }

  static compare(hour1: Hour, hour2: Hour): number {
    return hour1.value - hour2.value;
  }
}

export default Hour;
