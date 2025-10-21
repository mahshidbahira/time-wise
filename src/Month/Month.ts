import MonthObjectLiteral from "./MonthObjectLiteral";

const MINIMUM_MONTH: number = 1;
const MAXIMUM_MONTH: number = 12;

class Month {
  readonly value: number;

  constructor(value: number) {
    if (typeof value !== "number") {
      throw new Error(`month value type must be number`);
    }

    if (Number.isNaN(value)) {
      throw new Error(`month value must be number`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`month value must be an integer`);
    }

    if (value < MINIMUM_MONTH || value > MAXIMUM_MONTH) {
      throw new Error(
        `month value range must be between ${MINIMUM_MONTH} and ${MAXIMUM_MONTH}`
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

  toObject(): MonthObjectLiteral {
    return {
      value: this.value,
    };
  }

  equals(other: Month): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: Month): boolean {
    return this.value > other.value;
  }

  isLessThan(other: Month): boolean {
    return this.value < other.value;
  }

  withValue(value: number): Month {
    return Month.fromObject({ value });
  }

  static fromObject(object: MonthObjectLiteral): Month {
    return new Month(object.value);
  }

  static fromString(str: string): Month {
    const regexp = /^\d{1,2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`month string format must be 1 or 2 digits`);
    }

    const value = parseInt(str, 10);

    return Month.fromObject({ value });
  }

  static fromISOString(str: string): Month {
    const regexp = /^\d{2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`month iso string format must be 2 digits`);
    }

    const value = parseInt(str, 10);

    return Month.fromObject({ value });
  }

  static parse(str: string): Month {
    const parsers: Array<(s: string) => Month> = [
      Month.fromString,
      Month.fromISOString,
    ];

    for (const parseFn of parsers) {
      try {
        return parseFn(str);
      } catch {} // eslint-disable-line no-empty
    }

    throw new Error(`month parse failed`);
  }

  static compare(month1: Month, month2: Month): number {
    return month1.value - month2.value;
  }
}

export default Month;
