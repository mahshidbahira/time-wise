import { describe, expect, it } from "vitest";
import Hour from "./Hour";

describe("Hour", () => {
  describe("constructor", () => {
    it("should return an hour", () => {
      // given
      const value = 12;

      // when
      const hour = new Hour(value);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(12);
    });

    it("should throw an error with invalid value type", () => {
      // given
      const value: any = "23"; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });

    it("should throw an error with undefined", () => {
      // given
      const value: any = undefined; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });

    it("should throw an error with null", () => {
      // given
      const value: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });

    it("should throw an error with NaN", () => {
      // given
      const value = NaN;

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });

    it("should throw an error with floating point number", () => {
      // given
      const value = 12.2;

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });

    it("should throw an error with invalid lower range value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });

    it("should throw an error with invalid upper range value", () => {
      // given
      const value = 24;

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 12 });

      // when
      const value = hour.valueOf();

      // then
      expect(value).toBe(12);
    });
  });

  describe("toString", () => {
    it("should return the 1-digit string of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 9 });

      // when
      const str = hour.toString();

      // then
      expect(str).toBe("9");
    });

    it("should return the 2-digit string of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 12 });

      // when
      const str = hour.toString();

      // then
      expect(str).toBe("12");
    });
  });

  describe("toPrimitive", () => {
    it("should return the number value when a number is expected of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 12 });

      // when
      const primitive = +hour;

      // then
      expect(primitive).toBe(12);
    });

    it("should return the string value when a string is expected of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 12 });

      // when
      const primitive = `${hour}`;

      // then
      expect(primitive).toBe("12");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 9 });

      // when
      const jsonStr = JSON.stringify(hour);

      // then
      expect(jsonStr).toBe(`"09"`);
    });
  });

  describe("toISOString", () => {
    it("should return the padded 1-digit iso string of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 9 });

      // when
      const isoStr = hour.toISOString();

      // then
      expect(isoStr).toBe("09");
    });

    it("should return the 2-digit iso string of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 12 });

      // when
      const isoStr = hour.toISOString();

      // then
      expect(isoStr).toBe("12");
    });
  });

  describe("toObject", () => {
    it("should return the object of the hour", () => {
      // given
      const hour = Hour.fromObject({ value: 9 });

      // when
      const objectLiteral = hour.toObject();

      // then
      expect(objectLiteral).toEqual({ value: 9 });
    });
  });

  describe("equals", () => {
    it("should return true for equal hour objects", () => {
      // given
      const hour1 = Hour.fromObject({ value: 9 });
      const hour2 = Hour.fromObject({ value: 9 });

      // when
      const isEqual = hour1.equals(hour2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal hour objects", () => {
      // given
      const hour1 = Hour.fromObject({ value: 9 });
      const hour2 = Hour.fromObject({ value: 12 });

      // when
      const isEqual = hour1.equals(hour2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isGreaterThan", () => {
    it("should return true when the hour is greater than the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 12 });
      const hour2 = Hour.fromObject({ value: 9 });

      // when
      const isGreaterThan = hour1.isGreaterThan(hour2);

      // then
      expect(isGreaterThan).toBe(true);
    });

    it("should return false when the hour is equal to the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 12 });
      const hour2 = Hour.fromObject({ value: 12 });

      // when
      const isGreaterThan = hour1.isGreaterThan(hour2);

      // then
      expect(isGreaterThan).toBe(false);
    });

    it("should return false when the hour is less than the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 9 });
      const hour2 = Hour.fromObject({ value: 12 });

      // when
      const isGreaterThan = hour1.isGreaterThan(hour2);

      // then
      expect(isGreaterThan).toBe(false);
    });
  });

  describe("isLessThan", () => {
    it("should return true when the hour is less than the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 9 });
      const hour2 = Hour.fromObject({ value: 12 });

      // when
      const isLessThan = hour1.isLessThan(hour2);

      // then
      expect(isLessThan).toBe(true);
    });

    it("should return false when the hour is equal to the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 12 });
      const hour2 = Hour.fromObject({ value: 12 });

      // when
      const isLessThan = hour1.isLessThan(hour2);

      // then
      expect(isLessThan).toBe(false);
    });

    it("should return false when the hour is greater than the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 12 });
      const hour2 = Hour.fromObject({ value: 9 });

      // when
      const isLessThan = hour1.isLessThan(hour2);

      // then
      expect(isLessThan).toBe(false);
    });
  });

  describe("withValue", () => {
    it("should return the new adjusted hour", () => {
      // given
      const hour = Hour.fromObject({ value: 9 });

      // when
      const newHour = hour.withValue(12);

      // then
      expect(newHour).toBeInstanceOf(Hour);
      expect(newHour.value).toBe(12);
    });
  });

  describe("static fromObject", () => {
    it("should return the hour from an object", () => {
      // given
      const objectLiteral = { value: 12 };

      // when
      const hour = Hour.fromObject(objectLiteral);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(12);
    });
  });

  describe("static fromString", () => {
    it("should return the hour from a 1-digit string", () => {
      // given
      const str = "9";

      // when
      const hour = Hour.fromString(str);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(9);
    });

    it("should return the hour from a 2-digit string", () => {
      // given
      const str = "12";

      // when
      const hour = Hour.fromString(str);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(12);
    });

    it("should return the hour from a padded 1-digit string", () => {
      // given
      const str = "09";

      // when
      const hour = Hour.fromString(str);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(9);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Hour.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "202";

      // when/then
      expect(() => Hour.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => Hour.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the hour from a padded 1-digit iso string", () => {
      // given
      const str = "09";

      // when
      const hour = Hour.fromISOString(str);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(9);
    });

    it("should return the hour from a 2-digit iso string", () => {
      // given
      const str = "12";

      // when
      const hour = Hour.fromISOString(str);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(12);
    });

    it("should throw an error with an invalid empty iso string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Hour.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 1-digit iso string", () => {
      // given
      const str = "9";

      // when/then
      expect(() => Hour.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit iso string", () => {
      // given
      const str = "202";

      // when/then
      expect(() => Hour.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric iso string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => Hour.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the hour from a string", () => {
      // given
      const str = "9";

      // when
      const hour = Hour.parse(str);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(9);
    });

    it("should return the hour from an iso string", () => {
      // given
      const str = "12";

      // when
      const hour = Hour.parse(str);

      // then
      expect(hour).toBeInstanceOf(Hour);
      expect(hour.value).toBe(12);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Hour.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "202";

      // when/then
      expect(() => Hour.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "2b";

      // when/then
      expect(() => Hour.parse(str)).toThrowError();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the hour is greater than the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 12 });
      const hour2 = Hour.fromObject({ value: 9 });

      // when
      const comparison = Hour.compare(hour1, hour2);

      // then
      expect(comparison).toBe(3);
    });

    it("should return zero when the hour is equal to the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 12 });
      const hour2 = Hour.fromObject({ value: 12 });

      // when
      const comparison = Hour.compare(hour1, hour2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the hour is less than the other hour", () => {
      // given
      const hour1 = Hour.fromObject({ value: 9 });
      const hour2 = Hour.fromObject({ value: 12 });

      // when
      const comparison = Hour.compare(hour1, hour2);

      // then
      expect(comparison).toBe(-3);
    });
  });
});
