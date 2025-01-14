import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DAY, HOUR, MILLISECOND, MINUTE, SECOND } from "../Units/Units";
import TimeInterval from "./TimeInterval";
import DateTime from "../DateTime/DateTime";
import Duration from "../Duration/Duration";

describe("TimeInterval", () => {
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
      const timeInterval = new TimeInterval(start, end);

      // then
      expect(timeInterval).toBeInstanceOf(TimeInterval);
      expect(timeInterval.start).toEqual(start);
      expect(timeInterval.end).toEqual(end);
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
      const timeInterval = new TimeInterval(start, end);

      // when
      const duration = timeInterval.duration;

      // then
      expect(duration).toEqual(Duration.of(2 * DAY));
    });
  });
});
