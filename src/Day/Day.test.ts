import { describe, expect, it } from "vitest";
import Day from "./Day";

describe("Day", () => {
  describe("constructor", () => {
    it("should return a day", () => {
      // given
      const value = 29;

      // when
      const day = new Day(value);

      // then
      expect(day).toBeInstanceOf(Day);
      expect(day.value).toBe(29);
    });

    it("should throw an error with invalid lower value", () => {
      // given
      const value = 0;

      // when/then
      expect(() => new Day(value)).toThrowError();
    });

    it("should throw an error with invalid upper value", () => {
      // given
      const value = 32;

      // when/then
      expect(() => new Day(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the day", () => {
      // given
      const day = new Day(29);

      // when
      const value = day.valueOf();

      // then
      expect(value).toBe(29);
    });
  });

  describe("toString", () => {
    it("should return the padded string of the day", () => {
      // given
      const day = new Day(7);

      // when
      const str = day.toString();

      // then
      expect(str).toBe("07");
    });

    it("should return the string of the day", () => {
      // given
      const day = new Day(29);

      // when
      const str = day.toString();

      // then
      expect(str).toBe("29");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the day", () => {
      // given
      const day = new Day(29);

      // when
      const primitive = +day;

      // then
      expect(primitive).toBe(29);
    });

    it("should return a string when a string is expected of the day", () => {
      // given
      const day = new Day(29);

      // when
      const primitive = `${day}`;

      // then
      expect(primitive).toBe("29");
    });
  });

  describe("toISOString", () => {
    it("should return the padded iso string of a day", () => {
      // given
      const day = new Day(7);

      // when
      const isoStr = day.toISOString();

      // then
      expect(isoStr).toBe("07");
    });

    it("should return the iso string of a day", () => {
      // given
      const day = new Day(29);

      // when
      const isoStr = day.toISOString();

      // then
      expect(isoStr).toBe("29");
    });
  });
});
