import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Duration from "../Duration/Duration";
import Offset from "./Offset";

describe("Offset", () => {
  const now = new Date();

  beforeEach(() => {
    vi.useFakeTimers().setSystemTime(now);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("constructor", () => {
    it("should return an offset", () => {
      // given
      const hour = 1;
      const minute = 30;

      // when
      const offset = new Offset(hour, minute);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(hour);
      expect(offset.minute).toBe(minute);
    });

    it("should throw an error with invalid hour", () => {
      // given
      const hour = 24;
      const minute = 30;

      // when/then
      expect(() => new Offset(hour, minute)).toThrowError();
    });

    it("should throw an error with invalid minute", () => {
      // given
      const hour = 1;
      const minute = 60;

      // when/then
      expect(() => new Offset(hour, minute)).toThrowError();
    });
  });

  describe("inHours", () => {
    it("should return the total offset in hour", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const inHours = offset.inHours;

      // then
      expect(inHours).toBe(1.5);
    });
  });

  describe("inMinutes", () => {
    it("should return the total offset in minute", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const inMinutes = offset.inMinutes;

      // then
      expect(inMinutes).toBe(90);
    });
  });

  describe("valueOf", () => {
    it("should return the value of offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const value = offset.valueOf();

      // then
      expect(value).toBe(5_400_000);
    });
  });

  describe("toString", () => {
    it("should return the string of positive offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const str = offset.toString();

      // then
      expect(str).toBe("UTC+01:30");
    });

    it("should return the string of negative offset", () => {
      // given
      const offset = Offset.fromObject({ hour: -1, minute: -30 });

      // when
      const str = offset.toString();

      // then
      expect(str).toBe("UTC-01:30");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const primitive = +offset;

      // then
      expect(primitive).toBe(5_400_000);
    });

    it("should return a string when a string is expected of the offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const primitive = `${offset}`;

      // then
      expect(primitive).toBe("UTC+01:30");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const jsonStr = JSON.stringify(offset);

      // then
      expect(jsonStr).toBe(`"+01:30"`);
    });
  });

  describe("toISOString", () => {
    it("should return the iso string of positive offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const isoStr = offset.toISOString();

      // then
      expect(isoStr).toBe("+01:30");
    });

    it("should return the iso string of negative offset", () => {
      // given
      const offset = Offset.fromObject({ hour: -1, minute: -30 });

      // when
      const isoStr = offset.toISOString();

      // then
      expect(isoStr).toBe("-01:30");
    });
  });

  describe("toObject", () => {
    it("should return the empty object of zero", () => {
      // given
      const offset = Offset.fromObject({});

      // when
      const objectLiteral = offset.toObject();

      // then
      expect(objectLiteral).toEqual({});
    });

    it("should return the object of only hour", () => {
      // given
      const offset = Offset.fromObject({ hour: 1 });

      // when
      const objectLiteral = offset.toObject();

      // then
      expect(objectLiteral).toEqual({ hour: 1 });
    });

    it("should return the object of only minute", () => {
      // given
      const offset = Offset.fromObject({ minute: 30 });

      // when
      const objectLiteral = offset.toObject();

      // then
      expect(objectLiteral).toEqual({ minute: 30 });
    });

    it("should return the object of positive offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const objectLiteral = offset.toObject();

      // then
      expect(objectLiteral).toEqual({ hour: 1, minute: 30 });
    });

    it("should return the object of negative offset", () => {
      // given
      const offset = Offset.fromObject({ hour: -1, minute: -30 });

      // when
      const objectLiteral = offset.toObject();

      // then
      expect(objectLiteral).toEqual({ hour: -1, minute: -30 });
    });
  });

  describe("toDuration", () => {
    it("should return the duration of positive offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const duration = offset.toDuration();

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(1);
      expect(duration.minute).toBe(30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });

    it("should return the duration of negative offset", () => {
      // given
      const offset = Offset.fromObject({ hour: -1, minute: -30 });

      // when
      const duration = offset.toDuration();

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.day).toBe(0);
      expect(duration.hour).toBe(-1);
      expect(duration.minute).toBe(-30);
      expect(duration.second).toBe(0);
      expect(duration.millisecond).toBe(0);
    });
  });

  describe("equals", () => {
    it("should return true for equal offsets", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const isEqual = offset1.equals(offset2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal offsets", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1 });

      // when
      const isEqual = offset1.equals(offset2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isEasterThan", () => {
    it("should return true when the offset is easter than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1 });

      // when
      const isEasterThan = offset1.isEasterThan(offset2);

      // then
      expect(isEasterThan).toBe(true);
    });

    it("should return false when the offset is equal to the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const isEasterThan = offset1.isEasterThan(offset2);

      // then
      expect(isEasterThan).toBe(false);
    });

    it("should return false when the offset is wester than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1 });
      const offset2 = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const isEasterThan = offset1.isEasterThan(offset2);

      // then
      expect(isEasterThan).toBe(false);
    });
  });

  describe("isWesterThan", () => {
    it("should return true when the offset is wester than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1 });
      const offset2 = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const isWesterThan = offset1.isWesterThan(offset2);

      // then
      expect(isWesterThan).toBe(true);
    });

    it("should return false when the offset is equal to the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const isWesterThan = offset1.isWesterThan(offset2);

      // then
      expect(isWesterThan).toBe(false);
    });

    it("should return false when the offset is easter than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1 });

      // when
      const isWesterThan = offset1.isWesterThan(offset2);

      // then
      expect(isWesterThan).toBe(false);
    });
  });

  describe("withHour", () => {
    it("should return an offset with replaced hour", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const offsetWithHours = offset.withHour(2);

      // then
      expect(offsetWithHours).toBeInstanceOf(Offset);
      expect(offsetWithHours.hour).toBe(2);
      expect(offsetWithHours.minute).toBe(30);
    });
  });

  describe("withMinute", () => {
    it("should return an offset with replaced minute", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const offsetWithMinutes = offset.withMinute(0);

      // then
      expect(offsetWithMinutes).toBeInstanceOf(Offset);
      expect(offsetWithMinutes.hour).toBe(1);
      expect(offsetWithMinutes.minute).toBe(0);
    });
  });

  describe("plus", () => {
    it("should return the addition of offsets", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1 });

      // when
      const sum = offset1.plus(offset2);

      // then
      expect(sum).toBeInstanceOf(Offset);
      expect(sum.hour).toBe(2);
      expect(sum.minute).toBe(30);
    });
  });

  describe("minus", () => {
    it("should return the subtraction of offsets", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1 });

      // when
      const diff = offset1.minus(offset2);

      // then
      expect(diff).toBeInstanceOf(Offset);
      expect(diff.hour).toBe(0);
      expect(diff.minute).toBe(30);
    });
  });

  describe("negate", () => {
    it("should return the negative offset of a positive offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const negated = offset.negate();

      // then
      expect(negated).toBeInstanceOf(Offset);
      expect(negated.hour).toBe(-1);
      expect(negated.minute).toBe(-30);
    });

    it("should return the positive offset of a negative offset", () => {
      // given
      const offset = Offset.fromObject({ hour: -1, minute: -30 });

      // when
      const negated = offset.negate();

      // then
      expect(negated).toBeInstanceOf(Offset);
      expect(negated.hour).toBe(1);
      expect(negated.minute).toBe(30);
    });
  });

  describe("absolute", () => {
    it("should return the absolute of a negative offset", () => {
      // given
      const offset = Offset.fromObject({ hour: -1, minute: -30 });

      // when
      const abs = offset.absolute();

      // then
      expect(abs).toBeInstanceOf(Offset);
      expect(abs.hour).toBe(1);
      expect(abs.minute).toBe(30);
    });

    it("should return the absolute of a positive offset", () => {
      // given
      const offset = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const abs = offset.absolute();

      // then
      expect(abs).toBeInstanceOf(Offset);
      expect(abs.hour).toBe(1);
      expect(abs.minute).toBe(30);
    });
  });

  describe("static UTC", () => {
    it("should return the offset of UTC", () => {
      // when
      const offset = Offset.UTC;

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(0);
      expect(offset.minute).toBe(0);
    });
  });

  describe("static fromHours", () => {
    it("should return an offset from positive hour", () => {
      // given
      const inHours = 1.5;

      // when
      const offset = Offset.fromHours(inHours);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(30);
    });

    it("should return an offset from negative hour", () => {
      // given
      const inHours = -1.5;

      // when
      const offset = Offset.fromHours(inHours);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-1);
      expect(offset.minute).toBe(-30);
    });
  });

  describe("static fromMinutes", () => {
    it("should return an offset from positive minute", () => {
      // given
      const inMinutes = 90;

      // when
      const offset = Offset.fromMinutes(inMinutes);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(30);
    });

    it("should return an offset from negative minute", () => {
      // given
      const inMinutes = -90;

      // when
      const offset = Offset.fromMinutes(inMinutes);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-1);
      expect(offset.minute).toBe(-30);
    });
  });

  describe("static fromObject", () => {
    it("should return the offset of zero from an object", () => {
      // given
      const objectLiteral = {};

      // when
      const offset = Offset.fromObject(objectLiteral);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(0);
      expect(offset.minute).toBe(0);
    });

    it("should return the offset of only hour from an object", () => {
      // given
      const objectLiteral = { hour: 1 };

      // when
      const offset = Offset.fromObject(objectLiteral);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(0);
    });

    it("should return the offset of only minute from an object", () => {
      // given
      const objectLiteral = { minute: 30 };

      // when
      const offset = Offset.fromObject(objectLiteral);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(0);
      expect(offset.minute).toBe(30);
    });

    it("should return the offset of positive object", () => {
      // given
      const objectLiteral = {
        hour: 1,
        minute: 30,
      };

      // when
      const offset = Offset.fromObject(objectLiteral);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(30);
    });

    it("should return the offset of negative object", () => {
      // given
      const objectLiteral = {
        hour: -1,
        minute: -30,
      };

      // when
      const offset = Offset.fromObject(objectLiteral);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-1);
      expect(offset.minute).toBe(-30);
    });
  });

  describe("static fromString", () => {
    it("should return the offset of positive string", () => {
      // given
      const str = "UTC+01:30";

      // when
      const offset = Offset.fromString(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(30);
    });

    it("should return the offset of negative string", () => {
      // given
      const str = "UTC-01:30";

      // when
      const offset = Offset.fromString(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-1);
      expect(offset.minute).toBe(-30);
    });

    it("should throw an error with an invalid string", () => {
      // given
      const str = "UTC-01:30:920gmt";

      // when/then
      expect(() => Offset.fromString(str)).toThrowError();
    });
  });

  describe("static fromISOString", () => {
    it("should return the offset of positive iso string", () => {
      // given
      const str = "+01:30";

      // when
      const offset = Offset.fromISOString(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(30);
    });

    it("should return the offset of negative iso string", () => {
      // given
      const str = "-01:30";

      // when
      const offset = Offset.fromISOString(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-1);
      expect(offset.minute).toBe(-30);
    });

    it("should throw an error with an invalid iso string", () => {
      // given
      const str = "-01:30:920gmt";

      // when/then
      expect(() => Offset.fromISOString(str)).toThrowError();
    });
  });

  describe("static parse", () => {
    it("should return the offset of positive string", () => {
      // given
      const str = "UTC+01:30";

      // when
      const offset = Offset.parse(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(30);
    });

    it("should return the offset of negative string", () => {
      // given
      const str = "UTC-01:30";

      // when
      const offset = Offset.parse(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-1);
      expect(offset.minute).toBe(-30);
    });

    it("should throw an error with an invalid string", () => {
      // given
      const str = "UTC-01:30:920gmt";

      // when/then
      expect(() => Offset.parse(str)).toThrowError();
    });

    it("should return the offset of positive iso string", () => {
      // given
      const str = "+01:30";

      // when
      const offset = Offset.parse(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(30);
    });

    it("should return the offset of negative iso string", () => {
      // given
      const str = "-01:30";

      // when
      const offset = Offset.parse(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-1);
      expect(offset.minute).toBe(-30);
    });

    it("should throw an error with an invalid iso string", () => {
      // given
      const str = "-01:30:920gmt";

      // when/then
      expect(() => Offset.parse(str)).toThrowError();
    });

    it("should return the offset of UTC", () => {
      // given
      const zoneName = "UTC";

      // when
      const offset = Offset.parse(zoneName);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(0);
      expect(offset.minute).toBe(0);
    });

    it("should return the offset of America/New_York", () => {
      // given
      const zoneName = "America/New_York";

      // when
      const offset = Offset.parse(zoneName);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-5);
      expect(offset.minute).toBe(0);
    });

    it("should return the offset of Asia/Tokyo", () => {
      // given
      const zoneName = "Asia/Tokyo";

      // when
      const offset = Offset.parse(zoneName);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(9);
      expect(offset.minute).toBe(0);
    });

    it("should throw an error with an invalid zone name", () => {
      // given
      const str = "fruit/apple";

      // when/then
      expect(() => Offset.parse(str)).toThrowError();
    });
  });

  describe("static fromDuration", () => {
    it("should return the offset of positive duration", () => {
      // given
      const duration = Duration.fromObject({ hour: 1, minute: 30 });

      // when
      const offset = Offset.fromDuration(duration);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(1);
      expect(offset.minute).toBe(30);
    });

    it("should return the offset of negative duration", () => {
      // given
      const duration = Duration.fromObject({ hour: -1, minute: -30 });

      // when
      const offset = Offset.fromDuration(duration);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-1);
      expect(offset.minute).toBe(-30);
    });
  });

  describe("static fromZoneName", () => {
    it("should return the offset of UTC", () => {
      // given
      const zoneName = "UTC";

      // when
      const offset = Offset.fromZoneName(zoneName);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(0);
      expect(offset.minute).toBe(0);
    });

    it("should return the offset of America/New_York", () => {
      // given
      const zoneName = "America/New_York";

      // when
      const offset = Offset.fromZoneName(zoneName);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(-5);
      expect(offset.minute).toBe(0);
    });

    it("should return the offset of Asia/Tokyo", () => {
      // given
      const zoneName = "Asia/Tokyo";

      // when
      const offset = Offset.fromZoneName(zoneName);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(9);
      expect(offset.minute).toBe(0);
    });

    it("should throw an error with an invalid zone name", () => {
      // given
      const str = "fruit/apple";

      // when/then
      expect(() => Offset.fromZoneName(str)).toThrowError();
    });
  });

  describe("static local", () => {
    it("should return the local offset", () => {
      // when
      const offset = Offset.local();

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hour).toBe(0);
      expect(offset.minute).toBe(0);
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the offset is easter than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1 });

      // when
      const comparison = Offset.compare(offset1, offset2);

      // then
      expect(comparison).toBe(30);
    });

    it("should return zero when the offset is equal to the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1, minute: 30 });
      const offset2 = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const comparison = Offset.compare(offset1, offset2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the offset is wester than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hour: 1 });
      const offset2 = Offset.fromObject({ hour: 1, minute: 30 });

      // when
      const comparison = Offset.compare(offset1, offset2);

      // then
      expect(comparison).toBe(-30);
    });
  });
});
