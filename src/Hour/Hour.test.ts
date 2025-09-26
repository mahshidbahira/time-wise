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

    it("should throw an error with invalid lower value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });

    it("should throw an error with invalid upper value", () => {
      // given
      const value = 24;

      // when/then
      expect(() => new Hour(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the hour", () => {
      // given
      const hour = new Hour(12);

      // when
      const value = hour.valueOf();

      // then
      expect(value).toBe(12);
    });
  });

  describe("toString", () => {
    it("should return the padded string of the hour", () => {
      // given
      const hour = new Hour(9);

      // when
      const str = hour.toString();

      // then
      expect(str).toBe("09");
    });

    it("should return the string of the hour", () => {
      // given
      const hour = new Hour(12);

      // when
      const str = hour.toString();

      // then
      expect(str).toBe("12");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the hour", () => {
      // given
      const hour = new Hour(12);

      // when
      const primitive = +hour;

      // then
      expect(primitive).toBe(12);
    });

    it("should return a string when a string is expected of the hour", () => {
      // given
      const hour = new Hour(12);

      // when
      const primitive = `${hour}`;

      // then
      expect(primitive).toBe("12");
    });
  });

  describe("toISOString", () => {
    it("should return the padded iso string of a hour", () => {
      // given
      const hour = new Hour(9);

      // when
      const isoStr = hour.toISOString();

      // then
      expect(isoStr).toBe("09");
    });

    it("should return the iso string of a hour", () => {
      // given
      const hour = new Hour(12);

      // when
      const isoStr = hour.toISOString();

      // then
      expect(isoStr).toBe("12");
    });
  });
});
