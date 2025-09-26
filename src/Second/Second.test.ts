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

    it("should throw an error with invalid lower value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new Second(value)).toThrowError();
    });

    it("should throw an error with invalid upper value", () => {
      // given
      const value = 60;

      // when/then
      expect(() => new Second(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the second", () => {
      // given
      const second = new Second(45);

      // when
      const value = second.valueOf();

      // then
      expect(value).toBe(45);
    });
  });

  describe("toString", () => {
    it("should return the padded string of the second", () => {
      // given
      const second = new Second(9);

      // when
      const str = second.toString();

      // then
      expect(str).toBe("09");
    });

    it("should return the string of the second", () => {
      // given
      const second = new Second(45);

      // when
      const str = second.toString();

      // then
      expect(str).toBe("45");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the second", () => {
      // given
      const second = new Second(45);

      // when
      const primitive = +second;

      // then
      expect(primitive).toBe(45);
    });

    it("should return a string when a string is expected of the second", () => {
      // given
      const second = new Second(45);

      // when
      const primitive = `${second}`;

      // then
      expect(primitive).toBe("45");
    });
  });

  describe("toISOString", () => {
    it("should return the padded iso string of the second", () => {
      // given
      const second = new Second(9);

      // when
      const isoStr = second.toISOString();

      // then
      expect(isoStr).toBe("09");
    });

    it("should return the iso string of the second", () => {
      // given
      const second = new Second(45);

      // when
      const isoStr = second.toISOString();

      // then
      expect(isoStr).toBe("45");
    });
  });
});
