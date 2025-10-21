import { describe, expect, it } from "vitest";
import Millisecond from "./Millisecond";

describe("Millisecond", () => {
  describe("constructor", () => {
    it("should return a millisecond", () => {
      // given
      const value = 999;

      // when
      const millisecond = new Millisecond(value);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(999);
    });

    it("should throw an error with invalid value type", () => {
      // given
      const value: any = "999"; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });

    it("should throw an error with undefined", () => {
      // given
      const value: any = undefined; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });

    it("should throw an error with null", () => {
      // given
      const value: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });

    it("should throw an error with NaN", () => {
      // given
      const value = NaN;

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });

    it("should throw an error with floating point number", () => {
      // given
      const value = 2.2;

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });

    it("should throw an error with invalid lower range value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });

    it("should throw an error with invalid upper range value", () => {
      // given
      const value = 1000;

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 999 });

      // when
      const value = millisecond.valueOf();

      // then
      expect(value).toBe(999);
    });
  });

  describe("toString", () => {
    it("should return the 1-digit string of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 2 });

      // when
      const str = millisecond.toString();

      // then
      expect(str).toBe("2");
    });

    it("should return the 2-digit string of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 99 });

      // when
      const str = millisecond.toString();

      // then
      expect(str).toBe("99");
    });

    it("should return the 3-digit string of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 999 });

      // when
      const str = millisecond.toString();

      // then
      expect(str).toBe("999");
    });
  });

  describe("toPrimitive", () => {
    it("should return the number value when a number is expected of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 999 });

      // when
      const primitive = +millisecond;

      // then
      expect(primitive).toBe(999);
    });

    it("should return the string value when a string is expected of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 999 });

      // when
      const primitive = `${millisecond}`;

      // then
      expect(primitive).toBe("999");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 2 });

      // when
      const jsonStr = JSON.stringify(millisecond);

      // then
      expect(jsonStr).toBe(`"002"`);
    });
  });

  describe("toISOString", () => {
    it("should return the padded 1-digit iso string of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 2 });

      // when
      const isoStr = millisecond.toISOString();

      // then
      expect(isoStr).toBe("002");
    });

    it("should return the padded 2-digit iso string of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 99 });

      // when
      const isoStr = millisecond.toISOString();

      // then
      expect(isoStr).toBe("099");
    });

    it("should return the 3-digit iso string of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 999 });

      // when
      const isoStr = millisecond.toISOString();

      // then
      expect(isoStr).toBe("999");
    });
  });

  describe("toObject", () => {
    it("should return the object of the millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 2 });

      // when
      const objectLiteral = millisecond.toObject();

      // then
      expect(objectLiteral).toEqual({ value: 2 });
    });
  });

  describe("equals", () => {
    it("should return true for equal millisecond objects", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 2 });
      const second2 = Millisecond.fromObject({ value: 2 });

      // when
      const isEqual = second1.equals(second2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal millisecond objects", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 2 });
      const second2 = Millisecond.fromObject({ value: 999 });

      // when
      const isEqual = second1.equals(second2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isGreaterThan", () => {
    it("should return true when the millisecond is greater than the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 999 });
      const second2 = Millisecond.fromObject({ value: 2 });

      // when
      const isGreaterThan = second1.isGreaterThan(second2);

      // then
      expect(isGreaterThan).toBe(true);
    });

    it("should return false when the millisecond is equal to the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 999 });
      const second2 = Millisecond.fromObject({ value: 999 });

      // when
      const isGreaterThan = second1.isGreaterThan(second2);

      // then
      expect(isGreaterThan).toBe(false);
    });

    it("should return false when the millisecond is less than the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 2 });
      const second2 = Millisecond.fromObject({ value: 999 });

      // when
      const isGreaterThan = second1.isGreaterThan(second2);

      // then
      expect(isGreaterThan).toBe(false);
    });
  });

  describe("isLessThan", () => {
    it("should return true when the millisecond is less than the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 2 });
      const second2 = Millisecond.fromObject({ value: 999 });

      // when
      const isLessThan = second1.isLessThan(second2);

      // then
      expect(isLessThan).toBe(true);
    });

    it("should return false when the millisecond is equal to the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 999 });
      const second2 = Millisecond.fromObject({ value: 999 });

      // when
      const isLessThan = second1.isLessThan(second2);

      // then
      expect(isLessThan).toBe(false);
    });

    it("should return false when the millisecond is greater than the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 999 });
      const second2 = Millisecond.fromObject({ value: 2 });

      // when
      const isLessThan = second1.isLessThan(second2);

      // then
      expect(isLessThan).toBe(false);
    });
  });

  describe("withValue", () => {
    it("should return the new adjusted millisecond", () => {
      // given
      const millisecond = Millisecond.fromObject({ value: 2 });

      // when
      const newSecond = millisecond.withValue(999);

      // then
      expect(newSecond).toBeInstanceOf(Millisecond);
      expect(newSecond.value).toBe(999);
    });
  });

  describe("static fromObject", () => {
    it("should return the millisecond from an object", () => {
      // given
      const objectLiteral = { value: 999 };

      // when
      const millisecond = Millisecond.fromObject(objectLiteral);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(999);
    });
  });

  describe("static fromString", () => {
    it("should return the millisecond from a 1-digit string", () => {
      // given
      const str = "2";

      // when
      const second = Millisecond.fromString(str);

      // then
      expect(second).toBeInstanceOf(Millisecond);
      expect(second.value).toBe(2);
    });

    it("should return the millisecond from a 2-digit string", () => {
      // given
      const str = "99";

      // when
      const second = Millisecond.fromString(str);

      // then
      expect(second).toBeInstanceOf(Millisecond);
      expect(second.value).toBe(99);
    });

    it("should return the millisecond from a 3-digit string", () => {
      // given
      const str = "999";

      // when
      const millisecond = Millisecond.fromString(str);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(999);
    });

    it("should return the millisecond from a padded 1-digit string", () => {
      // given
      const str = "002";

      // when
      const second = Millisecond.fromString(str);

      // then
      expect(second).toBeInstanceOf(Millisecond);
      expect(second.value).toBe(2);
    });

    it("should return the millisecond from a padded 2-digit string", () => {
      // given
      const str = "099";

      // when
      const second = Millisecond.fromString(str);

      // then
      expect(second).toBeInstanceOf(Millisecond);
      expect(second.value).toBe(99);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Millisecond.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid 4-digit string", () => {
      // given
      const str = "9979";

      // when/then
      expect(() => Millisecond.fromString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "99b";

      // when/then
      expect(() => Millisecond.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the millisecond from a padded 1-digit iso string", () => {
      // given
      const str = "002";

      // when
      const millisecond = Millisecond.fromISOString(str);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(2);
    });

    it("should return the millisecond from a padded 2-digit iso string", () => {
      // given
      const str = "099";

      // when
      const millisecond = Millisecond.fromISOString(str);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(99);
    });

    it("should return the millisecond from a 3-digit iso string", () => {
      // given
      const str = "999";

      // when
      const millisecond = Millisecond.fromISOString(str);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(999);
    });

    it("should throw an error with an invalid empty iso string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Millisecond.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 1-digit iso string", () => {
      // given
      const str = "2";

      // when/then
      expect(() => Millisecond.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 2-digit iso string", () => {
      // given
      const str = "99";

      // when/then
      expect(() => Millisecond.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid 4-digit iso string", () => {
      // given
      const str = "9979";

      // when/then
      expect(() => Millisecond.fromISOString(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric iso string", () => {
      // given
      const str = "99b";

      // when/then
      expect(() => Millisecond.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the millisecond from a string", () => {
      // given
      const str = "2";

      // when
      const millisecond = Millisecond.parse(str);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(2);
    });

    it("should return the millisecond from an iso string", () => {
      // given
      const str = "999";

      // when
      const millisecond = Millisecond.parse(str);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(999);
    });

    it("should throw an error with an invalid empty string", () => {
      // given
      const str = "";

      // when/then
      expect(() => Millisecond.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid 4-digit string", () => {
      // given
      const str = "9979";

      // when/then
      expect(() => Millisecond.parse(str)).toThrowError();
    });

    it("should throw an error with an invalid alphanumeric string", () => {
      // given
      const str = "99b";

      // when/then
      expect(() => Millisecond.parse(str)).toThrowError();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the millisecond is greater than the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 999 });
      const second2 = Millisecond.fromObject({ value: 2 });

      // when
      const comparison = Millisecond.compare(second1, second2);

      // then
      expect(comparison).toBe(997);
    });

    it("should return zero when the millisecond is equal to the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 999 });
      const second2 = Millisecond.fromObject({ value: 999 });

      // when
      const comparison = Millisecond.compare(second1, second2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the millisecond is less than the other millisecond", () => {
      // given
      const second1 = Millisecond.fromObject({ value: 2 });
      const second2 = Millisecond.fromObject({ value: 999 });

      // when
      const comparison = Millisecond.compare(second1, second2);

      // then
      expect(comparison).toBe(-997);
    });
  });
});
