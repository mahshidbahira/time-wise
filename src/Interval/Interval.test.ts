import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DAY } from "../Units/Units";
import Interval from "./Interval";
import DateTime from "../DateTime/DateTime";
import Duration from "../Duration/Duration";

describe("Interval", () => {
  const now = new Date();

  beforeEach(() => {
    vi.useFakeTimers().setSystemTime(now);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("constructor", () => {
    it("should return an interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 3,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });

      // when
      const interval = new Interval(start, end);

      // then
      expect(interval).toBeInstanceOf(Interval);
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
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

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
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

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
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

      // when
      const str = interval.toString();

      // then
      expect(str).toBe(
        "Sat Dec 07 2024 12:56:19 GMT+0000 (Coordinated Universal Time) - Mon Dec 09 2024 12:56:19 GMT+0000 (Coordinated Universal Time)"
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
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

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
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

      // when
      const primitive = `${interval}`;

      // then
      expect(primitive).toBe(
        "Sat Dec 07 2024 12:56:19 GMT+0000 (Coordinated Universal Time) - Mon Dec 09 2024 12:56:19 GMT+0000 (Coordinated Universal Time)"
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
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

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
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

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
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

      // when
      const objectLiteral = interval.toObject();

      // then
      expect(objectLiteral).toEqual({
        start: {
          year: 2024,
          month: 11,
          day: 7,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
          offset: {},
        },
        end: {
          year: 2024,
          month: 11,
          day: 9,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
          offset: {},
        },
      });
    });
  });

  describe("equals", () => {
    it("should return true for equal durations", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end);
      const interval2 = Interval.between(start, end);

      // when
      const isEqual = interval1.equals(interval2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal intervals", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 3,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end1);
      const interval2 = Interval.between(start, end2);

      // when
      const isEqual = interval1.equals(interval2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isLongerThan", () => {
    it("should return true when the interval is longer than the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 8,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end1);
      const interval2 = Interval.between(start, end2);

      // when
      const isLongerThan = interval1.isLongerThan(interval2);

      // then
      expect(isLongerThan).toBe(true);
    });

    it("should return false when the interval is equal to the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });

      const interval1 = Interval.between(start, end);
      const interval2 = Interval.between(start, end);

      // when
      const isLongerThan = interval1.isLongerThan(interval2);

      // then
      expect(isLongerThan).toBe(false);
    });

    it("should return false when the interval is shorter than the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 8,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end1);
      const interval2 = Interval.between(start, end2);

      // when
      const isLongerThan = interval1.isLongerThan(interval2);

      // then
      expect(isLongerThan).toBe(false);
    });
  });

  describe("isShorterThan", () => {
    it("should return true when the interval is shorter than the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 8,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end1);
      const interval2 = Interval.between(start, end2);

      // when
      const isShorterThan = interval1.isShorterThan(interval2);

      // then
      expect(isShorterThan).toBe(true);
    });

    it("should return false when the interval is equal to the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });

      const interval1 = Interval.between(start, end);
      const interval2 = Interval.between(start, end);

      // when
      const isShorterThan = interval1.isShorterThan(interval2);

      // then
      expect(isShorterThan).toBe(false);
    });

    it("should return false when the interval is longer than the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 8,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end1);
      const interval2 = Interval.between(start, end2);

      // when
      const isShorterThan = interval1.isShorterThan(interval2);

      // then
      expect(isShorterThan).toBe(false);
    });
  });

  describe("withStart", () => {
    it("should return an interval with the new start", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

      const newStart = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 4,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });

      // when
      const intervalWithStart = interval.withStart(newStart);

      // then
      expect(intervalWithStart).toBeInstanceOf(Interval);
      expect(intervalWithStart.start).toEqual(newStart);
      expect(intervalWithStart.end).toEqual(end);
    });
  });

  describe("withEnd", () => {
    it("should return an interval with the new end", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval = Interval.between(start, end);

      const newEnd = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 11,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });

      // when
      const intervalWithEnd = interval.withEnd(newEnd);

      // then
      expect(intervalWithEnd).toBeInstanceOf(Interval);
      expect(intervalWithEnd.start).toEqual(start);
      expect(intervalWithEnd.end).toEqual(newEnd);
    });
  });

  describe("static between", () => {
    it("should return an interval between the start and the end", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });

      // when
      const interval = Interval.between(start, end);

      // then
      expect(interval).toBeInstanceOf(Interval);
      expect(interval.start).toEqual(start);
      expect(interval.end).toEqual(end);
    });
  });

  describe("static since", () => {
    it("should return an interval since the datetime until now", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromJSDate(now);

      // when
      const interval = Interval.since(start);

      // then
      expect(interval).toBeInstanceOf(Interval);
      expect(interval.start).toEqual(start);
      expect(interval.end).toEqual(end);
    });
  });

  describe("static until", () => {
    it("should return an interval since now until the datetime", () => {
      // given
      const start = DateTime.fromJSDate(now);
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });

      // when
      const interval = Interval.until(end);

      // then
      expect(interval).toBeInstanceOf(Interval);
      expect(interval.start).toEqual(start);
      expect(interval.end).toEqual(end);
    });
  });

  describe("static fromObject", () => {
    it("should return an interval from an object", () => {
      // given
      const objectLiteral = {
        start: {
          year: 2024,
          month: 11,
          day: 7,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
          offset: {},
        },
        end: {
          year: 2024,
          month: 11,
          day: 9,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
          offset: {},
        },
      };

      // when
      const interval = Interval.fromObject(objectLiteral);

      // then
      expect(interval).toBeInstanceOf(Interval);
      expect(interval.start).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 7,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
          offset: {},
        })
      );
      expect(interval.end).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 9,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
          offset: {},
        })
      );
    });
  });

  describe("static fromString", () => {
    it("should return an interval from a string", () => {
      // given
      const startStr = "Sat, 07 Dec 2024 12:56:19.920 GMT";
      const endStr = "Sat, 09 Dec 2024 12:56:19.920 GMT";
      const str = `${startStr} - ${endStr}`;

      // when
      const interval = Interval.fromString(str)!;

      // then
      expect(interval).toBeInstanceOf(Interval);
      expect(interval.start).toEqual(DateTime.parse(startStr));
      expect(interval.end).toEqual(DateTime.parse(endStr));
    });

    it("should return null from an invalid start string", () => {
      // given
      const startStr = "Sat, 07 Dec 2024 wwww 12:56:19.920 GMT";
      const endStr = "Sat, 09 Dec 2024 12:56:19.920 GMT";
      const str = `${startStr} - ${endStr}`;

      // when
      const interval = Interval.fromString(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return null from an invalid end string", () => {
      // given
      const startStr = "Sat, 07 Dec 2024 12:56:19.920 GMT";
      const endStr = "Sat, 09 Dec 2024 wwww 12:56:19.920 GMT";
      const str = `${startStr} - ${endStr}`;

      // when
      const interval = Interval.fromString(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return null from an invalid start and end string", () => {
      // given
      const startStr = "Sat, 07 Dec 2024 wwww 12:56:19.920 GMT";
      const endStr = "Sat, 09 Dec 2024 wwww 12:56:19.920 GMT";
      const str = `${startStr} - ${endStr}`;

      // when
      const interval = Interval.fromString(str)!;

      // then
      expect(interval).toBeNull();
    });
  });

  describe("static fromISOString", () => {
    it("should return an interval from an iso string", () => {
      // given
      const startStr = "2024-12-07T12:56:19.920Z";
      const endStr = "2024-12-09T12:56:19.920Z";
      const str = `${startStr}/${endStr}`;

      // when
      const interval = Interval.fromISOString(str)!;

      // then
      expect(interval).toBeInstanceOf(Interval);
      expect(interval.start).toEqual(DateTime.parse(startStr));
      expect(interval.end).toEqual(DateTime.parse(endStr));
    });

    it("should return null from an invalid start iso string", () => {
      // given
      const startStr = "2024-12-07-12:56:19.920Z";
      const endStr = "2024-12-09T12:56:19.920Z";
      const str = `${startStr}/${endStr}`;

      // when
      const interval = Interval.fromISOString(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return null from an invalid end iso string", () => {
      // given
      const startStr = "2024-12-07T12:56:19.920Z";
      const endStr = "2024-12-09-12:56:19.920Z";
      const str = `${startStr}/${endStr}`;

      // when
      const interval = Interval.fromISOString(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return null from an invalid start and end iso string", () => {
      // given
      const startStr = "2024-12-07-12:56:19.920Z";
      const endStr = "2024-12-09-12:56:19.920Z";
      const str = `${startStr}/${endStr}`;

      // when
      const interval = Interval.fromISOString(str)!;

      // then
      expect(interval).toBeNull();
    });
  });

  describe("static parse", () => {
    it("should return an interval from a string", () => {
      // given
      const startStr = "Sat, 07 Dec 2024 12:56:19.920 GMT";
      const endStr = "Sat, 09 Dec 2024 12:56:19.920 GMT";
      const str = `${startStr} - ${endStr}`;

      // when
      const interval = Interval.parse(str)!;

      // then
      expect(interval).toBeInstanceOf(Interval);
      expect(interval.start).toEqual(DateTime.parse(startStr));
      expect(interval.end).toEqual(DateTime.parse(endStr));
    });

    it("should return null from an invalid start string", () => {
      // given
      const startStr = "Sat, 07 Dec 2024 wwww 12:56:19.920 GMT";
      const endStr = "Sat, 09 Dec 2024 12:56:19.920 GMT";
      const str = `${startStr} - ${endStr}`;

      // when
      const interval = Interval.parse(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return null from an invalid end string", () => {
      // given
      const startStr = "Sat, 07 Dec 2024 12:56:19.920 GMT";
      const endStr = "Sat, 09 Dec 2024 wwww 12:56:19.920 GMT";
      const str = `${startStr} - ${endStr}`;

      // when
      const interval = Interval.parse(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return null from an invalid start and end string", () => {
      // given
      const startStr = "Sat, 07 Dec 2024 wwww 12:56:19.920 GMT";
      const endStr = "Sat, 09 Dec 2024 wwww 12:56:19.920 GMT";
      const str = `${startStr} - ${endStr}`;

      // when
      const interval = Interval.parse(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return an interval from an iso string", () => {
      // given
      const startStr = "2024-12-07T12:56:19.920Z";
      const endStr = "2024-12-09T12:56:19.920Z";
      const str = `${startStr}/${endStr}`;

      // when
      const interval = Interval.parse(str)!;

      // then
      expect(interval).toBeInstanceOf(Interval);
      expect(interval.start).toEqual(DateTime.parse(startStr));
      expect(interval.end).toEqual(DateTime.parse(endStr));
    });

    it("should return null from an invalid start iso string", () => {
      // given
      const startStr = "2024-12-07-12:56:19.920Z";
      const endStr = "2024-12-09T12:56:19.920Z";
      const str = `${startStr}/${endStr}`;

      // when
      const interval = Interval.parse(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return null from an invalid end iso string", () => {
      // given
      const startStr = "2024-12-07T12:56:19.920Z";
      const endStr = "2024-12-09-12:56:19.920Z";
      const str = `${startStr}/${endStr}`;

      // when
      const interval = Interval.parse(str)!;

      // then
      expect(interval).toBeNull();
    });

    it("should return null from an invalid start and end iso string", () => {
      // given
      const startStr = "2024-12-07-12:56:19.920Z";
      const endStr = "2024-12-09-12:56:19.920Z";
      const str = `${startStr}/${endStr}`;

      // when
      const interval = Interval.parse(str)!;

      // then
      expect(interval).toBeNull();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the interval is longer than the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 8,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end1);
      const interval2 = Interval.between(start, end2);

      // when
      const comparison = Interval.compare(interval1, interval2);

      // then
      expect(comparison).toBe(86_400_000);
    });

    it("should return zero when the interval is equal to the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end);
      const interval2 = Interval.between(start, end);

      // when
      const comparison = Interval.compare(interval1, interval2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the interval is shorter than the other interval", () => {
      // given
      const start = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 8,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const end2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 9,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: {},
      });
      const interval1 = Interval.between(start, end1);
      const interval2 = Interval.between(start, end2);

      // when
      const comparison = Interval.compare(interval1, interval2);

      // then
      expect(comparison).toBe(-86_400_000);
    });
  });
});
