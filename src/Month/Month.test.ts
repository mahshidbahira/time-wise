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

    it("should throw an error with invalid lower value", () => {
      // given
      const value = 0;

      // when/then
      expect(() => new Month(value)).toThrowError();
    });

    it("should throw an error with invalid upper value", () => {
      // given
      const value = 13;

      // when/then
      expect(() => new Month(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the month", () => {
      // given
      const month = new Month(12);

      // when
      const value = month.valueOf();

      // then
      expect(value).toBe(12);
    });
  });

  describe("toString", () => {
    it("should return the padded string of the month", () => {
      // given
      const month = new Month(3);

      // when
      const str = month.toString();

      // then
      expect(str).toBe("03");
    });

    it("should return the string of the month", () => {
      // given
      const month = new Month(12);

      // when
      const str = month.toString();

      // then
      expect(str).toBe("12");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the month", () => {
      // given
      const month = new Month(12);

      // when
      const primitive = +month;

      // then
      expect(primitive).toBe(12);
    });

    it("should return a string when a string is expected of the month", () => {
      // given
      const month = new Month(12);

      // when
      const primitive = `${month}`;

      // then
      expect(primitive).toBe("12");
    });
  });

  describe("toISOString", () => {
    it("should return the padded iso string of the month", () => {
      // given
      const month = new Month(3);

      // when
      const isoStr = month.toISOString();

      // then
      expect(isoStr).toBe("03");
    });

    it("should return the iso string of the month", () => {
      // given
      const month = new Month(12);

      // when
      const isoStr = month.toISOString();

      // then
      expect(isoStr).toBe("12");
    });
  });
});
