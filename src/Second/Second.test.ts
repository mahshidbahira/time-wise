import { describe, expect, it } from "vitest";
import Second from "./Second";

describe("Second", () => {
  describe("constructor", () => {
    it("should return a second", () => {
      // given
      const value = 45;

      // when
      const second = new Second(value);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(45);
    });

    it("should throw an error with invalid value type", () => {
      // given
      const value: any = "59"; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Second(value)).toThrowError();
    });

    it("should throw an error with undefined", () => {
      // given
      const value: any = undefined; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Second(value)).toThrowError();
    });

    it("should throw an error with null", () => {
      // given
      const value: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Second(value)).toThrowError();
    });

    it("should throw an error with NaN", () => {
      // given
      const value = NaN;

      // when/then
      expect(() => new Second(value)).toThrowError();
    });

    it("should throw an error with floating point number", () => {
      // given
      const value = 45.2;

      // when/then
      expect(() => new Second(value)).toThrowError();
    });

    it("should throw an error with invalid lower range value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new Second(value)).toThrowError();
    });

    it("should throw an error with invalid upper range value", () => {
      // given
      const value = 60;

      // when/then
      expect(() => new Second(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the second", () => {
      // given
      const second = Second.fromObject({ value: 45 });

      // when
      const value = second.valueOf();

      // then
      expect(value).toBe(45);
    });
  });

  describe("toString", () => {
    it("should return the 1-digit string of the second", () => {
      // given
      const second = Second.fromObject({ value: 9 });

      // when
      const str = second.toString();

      // then
      expect(str).toBe("9");
    });

    it("should return the 2-digit string of the second", () => {
      // given
      const second = Second.fromObject({ value: 45 });

      // when
      const str = second.toString();

      // then
      expect(str).toBe("45");
    });
  });

  describe("toPrimitive", () => {
    it("should return the number value when a number is expected of the second", () => {
      // given
      const second = Second.fromObject({ value: 45 });

      // when
      const primitive = +second;

      // then
      expect(primitive).toBe(45);
    });

    it("should return the string value when a string is expected of the second", () => {
      // given
      const second = Second.fromObject({ value: 45 });

      // when
      const primitive = `${second}`;

      // then
      expect(primitive).toBe("45");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of the second", () => {
      // given
      const second = Second.fromObject({ value: 9 });

      // when
      const jsonStr = JSON.stringify(second);

      // then
      expect(jsonStr).toBe(`"09"`);
    });
  });

  describe("toISOString", () => {
    it("should return the padded 1-digit iso string of the second", () => {
      // given
      const second = Second.fromObject({ value: 9 });

      // when
      const isoStr = second.toISOString();

      // then
      expect(isoStr).toBe("09");
    });

    it("should return the 2-digit iso string of the second", () => {
      // given
      const second = Second.fromObject({ value: 45 });

      // when
      const isoStr = second.toISOString();

      // then
      expect(isoStr).toBe("45");
    });
  });

  describe("toObject", () => {
    it("should return the object of the second", () => {
      // given
      const second = Second.fromObject({ value: 9 });

      // when
      const objectLiteral = second.toObject();

      // then
      expect(objectLiteral).toEqual({ value: 9 });
    });
  });

  describe("equals", () => {
    it("should return true for equal second objects", () => {
      // given
      const second1 = Second.fromObject({ value: 9 });
      const second2 = Second.fromObject({ value: 9 });

      // when
      const isEqual = second1.equals(second2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal second objects", () => {
      // given
      const second1 = Second.fromObject({ value: 9 });
      const second2 = Second.fromObject({ value: 45 });

      // when
      const isEqual = second1.equals(second2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isGreaterThan", () => {
    it("should return true when the second is greater than the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 45 });
      const second2 = Second.fromObject({ value: 9 });

      // when
      const isGreaterThan = second1.isGreaterThan(second2);

      // then
      expect(isGreaterThan).toBe(true);
    });

    it("should return false when the second is equal to the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 45 });
      const second2 = Second.fromObject({ value: 45 });

      // when
      const isGreaterThan = second1.isGreaterThan(second2);

      // then
      expect(isGreaterThan).toBe(false);
    });

    it("should return false when the second is less than the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 9 });
      const second2 = Second.fromObject({ value: 45 });

      // when
      const isGreaterThan = second1.isGreaterThan(second2);

      // then
      expect(isGreaterThan).toBe(false);
    });
  });

  describe("isLessThan", () => {
    it("should return true when the second is less than the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 9 });
      const second2 = Second.fromObject({ value: 45 });

      // when
      const isLessThan = second1.isLessThan(second2);

      // then
      expect(isLessThan).toBe(true);
    });

    it("should return false when the second is equal to the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 45 });
      const second2 = Second.fromObject({ value: 45 });

      // when
      const isLessThan = second1.isLessThan(second2);

      // then
      expect(isLessThan).toBe(false);
    });

    it("should return false when the second is greater than the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 45 });
      const second2 = Second.fromObject({ value: 9 });

      // when
      const isLessThan = second1.isLessThan(second2);

      // then
      expect(isLessThan).toBe(false);
    });
  });

  describe("withValue", () => {
    it("should return the new adjusted second", () => {
      // given
      const second = Second.fromObject({ value: 9 });

      // when
      const newSecond = second.withValue(45);

      // then
      expect(newSecond).toBeInstanceOf(Second);
      expect(newSecond.value).toBe(45);
    });
  });

  describe("static fromObject", () => {
    it("should return the second from an object", () => {
      // given
      const objectLiteral = { value: 45 };

      // when
      const second = Second.fromObject(objectLiteral);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(45);
    });
  });

  describe("static fromString", () => {
    it("should return the second from a 1-digit string", () => {
      // given
      const str = "9";

      // when
      const second = Second.fromString(str);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(9);
    });

    it("should return the second from a 2-digit string", () => {
      // given
      const str = "45";

      // when
      const second = Second.fromString(str);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(45);
    });

    it("should return the second from a padded 1-digit string", () => {
      // given
      const str = "09";

      // when
      const second = Second.fromString(str);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(9);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Second.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "592";

      // when/then
      expect(() => Second.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "5b";

      // when/then
      expect(() => Second.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the second from a padded 1-digit iso string", () => {
      // given
      const str = "04";

      // when
      const second = Second.fromISOString(str);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(4);
    });

    it("should return the second from a 2-digit iso string", () => {
      // given
      const str = "45";

      // when
      const second = Second.fromISOString(str);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(45);
    });

    it("should throw an error with an invalid empty iso string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Second.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 1-digit iso string", () => {
      // given
      const str = "4";

      // when/then
      expect(() => Second.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit iso string", () => {
      // given
      const str = "592";

      // when/then
      expect(() => Second.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric iso string", () => {
      // given
      const str = "5b";

      // when/then
      expect(() => Second.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the second from a string", () => {
      // given
      const str = "9";

      // when
      const second = Second.parse(str);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(9);
    });

    it("should return the second from an iso string", () => {
      // given
      const str = "45";

      // when
      const second = Second.parse(str);

      // then
      expect(second).toBeInstanceOf(Second);
      expect(second.value).toBe(45);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Second.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid 3-digit string", () => {
      // given
      const str = "592";

      // when/then
      expect(() => Second.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "5b";

      // when/then
      expect(() => Second.fromString(str)).toThrowError();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the second is greater than the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 45 });
      const second2 = Second.fromObject({ value: 9 });

      // when
      const comparison = Second.compare(second1, second2);

      // then
      expect(comparison).toBe(36);
    });

    it("should return zero when the second is equal to the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 45 });
      const second2 = Second.fromObject({ value: 45 });

      // when
      const comparison = Second.compare(second1, second2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the second is less than the other second", () => {
      // given
      const second1 = Second.fromObject({ value: 9 });
      const second2 = Second.fromObject({ value: 45 });

      // when
      const comparison = Second.compare(second1, second2);

      // then
      expect(comparison).toBe(-36);
    });
  });
});
