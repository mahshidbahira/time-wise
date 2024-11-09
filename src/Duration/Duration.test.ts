import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DAY, HOUR, MILLISECOND, MINUTE, SECOND } from "../Units/Units";
import Duration from "./Duration";

describe("Duration", () => {
  const now = new Date();

  beforeEach(() => {
    vi.useFakeTimers().setSystemTime(now);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("constructor", () => {
    it("should return a duration", () => {
      const duration = new Duration(1 * DAY);
      expect(duration).toBeInstanceOf(Duration);
    });
  });

  describe("milliseconds", () => {
    it("should return the duration in milliseconds", () => {
      const duration = new Duration(1 * DAY);
      expect(duration.milliseconds).toBe(86_400_000);
    });
  });

  describe("seconds", () => {
    it("should return the duration in seconds", () => {
      const duration = new Duration(1 * DAY);
      expect(duration.seconds).toBe(86_400);
    });
  });

  describe("minutes", () => {
    it("should return the duration in minutes", () => {
      const duration = new Duration(1 * DAY);
      expect(duration.minutes).toBe(1_440);
    });
  });

  describe("hours", () => {
    it("should return the duration in hours", () => {
      const duration = new Duration(1 * DAY);
      expect(duration.hours).toBe(24);
    });
  });

  describe("days", () => {
    it("should return the duration in days", () => {
      const duration = new Duration(1 * DAY);
      expect(duration.days).toBe(1);
    });
  });

  describe("valueOf", () => {
    it("should return the value of duration", () => {
      const duration = new Duration(1 * DAY);
      expect(duration.valueOf()).toBe(86_400_000);
    });
  });

  describe("toString", () => {
    it("should return the string of only days", () => {
      const duration = new Duration(6 * DAY);

      expect(duration.toString()).toBe("6 days 00:00:00");
    });

    it("should return the string of only hours", () => {
      const duration = new Duration(12 * HOUR);

      expect(duration.toString()).toBe("12:00:00");
    });

    it("should return the string of only minutes", () => {
      const duration = new Duration(30 * MINUTE);

      expect(duration.toString()).toBe("00:30:00");
    });

    it("should return the string of only seconds", () => {
      const duration = new Duration(45 * SECOND);

      expect(duration.toString()).toBe("00:00:45");
    });

    it("should return the string of only milliseconds", () => {
      const duration = new Duration(2 * MILLISECOND);

      expect(duration.toString()).toBe("00:00:00.002");
    });

    it("should return the string of only milliseconds", () => {
      const duration = new Duration(500 * MILLISECOND);

      expect(duration.toString()).toBe("00:00:00.500");
    });

    it("should return the string of days and hours", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR);

      expect(duration.toString()).toBe("6 days 12:00:00");
    });

    it("should return the string of days and minutes", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE);

      expect(duration.toString()).toBe("6 days 00:30:00");
    });

    it("should return the string of days and seconds", () => {
      const duration = new Duration(6 * DAY + 45 * SECOND);

      expect(duration.toString()).toBe("6 days 00:00:45");
    });

    it("should return the string of days and milliseconds", () => {
      const duration = new Duration(6 * DAY + 2 * MILLISECOND);

      expect(duration.toString()).toBe("6 days 00:00:00.002");
    });

    it("should return the string of hours and minutes", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE);

      expect(duration.toString()).toBe("12:30:00");
    });

    it("should return the string of hours and seconds", () => {
      const duration = new Duration(12 * HOUR + 45 * SECOND);

      expect(duration.toString()).toBe("12:00:45");
    });

    it("should return the string of hours and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 2 * MILLISECOND);

      expect(duration.toString()).toBe("12:00:00.002");
    });

    it("should return the string of minutes and seconds", () => {
      const duration = new Duration(30 * MINUTE + 45 * SECOND);

      expect(duration.toString()).toBe("00:30:45");
    });

    it("should return the string of minutes and milliseconds", () => {
      const duration = new Duration(30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toString()).toBe("00:30:00.002");
    });

    it("should return the string of seconds and milliseconds", () => {
      const duration = new Duration(45 * SECOND + 2 * MILLISECOND);

      expect(duration.toString()).toBe("00:00:45.002");
    });

    it("should return the string of days, hours and minutes", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 30 * MINUTE);

      expect(duration.toString()).toBe("6 days 12:30:00");
    });

    it("should return the string of days, hours and seconds", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 45 * SECOND);

      expect(duration.toString()).toBe("6 days 12:00:45");
    });

    it("should return the string of days, hours and milliseconds", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      expect(duration.toString()).toBe("6 days 12:00:00.002");
    });

    it("should return the string of days, minutes and seconds", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE + 45 * SECOND);

      expect(duration.toString()).toBe("6 days 00:30:45");
    });

    it("should return the string of days, minutes and milliseconds", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toString()).toBe("6 days 00:30:00.002");
    });

    it("should return the string of days, seconds and milliseconds", () => {
      const duration = new Duration(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      expect(duration.toString()).toBe("6 days 00:00:45.002");
    });

    it("should return the string of hours, minutes and seconds", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      expect(duration.toString()).toBe("12:30:45");
    });

    it("should return the string of hours, minutes and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toString()).toBe("12:30:00.002");
    });

    it("should return the string of hours, seconds and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      expect(duration.toString()).toBe("12:00:45.002");
    });

    it("should return the string of minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toString()).toBe("00:30:45.002");
    });

    it("should return the string of days, hours, minutes and seconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      expect(duration.toString()).toBe("6 days 12:30:45");
    });

    it("should return the string of days, hours, minutes and milliseconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      expect(duration.toString()).toBe("6 days 12:30:00.002");
    });

    it("should return the string of hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toString()).toBe("12:30:45.002");
    });

    it("should return the string of days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toString()).toBe("6 days 12:30:45.002");
    });

    it("should return the string of negative days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      expect(duration.toString()).toBe("-6 days 12:30:45.002");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the duration", () => {
      const duration = new Duration(1 * DAY);
      expect(+duration).toBe(86_400_000);
    });

    it("should return a string when a string is expected of the duration", () => {
      const duration = new Duration(1 * DAY);
      expect(`${duration}`).toBe("1 day 00:00:00");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of duration", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(JSON.stringify(duration)).toBe(`"P6DT12H30M45.002S"`);
    });
  });

  describe("toISOString", () => {
    it("should return the ISO-8601 string of only days", () => {
      const duration = new Duration(6 * DAY);

      expect(duration.toISOString()).toBe("P6D");
    });

    it("should return the ISO-8601 string of only hours", () => {
      const duration = new Duration(12 * HOUR);

      expect(duration.toISOString()).toBe("PT12H");
    });

    it("should return the ISO-8601 string of only minutes", () => {
      const duration = new Duration(30 * MINUTE);

      expect(duration.toISOString()).toBe("PT30M");
    });

    it("should return the ISO-8601 string of only seconds", () => {
      const duration = new Duration(45 * SECOND);

      expect(duration.toISOString()).toBe("PT45S");
    });

    it("should return the ISO-8601 string of only milliseconds", () => {
      const duration = new Duration(2 * MILLISECOND);

      expect(duration.toISOString()).toBe("PT0.002S");
    });

    it("should return the ISO-8601 string of only milliseconds", () => {
      const duration = new Duration(500 * MILLISECOND);

      expect(duration.toISOString()).toBe("PT0.5S");
    });

    it("should return the ISO-8601 string of days and hours", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR);

      expect(duration.toISOString()).toBe("P6DT12H");
    });

    it("should return the ISO-8601 string of days and minutes", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE);

      expect(duration.toISOString()).toBe("P6DT30M");
    });

    it("should return the ISO-8601 string of days and seconds", () => {
      const duration = new Duration(6 * DAY + 45 * SECOND);

      expect(duration.toISOString()).toBe("P6DT45S");
    });

    it("should return the ISO-8601 string of days and milliseconds", () => {
      const duration = new Duration(6 * DAY + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("P6DT0.002S");
    });

    it("should return the ISO-8601 string of hours and minutes", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE);

      expect(duration.toISOString()).toBe("PT12H30M");
    });

    it("should return the ISO-8601 string of hours and seconds", () => {
      const duration = new Duration(12 * HOUR + 45 * SECOND);

      expect(duration.toISOString()).toBe("PT12H45S");
    });

    it("should return the ISO-8601 string of hours and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("PT12H0.002S");
    });

    it("should return the ISO-8601 string of minutes and seconds", () => {
      const duration = new Duration(30 * MINUTE + 45 * SECOND);

      expect(duration.toISOString()).toBe("PT30M45S");
    });

    it("should return the ISO-8601 string of minutes and milliseconds", () => {
      const duration = new Duration(30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("PT30M0.002S");
    });

    it("should return the ISO-8601 string of seconds and milliseconds", () => {
      const duration = new Duration(45 * SECOND + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("PT45.002S");
    });

    it("should return the ISO-8601 string of days, hours and minutes", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 30 * MINUTE);

      expect(duration.toISOString()).toBe("P6DT12H30M");
    });

    it("should return the ISO-8601 string of days, hours and seconds", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 45 * SECOND);

      expect(duration.toISOString()).toBe("P6DT12H45S");
    });

    it("should return the ISO-8601 string of days, hours and milliseconds", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("P6DT12H0.002S");
    });

    it("should return the ISO-8601 string of days, minutes and seconds", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE + 45 * SECOND);

      expect(duration.toISOString()).toBe("P6DT30M45S");
    });

    it("should return the ISO-8601 string of days, minutes and milliseconds", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("P6DT30M0.002S");
    });

    it("should return the ISO-8601 string of days, seconds and milliseconds", () => {
      const duration = new Duration(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("P6DT45.002S");
    });

    it("should return the ISO-8601 string of hours, minutes and seconds", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      expect(duration.toISOString()).toBe("PT12H30M45S");
    });

    it("should return the ISO-8601 string of hours, minutes and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("PT12H30M0.002S");
    });

    it("should return the ISO-8601 string of hours, seconds and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      expect(duration.toISOString()).toBe("PT12H45.002S");
    });

    it("should return the ISO-8601 string of minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toISOString()).toBe("PT30M45.002S");
    });

    it("should return the ISO-8601 string of days, hours, minutes and seconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      expect(duration.toISOString()).toBe("P6DT12H30M45S");
    });

    it("should return the ISO-8601 string of days, hours, minutes and milliseconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      expect(duration.toISOString()).toBe("P6DT12H30M0.002S");
    });

    it("should return the ISO-8601 string of hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toISOString()).toBe("PT12H30M45.002S");
    });

    it("should return the ISO-8601 string of days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toISOString()).toBe("P6DT12H30M45.002S");
    });

    it("should return the ISO-8601 string of negative days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      expect(duration.toISOString()).toBe("-P6DT12H30M45.002S");
    });
  });

  describe("toObject", () => {
    it("should return the object of only days", () => {
      const duration = new Duration(6 * DAY);

      expect(duration.toObject()).toEqual({ days: 6 });
    });

    it("should return the object of only hours", () => {
      const duration = new Duration(12 * HOUR);

      expect(duration.toObject()).toEqual({ hours: 12 });
    });

    it("should return the object of only minutes", () => {
      const duration = new Duration(30 * MINUTE);

      expect(duration.toObject()).toEqual({ minutes: 30 });
    });

    it("should return the object of only seconds", () => {
      const duration = new Duration(45 * SECOND);

      expect(duration.toObject()).toEqual({ seconds: 45 });
    });

    it("should return the object of only milliseconds", () => {
      const duration = new Duration(2 * MILLISECOND);

      expect(duration.toObject()).toEqual({ milliseconds: 2 });
    });

    it("should return the object of days and hours", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR);

      expect(duration.toObject()).toEqual({ days: 6, hours: 12 });
    });

    it("should return the object of days and minutes", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE);

      expect(duration.toObject()).toEqual({
        days: 6,
        minutes: 30,
      });
    });

    it("should return the object of days and seconds", () => {
      const duration = new Duration(6 * DAY + 45 * SECOND);

      expect(duration.toObject()).toEqual({
        days: 6,
        seconds: 45,
      });
    });

    it("should return the object of days and milliseconds", () => {
      const duration = new Duration(6 * DAY + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        days: 6,
        milliseconds: 2,
      });
    });

    it("should return the object of hours and minutes", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE);

      expect(duration.toObject()).toEqual({
        hours: 12,
        minutes: 30,
      });
    });

    it("should return the object of hours and seconds", () => {
      const duration = new Duration(12 * HOUR + 45 * SECOND);

      expect(duration.toObject()).toEqual({
        hours: 12,
        seconds: 45,
      });
    });

    it("should return the object of hours and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        hours: 12,
        milliseconds: 2,
      });
    });

    it("should return the object of minutes and seconds", () => {
      const duration = new Duration(30 * MINUTE + 45 * SECOND);

      expect(duration.toObject()).toEqual({
        minutes: 30,
        seconds: 45,
      });
    });

    it("should return the object of minutes and milliseconds", () => {
      const duration = new Duration(30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        minutes: 30,
        milliseconds: 2,
      });
    });

    it("should return the object of seconds and milliseconds", () => {
      const duration = new Duration(45 * SECOND + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of days, hours and minutes", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 30 * MINUTE);

      expect(duration.toObject()).toEqual({
        days: 6,
        hours: 12,
        minutes: 30,
      });
    });

    it("should return the object of days, hours and seconds", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 45 * SECOND);

      expect(duration.toObject()).toEqual({
        days: 6,
        hours: 12,
        seconds: 45,
      });
    });

    it("should return the object of days, hours and milliseconds", () => {
      const duration = new Duration(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        days: 6,
        hours: 12,
        milliseconds: 2,
      });
    });

    it("should return the object of days, minutes and seconds", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE + 45 * SECOND);

      expect(duration.toObject()).toEqual({
        days: 6,
        minutes: 30,
        seconds: 45,
      });
    });

    it("should return the object of days, minutes and milliseconds", () => {
      const duration = new Duration(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        days: 6,
        minutes: 30,
        milliseconds: 2,
      });
    });

    it("should return the object of days, seconds and milliseconds", () => {
      const duration = new Duration(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        days: 6,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of hours, minutes and seconds", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      expect(duration.toObject()).toEqual({
        hours: 12,
        minutes: 30,
        seconds: 45,
      });
    });

    it("should return the object of hours, minutes and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        hours: 12,
        minutes: 30,
        milliseconds: 2,
      });
    });

    it("should return the object of hours, seconds and milliseconds", () => {
      const duration = new Duration(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      expect(duration.toObject()).toEqual({
        hours: 12,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toObject()).toEqual({
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of days, hours, minutes and seconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      expect(duration.toObject()).toEqual({
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
      });
    });

    it("should return the object of days, hours, minutes and milliseconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      expect(duration.toObject()).toEqual({
        days: 6,
        hours: 12,
        minutes: 30,
        milliseconds: 2,
      });
    });

    it("should return the object of hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toObject()).toEqual({
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(duration.toObject()).toEqual({
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of negative days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      expect(duration.toObject()).toEqual({
        negative: true,
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      });
    });
  });

  describe("equals", () => {
    it("should return true for equal durations", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(6 * DAY);

      expect(duration1.equals(duration2)).toBe(true);
    });

    it("should return false for unequal durations", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(2 * DAY);

      expect(duration1.equals(duration2)).toBe(false);
    });
  });

  describe("isLongerThan", () => {
    it("should return true when the duration is longer than the other duration", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(2 * DAY);

      expect(duration1.isLongerThan(duration2)).toBe(true);
    });

    it("should return false when the duration is equal to the other duration", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(6 * DAY);

      expect(duration1.isLongerThan(duration2)).toBe(false);
    });

    it("should return false when the duration is shorter than the other duration", () => {
      const duration1 = new Duration(2 * DAY);
      const duration2 = new Duration(6 * DAY);

      expect(duration1.isLongerThan(duration2)).toBe(false);
    });
  });

  describe("isShorterThan", () => {
    it("should return true when the duration is shorter than the other duration", () => {
      const duration1 = new Duration(2 * DAY);
      const duration2 = new Duration(6 * DAY);

      expect(duration1.isShorterThan(duration2)).toBe(true);
    });

    it("should return false when the duration is equal to the other duration", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(6 * DAY);

      expect(duration1.isShorterThan(duration2)).toBe(false);
    });

    it("should return false when the duration is longer than the other duration", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(2 * DAY);

      expect(duration1.isShorterThan(duration2)).toBe(false);
    });
  });

  describe("plus", () => {
    it("should return the addition of durations", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(2 * DAY);

      expect(duration1.plus(duration2)).toEqual(new Duration(8 * DAY));
    });
  });

  describe("minus", () => {
    it("should return the subtraction of durations", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(2 * DAY);

      expect(duration1.minus(duration2)).toEqual(new Duration(4 * DAY));
    });
  });

  describe("multiply", () => {
    it("should return the multiplication of durations", () => {
      const duration = new Duration(6 * DAY);
      const factor = 2;

      expect(duration.multiply(factor)).toEqual(new Duration(12 * DAY));
    });
  });

  describe("divide", () => {
    it("should return the division of durations", () => {
      const duration = new Duration(6 * DAY);
      const divisor = 2;

      expect(duration.divide(divisor)).toEqual(new Duration(3 * DAY));
    });
  });

  describe("negate", () => {
    it("should return the negative duration of a positive duration", () => {
      const duration = new Duration(6 * DAY);

      expect(duration.negate()).toEqual(new Duration(-6 * DAY));
    });

    it("should return the positive duration of a negative duration", () => {
      const duration = new Duration(-6 * DAY);

      expect(duration.negate()).toEqual(new Duration(6 * DAY));
    });
  });

  describe("absolute", () => {
    it("should return the absolute of a negative duration", () => {
      const duration = new Duration(-6 * DAY);

      expect(duration.absolute()).toEqual(new Duration(6 * DAY));
    });

    it("should return the absolute of a positive duration", () => {
      const duration = new Duration(6 * DAY);

      expect(duration.absolute()).toEqual(new Duration(6 * DAY));
    });
  });

  describe("after", () => {
    it("should return a date after the duration since a given date", () => {
      const duration = new Duration(2 * DAY);
      const date = new Date(2001, 0, 22);

      expect(duration.after(date)).toEqual(new Date(2001, 0, 24));
    });
  });

  describe("before", () => {
    it("should return a date before the duration since a given date", () => {
      const duration = new Duration(2 * DAY);
      const date = new Date(2001, 0, 22);

      expect(duration.before(date)).toEqual(new Date(2001, 0, 20));
    });
  });

  describe("static of", () => {
    it("should return a duration", () => {
      const duration = Duration.of(1 * DAY);
      expect(duration).toBeInstanceOf(Duration);
    });
  });

  describe("static fromObject", () => {
    it("should return the duration of zero from an object", () => {
      const object = {};
      const duration = new Duration(0);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of only days from an object", () => {
      const object = {
        days: 6,
      };
      const duration = new Duration(6 * DAY);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of only hours from an object", () => {
      const object = {
        hours: 12,
      };
      const duration = new Duration(12 * HOUR);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of only minutes from an object", () => {
      const object = {
        minutes: 30,
      };
      const duration = new Duration(30 * MINUTE);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of only seconds from an object", () => {
      const object = {
        seconds: 45,
      };
      const duration = new Duration(45 * SECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from an object", () => {
      const object = {
        milliseconds: 2,
      };
      const duration = new Duration(2 * MILLISECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days and hours from an object", () => {
      const object = {
        days: 6,
        hours: 12,
      };
      const duration = new Duration(6 * DAY + 12 * HOUR);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days and minutes from an object", () => {
      const object = {
        days: 6,
        minutes: 30,
      };
      const duration = new Duration(6 * DAY + 30 * MINUTE);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days and seconds from an object", () => {
      const object = {
        days: 6,
        seconds: 45,
      };
      const duration = new Duration(6 * DAY + 45 * SECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days and milliseconds from an object", () => {
      const object = {
        days: 6,
        milliseconds: 2,
      };
      const duration = new Duration(6 * DAY + 2 * MILLISECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of hours and minutes from an object", () => {
      const object = {
        hours: 12,
        minutes: 30,
      };
      const duration = new Duration(12 * HOUR + 30 * MINUTE);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of hours and seconds from an object", () => {
      const object = {
        hours: 12,
        seconds: 45,
      };
      const duration = new Duration(12 * HOUR + 45 * SECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of hours and milliseconds from an object", () => {
      const object = {
        hours: 12,
        milliseconds: 2,
      };
      const duration = new Duration(12 * HOUR + 2 * MILLISECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of minutes and seconds from an object", () => {
      const object = {
        minutes: 30,
        seconds: 45,
      };
      const duration = new Duration(30 * MINUTE + 45 * SECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of minutes and milliseconds from an object", () => {
      const object = {
        minutes: 30,
        milliseconds: 2,
      };
      const duration = new Duration(30 * MINUTE + 2 * MILLISECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of seconds and milliseconds from an object", () => {
      const object = {
        seconds: 45,
        milliseconds: 2,
      };
      const duration = new Duration(45 * SECOND + 2 * MILLISECOND);
      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, hours and minutes from an object", () => {
      const object = {
        days: 6,
        hours: 12,
        minutes: 30,
      };
      const duration = new Duration(6 * DAY + 12 * HOUR + 30 * MINUTE);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, hours and seconds from an object", () => {
      const object = {
        days: 6,
        hours: 12,
        seconds: 45,
      };
      const duration = new Duration(6 * DAY + 12 * HOUR + 45 * SECOND);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, hours and milliseconds from an object", () => {
      const object = {
        days: 6,
        hours: 12,
        milliseconds: 2,
      };
      const duration = new Duration(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, minutes and seconds from an object", () => {
      const object = {
        days: 6,
        minutes: 30,
        seconds: 45,
      };
      const duration = new Duration(6 * DAY + 30 * MINUTE + 45 * SECOND);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, minutes and milliseconds from an object", () => {
      const object = {
        days: 6,
        minutes: 30,
        milliseconds: 2,
      };
      const duration = new Duration(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, seconds and milliseconds from an object", () => {
      const object = {
        days: 6,
        seconds: 45,
        milliseconds: 2,
      };
      const duration = new Duration(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and seconds from an object", () => {
      const object = {
        hours: 12,
        minutes: 30,
        seconds: 45,
      };
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and milliseconds from an object", () => {
      const object = {
        hours: 12,
        minutes: 30,
        milliseconds: 2,
      };
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of hours, seconds and milliseconds from an object", () => {
      const object = {
        hours: 12,
        seconds: 45,
        milliseconds: 2,
      };
      const duration = new Duration(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of minutes, seconds and milliseconds from an object", () => {
      const object = {
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      };
      const duration = new Duration(
        30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and seconds from an object", () => {
      const object = {
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
      };
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and milliseconds from an object", () => {
      const object = {
        days: 6,
        hours: 12,
        minutes: 30,
        milliseconds: 2,
      };
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from an object", () => {
      const object = {
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      };
      const duration = new Duration(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from an object", () => {
      const object = {
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      };
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromObject(object)).toEqual(duration);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from an object", () => {
      const object = {
        negative: true,
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      };
      const duration = new Duration(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      expect(Duration.fromObject(object)).toEqual(duration);
    });
  });

  describe("static fromString", () => {
    it("should return the duration of only days from a string", () => {
      const str = "6 days 00:00:00";
      const duration = new Duration(6 * DAY);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of only hours from a string", () => {
      const str = "12:00:00";
      const duration = new Duration(12 * HOUR);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of only minutes from a string", () => {
      const str = "00:30:00";
      const duration = new Duration(30 * MINUTE);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of only seconds from a string", () => {
      const str = "00:00:45";
      const duration = new Duration(45 * SECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from a string", () => {
      const str = "00:00:00.002";
      const duration = new Duration(2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from a string", () => {
      const str = "00:00:00.500";
      const duration = new Duration(500 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days and hours from a string", () => {
      const str = "6 days 12:00:00";
      const duration = new Duration(6 * DAY + 12 * HOUR);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days and minutes from a string", () => {
      const str = "6 days 00:30:00";
      const duration = new Duration(6 * DAY + 30 * MINUTE);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days and seconds from a string", () => {
      const str = "6 days 00:00:45";
      const duration = new Duration(6 * DAY + 45 * SECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days and milliseconds from a string", () => {
      const str = "6 days 00:00:00.002";
      const duration = new Duration(6 * DAY + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of hours and minutes from a string", () => {
      const str = "12:30:00";
      const duration = new Duration(12 * HOUR + 30 * MINUTE);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of hours and seconds from a string", () => {
      const str = "12:00:45";
      const duration = new Duration(12 * HOUR + 45 * SECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of hours and milliseconds from a string", () => {
      const str = "12:00:00.002";
      const duration = new Duration(12 * HOUR + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of minutes and seconds from a string", () => {
      const str = "00:30:45";
      const duration = new Duration(30 * MINUTE + 45 * SECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of minutes and milliseconds from a string", () => {
      const str = "00:30:00.002";
      const duration = new Duration(30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of seconds and milliseconds from a string", () => {
      const str = "00:00:45.002";
      const duration = new Duration(45 * SECOND + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and minutes from a string", () => {
      const str = "6 days 12:30:00";
      const duration = new Duration(6 * DAY + 12 * HOUR + 30 * MINUTE);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and seconds from a string", () => {
      const str = "6 days 12:00:45";
      const duration = new Duration(6 * DAY + 12 * HOUR + 45 * SECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and milliseconds from a string", () => {
      const str = "6 days 12:00:00.002";
      const duration = new Duration(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and seconds from a string", () => {
      const str = "6 days 00:30:45";
      const duration = new Duration(6 * DAY + 30 * MINUTE + 45 * SECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and milliseconds from a string", () => {
      const str = "6 days 00:30:00.002";
      const duration = new Duration(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, seconds and milliseconds from a string", () => {
      const str = "6 days 00:00:45.002";
      const duration = new Duration(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and seconds from a string", () => {
      const str = "12:30:45";
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and milliseconds from a string", () => {
      const str = "12:30:00.002";
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of hours, seconds and milliseconds from a string", () => {
      const str = "12:00:45.002";
      const duration = new Duration(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of minutes, seconds and milliseconds from a string", () => {
      const str = "00:30:45.002";
      const duration = new Duration(
        30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and seconds from a string", () => {
      const str = "6 days 12:30:45";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and milliseconds from a string", () => {
      const str = "6 days 12:30:00.002";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from a string", () => {
      const str = "12:30:45.002";
      const duration = new Duration(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from a string", () => {
      const str = "6 days 12:30:45.002";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from a string", () => {
      const str = "-6 days 12:30:45.002";
      const duration = new Duration(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      expect(Duration.fromString(str)).toEqual(duration);
    });

    it("should return null from an invalid string", () => {
      const str = "-6 year 15:97ss";

      expect(Duration.fromString(str)).toBeNull();
    });
  });

  describe("static fromISOString", () => {
    it("should return the duration of only days from an iso string", () => {
      const str = "P6D";
      const duration = new Duration(6 * DAY);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of only hours from an iso string", () => {
      const str = "PT12H";
      const duration = new Duration(12 * HOUR);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of only minutes from an iso string", () => {
      const str = "PT30M";
      const duration = new Duration(30 * MINUTE);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of only seconds from an iso string", () => {
      const str = "PT45S";
      const duration = new Duration(45 * SECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      const str = "PT0.002S";
      const duration = new Duration(2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      const str = "PT0.500S";
      const duration = new Duration(500 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days and hours from an iso string", () => {
      const str = "P6DT12H";
      const duration = new Duration(6 * DAY + 12 * HOUR);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days and minutes from an iso string", () => {
      const str = "P6DT30M";
      const duration = new Duration(6 * DAY + 30 * MINUTE);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days and seconds from an iso string", () => {
      const str = "P6DT45S";
      const duration = new Duration(6 * DAY + 45 * SECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days and milliseconds from an iso string", () => {
      const str = "P6DT0.002S";
      const duration = new Duration(6 * DAY + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of hours and minutes from an iso string", () => {
      const str = "PT12H30M";
      const duration = new Duration(12 * HOUR + 30 * MINUTE);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of hours and seconds from an iso string", () => {
      const str = "PT12H45S";
      const duration = new Duration(12 * HOUR + 45 * SECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of hours and milliseconds from an iso string", () => {
      const str = "PT12H0.002S";
      const duration = new Duration(12 * HOUR + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of minutes and seconds from an iso string", () => {
      const str = "PT30M45S";
      const duration = new Duration(30 * MINUTE + 45 * SECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of minutes and milliseconds from an iso string", () => {
      const str = "PT30M0.002S";
      const duration = new Duration(30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of seconds and milliseconds from an iso string", () => {
      const str = "PT45.002S";
      const duration = new Duration(45 * SECOND + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and minutes from an iso string", () => {
      const str = "P6DT12H30M";
      const duration = new Duration(6 * DAY + 12 * HOUR + 30 * MINUTE);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and seconds from an iso string", () => {
      const str = "P6DT12H45S";
      const duration = new Duration(6 * DAY + 12 * HOUR + 45 * SECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and milliseconds from an iso string", () => {
      const str = "P6DT12H0.002S";
      const duration = new Duration(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and seconds from an iso string", () => {
      const str = "P6DT30M45S";
      const duration = new Duration(6 * DAY + 30 * MINUTE + 45 * SECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and milliseconds from an iso string", () => {
      const str = "P6DT30M0.002S";
      const duration = new Duration(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, seconds and milliseconds from an iso string", () => {
      const str = "P6DT45.002S";
      const duration = new Duration(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and seconds from an iso string", () => {
      const str = "PT12H30M45S";
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and milliseconds from an iso string", () => {
      const str = "PT12H30M0.002S";
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of hours, seconds and milliseconds from an iso string", () => {
      const str = "PT12H45.002S";
      const duration = new Duration(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of minutes, seconds and milliseconds from an iso string", () => {
      const str = "PT30M45.002S";
      const duration = new Duration(
        30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and seconds from an iso string", () => {
      const str = "P6DT12H30M45S";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and milliseconds from an iso string", () => {
      const str = "P6DT12H30M0.002S";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "PT12H30M45.002S";
      const duration = new Duration(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "P6DT12H30M45.002S";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "-P6DT12H30M45.002S";
      const duration = new Duration(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      expect(Duration.fromISOString(str)).toEqual(duration);
    });

    it("should return null from an invalid string", () => {
      const str = "-6DT12:30MW002S";

      expect(Duration.fromISOString(str)).toBeNull();
    });
  });

  describe("static parse", () => {
    it("should return the duration of only days from a string", () => {
      const str = "6 days 00:00:00";
      const duration = new Duration(6 * DAY);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only hours from a string", () => {
      const str = "12:00:00";
      const duration = new Duration(12 * HOUR);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only minutes from a string", () => {
      const str = "00:30:00";
      const duration = new Duration(30 * MINUTE);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only seconds from a string", () => {
      const str = "00:00:45";
      const duration = new Duration(45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from a string", () => {
      const str = "00:00:00.002";
      const duration = new Duration(2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from a string", () => {
      const str = "00:00:00.500";
      const duration = new Duration(500 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and hours from a string", () => {
      const str = "6 days 12:00:00";
      const duration = new Duration(6 * DAY + 12 * HOUR);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and minutes from a string", () => {
      const str = "6 days 00:30:00";
      const duration = new Duration(6 * DAY + 30 * MINUTE);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and seconds from a string", () => {
      const str = "6 days 00:00:45";
      const duration = new Duration(6 * DAY + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and milliseconds from a string", () => {
      const str = "6 days 00:00:00.002";
      const duration = new Duration(6 * DAY + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and minutes from a string", () => {
      const str = "12:30:00";
      const duration = new Duration(12 * HOUR + 30 * MINUTE);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and seconds from a string", () => {
      const str = "12:00:45";
      const duration = new Duration(12 * HOUR + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and milliseconds from a string", () => {
      const str = "12:00:00.002";
      const duration = new Duration(12 * HOUR + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes and seconds from a string", () => {
      const str = "00:30:45";
      const duration = new Duration(30 * MINUTE + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes and milliseconds from a string", () => {
      const str = "00:30:00.002";
      const duration = new Duration(30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of seconds and milliseconds from a string", () => {
      const str = "00:00:45.002";
      const duration = new Duration(45 * SECOND + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and minutes from a string", () => {
      const str = "6 days 12:30:00";
      const duration = new Duration(6 * DAY + 12 * HOUR + 30 * MINUTE);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and seconds from a string", () => {
      const str = "6 days 12:00:45";
      const duration = new Duration(6 * DAY + 12 * HOUR + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and milliseconds from a string", () => {
      const str = "6 days 12:00:00.002";
      const duration = new Duration(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and seconds from a string", () => {
      const str = "6 days 00:30:45";
      const duration = new Duration(6 * DAY + 30 * MINUTE + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and milliseconds from a string", () => {
      const str = "6 days 00:30:00.002";
      const duration = new Duration(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, seconds and milliseconds from a string", () => {
      const str = "6 days 00:00:45.002";
      const duration = new Duration(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and seconds from a string", () => {
      const str = "12:30:45";
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and milliseconds from a string", () => {
      const str = "12:30:00.002";
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, seconds and milliseconds from a string", () => {
      const str = "12:00:45.002";
      const duration = new Duration(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes, seconds and milliseconds from a string", () => {
      const str = "00:30:45.002";
      const duration = new Duration(
        30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and seconds from a string", () => {
      const str = "6 days 12:30:45";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and milliseconds from a string", () => {
      const str = "6 days 12:30:00.002";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from a string", () => {
      const str = "12:30:45.002";
      const duration = new Duration(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from a string", () => {
      const str = "6 days 12:30:45.002";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from a string", () => {
      const str = "-6 days 12:30:45.002";
      const duration = new Duration(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only days from an iso string", () => {
      const str = "P6D";
      const duration = new Duration(6 * DAY);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only hours from an iso string", () => {
      const str = "PT12H";
      const duration = new Duration(12 * HOUR);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only minutes from an iso string", () => {
      const str = "PT30M";
      const duration = new Duration(30 * MINUTE);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only seconds from an iso string", () => {
      const str = "PT45S";
      const duration = new Duration(45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      const str = "PT0.002S";
      const duration = new Duration(2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      const str = "PT0.500S";
      const duration = new Duration(500 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and hours from an iso string", () => {
      const str = "P6DT12H";
      const duration = new Duration(6 * DAY + 12 * HOUR);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and minutes from an iso string", () => {
      const str = "P6DT30M";
      const duration = new Duration(6 * DAY + 30 * MINUTE);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and seconds from an iso string", () => {
      const str = "P6DT45S";
      const duration = new Duration(6 * DAY + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and milliseconds from an iso string", () => {
      const str = "P6DT0.002S";
      const duration = new Duration(6 * DAY + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and minutes from an iso string", () => {
      const str = "PT12H30M";
      const duration = new Duration(12 * HOUR + 30 * MINUTE);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and seconds from an iso string", () => {
      const str = "PT12H45S";
      const duration = new Duration(12 * HOUR + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and milliseconds from an iso string", () => {
      const str = "PT12H0.002S";
      const duration = new Duration(12 * HOUR + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes and seconds from an iso string", () => {
      const str = "PT30M45S";
      const duration = new Duration(30 * MINUTE + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes and milliseconds from an iso string", () => {
      const str = "PT30M0.002S";
      const duration = new Duration(30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of seconds and milliseconds from an iso string", () => {
      const str = "PT45.002S";
      const duration = new Duration(45 * SECOND + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and minutes from an iso string", () => {
      const str = "P6DT12H30M";
      const duration = new Duration(6 * DAY + 12 * HOUR + 30 * MINUTE);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and seconds from an iso string", () => {
      const str = "P6DT12H45S";
      const duration = new Duration(6 * DAY + 12 * HOUR + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and milliseconds from an iso string", () => {
      const str = "P6DT12H0.002S";
      const duration = new Duration(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and seconds from an iso string", () => {
      const str = "P6DT30M45S";
      const duration = new Duration(6 * DAY + 30 * MINUTE + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and milliseconds from an iso string", () => {
      const str = "P6DT30M0.002S";
      const duration = new Duration(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, seconds and milliseconds from an iso string", () => {
      const str = "P6DT45.002S";
      const duration = new Duration(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and seconds from an iso string", () => {
      const str = "PT12H30M45S";
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and milliseconds from an iso string", () => {
      const str = "PT12H30M0.002S";
      const duration = new Duration(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, seconds and milliseconds from an iso string", () => {
      const str = "PT12H45.002S";
      const duration = new Duration(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes, seconds and milliseconds from an iso string", () => {
      const str = "PT30M45.002S";
      const duration = new Duration(
        30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and seconds from an iso string", () => {
      const str = "P6DT12H30M45S";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and milliseconds from an iso string", () => {
      const str = "P6DT12H30M0.002S";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "PT12H30M45.002S";
      const duration = new Duration(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "P6DT12H30M45.002S";
      const duration = new Duration(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "-P6DT12H30M45.002S";
      const duration = new Duration(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return null from an invalid string", () => {
      const str = "-6DT12:30MW002S";

      expect(Duration.parse(str)).toBeNull();
    });
  });

  describe("static between", () => {
    it("should return the duration between two dates", () => {
      const since = new Date(2001, 0, 20);
      const until = new Date(2001, 0, 22);

      expect(Duration.between(since, until)).toEqual(new Duration(2 * DAY));
    });
  });

  describe("static since", () => {
    it("should return the duration since a date", () => {
      const date = new Date(now.getTime() - 2 * DAY);
      expect(Duration.since(date)).toEqual(new Duration(2 * DAY));
    });
  });

  describe("static until", () => {
    it("should return the duration until a date", () => {
      const date = new Date(now.getTime() + 2 * DAY);
      expect(Duration.until(date)).toEqual(new Duration(2 * DAY));
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the duration is longer than the other duration", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(2 * DAY);

      expect(Duration.compare(duration1, duration2)).toBe(345_600_000);
    });

    it("should return zero when the duration is equal to the other duration", () => {
      const duration1 = new Duration(6 * DAY);
      const duration2 = new Duration(6 * DAY);

      expect(Duration.compare(duration1, duration2)).toBe(0);
    });

    it("should return a negative number when the duration is shorter than the other duration", () => {
      const duration1 = new Duration(2 * DAY);
      const duration2 = new Duration(6 * DAY);

      expect(Duration.compare(duration1, duration2)).toBe(-345_600_000);
    });
  });
});
