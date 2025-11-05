import { describe, expect, it } from "vitest";
import DurationDay from "./DurationDay";

describe("DurationDay", () => {
  describe("constructor", () => {
    it("should return a day", () => {
      // given
      const value = 29;

      // when
      const day = new DurationDay(value);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(29);
    });

    it("should throw an error with invalid value type", () => {
      // given
      const value: any = "31"; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new DurationDay(value)).toThrowError();
    });

    it("should throw an error with undefined", () => {
      // given
      const value: any = undefined; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new DurationDay(value)).toThrowError();
    });

    it("should throw an error with null", () => {
      // given
      const value: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new DurationDay(value)).toThrowError();
    });

    it("should throw an error with NaN", () => {
      // given
      const value = NaN;

      // when/then
      expect(() => new DurationDay(value)).toThrowError();
    });

    it("should throw an error with floating point number", () => {
      // given
      const value = 29.2;

      // when/then
      expect(() => new DurationDay(value)).toThrowError();
    });

    it("should throw an error with invalid lower range value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new DurationDay(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 29 });

      // when
      const value = day.valueOf();

      // then
      expect(value).toBe(29);
    });
  });

  describe("toString", () => {
    it("should return the 1-digit string of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 7 });

      // when
      const str = day.toString();

      // then
      expect(str).toBe("7");
    });

    it("should return the 2-digit string of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 29 });

      // when
      const str = day.toString();

      // then
      expect(str).toBe("29");
    });

    it("should return the n-digit string of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 999999 });

      // when
      const str = day.toString();

      // then
      expect(str).toBe("999999");
    });
  });

  describe("toPrimitive", () => {
    it("should return the number value when a number is expected of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 29 });

      // when
      const primitive = +day;

      // then
      expect(primitive).toBe(29);
    });

    it("should return the string value when a string is expected of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 29 });

      // when
      const primitive = `${day}`;

      // then
      expect(primitive).toBe("29");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 7 });

      // when
      const jsonStr = JSON.stringify(day);

      // then
      expect(jsonStr).toBe(`"7"`);
    });
  });

  describe("toISOString", () => {
    it("should return the padded 1-digit iso string of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 7 });

      // when
      const isoStr = day.toISOString();

      // then
      expect(isoStr).toBe("7");
    });

    it("should return the 2-digit iso string of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 29 });

      // when
      const isoStr = day.toISOString();

      // then
      expect(isoStr).toBe("29");
    });

    it("should return the n-digit iso string of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 999999 });

      // when
      const isoStr = day.toISOString();

      // then
      expect(isoStr).toBe("999999");
    });
  });

  describe("toObject", () => {
    it("should return the object of the day", () => {
      // given
      const day = DurationDay.fromObject({ value: 7 });

      // when
      const objectLiteral = day.toObject();

      // then
      expect(objectLiteral).toEqual({ value: 7 });
    });
  });

  describe("equals", () => {
    it("should return true for equal day objects", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 7 });
      const day2 = DurationDay.fromObject({ value: 7 });

      // when
      const isEqual = day1.equals(day2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal day objects", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 7 });
      const day2 = DurationDay.fromObject({ value: 29 });

      // when
      const isEqual = day1.equals(day2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isGreaterThan", () => {
    it("should return true when the day is greater than the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 29 });
      const day2 = DurationDay.fromObject({ value: 7 });

      // when
      const isGreaterThan = day1.isGreaterThan(day2);

      // then
      expect(isGreaterThan).toBe(true);
    });

    it("should return false when the day is equal to the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 29 });
      const day2 = DurationDay.fromObject({ value: 29 });

      // when
      const isGreaterThan = day1.isGreaterThan(day2);

      // then
      expect(isGreaterThan).toBe(false);
    });

    it("should return false when the day is less than the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 7 });
      const day2 = DurationDay.fromObject({ value: 29 });

      // when
      const isGreaterThan = day1.isGreaterThan(day2);

      // then
      expect(isGreaterThan).toBe(false);
    });
  });

  describe("isLessThan", () => {
    it("should return true when the day is less than the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 7 });
      const day2 = DurationDay.fromObject({ value: 29 });

      // when
      const isLessThan = day1.isLessThan(day2);

      // then
      expect(isLessThan).toBe(true);
    });

    it("should return false when the day is equal to the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 29 });
      const day2 = DurationDay.fromObject({ value: 29 });

      // when
      const isLessThan = day1.isLessThan(day2);

      // then
      expect(isLessThan).toBe(false);
    });

    it("should return false when the day is greater than the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 29 });
      const day2 = DurationDay.fromObject({ value: 7 });

      // when
      const isLessThan = day1.isLessThan(day2);

      // then
      expect(isLessThan).toBe(false);
    });
  });

  describe("withValue", () => {
    it("should return the new adjusted day", () => {
      // given
      const day = DurationDay.fromObject({ value: 7 });

      // when
      const newDay = day.withValue(29);

      // then
      expect(newDay).toBeInstanceOf(DurationDay);
      expect(newDay.value).toBe(29);
    });
  });

  describe("static fromObject", () => {
    it("should return the day from an object", () => {
      // given
      const objectLiteral = { value: 29 };

      // when
      const day = DurationDay.fromObject(objectLiteral);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(29);
    });
  });

  describe("static fromString", () => {
    it("should return the day from a 1-digit string", () => {
      // given
      const str = "7";

      // when
      const day = DurationDay.fromString(str);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(7);
    });

    it("should return the day from a 2-digit string", () => {
      // given
      const str = "29";

      // when
      const day = DurationDay.fromString(str);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(29);
    });

    it("should return the month from a padded 1-digit string", () => {
      // given
      const str = "07";

      // when
      const day = DurationDay.fromString(str);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(7);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => DurationDay.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => DurationDay.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the day from a padded 1-digit iso string", () => {
      // given
      const str = "07";

      // when
      const day = DurationDay.fromISOString(str);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(7);
    });

    it("should return the day from a 2-digit iso string", () => {
      // given
      const str = "29";

      // when
      const day = DurationDay.fromISOString(str);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(29);
    });

    it("should throw an error with an invalid empty iso string", () => {
      // given
      const str = "";

      // when/then
      expect(() => DurationDay.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 1-digit iso string", () => {
      // given
      const str = "-1";

      // when/then
      expect(() => DurationDay.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric iso string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => DurationDay.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the day from a string", () => {
      // given
      const str = "7";

      // when
      const day = DurationDay.parse(str);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(7);
    });

    it("should return the day from an iso string", () => {
      // given
      const str = "29";

      // when
      const day = DurationDay.parse(str);

      // then
      expect(day).toBeInstanceOf(DurationDay);
      expect(day.value).toBe(29);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => DurationDay.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "-202";

      // when/then
      expect(() => DurationDay.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => DurationDay.parse(str)).toThrowError();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the day is greater than the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 29 });
      const day2 = DurationDay.fromObject({ value: 7 });

      // when
      const comparison = DurationDay.compare(day1, day2);

      // then
      expect(comparison).toBe(22);
    });

    it("should return zero when the day is equal to the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 29 });
      const day2 = DurationDay.fromObject({ value: 29 });

      // when
      const comparison = DurationDay.compare(day1, day2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the day is less than the other day", () => {
      // given
      const day1 = DurationDay.fromObject({ value: 7 });
      const day2 = DurationDay.fromObject({ value: 29 });

      // when
      const comparison = DurationDay.compare(day1, day2);

      // then
      expect(comparison).toBe(-22);
    });
  });
});
