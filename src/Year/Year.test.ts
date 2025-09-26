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

    it("should throw an error with invalid value", () => {
      // given
      const value = 1968;

      // when/then
      expect(() => new Year(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the year", () => {
      // given
      const year = new Year(2025);

      // when
      const value = year.valueOf();

      // then
      expect(value).toBe(2025);
    });
  });

  describe("toString", () => {
    it("should return the string of the year", () => {
      // given
      const year = new Year(2025);

      // when
      const str = year.toString();

      // then
      expect(str).toBe("2025");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the year", () => {
      // given
      const year = new Year(2025);

      // when
      const primitive = +year;

      // then
      expect(primitive).toBe(2025);
    });

    it("should return a string when a string is expected of the year", () => {
      // given
      const year = new Year(2025);

      // when
      const primitive = `${year}`;

      // then
      expect(primitive).toBe("2025");
    });
  });

  describe("toISOString", () => {
    it("should return the iso string of the year", () => {
      // given
      const year = new Year(2025);

      // when
      const isoStr = year.toISOString();

      // then
      expect(isoStr).toBe("2025");
    });
  });
});
