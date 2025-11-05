import DurationDayObjectLiteral from "./DurationDayObjectLiteral";

const MINIMUM_DAY: number = 0;

class DurationDay {
  readonly value: number;

  constructor(value: number) {
    if (typeof value !== "number") {
      throw new Error(`day value type must be number`);
    }

    if (Number.isNaN(value)) {
      throw new Error(`day value must be number`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`day value must be an integer`);
    }

    if (value < MINIMUM_DAY) {
      throw new Error(
        `day value range must be equal or greater than ${MINIMUM_DAY}`
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
    return this.value.toString();
  }

  toObject(): DurationDayObjectLiteral {
    return {
      value: this.value,
    };
  }

  equals(other: DurationDay): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: DurationDay): boolean {
    return this.value > other.value;
  }

  isLessThan(other: DurationDay): boolean {
    return this.value < other.value;
  }

  withValue(value: number): DurationDay {
    return DurationDay.fromObject({ value });
  }

  static fromObject(object: DurationDayObjectLiteral): DurationDay {
    return new DurationDay(object.value);
  }

  static fromString(str: string): DurationDay {
    const regexp = /^\d+$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`day string format must be 1 or more digits`);
    }

    const value = parseInt(str, 10);

    return DurationDay.fromObject({ value });
  }

  static fromISOString(str: string): DurationDay {
    const regexp = /^\d+$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`day string format must be 1 or more digits`);
    }

    const value = parseInt(str, 10);

    return DurationDay.fromObject({ value });
  }

  static parse(str: string): DurationDay {
    const parsers: Array<(s: string) => DurationDay> = [
      DurationDay.fromString,
      DurationDay.fromISOString,
    ];

    for (const parseFn of parsers) {
      try {
        return parseFn(str);
      } catch {} // eslint-disable-line no-empty
    }

    throw new Error(`day parse failed`);
  }

  static compare(day1: DurationDay, day2: DurationDay): number {
    return day1.value - day2.value;
  }
}

export default DurationDay;
