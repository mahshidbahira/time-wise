import { describe, expect, it } from "vitest";
import Month from "./Month";

describe("Month", () => {
  describe("constructor", () => {
    it("should return a month", () => {
      // given
      const value = 12;

      // when
      const month = new Month(value);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(12);
    });

    it("should throw an error with invalid value type", () => {
      // given
      const value: any = "3";

      // when/then
      expect(() => new Month(value)).toThrowError();
    });

    it("should throw an error with undefined", () => {
      // given
      const value: any = undefined;

      // when/then
      expect(() => new Month(value)).toThrowError();
    });

    it("should throw an error with null", () => {
      // given
      const value: any = null;

      // when/then
      expect(() => new Month(value)).toThrowError();
    });

    it("should throw an error with NaN", () => {
      // given
      const value = NaN;

      // when/then
      expect(() => new Month(value)).toThrowError();
    });

    it("should throw an error with floating point number", () => {
      // given
      const value = 9.2;

      // when/then
      expect(() => new Month(value)).toThrowError();
    });

    it("should throw an error with invalid lower range value", () => {
      // given
      const value = 0;

      // when/then
      expect(() => new Month(value)).toThrowError();
    });

    it("should throw an error with invalid upper range value", () => {
      // given
      const value = 13;

      // when/then
      expect(() => new Month(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the month", () => {
      // given
      const month = Month.fromObject({ value: 12 });

      // when
      const value = month.valueOf();

      // then
      expect(value).toBe(12);
    });
  });

  describe("toString", () => {
    it("should return the 1-digit string of the month", () => {
      // given
      const month = Month.fromObject({ value: 3 });

      // when
      const str = month.toString();

      // then
      expect(str).toBe("3");
    });

    it("should return the 2-digit string of the month", () => {
      // given
      const month = Month.fromObject({ value: 12 });

      // when
      const str = month.toString();

      // then
      expect(str).toBe("12");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the month", () => {
      // given
      const month = Month.fromObject({ value: 12 });

      // when
      const primitive = +month;

      // then
      expect(primitive).toBe(12);
    });

    it("should return a string when a string is expected of the month", () => {
      // given
      const month = Month.fromObject({ value: 12 });

      // when
      const primitive = `${month}`;

      // then
      expect(primitive).toBe("12");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of the month", () => {
      // given
      const month = Month.fromObject({ value: 3 });

      // when
      const jsonStr = JSON.stringify(month);

      // then
      expect(jsonStr).toBe(`"03"`);
    });
  });

  describe("toISOString", () => {
    it("should return the padded 1-digit iso string of the month", () => {
      // given
      const month = Month.fromObject({ value: 3 });

      // when
      const isoStr = month.toISOString();

      // then
      expect(isoStr).toBe("03");
    });

    it("should return the 2-digit iso string of the month", () => {
      // given
      const month = Month.fromObject({ value: 12 });

      // when
      const isoStr = month.toISOString();

      // then
      expect(isoStr).toBe("12");
    });
  });

  describe("toObject", () => {
    it("should return the object of the month", () => {
      // given
      const month = Month.fromObject({ value: 3 });

      // when
      const objectLiteral = month.toObject();

      // then
      expect(objectLiteral).toEqual({ value: 3 });
    });
  });

  describe("equals", () => {
    it("should return true for equal month objects", () => {
      // given
      const month1 = Month.fromObject({ value: 3 });
      const month2 = Month.fromObject({ value: 3 });

      // when
      const isEqual = month1.equals(month2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal month objects", () => {
      // given
      const month1 = Month.fromObject({ value: 3 });
      const month2 = Month.fromObject({ value: 12 });

      // when
      const isEqual = month1.equals(month2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isGreaterThan", () => {
    it("should return true when the month is greater than the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 12 });
      const month2 = Month.fromObject({ value: 3 });

      // when
      const isGreaterThan = month1.isGreaterThan(month2);

      // then
      expect(isGreaterThan).toBe(true);
    });

    it("should return false when the month is equal to the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 12 });
      const month2 = Month.fromObject({ value: 12 });

      // when
      const isGreaterThan = month1.isGreaterThan(month2);

      // then
      expect(isGreaterThan).toBe(false);
    });

    it("should return false when the month is less than the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 3 });
      const month2 = Month.fromObject({ value: 12 });

      // when
      const isGreaterThan = month1.isGreaterThan(month2);

      // then
      expect(isGreaterThan).toBe(false);
    });
  });

  describe("isLessThan", () => {
    it("should return true when the month is less than the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 3 });
      const month2 = Month.fromObject({ value: 12 });

      // when
      const isLessThan = month1.isLessThan(month2);

      // then
      expect(isLessThan).toBe(true);
    });

    it("should return false when the month is equal to the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 12 });
      const month2 = Month.fromObject({ value: 12 });

      // when
      const isLessThan = month1.isLessThan(month2);

      // then
      expect(isLessThan).toBe(false);
    });

    it("should return false when the month is greater than the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 12 });
      const month2 = Month.fromObject({ value: 3 });

      // when
      const isLessThan = month1.isLessThan(month2);

      // then
      expect(isLessThan).toBe(false);
    });
  });

  describe("withValue", () => {
    it("should return a month", () => {
      // given
      const month = Month.fromObject({ value: 3 });

      // when
      const newMonth = month.withValue(11);

      // then
      expect(newMonth).toBeInstanceOf(Month);
      expect(newMonth.value).toBe(11);
    });
  });

  describe("static fromObject", () => {
    it("should return a month from an object", () => {
      // given
      const objectLiteral = { value: 12 };

      // when
      const month = Month.fromObject(objectLiteral);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(12);
    });
  });

  describe("static fromString", () => {
    it("should return the month from a 1-digit string", () => {
      // given
      const str = "3";

      // when
      const month = Month.fromString(str);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(3);
    });

    it("should return the month from a 2-digit string", () => {
      // given
      const str = "12";

      // when
      const month = Month.fromString(str);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(12);
    });

    it("should return the month from a padded 1-digit string", () => {
      // given
      const str = "03";

      // when
      const month = Month.fromString(str);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(3);
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "114";

      // when/then
      expect(() => Month.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => Month.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the month from a padded 1-digit iso string", () => {
      // given
      const str = "03";

      // when
      const month = Month.fromISOString(str);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(3);
    });

    it("should return the month from a 2-digit iso string", () => {
      // given
      const str = "12";

      // when
      const month = Month.fromISOString(str);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(12);
    });

    it("should throw an error with an invalid 1-digit iso string", () => {
      // given
      const str = "3";

      // when/then
      expect(() => Month.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit iso string", () => {
      // given
      const str = "114";

      // when/then
      expect(() => Month.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric iso string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => Month.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the month from a string", () => {
      // given
      const str = "3";

      // when
      const month = Month.parse(str);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(3);
    });

    it("should return the month from an iso string", () => {
      // given
      const str = "12";

      // when
      const month = Month.parse(str);

      // then
      expect(month).toBeInstanceOf(Month);
      expect(month.value).toBe(12);
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "114";

      // when/then
      expect(() => Month.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => Month.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Month.parse(str)).toThrowError();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the month is greater than the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 12 });
      const month2 = Month.fromObject({ value: 3 });

      // when
      const comparison = Month.compare(month1, month2);

      // then
      expect(comparison).toBe(9);
    });

    it("should return zero when the month is equal to the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 12 });
      const month2 = Month.fromObject({ value: 12 });

      // when
      const comparison = Month.compare(month1, month2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the month is less than the other month", () => {
      // given
      const month1 = Month.fromObject({ value: 3 });
      const month2 = Month.fromObject({ value: 12 });

      // when
      const comparison = Month.compare(month1, month2);

      // then
      expect(comparison).toBe(-9);
    });
  });
});
