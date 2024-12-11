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
      const datetime = new DateTime(1_733_576_179_920);

      // when
      const millisecondsSinceEpoch = datetime.millisecondsSinceEpoch;

      // then
      expect(millisecondsSinceEpoch).toBe(1_733_576_179_920);
    });
  });

  describe("valueOf", () => {
    it("should return the value of duration", () => {
      // given
      const datetime = new DateTime(1_733_576_179_920);

      // when
      const value = datetime.valueOf();

      // then
      expect(value).toBe(1_733_576_179_920);
    });
  });

  describe("toString", () => {
    it("should return the string of a datetime", () => {
      // given
      const datetime = new DateTime(1_733_576_179_920);

      // when
      const str = datetime.toString();

      // then
      expect(str).toBe("Sat, 07 Dec 2024 12:56:19 GMT");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the datetime", () => {
      // given
      const datetime = new DateTime(1_733_576_179_920);

      // when
      const primitive = +datetime;

      // then
      expect(primitive).toBe(1_733_576_179_920);
    });

    it("should return a string when a string is expected of the datetime", () => {
      // given
      const datetime = new DateTime(1_733_576_179_920);

      // when
      const primitive = `${datetime}`;

      // then
      expect(primitive).toBe("Sat, 07 Dec 2024 12:56:19 GMT");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of datetime", () => {
      // given
      const datetime = new DateTime(1_733_576_179_920);

      // when
      const jsonStr = JSON.stringify(datetime);

      // then
      expect(jsonStr).toBe(`"2024-12-07T12:56:19.920Z"`);
    });
  });

  describe("toISOString", () => {
    it("should return the iso string of a datetime", () => {
      // given
      const datetime = new DateTime(1_733_576_179_920);

      // when
      const isoStr = datetime.toISOString();

      // then
      expect(isoStr).toBe("2024-12-07T12:56:19.920Z");
    });
  });

  describe("toObject", () => {
    it("should return the object of a datetime", () => {
      // given
      const datetime = new DateTime(1_733_576_179_920);

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

  describe("equals", () => {
    it("should return true for equal datetimes", () => {
      // given
      const datetime1 = new DateTime(1_733_576_179_920);
      const datetime2 = new DateTime(1_733_576_179_920);

      // when
      const isEqual = datetime1.equals(datetime2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal datetimes", () => {
      // given
      const datetime1 = new DateTime(1_733_576_179_920);
      const datetime2 = new DateTime(1_733_576_179_820);

      // when
      const isEqual = datetime1.equals(datetime2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isLaterThan", () => {
    it("should return true when the datetime is later than the other datetime", () => {
      // given
      const datetime1 = new DateTime(1_733_576_179_920);
      const datetime2 = new DateTime(1_733_576_179_820);

      // when
      const isLaterThan = datetime1.isLaterThan(datetime2);

      // then
      expect(isLaterThan).toBe(true);
    });

    it("should return false when the datetime is equal to the other datetime", () => {
      // given
      const datetime1 = new DateTime(1_733_576_179_920);
      const datetime2 = new DateTime(1_733_576_179_920);

      // when
      const isLongerThan = datetime1.isLaterThan(datetime2);

      // then
      expect(isLongerThan).toBe(false);
    });

    it("should return false when the datetime is earlier than the other datetime", () => {
      // given
      const datetime1 = new DateTime(1_733_576_179_820);
      const datetime2 = new DateTime(1_733_576_179_920);

      // when
      const isLongerThan = datetime1.isLaterThan(datetime2);

      // then
      expect(isLongerThan).toBe(false);
    });
  });

  describe("isEarlierThan", () => {
    it("should return true when the datetime is earlier than the other datetime", () => {
      // given
      const datetime1 = new DateTime(1_733_576_179_820);
      const datetime2 = new DateTime(1_733_576_179_920);

      // when
      const isEarlierThan = datetime1.isEarlierThan(datetime2);

      // then
      expect(isEarlierThan).toBe(true);
    });

    it("should return false when the datetime is equal to the other datetime", () => {
      // given
      const datetime1 = new DateTime(1_733_576_179_920);
      const datetime2 = new DateTime(1_733_576_179_920);

      // when
      const isEarlierThan = datetime1.isEarlierThan(datetime2);

      // then
      expect(isEarlierThan).toBe(false);
    });

    it("should return false when the datetime is later than the other datetime", () => {
      // given
      const datetime1 = new DateTime(1_733_576_179_920);
      const datetime2 = new DateTime(1_733_576_179_820);

      // when
      const isEarlierThan = datetime1.isEarlierThan(datetime2);

      // then
      expect(isEarlierThan).toBe(false);
    });
  });

  describe("plus", () => {
    it("should return the addition of datetime and duration", () => {
      // given
      const datetime = DateTime.of(1_733_576_179_920);
      const duration = Duration.of(10 * MILLISECOND);

      // when
      const sum = datetime.plus(duration);

      // then
      expect(sum).toEqual(new DateTime(1_733_576_179_930));
    });
  });

  describe("minus", () => {
    it("should return the subtraction of datetime and duration", () => {
      // given
      const datetime = DateTime.of(1_733_576_179_920);
      const duration = Duration.of(10 * MILLISECOND);

      // when
      const diff = datetime.minus(duration);

      // then
      expect(diff).toEqual(new DateTime(1_733_576_179_910));
    });
  });

  // ----------------------------------------------------------------
  // static

  describe("static of", () => {
    it("should return a datetime of epoch from zero", () => {
      // given
      const millisecondsSinceEpoch = 0;

      // when
      const datetime = DateTime.of(millisecondsSinceEpoch);

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
      const datetime = DateTime.of(millisecondsSinceEpoch);

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
      const expected = new DateTime(1_733_576_179_920);
      expect(datetime).toEqual(expected);
    });
  });
});
