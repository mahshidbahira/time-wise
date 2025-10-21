import { describe, expect, it } from "vitest";
import Minute from "./Minute";

describe("Minute", () => {
  describe("constructor", () => {
    it("should return a minute", () => {
      // given
      const value = 30;

      // when
      const minute = new Minute(value);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(30);
    });

    it("should throw an error with invalid value type", () => {
      // given
      const value: any = "23"; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });

    it("should throw an error with undefined", () => {
      // given
      const value: any = undefined; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });

    it("should throw an error with null", () => {
      // given
      const value: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });

    it("should throw an error with NaN", () => {
      // given
      const value = NaN;

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });

    it("should throw an error with floating point number", () => {
      // given
      const value = 30.2;

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });

    it("should throw an error with invalid lower range value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });

    it("should throw an error with invalid upper range value", () => {
      // given
      const value = 60;

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 30 });

      // when
      const value = minute.valueOf();

      // then
      expect(value).toBe(30);
    });
  });

  describe("toString", () => {
    it("should return the 1-digit string of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 3 });

      // when
      const str = minute.toString();

      // then
      expect(str).toBe("3");
    });

    it("should return the 2-digit string of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 30 });

      // when
      const str = minute.toString();

      // then
      expect(str).toBe("30");
    });
  });

  describe("toPrimitive", () => {
    it("should return the number value when a number is expected of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 30 });

      // when
      const primitive = +minute;

      // then
      expect(primitive).toBe(30);
    });

    it("should return the string value when a string is expected of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 30 });

      // when
      const primitive = `${minute}`;

      // then
      expect(primitive).toBe("30");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 3 });

      // when
      const jsonStr = JSON.stringify(minute);

      // then
      expect(jsonStr).toBe(`"03"`);
    });
  });

  describe("toISOString", () => {
    it("should return the padded 1-digit iso string of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 3 });

      // when
      const isoStr = minute.toISOString();

      // then
      expect(isoStr).toBe("03");
    });

    it("should return the 2-digit iso string of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 30 });

      // when
      const isoStr = minute.toISOString();

      // then
      expect(isoStr).toBe("30");
    });
  });

  describe("toObject", () => {
    it("should return the object of the minute", () => {
      // given
      const minute = Minute.fromObject({ value: 3 });

      // when
      const objectLiteral = minute.toObject();

      // then
      expect(objectLiteral).toEqual({ value: 3 });
    });
  });

  describe("equals", () => {
    it("should return true for equal minute objects", () => {
      // given
      const minute1 = Minute.fromObject({ value: 3 });
      const minute2 = Minute.fromObject({ value: 3 });

      // when
      const isEqual = minute1.equals(minute2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal minute objects", () => {
      // given
      const minute1 = Minute.fromObject({ value: 3 });
      const minute2 = Minute.fromObject({ value: 30 });

      // when
      const isEqual = minute1.equals(minute2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isGreaterThan", () => {
    it("should return true when the minute is greater than the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 30 });
      const minute2 = Minute.fromObject({ value: 3 });

      // when
      const isGreaterThan = minute1.isGreaterThan(minute2);

      // then
      expect(isGreaterThan).toBe(true);
    });

    it("should return false when the minute is equal to the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 30 });
      const minute2 = Minute.fromObject({ value: 30 });

      // when
      const isGreaterThan = minute1.isGreaterThan(minute2);

      // then
      expect(isGreaterThan).toBe(false);
    });

    it("should return false when the minute is less than the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 3 });
      const minute2 = Minute.fromObject({ value: 30 });

      // when
      const isGreaterThan = minute1.isGreaterThan(minute2);

      // then
      expect(isGreaterThan).toBe(false);
    });
  });

  describe("isLessThan", () => {
    it("should return true when the minute is less than the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 3 });
      const minute2 = Minute.fromObject({ value: 30 });

      // when
      const isLessThan = minute1.isLessThan(minute2);

      // then
      expect(isLessThan).toBe(true);
    });

    it("should return false when the minute is equal to the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 30 });
      const minute2 = Minute.fromObject({ value: 30 });

      // when
      const isLessThan = minute1.isLessThan(minute2);

      // then
      expect(isLessThan).toBe(false);
    });

    it("should return false when the minute is greater than the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 30 });
      const minute2 = Minute.fromObject({ value: 3 });

      // when
      const isLessThan = minute1.isLessThan(minute2);

      // then
      expect(isLessThan).toBe(false);
    });
  });

  describe("withValue", () => {
    it("should return the new adjusted minute", () => {
      // given
      const minute = Minute.fromObject({ value: 3 });

      // when
      const newMinute = minute.withValue(30);

      // then
      expect(newMinute).toBeInstanceOf(Minute);
      expect(newMinute.value).toBe(30);
    });
  });

  describe("static fromObject", () => {
    it("should return the minute from an object", () => {
      // given
      const objectLiteral = { value: 30 };

      // when
      const minute = Minute.fromObject(objectLiteral);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(30);
    });
  });

  describe("static fromString", () => {
    it("should return the minute from a 1-digit string", () => {
      // given
      const str = "3";

      // when
      const minute = Minute.fromString(str);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(3);
    });

    it("should return the minute from a 2-digit string", () => {
      // given
      const str = "30";

      // when
      const minute = Minute.fromString(str);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(30);
    });

    it("should return the minute from a padded 1-digit string", () => {
      // given
      const str = "03";

      // when
      const minute = Minute.fromString(str);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(3);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Minute.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "592";

      // when/then
      expect(() => Minute.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "5b";

      // when/then
      expect(() => Minute.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the minute from a padded 1-digit iso string", () => {
      // given
      const str = "03";

      // when
      const minute = Minute.fromISOString(str);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(3);
    });

    it("should return the minute from a 2-digit iso string", () => {
      // given
      const str = "30";

      // when
      const minute = Minute.fromISOString(str);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(30);
    });

    it("should throw an error with an invalid empty iso string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Minute.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 1-digit iso string", () => {
      // given
      const str = "3";

      // when/then
      expect(() => Minute.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit iso string", () => {
      // given
      const str = "592";

      // when/then
      expect(() => Minute.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric iso string", () => {
      // given
      const str = "5b";

      // when/then
      expect(() => Minute.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the minute from a string", () => {
      // given
      const str = "3";

      // when
      const minute = Minute.parse(str);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(3);
    });

    it("should return the minute from an iso string", () => {
      // given
      const str = "30";

      // when
      const minute = Minute.parse(str);

      // then
      expect(minute).toBeInstanceOf(Minute);
      expect(minute.value).toBe(30);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Minute.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "592";

      // when/then
      expect(() => Minute.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "5b";

      // when/then
      expect(() => Minute.parse(str)).toThrowError();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the minute is greater than the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 30 });
      const minute2 = Minute.fromObject({ value: 3 });

      // when
      const comparison = Minute.compare(minute1, minute2);

      // then
      expect(comparison).toBe(27);
    });

    it("should return zero when the minute is equal to the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 30 });
      const minute2 = Minute.fromObject({ value: 30 });

      // when
      const comparison = Minute.compare(minute1, minute2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the minute is less than the other minute", () => {
      // given
      const minute1 = Minute.fromObject({ value: 3 });
      const minute2 = Minute.fromObject({ value: 30 });

      // when
      const comparison = Minute.compare(minute1, minute2);

      // then
      expect(comparison).toBe(-27);
    });
  });
});
