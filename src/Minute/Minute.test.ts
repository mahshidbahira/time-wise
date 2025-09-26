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

    it("should throw an error with invalid lower value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });

    it("should throw an error with invalid upper value", () => {
      // given
      const value = 60;

      // when/then
      expect(() => new Minute(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the minute", () => {
      // given
      const minute = new Minute(30);

      // when
      const value = minute.valueOf();

      // then
      expect(value).toBe(30);
    });
  });

  describe("toString", () => {
    it("should return the padded string of the minute", () => {
      // given
      const minute = new Minute(3);

      // when
      const str = minute.toString();

      // then
      expect(str).toBe("03");
    });

    it("should return the string of the minute", () => {
      // given
      const minute = new Minute(30);

      // when
      const str = minute.toString();

      // then
      expect(str).toBe("30");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the minute", () => {
      // given
      const minute = new Minute(30);

      // when
      const primitive = +minute;

      // then
      expect(primitive).toBe(30);
    });

    it("should return a string when a string is expected of the minute", () => {
      // given
      const minute = new Minute(30);

      // when
      const primitive = `${minute}`;

      // then
      expect(primitive).toBe("30");
    });
  });

  describe("toISOString", () => {
    it("should return the padded iso string of the minute", () => {
      // given
      const minute = new Minute(3);

      // when
      const isoStr = minute.toISOString();

      // then
      expect(isoStr).toBe("03");
    });

    it("should return the iso string of the minute", () => {
      // given
      const minute = new Minute(30);

      // when
      const isoStr = minute.toISOString();

      // then
      expect(isoStr).toBe("30");
    });
  });
});
