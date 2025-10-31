import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Duration from "../Duration/Duration";
import Offset from "../Offset/Offset";
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
    it("should return a datetime", () => {
      // given
      const year = 2024;
      const month = 12;
      const day = 7;
      const hour = 13;
      const minute = 56;
      const second = 19;
      const millisecond = 920;
      const offset = Offset.fromObject({ hour: 1 });

      // when
      const datetime = new DateTime(
        year,
        month,
        day,
        hour,
        minute,
        second,
        millisecond,
        offset
      );

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(60);
    });

    it("should throw an error with invalid year", () => {
      // given
      const year = 1968;
      const month = 12;
      const day = 7;
      const hour = 13;
      const minute = 56;
      const second = 19;
      const millisecond = 920;
      const offset = Offset.fromObject({ hour: 1 });

      // when/then
      expect(
        () =>
          new DateTime(
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            offset
          )
      ).toThrowError();
    });

    it("should throw an error with invalid month", () => {
      // given
      const year = 2024;
      const month = 0;
      const day = 7;
      const hour = 13;
      const minute = 56;
      const second = 19;
      const millisecond = 920;
      const offset = Offset.fromObject({ hour: 1 });

      // when/then
      expect(
        () =>
          new DateTime(
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            offset
          )
      ).toThrowError();
    });

    it("should throw an error with invalid day", () => {
      // given
      const year = 2024;
      const month = 12;
      const day = 0;
      const hour = 13;
      const minute = 56;
      const second = 19;
      const millisecond = 920;
      const offset = Offset.fromObject({ hour: 1 });

      // when/then
      expect(
        () =>
          new DateTime(
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            offset
          )
      ).toThrowError();
    });

    it("should throw an error with invalid hour", () => {
      // given
      const year = 2024;
      const month = 12;
      const day = 7;
      const hour = 24;
      const minute = 56;
      const second = 19;
      const millisecond = 920;
      const offset = Offset.fromObject({ hour: 1 });

      // when/then
      expect(
        () =>
          new DateTime(
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            offset
          )
      ).toThrowError();
    });

    it("should throw an error with invalid minute", () => {
      // given
      const year = 2024;
      const month = 12;
      const day = 7;
      const hour = 13;
      const minute = 60;
      const second = 19;
      const millisecond = 920;
      const offset = Offset.fromObject({ hour: 1 });

      // when/then
      expect(
        () =>
          new DateTime(
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            offset
          )
      ).toThrowError();
    });

    it("should throw an error with invalid second", () => {
      // given
      const year = 2024;
      const month = 12;
      const day = 7;
      const hour = 13;
      const minute = 56;
      const second = 60;
      const millisecond = 920;
      const offset = Offset.fromObject({ hour: 1 });

      // when/then
      expect(
        () =>
          new DateTime(
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            offset
          )
      ).toThrowError();
    });

    it("should throw an error with invalid millisecond", () => {
      // given
      const year = 2024;
      const month = 12;
      const day = 7;
      const hour = 13;
      const minute = 56;
      const second = 19;
      const millisecond = 1000;
      const offset = Offset.fromObject({ hour: 1 });

      // when/then
      expect(
        () =>
          new DateTime(
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            offset
          )
      ).toThrowError();
    });
  });

  describe("daysSinceEpoch", () => {
    it("should return the total days since epoch", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const daysSinceEpoch = datetime.daysSinceEpoch;

      // then
      expect(daysSinceEpoch).toBe(20064.539119444446);
    });
  });

  describe("hoursSinceEpoch", () => {
    it("should return the total hours since epoch", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const hoursSinceEpoch = datetime.hoursSinceEpoch;

      // then
      expect(hoursSinceEpoch).toBe(481548.9388666667);
    });
  });

  describe("minutesSinceEpoch", () => {
    it("should return the total minutes since epoch", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const minutesSinceEpoch = datetime.minutesSinceEpoch;

      // then
      expect(minutesSinceEpoch).toBe(28892936.332);
    });
  });

  describe("secondsSinceEpoch", () => {
    it("should return the total seconds since epoch", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const secondsSinceEpoch = datetime.secondsSinceEpoch;

      // then
      expect(secondsSinceEpoch).toBe(1_733_576_179.92);
    });
  });

  describe("millisecondsSinceEpoch", () => {
    it("should return the total milliseconds since epoch", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const millisecondsSinceEpoch = datetime.millisecondsSinceEpoch;

      // then
      expect(millisecondsSinceEpoch).toBe(1_733_576_179_920);
    });
  });

  describe("durationSinceEpoch", () => {
    it("should return the duration since epoch", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const durationSinceEpoch = datetime.durationSinceEpoch;

      // then
      expect(durationSinceEpoch).toBeInstanceOf(Duration);
      expect(durationSinceEpoch.day).toBe(20064);
      expect(durationSinceEpoch.hour).toBe(12);
      expect(durationSinceEpoch.minute).toBe(56);
      expect(durationSinceEpoch.second).toBe(19);
      expect(durationSinceEpoch.millisecond).toBe(920);
    });
  });

  describe("valueOf", () => {
    it("should return the value of duration", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const value = datetime.valueOf();

      // then
      expect(value).toBe(1_733_576_179_920);
    });
  });

  describe("toString", () => {
    it("should return the string of a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const str = datetime.toString();

      // then
      expect(str).toBe("2024-12-07 13:56:19.920 UTC+01:00");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const primitive = +datetime;

      // then
      expect(primitive).toBe(1_733_576_179_920);
    });

    it("should return a string when a string is expected of the datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const primitive = `${datetime}`;

      // then
      expect(primitive).toBe("2024-12-07 13:56:19.920 UTC+01:00");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const jsonStr = JSON.stringify(datetime);

      // then
      expect(jsonStr).toBe(`"2024-12-07T13:56:19.920+01:00"`);
    });
  });

  describe("toISOString", () => {
    it("should return the iso string of a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const isoStr = datetime.toISOString();

      // then
      expect(isoStr).toBe("2024-12-07T13:56:19.920+01:00");
    });
  });

  describe("toLocaleString", () => {
    it("should return the locale string of a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const localeName = "en-GB";

      // when
      const localeStr = datetime.toLocaleString(localeName);

      // then
      expect(localeStr).toBe("07/12/2024, 13:56:19");
    });
  });

  describe("toObject", () => {
    it("should return the object of a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const objectLiteral = datetime.toObject();

      // then
      expect(objectLiteral).toEqual({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
    });
  });

  describe("toJSDate", () => {
    it("should return the js date of a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const jsDate = datetime.toJSDate();

      // then
      expect(jsDate).toBeInstanceOf(Date);
      expect(jsDate.getUTCFullYear()).toBe(2024);
      expect(jsDate.getUTCMonth()).toBe(11);
      expect(jsDate.getUTCDate()).toBe(7);
      expect(jsDate.getUTCHours()).toBe(12);
      expect(jsDate.getUTCMinutes()).toBe(56);
      expect(jsDate.getUTCSeconds()).toBe(19);
      expect(jsDate.getUTCMilliseconds()).toBe(920);
      expect(jsDate.getTimezoneOffset()).toBeCloseTo(0);
    });
  });

  describe("equals", () => {
    it("should return true for equal datetime objects", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const isEqual = datetime1.equals(datetime2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal datetime objects", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 820,
        offset: { hour: 1 },
      });

      // when
      const isEqual = datetime1.equals(datetime2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isLaterThan", () => {
    it("should return true when the datetime is later than the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 820,
        offset: { hour: 1 },
      });

      // when
      const isLaterThan = datetime1.isLaterThan(datetime2);

      // then
      expect(isLaterThan).toBe(true);
    });

    it("should return false when the datetime is equal to the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const isLongerThan = datetime1.isLaterThan(datetime2);

      // then
      expect(isLongerThan).toBe(false);
    });

    it("should return false when the datetime is earlier than the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 820,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const isLongerThan = datetime1.isLaterThan(datetime2);

      // then
      expect(isLongerThan).toBe(false);
    });
  });

  describe("isEarlierThan", () => {
    it("should return true when the datetime is earlier than the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 820,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const isEarlierThan = datetime1.isEarlierThan(datetime2);

      // then
      expect(isEarlierThan).toBe(true);
    });

    it("should return false when the datetime is equal to the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const isEarlierThan = datetime1.isEarlierThan(datetime2);

      // then
      expect(isEarlierThan).toBe(false);
    });

    it("should return false when the datetime is later than the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 820,
        offset: { hour: 1 },
      });

      // when
      const isEarlierThan = datetime1.isEarlierThan(datetime2);

      // then
      expect(isEarlierThan).toBe(false);
    });
  });

  describe("withYear", () => {
    it("should return a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeWithYear = datetime.withYear(2023);

      // then
      expect(datetimeWithYear).toBeInstanceOf(DateTime);
      expect(datetimeWithYear.year).toBe(2023);
      expect(datetimeWithYear.month).toBe(12);
      expect(datetimeWithYear.day).toBe(7);
      expect(datetimeWithYear.hour).toBe(13);
      expect(datetimeWithYear.minute).toBe(56);
      expect(datetimeWithYear.second).toBe(19);
      expect(datetimeWithYear.millisecond).toBe(920);
      expect(datetimeWithYear.offset.inMinutes).toBe(60);
    });
  });

  describe("withMonth", () => {
    it("should return a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeWithMonth = datetime.withMonth(9);

      // then
      expect(datetimeWithMonth).toBeInstanceOf(DateTime);
      expect(datetimeWithMonth.year).toBe(2024);
      expect(datetimeWithMonth.month).toBe(9);
      expect(datetimeWithMonth.day).toBe(7);
      expect(datetimeWithMonth.hour).toBe(13);
      expect(datetimeWithMonth.minute).toBe(56);
      expect(datetimeWithMonth.second).toBe(19);
      expect(datetimeWithMonth.millisecond).toBe(920);
      expect(datetimeWithMonth.offset.inMinutes).toBe(60);
    });
  });

  describe("withDay", () => {
    it("should return a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeWithDay = datetime.withDay(28);

      // then
      expect(datetimeWithDay).toBeInstanceOf(DateTime);
      expect(datetimeWithDay.year).toBe(2024);
      expect(datetimeWithDay.month).toBe(12);
      expect(datetimeWithDay.day).toBe(28);
      expect(datetimeWithDay.hour).toBe(13);
      expect(datetimeWithDay.minute).toBe(56);
      expect(datetimeWithDay.second).toBe(19);
      expect(datetimeWithDay.millisecond).toBe(920);
      expect(datetimeWithDay.offset.inMinutes).toBe(60);
    });
  });

  describe("withHour", () => {
    it("should return a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeWithHour = datetime.withHour(21);

      // then
      expect(datetimeWithHour).toBeInstanceOf(DateTime);
      expect(datetimeWithHour.year).toBe(2024);
      expect(datetimeWithHour.month).toBe(12);
      expect(datetimeWithHour.day).toBe(7);
      expect(datetimeWithHour.hour).toBe(21);
      expect(datetimeWithHour.minute).toBe(56);
      expect(datetimeWithHour.second).toBe(19);
      expect(datetimeWithHour.millisecond).toBe(920);
      expect(datetimeWithHour.offset.inMinutes).toBe(60);
    });
  });

  describe("withMinute", () => {
    it("should return a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeWithMinute = datetime.withMinute(59);

      // then
      expect(datetimeWithMinute).toBeInstanceOf(DateTime);
      expect(datetimeWithMinute.year).toBe(2024);
      expect(datetimeWithMinute.month).toBe(12);
      expect(datetimeWithMinute.day).toBe(7);
      expect(datetimeWithMinute.hour).toBe(13);
      expect(datetimeWithMinute.minute).toBe(59);
      expect(datetimeWithMinute.second).toBe(19);
      expect(datetimeWithMinute.millisecond).toBe(920);
      expect(datetimeWithMinute.offset.inMinutes).toBe(60);
    });
  });

  describe("withSecond", () => {
    it("should return a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeWithSecond = datetime.withSecond(45);

      // then
      expect(datetimeWithSecond).toBeInstanceOf(DateTime);
      expect(datetimeWithSecond.year).toBe(2024);
      expect(datetimeWithSecond.month).toBe(12);
      expect(datetimeWithSecond.day).toBe(7);
      expect(datetimeWithSecond.hour).toBe(13);
      expect(datetimeWithSecond.minute).toBe(56);
      expect(datetimeWithSecond.second).toBe(45);
      expect(datetimeWithSecond.millisecond).toBe(920);
      expect(datetimeWithSecond.offset.inMinutes).toBe(60);
    });
  });

  describe("withMillisecond", () => {
    it("should return a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeWithMillisecond = datetime.withMillisecond(2);

      // then
      expect(datetimeWithMillisecond).toBeInstanceOf(DateTime);
      expect(datetimeWithMillisecond.year).toBe(2024);
      expect(datetimeWithMillisecond.month).toBe(12);
      expect(datetimeWithMillisecond.day).toBe(7);
      expect(datetimeWithMillisecond.hour).toBe(13);
      expect(datetimeWithMillisecond.minute).toBe(56);
      expect(datetimeWithMillisecond.second).toBe(19);
      expect(datetimeWithMillisecond.millisecond).toBe(2);
      expect(datetimeWithMillisecond.offset.inMinutes).toBe(60);
    });
  });

  describe("withOffset", () => {
    it("should return a datetime", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeWithOffset = datetime.withOffset(
        Offset.fromObject({ isPositive: false, hour: 1 })
      );

      // then
      expect(datetimeWithOffset).toBeInstanceOf(DateTime);
      expect(datetimeWithOffset.year).toBe(2024);
      expect(datetimeWithOffset.month).toBe(12);
      expect(datetimeWithOffset.day).toBe(7);
      expect(datetimeWithOffset.hour).toBe(13);
      expect(datetimeWithOffset.minute).toBe(56);
      expect(datetimeWithOffset.second).toBe(19);
      expect(datetimeWithOffset.millisecond).toBe(920);
      expect(datetimeWithOffset.offset.inMinutes).toBe(-60);
    });
  });

  describe("inOffset", () => {
    it("should return the date time in another offset", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const offset = Offset.UTC;

      // when
      const datetimeInOffset = datetime.inOffset(offset);

      // then
      expect(datetimeInOffset).toBeInstanceOf(DateTime);
      expect(datetimeInOffset.year).toBe(2024);
      expect(datetimeInOffset.month).toBe(12);
      expect(datetimeInOffset.day).toBe(7);
      expect(datetimeInOffset.hour).toBe(12);
      expect(datetimeInOffset.minute).toBe(56);
      expect(datetimeInOffset.second).toBe(19);
      expect(datetimeInOffset.millisecond).toBe(920);
      expect(datetimeInOffset.offset.inMinutes).toBe(0);
    });
  });

  describe("inZone", () => {
    it("should return the date time in another zone", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const zoneName = "UTC";

      // when
      const datetimeInZone = datetime.inZone(zoneName);

      // then
      expect(datetimeInZone).toBeInstanceOf(DateTime);
      expect(datetimeInZone.year).toBe(2024);
      expect(datetimeInZone.month).toBe(12);
      expect(datetimeInZone.day).toBe(7);
      expect(datetimeInZone.hour).toBe(12);
      expect(datetimeInZone.minute).toBe(56);
      expect(datetimeInZone.second).toBe(19);
      expect(datetimeInZone.millisecond).toBe(920);
      expect(datetimeInZone.offset.inMinutes).toBe(0);
    });
  });

  describe("inUTC", () => {
    it("should return the date time in UTC", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const datetimeInZone = datetime.inUTC();

      // then
      expect(datetimeInZone).toBeInstanceOf(DateTime);
      expect(datetimeInZone.year).toBe(2024);
      expect(datetimeInZone.month).toBe(12);
      expect(datetimeInZone.day).toBe(7);
      expect(datetimeInZone.hour).toBe(12);
      expect(datetimeInZone.minute).toBe(56);
      expect(datetimeInZone.second).toBe(19);
      expect(datetimeInZone.millisecond).toBe(920);
      expect(datetimeInZone.offset.inMinutes).toBe(0);
    });
  });

  describe("plus", () => {
    it("should return the addition of datetime and duration", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const duration = Duration.fromObject({ millisecond: 10 });

      // when
      const sum = datetime.plus(duration);

      // then
      expect(sum).toBeInstanceOf(DateTime);
      expect(sum.year).toBe(2024);
      expect(sum.month).toBe(12);
      expect(sum.day).toBe(7);
      expect(sum.hour).toBe(13);
      expect(sum.minute).toBe(56);
      expect(sum.second).toBe(19);
      expect(sum.millisecond).toBe(930);
      expect(sum.offset.inMinutes).toBe(60);
    });
  });

  describe("minus", () => {
    it("should return the subtraction of datetime and duration", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const duration = Duration.fromObject({ millisecond: 10 });

      // when
      const diff = datetime.minus(duration);

      // then
      expect(diff).toBeInstanceOf(DateTime);
      expect(diff.year).toBe(2024);
      expect(diff.month).toBe(12);
      expect(diff.day).toBe(7);
      expect(diff.hour).toBe(13);
      expect(diff.minute).toBe(56);
      expect(diff.second).toBe(19);
      expect(diff.millisecond).toBe(910);
      expect(diff.offset.inMinutes).toBe(60);
    });
  });

  describe("static fromDaysSinceEpoch", () => {
    it("should return a datetime from days since epoch", () => {
      // given
      const daysSinceEpoch = 20064.539119444446;

      // when
      const datetime = DateTime.fromDaysSinceEpoch(daysSinceEpoch);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });
  });

  describe("static fromHoursSinceEpoch", () => {
    it("should return a datetime from hours since epoch", () => {
      // given
      const hoursSinceEpoch = 481548.9388666667;

      // when
      const datetime = DateTime.fromHoursSinceEpoch(hoursSinceEpoch);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });
  });

  describe("static fromMinutesSinceEpoch", () => {
    it("should return a datetime from minutes since epoch", () => {
      // given
      const minutesSinceEpoch = 28892936.332;

      // when
      const datetime = DateTime.fromMinutesSinceEpoch(minutesSinceEpoch);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });
  });

  describe("static fromSecondsSinceEpoch", () => {
    it("should return a datetime from seconds since epoch", () => {
      // given
      const secondsSinceEpoch = 1_733_576_179.92;

      // when
      const datetime = DateTime.fromSecondsSinceEpoch(secondsSinceEpoch);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });
  });

  describe("static fromMillisecondsSinceEpoch", () => {
    it("should return a datetime from milliseconds since epoch", () => {
      // given
      const millisecondsSinceEpoch = 1_733_576_179_920;

      // when
      const datetime = DateTime.fromMillisecondsSinceEpoch(
        millisecondsSinceEpoch
      );

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });
  });

  describe("static fromDurationSinceEpoch", () => {
    it("should return a datetime from duration since epoch", () => {
      // given
      const durationSinceEpoch = Duration.fromObject({
        day: 20064,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      // when
      const datetime = DateTime.fromDurationSinceEpoch(durationSinceEpoch);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });
  });

  describe("static fromObject", () => {
    it("should return a datetime from an object", () => {
      // given
      const objectLiteral = {
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      };

      // when
      const datetime = DateTime.fromObject(objectLiteral);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(60);
    });
  });

  describe("static fromString", () => {
    it("should return the date time from a zero string", () => {
      // given
      const str = "2024-12-07 13:56:19.920 UTC";

      // when
      const datetime = DateTime.fromString(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });

    it("should return the date time from an hours only string", () => {
      // given
      const str = "2024-12-07 13:56:19.920 UTC+01";

      // when
      const datetime = DateTime.fromString(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(60);
    });

    it("should return the date time from an minutes only string", () => {
      // given
      const str = "2024-12-07 13:56:19.920 UTC+00:30";

      // when
      const datetime = DateTime.fromString(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(30);
    });

    it("should return the date time from hours and minutes string", () => {
      // given
      const str = "2024-12-07 13:56:19.920 UTC+01:30";

      // when
      const datetime = DateTime.fromString(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(90);
    });

    it("should throw an error with an invalid string", () => {
      // given
      const str = "2024-12-07 wwww 13:56:19.920 UTC+01:00";

      // when/then
      expect(() => DateTime.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the date time from a zero iso string", () => {
      // given
      const str = "2024-12-07T13:56:19.920Z";

      // when
      const datetime = DateTime.fromISOString(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });

    it("should return the date time from an hours only iso string", () => {
      // given
      const str = "2024-12-07T13:56:19.920+01";

      // when
      const datetime = DateTime.fromISOString(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(60);
    });

    it("should return the date time from an minutes only iso string", () => {
      // given
      const str = "2024-12-07T13:56:19.920+00:30";

      // when
      const datetime = DateTime.fromISOString(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(30);
    });

    it("should return the date time from hours and minutes iso string", () => {
      // given
      const str = "2024-12-07T13:56:19.920+01:30";

      // when
      const datetime = DateTime.fromISOString(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(90);
    });

    it("should throw an error with an invalid iso string", () => {
      // given
      const str = "2024-12-07-13:56:19.920Z";

      // when/then
      expect(() => DateTime.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the date time from a string", () => {
      // given
      const str = "2024-12-07 13:56:19.920 UTC+01:30";

      // when
      const datetime = DateTime.parse(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(90);
    });

    it("should return the date time from an iso string", () => {
      // given
      const str = "2024-12-07T13:56:19.920+01:30";

      // when
      const datetime = DateTime.parse(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(13);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(90);
    });

    it("should return a datetime from a string", () => {
      // given
      const str = "Sat, 07 Dec 2024 12:56:19.920 GMT";

      // when
      const datetime = DateTime.parse(str);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });

    it("should throw an error with an invalid string", () => {
      // given
      const str = "2024-12-07-13:56:19.920+01:00";

      // when/then
      expect(() => DateTime.parse(str)).toThrowError();
    });
  });

  describe("static fromJSDate", () => {
    it("should return a datetime from a js date", () => {
      // given
      const date = new Date(Date.UTC(2024, 11, 7, 12, 56, 19, 920));

      // when
      const datetime = DateTime.fromJSDate(date);

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(12);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
      expect(datetime.offset.inMinutes).toBe(0);
    });
  });

  describe("static now", () => {
    it("should return the current datetime", () => {
      // when
      const datetime = DateTime.now();

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(now.getFullYear());
      expect(datetime.month).toBe(now.getMonth() + 1);
      expect(datetime.day).toBe(now.getDate());
      expect(datetime.hour).toBe(now.getHours());
      expect(datetime.minute).toBe(now.getMinutes());
      expect(datetime.second).toBe(now.getSeconds());
      expect(datetime.millisecond).toBe(now.getMilliseconds());
      expect(datetime.offset.inMinutes).toBe(0);
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the datetime is later than the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 3,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const comparison = DateTime.compare(datetime1, datetime2);

      // then
      expect(comparison).toBe(345_600_000);
    });

    it("should return zero when the datetime is equal to the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const comparison = DateTime.compare(datetime1, datetime2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the datetime is earlier than the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 3,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 12,
        day: 7,
        hour: 13,
        minute: 56,
        second: 19,
        millisecond: 920,
        offset: { hour: 1 },
      });

      // when
      const comparison = DateTime.compare(datetime1, datetime2);

      // then
      expect(comparison).toBe(-345_600_000);
    });
  });
});
