import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DAY, HOUR, MILLISECOND, MINUTE, SECOND } from "../Units/Units";
import Duration from "./Duration";
import DateTime from "../DateTime/DateTime";

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
      // given
      const inMilliseconds =
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND;

      // when
      const duration = new Duration(inMilliseconds);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(2);
    });
  });

  describe("inDays", () => {
    it("should return the total duration in days", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const inDays = duration.inDays;

      // then
      expect(inDays).toBe(6.521354189814815);
    });
  });

  describe("inHours", () => {
    it("should return the total duration in hours", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const inHours = duration.inHours;

      // then
      expect(inHours).toBe(156.51250055555556);
    });
  });

  describe("inMinutes", () => {
    it("should return the total duration in minutes", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const inMinutes = duration.inMinutes;

      // then
      expect(inMinutes).toBe(9390.750033333334);
    });
  });

  describe("inSeconds", () => {
    it("should return the total duration in seconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const inSeconds = duration.inSeconds;

      // then
      expect(inSeconds).toBe(563445.002);
    });
  });

  describe("inMilliseconds", () => {
    it("should return the total duration in milliseconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const inMilliseconds = duration.inMilliseconds;

      // then
      expect(inMilliseconds).toBe(563445002);
    });
  });

  describe("valueOf", () => {
    it("should return the value of duration", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const value = duration.valueOf();

      // then
      expect(value).toBe(563_445_002);
    });
  });

  describe("toString", () => {
    it("should return the string of only days", () => {
      // given
      const duration = Duration.of(6 * DAY);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:00:00");
    });

    it("should return the string of only hours", () => {
      // given
      const duration = Duration.of(12 * HOUR);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:00:00");
    });

    it("should return the string of only minutes", () => {
      // given
      const duration = Duration.of(30 * MINUTE);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:30:00");
    });

    it("should return the string of only seconds", () => {
      // given
      const duration = Duration.of(45 * SECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:00:45");
    });

    it("should return the string of only milliseconds", () => {
      // given
      const duration = Duration.of(2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:00:00.002");
    });

    it("should return the string of only milliseconds", () => {
      // given
      const duration = Duration.of(500 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:00:00.500");
    });

    it("should return the string of days and hours", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:00:00");
    });

    it("should return the string of days and minutes", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:30:00");
    });

    it("should return the string of days and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 45 * SECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:00:45");
    });

    it("should return the string of days and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:00:00.002");
    });

    it("should return the string of hours and minutes", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:30:00");
    });

    it("should return the string of hours and seconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 45 * SECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:00:45");
    });

    it("should return the string of hours and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:00:00.002");
    });

    it("should return the string of minutes and seconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 45 * SECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:30:45");
    });

    it("should return the string of minutes and milliseconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:30:00.002");
    });

    it("should return the string of seconds and milliseconds", () => {
      // given
      const duration = Duration.of(45 * SECOND + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:00:45.002");
    });

    it("should return the string of days, hours and minutes", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 30 * MINUTE);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:30:00");
    });

    it("should return the string of days, hours and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 45 * SECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:00:45");
    });

    it("should return the string of days, hours and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:00:00.002");
    });

    it("should return the string of days, minutes and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE + 45 * SECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:30:45");
    });

    it("should return the string of days, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:30:00.002");
    });

    it("should return the string of days, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:00:45.002");
    });

    it("should return the string of hours, minutes and seconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:30:45");
    });

    it("should return the string of hours, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:30:00.002");
    });

    it("should return the string of hours, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:00:45.002");
    });

    it("should return the string of minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 45 * SECOND + 2 * MILLISECOND);

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:30:45.002");
    });

    it("should return the string of days, hours, minutes and seconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:30:45");
    });

    it("should return the string of days, hours, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:30:00.002");
    });

    it("should return the string of hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:30:45.002");
    });

    it("should return the string of days, hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:30:45.002");
    });

    it("should return the string of negative days, hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("-6 days 12:30:45.002");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the duration", () => {
      // given
      const duration = Duration.of(1 * DAY);

      // when
      const primitive = +duration;

      // then
      expect(primitive).toBe(86_400_000);
    });

    it("should return a string when a string is expected of the duration", () => {
      // given
      const duration = Duration.of(1 * DAY);

      // when
      const primitive = `${duration}`;

      // then
      expect(primitive).toBe("1 day 00:00:00");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of duration", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const jsonStr = JSON.stringify(duration);

      // then
      expect(jsonStr).toBe(`"P6DT12H30M45.002S"`);
    });
  });

  describe("toISOString", () => {
    it("should return the ISO-8601 string of only days", () => {
      // given
      const duration = Duration.of(6 * DAY);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6D");
    });

    it("should return the ISO-8601 string of only hours", () => {
      // given
      const duration = Duration.of(12 * HOUR);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H");
    });

    it("should return the ISO-8601 string of only minutes", () => {
      // given
      const duration = Duration.of(30 * MINUTE);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT30M");
    });

    it("should return the ISO-8601 string of only seconds", () => {
      // given
      const duration = Duration.of(45 * SECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT45S");
    });

    it("should return the ISO-8601 string of only milliseconds", () => {
      // given
      const duration = Duration.of(2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT0.002S");
    });

    it("should return the ISO-8601 string of only milliseconds", () => {
      // given
      const duration = Duration.of(500 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT0.5S");
    });

    it("should return the ISO-8601 string of days and hours", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H");
    });

    it("should return the ISO-8601 string of days and minutes", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT30M");
    });

    it("should return the ISO-8601 string of days and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 45 * SECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT45S");
    });

    it("should return the ISO-8601 string of days and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT0.002S");
    });

    it("should return the ISO-8601 string of hours and minutes", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H30M");
    });

    it("should return the ISO-8601 string of hours and seconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 45 * SECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H45S");
    });

    it("should return the ISO-8601 string of hours and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H0.002S");
    });

    it("should return the ISO-8601 string of minutes and seconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 45 * SECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT30M45S");
    });

    it("should return the ISO-8601 string of minutes and milliseconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT30M0.002S");
    });

    it("should return the ISO-8601 string of seconds and milliseconds", () => {
      // given
      const duration = Duration.of(45 * SECOND + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT45.002S");
    });

    it("should return the ISO-8601 string of days, hours and minutes", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 30 * MINUTE);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H30M");
    });

    it("should return the ISO-8601 string of days, hours and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 45 * SECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H45S");
    });

    it("should return the ISO-8601 string of days, hours and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H0.002S");
    });

    it("should return the ISO-8601 string of days, minutes and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE + 45 * SECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT30M45S");
    });

    it("should return the ISO-8601 string of days, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT30M0.002S");
    });

    it("should return the ISO-8601 string of days, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT45.002S");
    });

    it("should return the ISO-8601 string of hours, minutes and seconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H30M45S");
    });

    it("should return the ISO-8601 string of hours, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H30M0.002S");
    });

    it("should return the ISO-8601 string of hours, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H45.002S");
    });

    it("should return the ISO-8601 string of minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 45 * SECOND + 2 * MILLISECOND);

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT30M45.002S");
    });

    it("should return the ISO-8601 string of days, hours, minutes and seconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H30M45S");
    });

    it("should return the ISO-8601 string of days, hours, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H30M0.002S");
    });

    it("should return the ISO-8601 string of hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H30M45.002S");
    });

    it("should return the ISO-8601 string of days, hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H30M45.002S");
    });

    it("should return the ISO-8601 string of negative days, hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("-P6DT12H30M45.002S");
    });
  });

  describe("toObject", () => {
    it("should return the object of only days", () => {
      // given
      const duration = Duration.of(6 * DAY);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ days: 6 });
    });

    it("should return the object of only hours", () => {
      // given
      const duration = Duration.of(12 * HOUR);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ hours: 12 });
    });

    it("should return the object of only minutes", () => {
      // given
      const duration = Duration.of(30 * MINUTE);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ minutes: 30 });
    });

    it("should return the object of only seconds", () => {
      // given
      const duration = Duration.of(45 * SECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ seconds: 45 });
    });

    it("should return the object of only milliseconds", () => {
      // given
      const duration = Duration.of(2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ milliseconds: 2 });
    });

    it("should return the object of days and hours", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ days: 6, hours: 12 });
    });

    it("should return the object of days and minutes", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        minutes: 30,
      });
    });

    it("should return the object of days and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 45 * SECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        seconds: 45,
      });
    });

    it("should return the object of days and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        milliseconds: 2,
      });
    });

    it("should return the object of hours and minutes", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hours: 12,
        minutes: 30,
      });
    });

    it("should return the object of hours and seconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 45 * SECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hours: 12,
        seconds: 45,
      });
    });

    it("should return the object of hours and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hours: 12,
        milliseconds: 2,
      });
    });

    it("should return the object of minutes and seconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 45 * SECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        minutes: 30,
        seconds: 45,
      });
    });

    it("should return the object of minutes and milliseconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        minutes: 30,
        milliseconds: 2,
      });
    });

    it("should return the object of seconds and milliseconds", () => {
      // given
      const duration = Duration.of(45 * SECOND + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of days, hours and minutes", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 30 * MINUTE);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        hours: 12,
        minutes: 30,
      });
    });

    it("should return the object of days, hours and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 45 * SECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        hours: 12,
        seconds: 45,
      });
    });

    it("should return the object of days, hours and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 12 * HOUR + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        hours: 12,
        milliseconds: 2,
      });
    });

    it("should return the object of days, minutes and seconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE + 45 * SECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        minutes: 30,
        seconds: 45,
      });
    });

    it("should return the object of days, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 30 * MINUTE + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        minutes: 30,
        milliseconds: 2,
      });
    });

    it("should return the object of days, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(6 * DAY + 45 * SECOND + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of hours, minutes and seconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE + 45 * SECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hours: 12,
        minutes: 30,
        seconds: 45,
      });
    });

    it("should return the object of hours, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 30 * MINUTE + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hours: 12,
        minutes: 30,
        milliseconds: 2,
      });
    });

    it("should return the object of hours, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(12 * HOUR + 45 * SECOND + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hours: 12,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(30 * MINUTE + 45 * SECOND + 2 * MILLISECOND);

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of days, hours, minutes and seconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND
      );

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
      });
    });

    it("should return the object of days, hours, minutes and milliseconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 2 * MILLISECOND
      );

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        hours: 12,
        minutes: 30,
        milliseconds: 2,
      });
    });

    it("should return the object of hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of days, hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      });
    });

    it("should return the object of negative days, hours, minutes, seconds and milliseconds", () => {
      // given
      const duration = Duration.of(
        -(6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND)
      );

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        days: -6,
        hours: -12,
        minutes: -30,
        seconds: -45,
        milliseconds: -2,
      });
    });
  });

  describe("equals", () => {
    it("should return true for equal durations", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(6 * DAY);

      // when
      const isEqual = duration1.equals(duration2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal durations", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(2 * DAY);

      // when
      const isEqual = duration1.equals(duration2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isLongerThan", () => {
    it("should return true when the duration is longer than the other duration", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(2 * DAY);

      // when
      const isLongerThan = duration1.isLongerThan(duration2);

      // then
      expect(isLongerThan).toBe(true);
    });

    it("should return false when the duration is equal to the other duration", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(6 * DAY);

      // when
      const isLongerThan = duration1.isLongerThan(duration2);

      // then
      expect(isLongerThan).toBe(false);
    });

    it("should return false when the duration is shorter than the other duration", () => {
      // given
      const duration1 = Duration.of(2 * DAY);
      const duration2 = Duration.of(6 * DAY);

      // when
      const isLongerThan = duration1.isLongerThan(duration2);

      // then
      expect(isLongerThan).toBe(false);
    });
  });

  describe("isShorterThan", () => {
    it("should return true when the duration is shorter than the other duration", () => {
      // given
      const duration1 = Duration.of(2 * DAY);
      const duration2 = Duration.of(6 * DAY);

      // when
      const isShorterThan = duration1.isShorterThan(duration2);

      // then
      expect(isShorterThan).toBe(true);
    });

    it("should return false when the duration is equal to the other duration", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(6 * DAY);

      // when
      const isShorterThan = duration1.isShorterThan(duration2);

      // then
      expect(isShorterThan).toBe(false);
    });

    it("should return false when the duration is longer than the other duration", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(2 * DAY);

      // when
      const isShorterThan = duration1.isShorterThan(duration2);

      // then
      expect(isShorterThan).toBe(false);
    });
  });

  describe("withDays", () => {
    it("should return a duration", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const durationWithDays = duration.withDays(3);

      // then
      expect(durationWithDays).toBeInstanceOf(Duration);
      expect(durationWithDays.days).toBe(3);
      expect(durationWithDays.hours).toBe(12);
      expect(durationWithDays.minutes).toBe(30);
      expect(durationWithDays.seconds).toBe(45);
      expect(durationWithDays.milliseconds).toBe(2);
    });
  });

  describe("withHours", () => {
    it("should return a duration", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const durationWithHours = duration.withHours(23);

      // then
      expect(durationWithHours).toBeInstanceOf(Duration);
      expect(durationWithHours.days).toBe(6);
      expect(durationWithHours.hours).toBe(23);
      expect(durationWithHours.minutes).toBe(30);
      expect(durationWithHours.seconds).toBe(45);
      expect(durationWithHours.milliseconds).toBe(2);
    });
  });

  describe("withMinutes", () => {
    it("should return a duration", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const durationWithMinutes = duration.withMinutes(59);

      // then
      expect(durationWithMinutes).toBeInstanceOf(Duration);
      expect(durationWithMinutes.days).toBe(6);
      expect(durationWithMinutes.hours).toBe(12);
      expect(durationWithMinutes.minutes).toBe(59);
      expect(durationWithMinutes.seconds).toBe(45);
      expect(durationWithMinutes.milliseconds).toBe(2);
    });
  });

  describe("withSeconds", () => {
    it("should return a duration", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const durationWithSeconds = duration.withSeconds(59);

      // then
      expect(durationWithSeconds).toBeInstanceOf(Duration);
      expect(durationWithSeconds.days).toBe(6);
      expect(durationWithSeconds.hours).toBe(12);
      expect(durationWithSeconds.minutes).toBe(30);
      expect(durationWithSeconds.seconds).toBe(59);
      expect(durationWithSeconds.milliseconds).toBe(2);
    });
  });

  describe("withMilliseconds", () => {
    it("should return a duration", () => {
      // given
      const duration = Duration.of(
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND
      );

      // when
      const durationWithMilliseconds = duration.withMilliseconds(999);

      // then
      expect(durationWithMilliseconds).toBeInstanceOf(Duration);
      expect(durationWithMilliseconds.days).toBe(6);
      expect(durationWithMilliseconds.hours).toBe(12);
      expect(durationWithMilliseconds.minutes).toBe(30);
      expect(durationWithMilliseconds.seconds).toBe(45);
      expect(durationWithMilliseconds.milliseconds).toBe(999);
    });
  });

  describe("plus", () => {
    it("should return the addition of durations", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(2 * DAY);

      // when
      const sum = duration1.plus(duration2);

      // then
      expect(sum).toBeInstanceOf(Duration);
      expect(sum.days).toBe(8);
      expect(sum.hours).toBe(0);
      expect(sum.minutes).toBe(0);
      expect(sum.seconds).toBe(0);
      expect(sum.milliseconds).toBe(0);
    });
  });

  describe("minus", () => {
    it("should return the subtraction of durations", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(2 * DAY);

      // when
      const diff = duration1.minus(duration2);

      // then
      expect(diff).toBeInstanceOf(Duration);
      expect(diff.days).toBe(4);
      expect(diff.hours).toBe(0);
      expect(diff.minutes).toBe(0);
      expect(diff.seconds).toBe(0);
      expect(diff.milliseconds).toBe(0);
    });
  });

  describe("multiplyBy", () => {
    it("should return the multiplication of durations", () => {
      // given
      const duration = Duration.of(6 * DAY);

      // when
      const product = duration.multiplyBy(2);

      // then
      expect(product).toBeInstanceOf(Duration);
      expect(product.days).toBe(12);
      expect(product.hours).toBe(0);
      expect(product.minutes).toBe(0);
      expect(product.seconds).toBe(0);
      expect(product.milliseconds).toBe(0);
    });
  });

  describe("divideBy", () => {
    it("should return the division of durations", () => {
      // given
      const duration = Duration.of(6 * DAY);

      // when
      const quotient = duration.divideBy(2);

      // then
      expect(quotient).toBeInstanceOf(Duration);
      expect(quotient.days).toBe(3);
      expect(quotient.hours).toBe(0);
      expect(quotient.minutes).toBe(0);
      expect(quotient.seconds).toBe(0);
      expect(quotient.milliseconds).toBe(0);
    });
  });

  describe("negate", () => {
    it("should return the negative duration of a positive duration", () => {
      // given
      const duration = Duration.of(6 * DAY);

      // when
      const negated = duration.negate();

      // then
      expect(negated).toBeInstanceOf(Duration);
      expect(negated.days).toBe(-6);
      expect(negated.hours).toBe(-0);
      expect(negated.minutes).toBe(-0);
      expect(negated.seconds).toBe(-0);
      expect(negated.milliseconds).toBe(-0);
    });

    it("should return the positive duration of a negative duration", () => {
      // given
      const duration = Duration.of(-6 * DAY);

      // when
      const negated = duration.negate();

      // then
      expect(negated).toBeInstanceOf(Duration);
      expect(negated.days).toBe(6);
      expect(negated.hours).toBe(0);
      expect(negated.minutes).toBe(0);
      expect(negated.seconds).toBe(0);
      expect(negated.milliseconds).toBe(0);
    });
  });

  describe("absolute", () => {
    it("should return the absolute of a negative duration", () => {
      // given
      const duration = Duration.of(-6 * DAY);

      // when
      const abs = duration.absolute();

      // then
      expect(abs).toBeInstanceOf(Duration);
      expect(abs.days).toBe(6);
      expect(abs.hours).toBe(0);
      expect(abs.minutes).toBe(0);
      expect(abs.seconds).toBe(0);
      expect(abs.milliseconds).toBe(0);
    });

    it("should return the absolute of a positive duration", () => {
      // given
      const duration = Duration.of(6 * DAY);

      // when
      const abs = duration.absolute();

      // then
      expect(abs).toBeInstanceOf(Duration);
      expect(abs.days).toBe(6);
      expect(abs.hours).toBe(0);
      expect(abs.minutes).toBe(0);
      expect(abs.seconds).toBe(0);
      expect(abs.milliseconds).toBe(0);
    });
  });

  describe("after", () => {
    it("should return a date after the duration since a given date", () => {
      // given
      const duration = Duration.of(2 * DAY);
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      // when
      const future = duration.after(datetime);

      // then
      expect(future).toBeInstanceOf(DateTime);
      expect(future.year).toBe(2024);
      expect(future.month).toBe(11);
      expect(future.day).toBe(9);
      expect(future.hour).toBe(12);
      expect(future.minute).toBe(56);
      expect(future.second).toBe(19);
      expect(future.millisecond).toBe(920);
    });
  });

  describe("before", () => {
    it("should return a date before the duration since a given date", () => {
      // given
      const duration = Duration.of(2 * DAY);
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      // when
      const past = duration.before(datetime);

      // then
      expect(past).toBeInstanceOf(DateTime);
      expect(past.year).toBe(2024);
      expect(past.month).toBe(11);
      expect(past.day).toBe(5);
      expect(past.hour).toBe(12);
      expect(past.minute).toBe(56);
      expect(past.second).toBe(19);
      expect(past.millisecond).toBe(920);
    });
  });

  describe("static of", () => {
    it("should return a duration", () => {
      // given
      const inMilliseconds =
        6 * DAY + 12 * HOUR + 30 * MINUTE + 45 * SECOND + 2 * MILLISECOND;

      // when
      const duration = Duration.of(inMilliseconds);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(2);
    });
  });

  describe("static fromObject", () => {
    it("should return the duration of zero from an object", () => {
      // given
      const objectLiteral = {};

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of only days from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of only hours from an object", () => {
      // given
      const objectLiteral = {
        hours: 12,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of only minutes from an object", () => {
      // given
      const objectLiteral = {
        minutes: 30,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of only seconds from an object", () => {
      // given
      const objectLiteral = {
        seconds: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of only milliseconds from an object", () => {
      // given
      const objectLiteral = {
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of days and hours from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        hours: 12,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of days and minutes from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        minutes: 30,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of days and seconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        seconds: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of days and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of hours and minutes from an object", () => {
      // given
      const objectLiteral = {
        hours: 12,
        minutes: 30,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of hours and seconds from an object", () => {
      // given
      const objectLiteral = {
        hours: 12,
        seconds: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of hours and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        hours: 12,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of minutes and seconds from an object", () => {
      // given
      const objectLiteral = {
        minutes: 30,
        seconds: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of minutes and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        minutes: 30,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of seconds and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        seconds: 45,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours and minutes from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        hours: 12,
        minutes: 30,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and seconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        hours: 12,
        seconds: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        hours: 12,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of days, minutes and seconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        minutes: 30,
        seconds: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of days, minutes and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        minutes: 30,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of days, seconds and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        seconds: 45,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes and seconds from an object", () => {
      // given
      const objectLiteral = {
        hours: 12,
        minutes: 30,
        seconds: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of hours, minutes and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        hours: 12,
        minutes: 30,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of hours, seconds and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        hours: 12,
        seconds: 45,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(0);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of minutes, seconds and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(0);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes and seconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours, minutes and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        hours: 12,
        minutes: 30,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 45,
        milliseconds: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(6);
      expect(duration.hours).toBe(12);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(45);
      expect(duration.milliseconds).toBe(2);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from an object", () => {
      // given
      const objectLiteral = {
        days: -6,
        hours: -12,
        minutes: -30,
        seconds: -45,
        milliseconds: -2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(-6);
      expect(duration.hours).toBe(-12);
      expect(duration.minutes).toBe(-30);
      expect(duration.seconds).toBe(-45);
      expect(duration.milliseconds).toBe(-2);
    });
  });

  describe("static fromString", () => {
    it("should return the duration of only days from a string", () => {
      // given
      const str = "6 days 00:00:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only hours from a string", () => {
      // given
      const str = "12:00:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only minutes from a string", () => {
      // given
      const str = "00:30:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only seconds from a string", () => {
      // given
      const str = "00:00:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only milliseconds from a string", () => {
      // given
      const str = "00:00:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of only milliseconds from a string", () => {
      // given
      const str = "00:00:00.500";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(500);
    });

    it("should return the duration of days and hours from a string", () => {
      // given
      const str = "6 days 12:00:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and minutes from a string", () => {
      // given
      const str = "6 days 00:30:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and seconds from a string", () => {
      // given
      const str = "6 days 00:00:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and milliseconds from a string", () => {
      // given
      const str = "6 days 00:00:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours and minutes from a string", () => {
      // given
      const str = "12:30:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours and seconds from a string", () => {
      // given
      const str = "12:00:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours and milliseconds from a string", () => {
      // given
      const str = "12:00:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of minutes and seconds from a string", () => {
      // given
      const str = "00:30:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of minutes and milliseconds from a string", () => {
      // given
      const str = "00:30:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of seconds and milliseconds from a string", () => {
      // given
      const str = "00:00:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours and minutes from a string", () => {
      // given
      const str = "6 days 12:30:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and seconds from a string", () => {
      // given
      const str = "6 days 12:00:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and milliseconds from a string", () => {
      // given
      const str = "6 days 12:00:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, minutes and seconds from a string", () => {
      // given
      const str = "6 days 00:30:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, minutes and milliseconds from a string", () => {
      // given
      const str = "6 days 00:30:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, seconds and milliseconds from a string", () => {
      // given
      const str = "6 days 00:00:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes and seconds from a string", () => {
      // given
      const str = "12:30:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours, minutes and milliseconds from a string", () => {
      // given
      const str = "12:30:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, seconds and milliseconds from a string", () => {
      // given
      const str = "12:00:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of minutes, seconds and milliseconds from a string", () => {
      // given
      const str = "00:30:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes and seconds from a string", () => {
      // given
      const str = "6 days 12:30:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours, minutes and milliseconds from a string", () => {
      // given
      const str = "6 days 12:30:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from a string", () => {
      // given
      const str = "12:30:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from a string", () => {
      // given
      const str = "6 days 12:30:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from a string", () => {
      // given
      const str = "-6 days 12:30:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(-6);
      expect(duration!.hours).toBe(-12);
      expect(duration!.minutes).toBe(-30);
      expect(duration!.seconds).toBe(-45);
      expect(duration!.milliseconds).toBe(-2);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "-6 year 15:97ss";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeNull();
    });
  });

  describe("static fromISOString", () => {
    it("should return the duration of only days from an iso string", () => {
      // given
      const str = "P6D";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only hours from an iso string", () => {
      // given
      const str = "PT12H";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only minutes from an iso string", () => {
      // given
      const str = "PT30M";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only seconds from an iso string", () => {
      // given
      const str = "PT45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      // given
      const str = "PT0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      // given
      const str = "PT0.500S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(500);
    });

    it("should return the duration of days and hours from an iso string", () => {
      // given
      const str = "P6DT12H";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and minutes from an iso string", () => {
      // given
      const str = "P6DT30M";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and seconds from an iso string", () => {
      // given
      const str = "P6DT45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and milliseconds from an iso string", () => {
      // given
      const str = "P6DT0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours and minutes from an iso string", () => {
      // given
      const str = "PT12H30M";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours and seconds from an iso string", () => {
      // given
      const str = "PT12H45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours and milliseconds from an iso string", () => {
      // given
      const str = "PT12H0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of minutes and seconds from an iso string", () => {
      // given
      const str = "PT30M45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of minutes and milliseconds from an iso string", () => {
      // given
      const str = "PT30M0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of seconds and milliseconds from an iso string", () => {
      // given
      const str = "PT45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours and minutes from an iso string", () => {
      // given
      const str = "P6DT12H30M";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and seconds from an iso string", () => {
      // given
      const str = "P6DT12H45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and milliseconds from an iso string", () => {
      // given
      const str = "P6DT12H0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, minutes and seconds from an iso string", () => {
      // given
      const str = "P6DT30M45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, minutes and milliseconds from an iso string", () => {
      // given
      const str = "P6DT30M0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, seconds and milliseconds from an iso string", () => {
      // given
      const str = "P6DT45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes and seconds from an iso string", () => {
      // given
      const str = "PT12H30M45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours, minutes and milliseconds from an iso string", () => {
      // given
      const str = "PT12H30M0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, seconds and milliseconds from an iso string", () => {
      // given
      const str = "PT12H45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of minutes, seconds and milliseconds from an iso string", () => {
      // given
      const str = "PT30M45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes and seconds from an iso string", () => {
      // given
      const str = "P6DT12H30M45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours, minutes and milliseconds from an iso string", () => {
      // given
      const str = "P6DT12H30M0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from an iso string", () => {
      // given
      const str = "PT12H30M45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from an iso string", () => {
      // given
      const str = "P6DT12H30M45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from an iso string", () => {
      // given
      const str = "-P6DT12H30M45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(-6);
      expect(duration!.hours).toBe(-12);
      expect(duration!.minutes).toBe(-30);
      expect(duration!.seconds).toBe(-45);
      expect(duration!.milliseconds).toBe(-2);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "-6DT12:30MW002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeNull();
    });
  });

  describe("static parse", () => {
    it("should return the duration of only days from a string", () => {
      // given
      const str = "6 days 00:00:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only hours from a string", () => {
      // given
      const str = "12:00:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only minutes from a string", () => {
      // given
      const str = "00:30:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only seconds from a string", () => {
      // given
      const str = "00:00:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only milliseconds from a string", () => {
      // given
      const str = "00:00:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of only milliseconds from a string", () => {
      // given
      const str = "00:00:00.500";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(500);
    });

    it("should return the duration of days and hours from a string", () => {
      // given
      const str = "6 days 12:00:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and minutes from a string", () => {
      // given
      const str = "6 days 00:30:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and seconds from a string", () => {
      // given
      const str = "6 days 00:00:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and milliseconds from a string", () => {
      // given
      const str = "6 days 00:00:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours and minutes from a string", () => {
      // given
      const str = "12:30:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours and seconds from a string", () => {
      // given
      const str = "12:00:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours and milliseconds from a string", () => {
      // given
      const str = "12:00:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of minutes and seconds from a string", () => {
      // given
      const str = "00:30:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of minutes and milliseconds from a string", () => {
      // given
      const str = "00:30:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of seconds and milliseconds from a string", () => {
      // given
      const str = "00:00:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours and minutes from a string", () => {
      // given
      const str = "6 days 12:30:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and seconds from a string", () => {
      // given
      const str = "6 days 12:00:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and milliseconds from a string", () => {
      // given
      const str = "6 days 12:00:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, minutes and seconds from a string", () => {
      // given
      const str = "6 days 00:30:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, minutes and milliseconds from a string", () => {
      // given
      const str = "6 days 00:30:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, seconds and milliseconds from a string", () => {
      // given
      const str = "6 days 00:00:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes and seconds from a string", () => {
      // given
      const str = "12:30:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours, minutes and milliseconds from a string", () => {
      // given
      const str = "12:30:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, seconds and milliseconds from a string", () => {
      // given
      const str = "12:00:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of minutes, seconds and milliseconds from a string", () => {
      // given
      const str = "00:30:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes and seconds from a string", () => {
      // given
      const str = "6 days 12:30:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours, minutes and milliseconds from a string", () => {
      // given
      const str = "6 days 12:30:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from a string", () => {
      // given
      const str = "12:30:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from a string", () => {
      // given
      const str = "6 days 12:30:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from a string", () => {
      // given
      const str = "-6 days 12:30:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(-6);
      expect(duration!.hours).toBe(-12);
      expect(duration!.minutes).toBe(-30);
      expect(duration!.seconds).toBe(-45);
      expect(duration!.milliseconds).toBe(-2);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "-6 year 15:97ss";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeNull();
    });

    it("should return the duration of only days from an iso string", () => {
      // given
      const str = "P6D";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only hours from an iso string", () => {
      // given
      const str = "PT12H";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only minutes from an iso string", () => {
      // given
      const str = "PT30M";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only seconds from an iso string", () => {
      // given
      const str = "PT45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      // given
      const str = "PT0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      // given
      const str = "PT0.500S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(500);
    });

    it("should return the duration of days and hours from an iso string", () => {
      // given
      const str = "P6DT12H";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and minutes from an iso string", () => {
      // given
      const str = "P6DT30M";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and seconds from an iso string", () => {
      // given
      const str = "P6DT45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days and milliseconds from an iso string", () => {
      // given
      const str = "P6DT0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours and minutes from an iso string", () => {
      // given
      const str = "PT12H30M";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours and seconds from an iso string", () => {
      // given
      const str = "PT12H45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours and milliseconds from an iso string", () => {
      // given
      const str = "PT12H0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of minutes and seconds from an iso string", () => {
      // given
      const str = "PT30M45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of minutes and milliseconds from an iso string", () => {
      // given
      const str = "PT30M0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of seconds and milliseconds from an iso string", () => {
      // given
      const str = "PT45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours and minutes from an iso string", () => {
      // given
      const str = "P6DT12H30M";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and seconds from an iso string", () => {
      // given
      const str = "P6DT12H45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours and milliseconds from an iso string", () => {
      // given
      const str = "P6DT12H0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, minutes and seconds from an iso string", () => {
      // given
      const str = "P6DT30M45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, minutes and milliseconds from an iso string", () => {
      // given
      const str = "P6DT30M0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, seconds and milliseconds from an iso string", () => {
      // given
      const str = "P6DT45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes and seconds from an iso string", () => {
      // given
      const str = "PT12H30M45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of hours, minutes and milliseconds from an iso string", () => {
      // given
      const str = "PT12H30M0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, seconds and milliseconds from an iso string", () => {
      // given
      const str = "PT12H45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(0);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of minutes, seconds and milliseconds from an iso string", () => {
      // given
      const str = "PT30M45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(0);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes and seconds from an iso string", () => {
      // given
      const str = "P6DT12H30M45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(0);
    });

    it("should return the duration of days, hours, minutes and milliseconds from an iso string", () => {
      // given
      const str = "P6DT12H30M0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(0);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from an iso string", () => {
      // given
      const str = "PT12H30M45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(0);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from an iso string", () => {
      // given
      const str = "P6DT12H30M45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(6);
      expect(duration!.hours).toBe(12);
      expect(duration!.minutes).toBe(30);
      expect(duration!.seconds).toBe(45);
      expect(duration!.milliseconds).toBe(2);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from an iso string", () => {
      // given
      const str = "-P6DT12H30M45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration!.days).toBe(-6);
      expect(duration!.hours).toBe(-12);
      expect(duration!.minutes).toBe(-30);
      expect(duration!.seconds).toBe(-45);
      expect(duration!.milliseconds).toBe(-2);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "-6DT12:30MW002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeNull();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the duration is longer than the other duration", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(2 * DAY);

      // when
      const comparison = Duration.compare(duration1, duration2);

      // then
      expect(comparison).toBe(345_600_000);
    });

    it("should return zero when the duration is equal to the other duration", () => {
      // given
      const duration1 = Duration.of(6 * DAY);
      const duration2 = Duration.of(6 * DAY);

      // when
      const comparison = Duration.compare(duration1, duration2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the duration is shorter than the other duration", () => {
      // given
      const duration1 = Duration.of(2 * DAY);
      const duration2 = Duration.of(6 * DAY);

      // when
      const comparison = Duration.compare(duration1, duration2);

      // then
      expect(comparison).toBe(-345_600_000);
    });
  });
});
