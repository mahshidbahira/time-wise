import MillisecondObjectLiteral from "./MillisecondObjectLiteral";

const MINIMUM_MILLISECOND: number = 0;
const MAXIMUM_MILLISECOND: number = 999;

class Millisecond {
  readonly value: number;

  constructor(value: number) {
    if (typeof value !== "number") {
      throw new Error(`millisecond value type must be number`);
    }

    if (Number.isNaN(value)) {
      throw new Error(`millisecond value must be number`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`millisecond value must be an integer`);
    }

    if (value < MINIMUM_MILLISECOND || value > MAXIMUM_MILLISECOND) {
      throw new Error(
        `millisecond value range must be between ${MINIMUM_MILLISECOND} and ${MAXIMUM_MILLISECOND}`
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
    return this.value.toString().padStart(3, "0");
  }

  toObject(): MillisecondObjectLiteral {
    return {
      value: this.value,
    };
  }

  equals(other: Millisecond): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: Millisecond): boolean {
    return this.value > other.value;
  }

  isLessThan(other: Millisecond): boolean {
    return this.value < other.value;
  }

  withValue(value: number): Millisecond {
    return Millisecond.fromObject({ value });
  }

  static fromObject(object: MillisecondObjectLiteral): Millisecond {
    return new Millisecond(object.value);
  }

  static fromString(str: string): Millisecond {
    const regexp = /^\d{1,3}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`millisecond string format must be 1 to 3 digits`);
    }

    const value = parseInt(str, 10);

    return Millisecond.fromObject({ value });
  }

  static fromISOString(str: string): Millisecond {
    const regexp = /^\d{3}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`millisecond iso string format must be 3 digits`);
    }

    const value = parseInt(str, 10);

    return Millisecond.fromObject({ value });
  }

  static parse(str: string): Millisecond {
    const parsers: Array<(s: string) => Millisecond> = [
      Millisecond.fromString,
      Millisecond.fromISOString,
    ];

    for (const parseFn of parsers) {
      try {
        return parseFn(str);
      } catch {} // eslint-disable-line no-empty
    }

    throw new Error(`millisecond parse failed`);
  }

  static compare(millisecond1: Millisecond, millisecond2: Millisecond): number {
    return millisecond1.value - millisecond2.value;
  }
}

export default Millisecond;
