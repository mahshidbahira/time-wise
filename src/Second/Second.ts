import SecondObjectLiteral from "./SecondObjectLiteral";

const MINIMUM_SECOND: number = 0;
const MAXIMUM_SECOND: number = 59;

class Second {
  readonly value: number;

  constructor(value: number) {
    if (typeof value !== "number") {
      throw new Error(`second value type must be number`);
    }

    if (Number.isNaN(value)) {
      throw new Error(`second value must be number`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`second value must be an integer`);
    }

    if (value < MINIMUM_SECOND || value > MAXIMUM_SECOND) {
      throw new Error(
        `second value range must be between ${MINIMUM_SECOND} and ${MAXIMUM_SECOND}`
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

  toObject(): SecondObjectLiteral {
    return {
      value: this.value,
    };
  }

  equals(other: Second): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: Second): boolean {
    return this.value > other.value;
  }

  isLessThan(other: Second): boolean {
    return this.value < other.value;
  }

  withValue(value: number): Second {
    return Second.fromObject({ value });
  }

  static fromObject(object: SecondObjectLiteral): Second {
    return new Second(object.value);
  }

  static fromString(str: string): Second {
    const regexp = /^\d{1,2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`second string format must be 1 or 2 digits`);
    }

    const value = parseInt(str, 10);

    return Second.fromObject({ value });
  }

  static fromISOString(str: string): Second {
    const regexp = /^\d{2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`second iso string format must be 2 digits`);
    }

    const value = parseInt(str, 10);

    return Second.fromObject({ value });
  }

  static parse(str: string): Second {
    const parsers: Array<(s: string) => Second> = [
      Second.fromString,
      Second.fromISOString,
    ];

    for (const parseFn of parsers) {
      try {
        return parseFn(str);
      } catch {} // eslint-disable-line no-empty
    }

    throw new Error(`second parse failed`);
  }

  static compare(second1: Second, second2: Second): number {
    return second1.value - second2.value;
  }
}

export default Second;
