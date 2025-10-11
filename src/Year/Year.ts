import YearObjectLiteral from "./YearObjectLiteral";

const MINIMUM_YEAR: number = 1969;

class Year {
  readonly value: number;

  constructor(value: number) {
    if (typeof value !== "number") {
      throw new Error(`year value type must be number`);
    }

    if (Number.isNaN(value)) {
      throw new Error(`year value must be number`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`year value must be an integer`);
    }

    if (value < MINIMUM_YEAR) {
      throw new Error(`year value range must be more than ${MINIMUM_YEAR}`);
    }

    this.value = value;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString().padStart(4, "0");
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
    return this.toString();
  }

  toObject(): YearObjectLiteral {
    return {
      value: this.value,
    };
  }

  equals(other: Year): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: Year): boolean {
    return this.value > other.value;
  }

  isLessThan(other: Year): boolean {
    return this.value < other.value;
  }

  withValue(value: number): Year {
    return Year.fromObject({ value });
  }

  static fromObject(object: YearObjectLiteral): Year {
    return new Year(object.value);
  }

  static fromString(str: string): Year {
    const regexp = /^\d{4}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`year string format must be 4 consecutive digits`);
    }

    const value = parseInt(str, 10);

    return Year.fromObject({ value });
  }

  static fromISOString(str: string): Year {
    return Year.fromString(str);
  }

  static parse(str: string): Year {
    const parsers: Array<(s: string) => Year> = [
      Year.fromString,
      Year.fromISOString,
    ];

    for (const parseFn of parsers) {
      try {
        return parseFn(str);
      } catch {}
    }

    throw new Error(`year parse failed`);
  }

  static compare(year1: Year, year2: Year): number {
    return year1.value - year2.value;
  }
}

export default Year;
