import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DAY } from "../Units/Units";
import TimeInterval from "./TimeInterval";
import DateTime from "../DateTime/DateTime";
import Duration from "../Duration/Duration";

describe("TimeInterval", () => {
  const now = new Date();

  beforeEach(() => {
    vi.useFakeTimers().setSystemTime(now);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("constructor", () => {
    it("should return a time interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 3,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      // when
      const interval = new TimeInterval(start, end);

      // then
      expect(interval).toBeInstanceOf(TimeInterval);
      expect(interval.start).toEqual(start);
      expect(interval.end).toEqual(end);
    });
  });

  describe("duration", () => {
    it("should return the duration between start and end", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const interval = new TimeInterval(start, end);

      // when
      const duration = interval.duration;

      // then
      expect(duration).toEqual(Duration.of(2 * DAY));
    });
  });

  describe("valueOf", () => {
    it("should return the value of interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const interval = new TimeInterval(start, end);

      // when
      const value = interval.valueOf();

      // then
      expect(value).toBe(2 * DAY);
    });
  });

  describe("toString", () => {
    it("should return the string of interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const interval = new TimeInterval(start, end);

      // when
      const str = interval.toString();

      // then
      expect(str).toBe(
        "from Sat, 07 Dec 2024 12:56:19 GMT to Mon, 09 Dec 2024 12:56:19 GMT"
      );
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const interval = new TimeInterval(start, end);

      // when
      const primitive = +interval;

      // then
      expect(primitive).toBe(2 * DAY);
    });

    it("should return a string when a string is expected of the duration", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const interval = new TimeInterval(start, end);

      // when
      const primitive = `${interval}`;

      // then
      expect(primitive).toBe(
        "from Sat, 07 Dec 2024 12:56:19 GMT to Mon, 09 Dec 2024 12:56:19 GMT"
      );
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of duration", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const interval = new TimeInterval(start, end);

      // when
      const jsonStr = JSON.stringify(interval);

      // then
      expect(jsonStr).toBe(
        `"2024-12-07T12:56:19.920Z/2024-12-09T12:56:19.920Z"`
      );
    });
  });

  describe("toISOString", () => {
    it("should return the iso string of interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const interval = new TimeInterval(start, end);

      // when
      const str = interval.toISOString();

      // then
      expect(str).toBe("2024-12-07T12:56:19.920Z/2024-12-09T12:56:19.920Z");
    });
  });

  describe("toObject", () => {
    it("should return the object of interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const interval = new TimeInterval(start, end);

      // when
      const obj = interval.toObject();

      // then
      expect(obj).toEqual({ start: start, end: end });
    });
  });
});
