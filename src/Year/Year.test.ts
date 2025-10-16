import { describe, expect, it } from "vitest";
import Year from "./Year";

describe("Year", () => {
  describe("constructor", () => {
    it("should return a year", () => {
      // given
      const value = 2025;

      // when
      const year = new Year(value);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(2025);
    });

    it("should throw an error with invalid value type", () => {
      // given
      const value: any = "2025"; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Year(value)).toThrowError();
    });

    it("should throw an error with undefined", () => {
      // given
      const value: any = undefined; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Year(value)).toThrowError();
    });

    it("should throw an error with null", () => {
      // given
      const value: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Year(value)).toThrowError();
    });

    it("should throw an error with NaN", () => {
      // given
      const value = NaN;

      // when/then
      expect(() => new Year(value)).toThrowError();
    });

    it("should throw an error with floating point number", () => {
      // given
      const value = 2025.2;

      // when/then
      expect(() => new Year(value)).toThrowError();
    });

    it("should throw an error with invalid lower range value", () => {
      // given
      const value = 0;

      // when/then
      expect(() => new Year(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the year", () => {
      // given
      const year = Year.fromObject({ value: 2025 });

      // when
      const value = year.valueOf();

      // then
      expect(value).toBe(2025);
    });
  });

  describe("toString", () => {
    it("should return the 1-digit string of the year", () => {
      // given
      const year = Year.fromObject({ value: 1 });

      // when
      const str = year.toString();

      // then
      expect(str).toBe("1");
    });

    it("should return the 2-digit string of the year", () => {
      // given
      const year = Year.fromObject({ value: 12 });

      // when
      const str = year.toString();

      // then
      expect(str).toBe("12");
    });

    it("should return the 3-digit string of the year", () => {
      // given
      const year = Year.fromObject({ value: 123 });

      // when
      const str = year.toString();

      // then
      expect(str).toBe("123");
    });

    it("should return the 4-digit string of the year", () => {
      // given
      const year = Year.fromObject({ value: 2025 });

      // when
      const str = year.toString();

      // then
      expect(str).toBe("2025");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the year", () => {
      // given
      const year = Year.fromObject({ value: 2025 });

      // when
      const primitive = +year;

      // then
      expect(primitive).toBe(2025);
    });

    it("should return a string when a string is expected of the year", () => {
      // given
      const year = Year.fromObject({ value: 2025 });

      // when
      const primitive = `${year}`;

      // then
      expect(primitive).toBe("2025");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of the year", () => {
      // given
      const year = Year.fromObject({ value: 2025 });

      // when
      const jsonStr = JSON.stringify(year);

      // then
      expect(jsonStr).toBe(`"2025"`);
    });
  });

  describe("toISOString", () => {
    it("should return the padded 1-digit iso string of the year", () => {
      // given
      const year = Year.fromObject({ value: 1 });

      // when
      const isoStr = year.toISOString();

      // then
      expect(isoStr).toBe("0001");
    });

    it("should return the padded 2-digit iso string of the year", () => {
      // given
      const year = Year.fromObject({ value: 12 });

      // when
      const isoStr = year.toISOString();

      // then
      expect(isoStr).toBe("0012");
    });

    it("should return the padded 3-digit iso string of the year", () => {
      // given
      const year = Year.fromObject({ value: 123 });

      // when
      const isoStr = year.toISOString();

      // then
      expect(isoStr).toBe("0123");
    });

    it("should return the 4-digit iso string of the year", () => {
      // given
      const year = Year.fromObject({ value: 2025 });

      // when
      const isoStr = year.toISOString();

      // then
      expect(isoStr).toBe("2025");
    });
  });

  describe("toObject", () => {
    it("should return the object of the year", () => {
      // given
      const year = Year.fromObject({ value: 2025 });

      // when
      const objectLiteral = year.toObject();

      // then
      expect(objectLiteral).toEqual({ value: 2025 });
    });
  });

  describe("equals", () => {
    it("should return true for equal year objects", () => {
      // given
      const year1 = Year.fromObject({ value: 2025 });
      const year2 = Year.fromObject({ value: 2025 });

      // when
      const isEqual = year1.equals(year2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal year objects", () => {
      // given
      const year1 = Year.fromObject({ value: 2025 });
      const year2 = Year.fromObject({ value: 2024 });

      // when
      const isEqual = year1.equals(year2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isGreaterThan", () => {
    it("should return true when the year is greater than the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2025 });
      const year2 = Year.fromObject({ value: 2024 });

      // when
      const isGreaterThan = year1.isGreaterThan(year2);

      // then
      expect(isGreaterThan).toBe(true);
    });

    it("should return false when the year is equal to the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2025 });
      const year2 = Year.fromObject({ value: 2025 });

      // when
      const isGreaterThan = year1.isGreaterThan(year2);

      // then
      expect(isGreaterThan).toBe(false);
    });

    it("should return false when the year is less than the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2024 });
      const year2 = Year.fromObject({ value: 2025 });

      // when
      const isGreaterThan = year1.isGreaterThan(year2);

      // then
      expect(isGreaterThan).toBe(false);
    });
  });

  describe("isLessThan", () => {
    it("should return true when the year is less than the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2024 });
      const year2 = Year.fromObject({ value: 2025 });

      // when
      const isLessThan = year1.isLessThan(year2);

      // then
      expect(isLessThan).toBe(true);
    });

    it("should return false when the year is equal to the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2025 });
      const year2 = Year.fromObject({ value: 2025 });

      // when
      const isLessThan = year1.isLessThan(year2);

      // then
      expect(isLessThan).toBe(false);
    });

    it("should return false when the year is greater than the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2025 });
      const year2 = Year.fromObject({ value: 2024 });

      // when
      const isLessThan = year1.isLessThan(year2);

      // then
      expect(isLessThan).toBe(false);
    });
  });

  describe("withValue", () => {
    it("should return a year", () => {
      // given
      const year = Year.fromObject({ value: 2025 });

      // when
      const newYear = year.withValue(2024);

      // then
      expect(newYear).toBeInstanceOf(Year);
      expect(newYear.value).toBe(2024);
    });
  });

  describe("static fromObject", () => {
    it("should return a year from an object", () => {
      // given
      const objectLiteral = { value: 2025 };

      // when
      const year = Year.fromObject(objectLiteral);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(2025);
    });
  });

  describe("static fromString", () => {
    it("should return the year from a 1-digit string", () => {
      // given
      const str = "1";

      // when
      const year = Year.fromString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(1);
    });

    it("should return the year from a 2-digit string", () => {
      // given
      const str = "12";

      // when
      const year = Year.fromString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(12);
    });

    it("should return the year from a 3-digit string", () => {
      // given
      const str = "123";

      // when
      const year = Year.fromString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(123);
    });

    it("should return the year from a 4-digit string", () => {
      // given
      const str = "2025";

      // when
      const year = Year.fromString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(2025);
    });

    it("should return the year from a padded 1-digit string", () => {
      // given
      const str = "0001";

      // when
      const year = Year.fromString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(1);
    });

    it("should throw an error with an invalid 5-digit string", () => {
      // given
      const str = "20256";

      // when/then
      expect(() => Year.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "2b3h";

      // when/then
      expect(() => Year.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the year from a padded 1-digit iso string", () => {
      // given
      const str = "0001";

      // when
      const year = Year.fromISOString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(1);
    });

    it("should return the year from a padded 2-digit iso string", () => {
      // given
      const str = "0012";

      // when
      const year = Year.fromISOString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(12);
    });

    it("should return the year from a padded 3-digit iso string", () => {
      // given
      const str = "0123";

      // when
      const year = Year.fromISOString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(123);
    });

    it("should return the year from a 4-digit iso string", () => {
      // given
      const str = "2025";

      // when
      const year = Year.fromISOString(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(2025);
    });

    it("should throw an error with an invalid 1-digit iso string", () => {
      // given
      const str = "1";

      // when/then
      expect(() => Year.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 5-digit iso string", () => {
      // given
      const str = "20256";

      // when/then
      expect(() => Year.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric iso string", () => {
      // given
      const str = "2b3h";

      // when/then
      expect(() => Year.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the year from a string", () => {
      // given
      const str = "2025";

      // when
      const year = Year.parse(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(2025);
    });

    it("should return the year from a iso string", () => {
      // given
      const str = "0012";

      // when
      const year = Year.parse(str);

      // then
      expect(year).toBeInstanceOf(Year);
      expect(year.value).toBe(12);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Year.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid 5-digit string", () => {
      // given
      const str = "20256";

      // when/then
      expect(() => Year.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "2b3h";

      // when/then
      expect(() => Year.parse(str)).toThrowError();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the year is greater than the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2025 });
      const year2 = Year.fromObject({ value: 2024 });

      // when
      const comparison = Year.compare(year1, year2);

      // then
      expect(comparison).toBe(1);
    });

    it("should return zero when the year is equal to the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2025 });
      const year2 = Year.fromObject({ value: 2025 });

      // when
      const comparison = Year.compare(year1, year2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the year is less than the other year", () => {
      // given
      const year1 = Year.fromObject({ value: 2024 });
      const year2 = Year.fromObject({ value: 2025 });

      // when
      const comparison = Year.compare(year1, year2);

      // then
      expect(comparison).toBe(-1);
    });
  });
});
