import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
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
      // given
      const isPositive = true;
      const day = 6;
      const hour = 12;
      const minute = 30;
      const second = 45;
      const millisecond = 2;

      // when
      const duration = new Duration(
        isPositive,
        day,
        hour,
        minute,
        second,
        millisecond
      );

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    // it("should throw an error with invalid isPositive value", () => {
    //   // given
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   const isPositive: any = undefined;
    //   const day = 6;
    //   const hour = 12;
    //   const minute = 30;
    //   const second = 45;
    //   const millisecond = 2;

    //   // when/then
    //   expect(
    //     () => new Duration(isPositive, day, hour, minute, second, millisecond)
    //   ).toThrowError();
    // });

    it("should throw an error with invalid day", () => {
      // given
      const isPositive = true;
      const day = -1;
      const hour = 12;
      const minute = 30;
      const second = 45;
      const millisecond = 2;

      // when/then
      expect(
        () => new Duration(isPositive, day, hour, minute, second, millisecond)
      ).toThrowError();
    });

    it("should throw an error with invalid hour", () => {
      // given
      const isPositive = true;
      const day = 6;
      const hour = 24;
      const minute = 30;
      const second = 45;
      const millisecond = 2;

      // when/then
      expect(
        () => new Duration(isPositive, day, hour, minute, second, millisecond)
      ).toThrowError();
    });

    it("should throw an error with invalid minute", () => {
      // given
      const isPositive = true;
      const day = 6;
      const hour = 12;
      const minute = 60;
      const second = 45;
      const millisecond = 2;

      // when/then
      expect(
        () => new Duration(isPositive, day, hour, minute, second, millisecond)
      ).toThrowError();
    });

    it("should throw an error with invalid second", () => {
      // given
      const isPositive = true;
      const day = 6;
      const hour = 12;
      const minute = 30;
      const second = 60;
      const millisecond = 2;

      // when/then
      expect(
        () => new Duration(isPositive, day, hour, minute, second, millisecond)
      ).toThrowError();
    });

    it("should throw an error with invalid millisecond", () => {
      // given
      const isPositive = true;
      const day = 6;
      const hour = 12;
      const minute = 30;
      const second = 45;
      const millisecond = 1000;

      // when/then
      expect(
        () => new Duration(isPositive, day, hour, minute, second, millisecond)
      ).toThrowError();
    });
  });

  describe("inDays", () => {
    it("should return the total duration in days", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const inDays = duration.inDays;

      // then
      expect(inDays).toBe(6.521354189814815);
    });
  });

  describe("inHours", () => {
    it("should return the total duration in hours", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const inHours = duration.inHours;

      // then
      expect(inHours).toBe(156.51250055555556);
    });
  });

  describe("inMinutes", () => {
    it("should return the total duration in minutes", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const inMinutes = duration.inMinutes;

      // then
      expect(inMinutes).toBe(9390.750033333334);
    });
  });

  describe("inSeconds", () => {
    it("should return the total duration in seconds", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const inSeconds = duration.inSeconds;

      // then
      expect(inSeconds).toBe(563445.002);
    });
  });

  describe("inMilliseconds", () => {
    it("should return the total duration in milliseconds", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const inMilliseconds = duration.inMilliseconds;

      // then
      expect(inMilliseconds).toBe(563445002);
    });
  });

  describe("valueOf", () => {
    it("should return the value of duration", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const value = duration.valueOf();

      // then
      expect(value).toBe(563_445_002);
    });
  });

  describe("toString", () => {
    it("should return the string of only day", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:00:00");
    });

    it("should return the string of only hour", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:00:00");
    });

    it("should return the string of only minute", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:30:00");
    });

    it("should return the string of only second", () => {
      // given
      const duration = Duration.fromObject({
        second: 45,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:00:45");
    });

    it("should return the string of only millisecond", () => {
      // given
      const duration = Duration.fromObject({
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:00:00.002");
    });

    it("should return the string of only millisecond", () => {
      // given
      const duration = Duration.fromObject({
        millisecond: 500,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:00:00.500");
    });

    it("should return the string of day and hour", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:00:00");
    });

    it("should return the string of day and minute", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        minute: 30,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:30:00");
    });

    it("should return the string of day and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        second: 45,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:00:45");
    });

    it("should return the string of day and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:00:00.002");
    });

    it("should return the string of hour and minute", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:30:00");
    });

    it("should return the string of hour and second", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,

        second: 45,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:00:45");
    });

    it("should return the string of hour and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,

        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:00:00.002");
    });

    it("should return the string of minute and second", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
        second: 45,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:30:45");
    });

    it("should return the string of minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,

        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:30:00.002");
    });

    it("should return the string of second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        second: 45,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:00:45.002");
    });

    it("should return the string of day, hour and minute", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:30:00");
    });

    it("should return the string of day, hour and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,

        second: 45,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:00:45");
    });

    it("should return the string of day, hour and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,

        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:00:00.002");
    });

    it("should return the string of day, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        minute: 30,
        second: 45,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:30:45");
    });

    it("should return the string of day, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        minute: 30,

        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:30:00.002");
    });

    it("should return the string of day, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        second: 45,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 00:00:45.002");
    });

    it("should return the string of hour, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
        second: 45,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:30:45");
    });

    it("should return the string of hour, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:30:00.002");
    });

    it("should return the string of hour, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        second: 45,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:00:45.002");
    });

    it("should return the string of minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("00:30:45.002");
    });

    it("should return the string of day, hour, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:30:45");
    });

    it("should return the string of day, hour, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:30:00.002");
    });

    it("should return the string of hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("12:30:45.002");
    });

    it("should return the string of day, hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("6 days 12:30:45.002");
    });

    it("should return the string of negative day, hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        isPositive: false,
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const str = duration.toString();

      // then
      expect(str).toBe("-6 days 12:30:45.002");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the duration", () => {
      // given
      const duration = Duration.fromObject({
        day: 1,
      });

      // when
      const primitive = +duration;

      // then
      expect(primitive).toBe(86_400_000);
    });

    it("should return a string when a string is expected of the duration", () => {
      // given
      const duration = Duration.fromObject({
        day: 1,
      });

      // when
      const primitive = `${duration}`;

      // then
      expect(primitive).toBe("1 day 00:00:00");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of duration", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const jsonStr = JSON.stringify(duration);

      // then
      expect(jsonStr).toBe(`"P6DT12H30M45.002S"`);
    });
  });

  describe("toISOString", () => {
    it("should return the ISO-8601 string of only day", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6D");
    });

    it("should return the ISO-8601 string of only hour", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H");
    });

    it("should return the ISO-8601 string of only minute", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT30M");
    });

    it("should return the ISO-8601 string of only second", () => {
      // given
      const duration = Duration.fromObject({
        second: 45,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT45S");
    });

    it("should return the ISO-8601 string of only millisecond", () => {
      // given
      const duration = Duration.fromObject({
        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT0.002S");
    });

    it("should return the ISO-8601 string of only millisecond", () => {
      // given
      const duration = Duration.fromObject({
        millisecond: 500,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT0.5S");
    });

    it("should return the ISO-8601 string of day and hour", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H");
    });

    it("should return the ISO-8601 string of day and minute", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        minute: 30,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT30M");
    });

    it("should return the ISO-8601 string of day and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        second: 45,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT45S");
    });

    it("should return the ISO-8601 string of day and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT0.002S");
    });

    it("should return the ISO-8601 string of hour and minute", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H30M");
    });

    it("should return the ISO-8601 string of hour and second", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,

        second: 45,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H45S");
    });

    it("should return the ISO-8601 string of hour and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,

        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H0.002S");
    });

    it("should return the ISO-8601 string of minute and second", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
        second: 45,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT30M45S");
    });

    it("should return the ISO-8601 string of minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,

        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT30M0.002S");
    });

    it("should return the ISO-8601 string of second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        second: 45,
        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT45.002S");
    });

    it("should return the ISO-8601 string of day, hour and minute", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H30M");
    });

    it("should return the ISO-8601 string of day, hour and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,

        second: 45,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H45S");
    });

    it("should return the ISO-8601 string of day, hour and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,

        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H0.002S");
    });

    it("should return the ISO-8601 string of day, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        minute: 30,
        second: 45,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT30M45S");
    });

    it("should return the ISO-8601 string of day, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        minute: 30,

        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT30M0.002S");
    });

    it("should return the ISO-8601 string of day, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        second: 45,
        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT45.002S");
    });

    it("should return the ISO-8601 string of hour, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
        second: 45,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H30M45S");
    });

    it("should return the ISO-8601 string of hour, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,

        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H30M0.002S");
    });

    it("should return the ISO-8601 string of hour, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,

        second: 45,
        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H45.002S");
    });

    it("should return the ISO-8601 string of minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT30M45.002S");
    });

    it("should return the ISO-8601 string of day, hour, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H30M45S");
    });

    it("should return the ISO-8601 string of day, hour, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,

        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H30M0.002S");
    });

    it("should return the ISO-8601 string of hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("PT12H30M45.002S");
    });

    it("should return the ISO-8601 string of day, hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("P6DT12H30M45.002S");
    });

    it("should return the ISO-8601 string of negative day, hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        isPositive: false,
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const isoStr = duration.toISOString();

      // then
      expect(isoStr).toBe("-P6DT12H30M45.002S");
    });
  });

  describe("toObject", () => {
    it("should return the empty object of zero", () => {
      // given
      const duration = Duration.fromObject({});

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({});
    });

    it("should return the object of only day", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ day: 6 });
    });

    it("should return the object of only hour", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ hour: 12 });
    });

    it("should return the object of only minute", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ minute: 30 });
    });

    it("should return the object of only second", () => {
      // given
      const duration = Duration.fromObject({
        second: 45,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ second: 45 });
    });

    it("should return the object of only millisecond", () => {
      // given
      const duration = Duration.fromObject({
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ millisecond: 2 });
    });

    it("should return the object of day and hour", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({ day: 6, hour: 12 });
    });

    it("should return the object of day and minute", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        minute: 30,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        minute: 30,
      });
    });

    it("should return the object of day and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        second: 45,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        second: 45,
      });
    });

    it("should return the object of day and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,

        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        millisecond: 2,
      });
    });

    it("should return the object of hour and minute", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hour: 12,
        minute: 30,
      });
    });

    it("should return the object of hour and second", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,

        second: 45,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hour: 12,
        second: 45,
      });
    });

    it("should return the object of hour and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,

        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hour: 12,
        millisecond: 2,
      });
    });

    it("should return the object of minute and second", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
        second: 45,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        minute: 30,
        second: 45,
      });
    });

    it("should return the object of minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,

        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        minute: 30,
        millisecond: 2,
      });
    });

    it("should return the object of second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        second: 45,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        second: 45,
        millisecond: 2,
      });
    });

    it("should return the object of day, hour and minute", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        hour: 12,
        minute: 30,
      });
    });

    it("should return the object of day, hour and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        second: 45,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        hour: 12,
        second: 45,
      });
    });

    it("should return the object of day, hour and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        hour: 12,
        millisecond: 2,
      });
    });

    it("should return the object of day, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        minute: 30,
        second: 45,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        minute: 30,
        second: 45,
      });
    });

    it("should return the object of day, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        minute: 30,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        minute: 30,
        millisecond: 2,
      });
    });

    it("should return the object of day, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        second: 45,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        second: 45,
        millisecond: 2,
      });
    });

    it("should return the object of hour, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
        second: 45,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hour: 12,
        minute: 30,
        second: 45,
      });
    });

    it("should return the object of hour, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hour: 12,
        minute: 30,
        millisecond: 2,
      });
    });

    it("should return the object of hour, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        second: 45,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hour: 12,
        second: 45,
        millisecond: 2,
      });
    });

    it("should return the object of minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        minute: 30,
        second: 45,
        millisecond: 2,
      });
    });

    it("should return the object of day, hour, minute and second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
      });
    });

    it("should return the object of day, hour, minute and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        hour: 12,
        minute: 30,
        millisecond: 2,
      });
    });

    it("should return the object of hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });
    });

    it("should return the object of day, hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });
    });

    it("should return the object of negative day, hour, minute, second and millisecond", () => {
      // given
      const duration = Duration.fromObject({
        isPositive: false,
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const objectLiteral = duration.toObject();

      // then
      expect(objectLiteral).toEqual({
        isPositive: false,
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });
    });
  });

  describe("equals", () => {
    it("should return true for equal durations", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 6,
      });

      // when
      const isEqual = duration1.equals(duration2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal durations", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 2,
      });

      // when
      const isEqual = duration1.equals(duration2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isLongerThan", () => {
    it("should return true when the duration is longer than the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 2,
      });

      // when
      const isLongerThan = duration1.isLongerThan(duration2);

      // then
      expect(isLongerThan).toBe(true);
    });

    it("should return false when the duration is equal to the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 6,
      });

      // when
      const isLongerThan = duration1.isLongerThan(duration2);

      // then
      expect(isLongerThan).toBe(false);
    });

    it("should return false when the duration is shorter than the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 2,
      });
      const duration2 = Duration.fromObject({
        day: 6,
      });

      // when
      const isLongerThan = duration1.isLongerThan(duration2);

      // then
      expect(isLongerThan).toBe(false);
    });
  });

  describe("isShorterThan", () => {
    it("should return true when the duration is shorter than the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 2,
      });
      const duration2 = Duration.fromObject({
        day: 6,
      });

      // when
      const isShorterThan = duration1.isShorterThan(duration2);

      // then
      expect(isShorterThan).toBe(true);
    });

    it("should return false when the duration is equal to the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 6,
      });

      // when
      const isShorterThan = duration1.isShorterThan(duration2);

      // then
      expect(isShorterThan).toBe(false);
    });

    it("should return false when the duration is longer than the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 2,
      });

      // when
      const isShorterThan = duration1.isShorterThan(duration2);

      // then
      expect(isShorterThan).toBe(false);
    });
  });

  describe("withIsPositive", () => {
    it("should return a duration with replaced isPositive", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const durationWithIsPositive = duration.withIsPositive(false);

      // then
      expect(durationWithIsPositive).toBeInstanceOf(Duration);
      expect(durationWithIsPositive.isPositive).toBe(false);
      expect(durationWithIsPositive.day).toBe(6);
      expect(durationWithIsPositive.hour).toBe(12);
      expect(durationWithIsPositive.minute).toBe(30);
      expect(durationWithIsPositive.second).toBe(45);
      expect(durationWithIsPositive.millisecond).toBe(2);
    });
  });

  describe("withDay", () => {
    it("should return a duration with replaced day", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const durationWithDays = duration.withDay(3);

      // then
      expect(durationWithDays).toBeInstanceOf(Duration);
      expect(durationWithDays.isPositive).toBe(true);
      expect(durationWithDays.day).toBe(3);
      expect(durationWithDays.hour).toBe(12);
      expect(durationWithDays.minute).toBe(30);
      expect(durationWithDays.second).toBe(45);
      expect(durationWithDays.millisecond).toBe(2);
    });
  });

  describe("withHour", () => {
    it("should return a duration with replaced hour", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const durationWithHours = duration.withHour(23);

      // then
      expect(durationWithHours).toBeInstanceOf(Duration);
      expect(durationWithHours.isPositive).toBe(true);
      expect(durationWithHours.day).toBe(6);
      expect(durationWithHours.hour).toBe(23);
      expect(durationWithHours.minute).toBe(30);
      expect(durationWithHours.second).toBe(45);
      expect(durationWithHours.millisecond).toBe(2);
    });
  });

  describe("withMinute", () => {
    it("should return a duration with replaced minute", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const durationWithMinutes = duration.withMinute(59);

      // then
      expect(durationWithMinutes).toBeInstanceOf(Duration);
      expect(durationWithMinutes.isPositive).toBe(true);
      expect(durationWithMinutes.day).toBe(6);
      expect(durationWithMinutes.hour).toBe(12);
      expect(durationWithMinutes.minute).toBe(59);
      expect(durationWithMinutes.second).toBe(45);
      expect(durationWithMinutes.millisecond).toBe(2);
    });
  });

  describe("withSecond", () => {
    it("should return a duration with replaced second", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const durationWithSeconds = duration.withSecond(59);

      // then
      expect(durationWithSeconds).toBeInstanceOf(Duration);
      expect(durationWithSeconds.isPositive).toBe(true);
      expect(durationWithSeconds.day).toBe(6);
      expect(durationWithSeconds.hour).toBe(12);
      expect(durationWithSeconds.minute).toBe(30);
      expect(durationWithSeconds.second).toBe(59);
      expect(durationWithSeconds.millisecond).toBe(2);
    });
  });

  describe("withMillisecond", () => {
    it("should return a duration with replaced millisecond", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      });

      // when
      const durationWithMilliseconds = duration.withMillisecond(999);

      // then
      expect(durationWithMilliseconds).toBeInstanceOf(Duration);
      expect(durationWithMilliseconds.isPositive).toBe(true);
      expect(durationWithMilliseconds.day).toBe(6);
      expect(durationWithMilliseconds.hour).toBe(12);
      expect(durationWithMilliseconds.minute).toBe(30);
      expect(durationWithMilliseconds.second).toBe(45);
      expect(durationWithMilliseconds.millisecond).toBe(999);
    });
  });

  describe("plus", () => {
    it("should return the addition of durations", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 2,
      });

      // when
      const sum = duration1.plus(duration2);

      // then
      expect(sum).toBeInstanceOf(Duration);
      expect(sum.isPositive).toBe(true);
      expect(sum.day).toBe(8);
      expect(sum.hour).toBe(0);
      expect(sum.minute).toBe(0);
      expect(sum.second).toBe(0);
      expect(sum.millisecond).toBe(0);
    });
  });

  describe("minus", () => {
    it("should return the subtraction of durations", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 2,
      });

      // when
      const diff = duration1.minus(duration2);

      // then
      expect(diff).toBeInstanceOf(Duration);
      expect(diff.isPositive).toBe(true);
      expect(diff.day).toBe(4);
      expect(diff.hour).toBe(0);
      expect(diff.minute).toBe(0);
      expect(diff.second).toBe(0);
      expect(diff.millisecond).toBe(0);
    });
  });

  describe("multiplyBy", () => {
    it("should return the multiplication of durations", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
      });

      // when
      const product = duration.multiplyBy(2);

      // then
      expect(product).toBeInstanceOf(Duration);
      expect(product.isPositive).toBe(true);
      expect(product.day).toBe(12);
      expect(product.hour).toBe(0);
      expect(product.minute).toBe(0);
      expect(product.second).toBe(0);
      expect(product.millisecond).toBe(0);
    });
  });

  describe("divideBy", () => {
    it("should return the division of durations", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
      });

      // when
      const quotient = duration.divideBy(2);

      // then
      expect(quotient).toBeInstanceOf(Duration);
      expect(quotient.isPositive).toBe(true);
      expect(quotient.day).toBe(3);
      expect(quotient.hour).toBe(0);
      expect(quotient.minute).toBe(0);
      expect(quotient.second).toBe(0);
      expect(quotient.millisecond).toBe(0);
    });
  });

  describe("negate", () => {
    it("should return the negative duration of a positive duration", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
      });

      // when
      const negated = duration.negate();

      // then
      expect(negated).toBeInstanceOf(Duration);
      expect(negated.isPositive).toBe(false);
      expect(negated.day).toBe(6);
      expect(negated.hour).toBe(0);
      expect(negated.minute).toBe(0);
      expect(negated.second).toBe(0);
      expect(negated.millisecond).toBe(0);
    });

    it("should return the positive duration of a negative duration", () => {
      // given
      const duration = Duration.fromObject({
        isPositive: false,
        day: 6,
      });

      // when
      const negated = duration.negate();

      // then
      expect(negated).toBeInstanceOf(Duration);
      expect(negated.isPositive).toBe(true);
      expect(negated.day).toBe(6);
      expect(negated.hour).toBe(0);
      expect(negated.minute).toBe(0);
      expect(negated.second).toBe(0);
      expect(negated.millisecond).toBe(0);
    });
  });

  describe("absolute", () => {
    it("should return the absolute of a negative duration", () => {
      // given
      const duration = Duration.fromObject({
        isPositive: false,
        day: 6,
      });

      // when
      const abs = duration.absolute();

      // then
      expect(abs).toBeInstanceOf(Duration);
      expect(abs.isPositive).toBe(true);
      expect(abs.day).toBe(6);
      expect(abs.hour).toBe(0);
      expect(abs.minute).toBe(0);
      expect(abs.second).toBe(0);
      expect(abs.millisecond).toBe(0);
    });

    it("should return the absolute of a positive duration", () => {
      // given
      const duration = Duration.fromObject({
        day: 6,
      });

      // when
      const abs = duration.absolute();

      // then
      expect(abs).toBeInstanceOf(Duration);
      expect(abs.isPositive).toBe(true);
      expect(abs.day).toBe(6);
      expect(abs.hour).toBe(0);
      expect(abs.minute).toBe(0);
      expect(abs.second).toBe(0);
      expect(abs.millisecond).toBe(0);
    });
  });

  describe("static fromDays", () => {
    it("should return a duration", () => {
      // given
      const inDays = 6.521354189814815;

      // when
      const duration = Duration.fromDays(inDays);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });
  });

  describe("static fromHours", () => {
    it("should return a duration", () => {
      // given
      const inHours = 156.51250055555556;

      // when
      const duration = Duration.fromHours(inHours);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });
  });

  describe("static fromMinutes", () => {
    it("should return a duration", () => {
      // given
      const inMinutes = 9390.750033333334;

      // when
      const duration = Duration.fromMinutes(inMinutes);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });
  });

  describe("static fromSeconds", () => {
    it("should return a duration", () => {
      // given
      const inSeconds = 563445.002;

      // when
      const duration = Duration.fromSeconds(inSeconds);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });
  });

  describe("static fromMilliseconds", () => {
    it("should return a positive duration", () => {
      // given
      const inMilliseconds = 563445002;

      // when
      const duration = Duration.fromMilliseconds(inMilliseconds);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return a negative duration", () => {
      // given
      const inMilliseconds = -563445002;

      // when
      const duration = Duration.fromMilliseconds(inMilliseconds);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(false);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
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
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only day from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only hour from an object", () => {
      // given
      const objectLiteral = {
        hour: 12,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only minute from an object", () => {
      // given
      const objectLiteral = {
        minute: 30,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only second from an object", () => {
      // given
      const objectLiteral = {
        second: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only millisecond from an object", () => {
      // given
      const objectLiteral = {
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day and hour from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        hour: 12,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and minute from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        minute: 30,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and second from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        second: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and millisecond from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour and minute from an object", () => {
      // given
      const objectLiteral = {
        hour: 12,
        minute: 30,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and second from an object", () => {
      // given
      const objectLiteral = {
        hour: 12,
        second: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and millisecond from an object", () => {
      // given
      const objectLiteral = {
        hour: 12,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute and second from an object", () => {
      // given
      const objectLiteral = {
        minute: 30,
        second: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of minute and millisecond from an object", () => {
      // given
      const objectLiteral = {
        minute: 30,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of second and millisecond from an object", () => {
      // given
      const objectLiteral = {
        second: 45,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour and minute from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        hour: 12,
        minute: 30,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and second from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        hour: 12,
        second: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and millisecond from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        hour: 12,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, minute and second from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        minute: 30,
        second: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, minute and millisecond from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        minute: 30,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, second and millisecond from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        second: 45,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute and second from an object", () => {
      // given
      const objectLiteral = {
        hour: 12,
        minute: 30,
        second: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour, minute and millisecond from an object", () => {
      // given
      const objectLiteral = {
        hour: 12,
        minute: 30,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, second and millisecond from an object", () => {
      // given
      const objectLiteral = {
        hour: 12,
        second: 45,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute, second and millisecond from an object", () => {
      // given
      const objectLiteral = {
        minute: 30,
        second: 45,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute and second from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour, minute and millisecond from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        hour: 12,
        minute: 30,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute, second and millisecond from an object", () => {
      // given
      const objectLiteral = {
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute, second and millisecond from an object", () => {
      // given
      const objectLiteral = {
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of negative day, hour, minute, second and millisecond from an object", () => {
      // given
      const objectLiteral = {
        isPositive: false,
        day: 6,
        hour: 12,
        minute: 30,
        second: 45,
        millisecond: 2,
      };

      // when
      const duration = Duration.fromObject(objectLiteral);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(false);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });
  });

  describe("static fromString", () => {
    it("should return the duration of only day from a string", () => {
      // given
      const str = "6 days 00:00:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only hour from a string", () => {
      // given
      const str = "12:00:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only minute from a string", () => {
      // given
      const str = "00:30:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only second from a string", () => {
      // given
      const str = "00:00:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only millisecond from a string", () => {
      // given
      const str = "00:00:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of only millisecond from a string", () => {
      // given
      const str = "00:00:00.500";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(500);
    });

    it("should return the duration of day and hour from a string", () => {
      // given
      const str = "6 days 12:00:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and minute from a string", () => {
      // given
      const str = "6 days 00:30:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and second from a string", () => {
      // given
      const str = "6 days 00:00:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and millisecond from a string", () => {
      // given
      const str = "6 days 00:00:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour and minute from a string", () => {
      // given
      const str = "12:30:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and second from a string", () => {
      // given
      const str = "12:00:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and millisecond from a string", () => {
      // given
      const str = "12:00:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute and second from a string", () => {
      // given
      const str = "00:30:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of minute and millisecond from a string", () => {
      // given
      const str = "00:30:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of second and millisecond from a string", () => {
      // given
      const str = "00:00:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour and minute from a string", () => {
      // given
      const str = "6 days 12:30:00";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and second from a string", () => {
      // given
      const str = "6 days 12:00:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and millisecond from a string", () => {
      // given
      const str = "6 days 12:00:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, minute and second from a string", () => {
      // given
      const str = "6 days 00:30:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, minute and millisecond from a string", () => {
      // given
      const str = "6 days 00:30:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, second and millisecond from a string", () => {
      // given
      const str = "6 days 00:00:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute and second from a string", () => {
      // given
      const str = "12:30:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour, minute and millisecond from a string", () => {
      // given
      const str = "12:30:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, second and millisecond from a string", () => {
      // given
      const str = "12:00:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute, second and millisecond from a string", () => {
      // given
      const str = "00:30:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute and second from a string", () => {
      // given
      const str = "6 days 12:30:45";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour, minute and millisecond from a string", () => {
      // given
      const str = "6 days 12:30:00.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute, second and millisecond from a string", () => {
      // given
      const str = "12:30:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute, second and millisecond from a string", () => {
      // given
      const str = "6 days 12:30:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of negative day, hour, minute, second and millisecond from a string", () => {
      // given
      const str = "-6 days 12:30:45.002";

      // when
      const duration = Duration.fromString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(false);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "-6 year 15:97ss";

      // when/then
      expect(() => Duration.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the duration of only day from an iso string", () => {
      // given
      const str = "P6D";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only hour from an iso string", () => {
      // given
      const str = "PT12H";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only minute from an iso string", () => {
      // given
      const str = "PT30M";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only second from an iso string", () => {
      // given
      const str = "PT45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only millisecond from an iso string", () => {
      // given
      const str = "PT0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of only millisecond from an iso string", () => {
      // given
      const str = "PT0.500S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(500);
    });

    it("should return the duration of day and hour from an iso string", () => {
      // given
      const str = "P6DT12H";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and minute from an iso string", () => {
      // given
      const str = "P6DT30M";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and second from an iso string", () => {
      // given
      const str = "P6DT45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and millisecond from an iso string", () => {
      // given
      const str = "P6DT0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour and minute from an iso string", () => {
      // given
      const str = "PT12H30M";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and second from an iso string", () => {
      // given
      const str = "PT12H45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and millisecond from an iso string", () => {
      // given
      const str = "PT12H0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute and second from an iso string", () => {
      // given
      const str = "PT30M45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of minute and millisecond from an iso string", () => {
      // given
      const str = "PT30M0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of second and millisecond from an iso string", () => {
      // given
      const str = "PT45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour and minute from an iso string", () => {
      // given
      const str = "P6DT12H30M";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and second from an iso string", () => {
      // given
      const str = "P6DT12H45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and millisecond from an iso string", () => {
      // given
      const str = "P6DT12H0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, minute and second from an iso string", () => {
      // given
      const str = "P6DT30M45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, minute and millisecond from an iso string", () => {
      // given
      const str = "P6DT30M0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, second and millisecond from an iso string", () => {
      // given
      const str = "P6DT45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute and second from an iso string", () => {
      // given
      const str = "PT12H30M45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour, minute and millisecond from an iso string", () => {
      // given
      const str = "PT12H30M0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, second and millisecond from an iso string", () => {
      // given
      const str = "PT12H45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute, second and millisecond from an iso string", () => {
      // given
      const str = "PT30M45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute and second from an iso string", () => {
      // given
      const str = "P6DT12H30M45S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour, minute and millisecond from an iso string", () => {
      // given
      const str = "P6DT12H30M0.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute, second and millisecond from an iso string", () => {
      // given
      const str = "PT12H30M45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute, second and millisecond from an iso string", () => {
      // given
      const str = "P6DT12H30M45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of negative day, hour, minute, second and millisecond from an iso string", () => {
      // given
      const str = "-P6DT12H30M45.002S";

      // when
      const duration = Duration.fromISOString(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(false);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "-6DT12:30MW002S";

      // when/then
      expect(() => Duration.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the duration of only day from a string", () => {
      // given
      const str = "6 days 00:00:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only hour from a string", () => {
      // given
      const str = "12:00:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only minute from a string", () => {
      // given
      const str = "00:30:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only second from a string", () => {
      // given
      const str = "00:00:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only millisecond from a string", () => {
      // given
      const str = "00:00:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of only millisecond from a string", () => {
      // given
      const str = "00:00:00.500";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(500);
    });

    it("should return the duration of day and hour from a string", () => {
      // given
      const str = "6 days 12:00:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and minute from a string", () => {
      // given
      const str = "6 days 00:30:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and second from a string", () => {
      // given
      const str = "6 days 00:00:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and millisecond from a string", () => {
      // given
      const str = "6 days 00:00:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour and minute from a string", () => {
      // given
      const str = "12:30:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and second from a string", () => {
      // given
      const str = "12:00:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and millisecond from a string", () => {
      // given
      const str = "12:00:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute and second from a string", () => {
      // given
      const str = "00:30:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of minute and millisecond from a string", () => {
      // given
      const str = "00:30:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of second and millisecond from a string", () => {
      // given
      const str = "00:00:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour and minute from a string", () => {
      // given
      const str = "6 days 12:30:00";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and second from a string", () => {
      // given
      const str = "6 days 12:00:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and millisecond from a string", () => {
      // given
      const str = "6 days 12:00:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, minute and second from a string", () => {
      // given
      const str = "6 days 00:30:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, minute and millisecond from a string", () => {
      // given
      const str = "6 days 00:30:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, second and millisecond from a string", () => {
      // given
      const str = "6 days 00:00:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute and second from a string", () => {
      // given
      const str = "12:30:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour, minute and millisecond from a string", () => {
      // given
      const str = "12:30:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, second and millisecond from a string", () => {
      // given
      const str = "12:00:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute, second and millisecond from a string", () => {
      // given
      const str = "00:30:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute and second from a string", () => {
      // given
      const str = "6 days 12:30:45";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour, minute and millisecond from a string", () => {
      // given
      const str = "6 days 12:30:00.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute, second and millisecond from a string", () => {
      // given
      const str = "12:30:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute, second and millisecond from a string", () => {
      // given
      const str = "6 days 12:30:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of negative day, hour, minute, second and millisecond from a string", () => {
      // given
      const str = "-6 days 12:30:45.002";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(false);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "-6 year 15:97ss";

      // when/then
      expect(() => Duration.parse(str)).toThrowError();
    });

    it("should return the duration of only day from an iso string", () => {
      // given
      const str = "P6D";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only hour from an iso string", () => {
      // given
      const str = "PT12H";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only minute from an iso string", () => {
      // given
      const str = "PT30M";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only second from an iso string", () => {
      // given
      const str = "PT45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of only millisecond from an iso string", () => {
      // given
      const str = "PT0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of only millisecond from an iso string", () => {
      // given
      const str = "PT0.500S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(500);
    });

    it("should return the duration of day and hour from an iso string", () => {
      // given
      const str = "P6DT12H";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and minute from an iso string", () => {
      // given
      const str = "P6DT30M";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and second from an iso string", () => {
      // given
      const str = "P6DT45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day and millisecond from an iso string", () => {
      // given
      const str = "P6DT0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour and minute from an iso string", () => {
      // given
      const str = "PT12H30M";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and second from an iso string", () => {
      // given
      const str = "PT12H45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour and millisecond from an iso string", () => {
      // given
      const str = "PT12H0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute and second from an iso string", () => {
      // given
      const str = "PT30M45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of minute and millisecond from an iso string", () => {
      // given
      const str = "PT30M0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of second and millisecond from an iso string", () => {
      // given
      const str = "PT45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour and minute from an iso string", () => {
      // given
      const str = "P6DT12H30M";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and second from an iso string", () => {
      // given
      const str = "P6DT12H45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour and millisecond from an iso string", () => {
      // given
      const str = "P6DT12H0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, minute and second from an iso string", () => {
      // given
      const str = "P6DT30M45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, minute and millisecond from an iso string", () => {
      // given
      const str = "P6DT30M0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, second and millisecond from an iso string", () => {
      // given
      const str = "P6DT45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute and second from an iso string", () => {
      // given
      const str = "PT12H30M45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of hour, minute and millisecond from an iso string", () => {
      // given
      const str = "PT12H30M0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, second and millisecond from an iso string", () => {
      // given
      const str = "PT12H45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(0);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of minute, second and millisecond from an iso string", () => {
      // given
      const str = "PT30M45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(0);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute and second from an iso string", () => {
      // given
      const str = "P6DT12H30M45S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of day, hour, minute and millisecond from an iso string", () => {
      // given
      const str = "P6DT12H30M0.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of hour, minute, second and millisecond from an iso string", () => {
      // given
      const str = "PT12H30M45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of day, hour, minute, second and millisecond from an iso string", () => {
      // given
      const str = "P6DT12H30M45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(true);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return the duration of negative day, hour, minute, second and millisecond from an iso string", () => {
      // given
      const str = "-P6DT12H30M45.002S";

      // when
      const duration = Duration.parse(str);

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.isPositive).toBe(false);
      expect(duration.day).toBe(6);
      expect(duration.hour).toBe(12);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(45);
      expect(duration.millisecond).toBe(2);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "-6DT12:30MW002S";

      // when/then
      expect(() => Duration.parse(str)).toThrowError();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the duration is longer than the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 2,
      });

      // when
      const comparison = Duration.compare(duration1, duration2);

      // then
      expect(comparison).toBe(345_600_000);
    });

    it("should return zero when the duration is equal to the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 6,
      });
      const duration2 = Duration.fromObject({
        day: 6,
      });

      // when
      const comparison = Duration.compare(duration1, duration2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the duration is shorter than the other duration", () => {
      // given
      const duration1 = Duration.fromObject({
        day: 2,
      });
      const duration2 = Duration.fromObject({
        day: 6,
      });

      // when
      const comparison = Duration.compare(duration1, duration2);

      // then
      expect(comparison).toBe(-345_600_000);
    });
  });
});
