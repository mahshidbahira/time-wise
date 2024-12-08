import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
// import { DAY, HOUR, MILLISECOND, MINUTE, SECOND } from "../Units/Units";
import DateTime from "./DateTime";

describe("DateTime", () => {
  const now = new Date();

  beforeEach(() => {
    vi.useFakeTimers().setSystemTime(now);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("constructor", () => {
    it("should return a datetime of epoch from zero", () => {
      const datetime = new DateTime(0);
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(1970);
      expect(datetime.month).toBe(0);
      expect(datetime.day).toBe(1);
      expect(datetime.hour).toBe(0);
      expect(datetime.minute).toBe(0);
      expect(datetime.second).toBe(0);
      expect(datetime.millisecond).toBe(0);
    });

    it("should return a datetime with milliseconds since epoch", () => {
      const datetime = new DateTime(1_733_576_179_920);
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(11);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
    });
  });

  describe("static of", () => {
    it("should return a datetime of epoch from zero", () => {
      const datetime = DateTime.of(0);
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(1970);
      expect(datetime.month).toBe(0);
      expect(datetime.day).toBe(1);
      expect(datetime.hour).toBe(0);
      expect(datetime.minute).toBe(0);
      expect(datetime.second).toBe(0);
      expect(datetime.millisecond).toBe(0);
    });

    it("should return a datetime with milliseconds since epoch", () => {
      const datetime = DateTime.of(1_733_576_179_920);
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(11);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
    });
  });

  describe("static fromObject", () => {
    it("should return a datetime from an object", () => {
      // given
      const object = {
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      };

      // when
      const datetime = DateTime.fromObject(object);

      // then
      const expected = new DateTime(1_733_576_179_920);
      expect(datetime).toEqual(expected);
    });
  });
});
