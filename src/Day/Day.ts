import DayObjectLiteral from "./DayObjectLiteral";

const MINIMUM_DAY: number = 1;
const MAXIMUM_DAY: number = 31;

class Day {
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

    if (value < MINIMUM_DAY || value > MAXIMUM_DAY) {
      throw new Error(
        `day value range must be between ${MINIMUM_DAY} and ${MAXIMUM_DAY}`
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

  toObject(): DayObjectLiteral {
    return {
      value: this.value,
    };
  }

  equals(other: Day): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: Day): boolean {
    return this.value > other.value;
  }

  isLessThan(other: Day): boolean {
    return this.value < other.value;
  }

  withValue(value: number): Day {
    return Day.fromObject({ value });
  }

  static fromObject(object: DayObjectLiteral): Day {
    return new Day(object.value);
  }

  static fromString(str: string): Day {
    const regexp = /^\d{1,2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(
        `day string format must be 1 digit or 2 consecutive digits`
      );
    }

    const value = parseInt(str, 10);

    return Day.fromObject({ value });
  }

  static fromISOString(str: string): Day {
    const regexp = /^\d{2}$/;
    const result = regexp.test(str);

    if (!result) {
      throw new Error(`day string format must be 2 consecutive digits`);
    }

    const value = parseInt(str, 10);

    return Day.fromObject({ value });
  }

  static parse(str: string): Day {
    const parsers: Array<(s: string) => Day> = [
      Day.fromString,
      Day.fromISOString,
    ];

    for (const parseFn of parsers) {
      try {
        return parseFn(str);
      } catch {}
    }

    throw new Error(`day parse failed`);
  }

  static compare(day1: Day, day2: Day): number {
    return day1.value - day2.value;
  }
}

export default Day;
