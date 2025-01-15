import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
// import { DAY, HOUR, MILLISECOND, MINUTE, SECOND } from "../Units/Units";
import DateTime from "./DateTime";
import { Duration, MILLISECOND } from "../main";

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
      // given
      const millisecondsSinceEpoch = 0;

      // when
      const datetime = new DateTime(millisecondsSinceEpoch);

      // then
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
      // given
      const millisecondsSinceEpoch = 1_733_576_179_920;

      // when
      const datetime = new DateTime(millisecondsSinceEpoch);

      // then
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

  describe("millisecondsSinceEpoch", () => {
    it("should return the total milliseconds since epoch", () => {
      // given
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
      const millisecondsSinceEpoch = datetime.millisecondsSinceEpoch;

      // then
      expect(millisecondsSinceEpoch).toBe(1_733_576_179_920);
    });
  });

  describe("valueOf", () => {
    it("should return the value of duration", () => {
      // given
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      // when
      const str = datetime.toString();

      // then
      expect(str).toBe("Sat, 07 Dec 2024 12:56:19 GMT");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the datetime", () => {
      // given
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
      const primitive = +datetime;

      // then
      expect(primitive).toBe(1_733_576_179_920);
    });

    it("should return a string when a string is expected of the datetime", () => {
      // given
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
      const primitive = `${datetime}`;

      // then
      expect(primitive).toBe("Sat, 07 Dec 2024 12:56:19 GMT");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of datetime", () => {
      // given
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
      const jsonStr = JSON.stringify(datetime);

      // then
      expect(jsonStr).toBe(`"2024-12-07T12:56:19.920Z"`);
    });
  });

  describe("toISOString", () => {
    it("should return the iso string of a datetime", () => {
      // given
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
      const isoStr = datetime.toISOString();

      // then
      expect(isoStr).toBe("2024-12-07T12:56:19.920Z");
    });
  });

  describe("toObject", () => {
    it("should return the object of a datetime", () => {
      // given
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
      const obj = datetime.toObject();

      // then
      expect(obj).toEqual({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
    });
  });

  describe("toJSDate", () => {
    it("should return the js date of a datetime", () => {
      // given
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
      const jsDate = datetime.toJSDate();

      // then
      expect(jsDate).toEqual(new Date(Date.UTC(2024, 11, 7, 12, 56, 19, 920)));
    });
  });

  describe("equals", () => {
    it("should return true for equal datetimes", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      // when
      const isEqual = datetime1.equals(datetime2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal datetimes", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 820,
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 820,
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 820,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 820,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 820,
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      // when
      const datetimeWithYear = datetime.withYear(2023);

      // then
      expect(datetimeWithYear).toEqual(
        DateTime.fromObject({
          year: 2023,
          month: 11,
          day: 7,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
        })
      );
    });
  });

  describe("withMonth", () => {
    it("should return a datetime", () => {
      // given
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
      const datetimeWithMonth = datetime.withMonth(9);

      // then
      expect(datetimeWithMonth).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 9,
          day: 7,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
        })
      );
    });
  });

  describe("withDay", () => {
    it("should return a datetime", () => {
      // given
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
      const datetimeWithDay = datetime.withDay(28);

      // then
      expect(datetimeWithDay).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 28,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 920,
        })
      );
    });
  });

  describe("withHour", () => {
    it("should return a datetime", () => {
      // given
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
      const datetimeWithHour = datetime.withHour(21);

      // then
      expect(datetimeWithHour).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 7,
          hour: 21,
          minute: 56,
          second: 19,
          millisecond: 920,
        })
      );
    });
  });

  describe("withMinute", () => {
    it("should return a datetime", () => {
      // given
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
      const datetimeWithMinute = datetime.withMinute(59);

      // then
      expect(datetimeWithMinute).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 7,
          hour: 12,
          minute: 59,
          second: 19,
          millisecond: 920,
        })
      );
    });
  });

  describe("withSecond", () => {
    it("should return a datetime", () => {
      // given
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
      const datetimeWithSecond = datetime.withSecond(45);

      // then
      expect(datetimeWithSecond).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 7,
          hour: 12,
          minute: 56,
          second: 45,
          millisecond: 920,
        })
      );
    });
  });

  describe("withMillisecond", () => {
    it("should return a datetime", () => {
      // given
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
      const datetimeWithMillisecond = datetime.withMillisecond(2);

      // then
      expect(datetimeWithMillisecond).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 7,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 2,
        })
      );
    });
  });

  describe("plus", () => {
    it("should return the addition of datetime and duration", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const duration = Duration.of(10 * MILLISECOND);

      // when
      const sum = datetime.plus(duration);

      // then
      expect(sum).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 7,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 930,
        })
      );
    });
  });

  describe("minus", () => {
    it("should return the subtraction of datetime and duration", () => {
      // given
      const datetime = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const duration = Duration.of(10 * MILLISECOND);

      // when
      const diff = datetime.minus(duration);

      // then
      expect(diff).toEqual(
        DateTime.fromObject({
          year: 2024,
          month: 11,
          day: 7,
          hour: 12,
          minute: 56,
          second: 19,
          millisecond: 910,
        })
      );
    });
  });

  describe("static fromUTCMillisecondsSinceEpoch", () => {
    it("should return a datetime of epoch from zero", () => {
      // given
      const millisecondsSinceEpoch = 0;

      // when
      const datetime = DateTime.fromUTCMillisecondsSinceEpoch(
        millisecondsSinceEpoch
      );

      // then
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
      // given
      const millisecondsSinceEpoch = 1_733_576_179_920;

      // when
      const datetime = DateTime.fromUTCMillisecondsSinceEpoch(
        millisecondsSinceEpoch
      );

      // then
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

  describe("static parse", () => {
    it("should return a datetime from a string", () => {
      // given
      const str = "Sat, 07 Dec 2024 12:56:19.920 GMT";

      // when
      const datetime = DateTime.parse(str)!;

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(11);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
    });

    it("should return a datetime from an iso string", () => {
      // given
      const str = "2024-12-07T12:56:19.920Z";

      // when
      const datetime = DateTime.parse(str)!;

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(2024);
      expect(datetime.month).toBe(11);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
    });

    it("should return null from an invalid string", () => {
      // given
      const str = "2024-12-07-12:56:19.920";

      // when
      const datetime = DateTime.parse(str)!;

      // then
      expect(datetime).toBeNull();
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
      expect(datetime.month).toBe(11);
      expect(datetime.day).toBe(7);
      expect(datetime.hour).toBe(12);
      expect(datetime.minute).toBe(56);
      expect(datetime.second).toBe(19);
      expect(datetime.millisecond).toBe(920);
    });
  });

  describe("static now", () => {
    it("should return the current datetime", () => {
      // when
      const datetime = DateTime.now();

      // then
      expect(datetime).toBeInstanceOf(DateTime);
      expect(datetime.year).toBe(now.getUTCFullYear());
      expect(datetime.month).toBe(now.getUTCMonth());
      expect(datetime.day).toBe(now.getUTCDate());
      expect(datetime.hour).toBe(now.getUTCHours());
      expect(datetime.minute).toBe(now.getUTCMinutes());
      expect(datetime.second).toBe(now.getUTCSeconds());
      expect(datetime.millisecond).toBe(now.getUTCMilliseconds());
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the datetime is later than the other datetime", () => {
      // given
      const datetime1 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 3,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
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
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
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
        month: 11,
        day: 3,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });
      const datetime2 = DateTime.fromObject({
        year: 2024,
        month: 11,
        day: 7,
        hour: 12,
        minute: 56,
        second: 19,
        millisecond: 920,
      });

      // when
      const comparison = DateTime.compare(datetime1, datetime2);

      // then
      expect(comparison).toBe(-345_600_000);
    });
  });
});
