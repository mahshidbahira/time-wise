import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Offset from "./Offset";
import { Duration } from "../main";

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
      const hours = 1;
      const minutes = 30;

      // when
      const offset = new Offset(hours, minutes);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(hours);
      expect(offset.minutes).toBe(minutes);
    });

    it("should throw an error with invalid hours", () => {
      // given
      const hours = 24;
      const minutes = 30;

      // when/then
      expect(() => new Offset(hours, minutes)).toThrowError();
    });

    it("should throw an error with invalid minutes", () => {
      // given
      const hours = 1;
      const minutes = 60;

      // when/then
      expect(() => new Offset(hours, minutes)).toThrowError();
    });
  });

  describe("inHours", () => {
    it("should return the total offset in hours", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const inHours = offset.inHours;

      // then
      expect(inHours).toBe(1.5);
    });
  });

  describe("inMinutes", () => {
    it("should return the total offset in minutes", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const inMinutes = offset.inMinutes;

      // then
      expect(inMinutes).toBe(90);
    });
  });

  describe("valueOf", () => {
    it("should return the value of offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const value = offset.valueOf();

      // then
      expect(value).toBe(5_400_000);
    });
  });

  describe("toString", () => {
    it("should return the string of positive offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const str = offset.toString();

      // then
      expect(str).toBe("UTC+01:30");
    });

    it("should return the string of negative offset", () => {
      // given
      const offset = Offset.fromObject({ hours: -1, minutes: -30 });

      // when
      const str = offset.toString();

      // then
      expect(str).toBe("UTC-01:30");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const primitive = +offset;

      // then
      expect(primitive).toBe(5_400_000);
    });

    it("should return a string when a string is expected of the offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const primitive = `${offset}`;

      // then
      expect(primitive).toBe("UTC+01:30");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const jsonStr = JSON.stringify(offset);

      // then
      expect(jsonStr).toBe(`"+01:30"`);
    });
  });

  describe("toISOString", () => {
    it("should return the iso string of positive offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const isoStr = offset.toISOString();

      // then
      expect(isoStr).toBe("+01:30");
    });

    it("should return the iso string of negative offset", () => {
      // given
      const offset = Offset.fromObject({ hours: -1, minutes: -30 });

      // when
      const isoStr = offset.toISOString();

      // then
      expect(isoStr).toBe("-01:30");
    });
  });

  describe("toObject", () => {
    it("should return the object of positive offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const objectLiteral = offset.toObject();

      // then
      expect(objectLiteral).toEqual({ hours: 1, minutes: 30 });
    });

    it("should return the object of negative offset", () => {
      // given
      const offset = Offset.fromObject({ hours: -1, minutes: -30 });

      // when
      const objectLiteral = offset.toObject();

      // then
      expect(objectLiteral).toEqual({ hours: -1, minutes: -30 });
    });
  });

  describe("toDuration", () => {
    it("should return the duration of positive offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const duration = offset.toDuration();

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(0);
      expect(duration.hours).toBe(1);
      expect(duration.minutes).toBe(30);
      expect(duration.seconds).toBe(0);
      expect(duration.milliseconds).toBe(0);
    });

    it("should return the duration of negative offset", () => {
      // given
      const offset = Offset.fromObject({ hours: -1, minutes: -30 });

      // when
      const duration = offset.toDuration();

      // then
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.days).toBe(-0);
      expect(duration.hours).toBe(-1);
      expect(duration.minutes).toBe(-30);
      expect(duration.seconds).toBe(-0);
      expect(duration.milliseconds).toBe(-0);
    });
  });

  describe("equals", () => {
    it("should return true for equal offsets", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const isEqual = offset1.equals(offset2);

      // then
      expect(isEqual).toBe(true);
    });

    it("should return false for unequal offsets", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 0 });

      // when
      const isEqual = offset1.equals(offset2);

      // then
      expect(isEqual).toBe(false);
    });
  });

  describe("isEasterThan", () => {
    it("should return true when the offset is easter than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 0 });

      // when
      const isEasterThan = offset1.isEasterThan(offset2);

      // then
      expect(isEasterThan).toBe(true);
    });

    it("should return false when the offset is equal to the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const isEasterThan = offset1.isEasterThan(offset2);

      // then
      expect(isEasterThan).toBe(false);
    });

    it("should return false when the offset is wester than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 0 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const isEasterThan = offset1.isEasterThan(offset2);

      // then
      expect(isEasterThan).toBe(false);
    });
  });

  describe("isWesterThan", () => {
    it("should return true when the offset is wester than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 0 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const isWesterThan = offset1.isWesterThan(offset2);

      // then
      expect(isWesterThan).toBe(true);
    });

    it("should return false when the offset is equal to the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const isWesterThan = offset1.isWesterThan(offset2);

      // then
      expect(isWesterThan).toBe(false);
    });

    it("should return false when the offset is easter than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 0 });

      // when
      const isWesterThan = offset1.isWesterThan(offset2);

      // then
      expect(isWesterThan).toBe(false);
    });
  });

  describe("withHours", () => {
    it("should return an offset with replaced hours", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const offsetWithHours = offset.withHours(2);

      // then
      expect(offsetWithHours).toBeInstanceOf(Offset);
      expect(offsetWithHours.hours).toBe(2);
      expect(offsetWithHours.minutes).toBe(30);
    });
  });

  describe("withMinutes", () => {
    it("should return an offset with replaced minutes", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const offsetWithMinutes = offset.withMinutes(0);

      // then
      expect(offsetWithMinutes).toBeInstanceOf(Offset);
      expect(offsetWithMinutes.hours).toBe(1);
      expect(offsetWithMinutes.minutes).toBe(0);
    });
  });

  describe("plus", () => {
    it("should return the addition of offsets", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 0 });

      // when
      const sum = offset1.plus(offset2);

      // then
      expect(sum).toBeInstanceOf(Offset);
      expect(sum.hours).toBe(2);
      expect(sum.minutes).toBe(30);
    });
  });

  describe("minus", () => {
    it("should return the subtraction of offsets", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 0 });

      // when
      const diff = offset1.minus(offset2);

      // then
      expect(diff).toBeInstanceOf(Offset);
      expect(diff.hours).toBe(0);
      expect(diff.minutes).toBe(30);
    });
  });

  describe("negate", () => {
    it("should return the negative offset of a positive offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const negated = offset.negate();

      // then
      expect(negated).toBeInstanceOf(Offset);
      expect(negated.hours).toBe(-1);
      expect(negated.minutes).toBe(-30);
    });

    it("should return the positive offset of a negative offset", () => {
      // given
      const offset = Offset.fromObject({ hours: -1, minutes: -30 });

      // when
      const negated = offset.negate();

      // then
      expect(negated).toBeInstanceOf(Offset);
      expect(negated.hours).toBe(1);
      expect(negated.minutes).toBe(30);
    });
  });

  describe("absolute", () => {
    it("should return the absolute of a negative offset", () => {
      // given
      const offset = Offset.fromObject({ hours: -1, minutes: -30 });

      // when
      const abs = offset.absolute();

      // then
      expect(abs).toBeInstanceOf(Offset);
      expect(abs.hours).toBe(1);
      expect(abs.minutes).toBe(30);
    });

    it("should return the absolute of a positive offset", () => {
      // given
      const offset = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const abs = offset.absolute();

      // then
      expect(abs).toBeInstanceOf(Offset);
      expect(abs.hours).toBe(1);
      expect(abs.minutes).toBe(30);
    });
  });

  describe("static fromHours", () => {
    it("should return an offset from positive hours", () => {
      // given
      const inHours = 1.5;

      // when
      const offset = Offset.fromHours(inHours);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(1);
      expect(offset.minutes).toBe(30);
    });

    it("should return an offset from negative hours", () => {
      // given
      const inHours = -1.5;

      // when
      const offset = Offset.fromHours(inHours);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(-1);
      expect(offset.minutes).toBe(-30);
    });
  });

  describe("static fromMinutes", () => {
    it("should return an offset from positive minutes", () => {
      // given
      const inMinutes = 90;

      // when
      const offset = Offset.fromMinutes(inMinutes);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(1);
      expect(offset.minutes).toBe(30);
    });

    it("should return an offset from negative minutes", () => {
      // given
      const inMinutes = -90;

      // when
      const offset = Offset.fromMinutes(inMinutes);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(-1);
      expect(offset.minutes).toBe(-30);
    });
  });

  describe("static fromObject", () => {
    it("should return the offset of positive object", () => {
      // given
      const objectLiteral = {
        hours: 1,
        minutes: 30,
      };

      // when
      const offset = Offset.fromObject(objectLiteral);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(1);
      expect(offset.minutes).toBe(30);
    });

    it("should return the offset of negative object", () => {
      // given
      const objectLiteral = {
        hours: -1,
        minutes: -30,
      };

      // when
      const offset = Offset.fromObject(objectLiteral);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(-1);
      expect(offset.minutes).toBe(-30);
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
      expect(offset!.hours).toBe(1);
      expect(offset!.minutes).toBe(30);
    });

    it("should return the offset of negative string", () => {
      // given
      const str = "UTC-01:30";

      // when
      const offset = Offset.fromString(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset!.hours).toBe(-1);
      expect(offset!.minutes).toBe(-30);
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
      expect(offset!.hours).toBe(1);
      expect(offset!.minutes).toBe(30);
    });

    it("should return the offset of negative iso string", () => {
      // given
      const str = "-01:30";

      // when
      const offset = Offset.fromISOString(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset!.hours).toBe(-1);
      expect(offset!.minutes).toBe(-30);
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
      expect(offset!.hours).toBe(1);
      expect(offset!.minutes).toBe(30);
    });

    it("should return the offset of negative string", () => {
      // given
      const str = "UTC-01:30";

      // when
      const offset = Offset.parse(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset!.hours).toBe(-1);
      expect(offset!.minutes).toBe(-30);
    });

    it("should return the offset of positive iso string", () => {
      // given
      const str = "+01:30";

      // when
      const offset = Offset.parse(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset!.hours).toBe(1);
      expect(offset!.minutes).toBe(30);
    });

    it("should return the offset of negative iso string", () => {
      // given
      const str = "-01:30";

      // when
      const offset = Offset.parse(str);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset!.hours).toBe(-1);
      expect(offset!.minutes).toBe(-30);
    });
  });

  describe("static fromDuration", () => {
    it("should return the offset of positive duration", () => {
      // given
      const duration = Duration.fromObject({ hours: 1, minutes: 30 });

      // when
      const offset = Offset.fromDuration(duration);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(1);
      expect(offset.minutes).toBe(30);
    });

    it("should return the offset of negative duration", () => {
      // given
      const duration = Duration.fromObject({ hours: -1, minutes: -30 });

      // when
      const offset = Offset.fromDuration(duration);

      // then
      expect(offset).toBeInstanceOf(Offset);
      expect(offset.hours).toBe(-1);
      expect(offset.minutes).toBe(-30);
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the offset is easter than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 0 });

      // when
      const comparison = Offset.compare(offset1, offset2);

      // then
      expect(comparison).toBe(30);
    });

    it("should return zero when the offset is equal to the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 30 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const comparison = Offset.compare(offset1, offset2);

      // then
      expect(comparison).toBe(0);
    });

    it("should return a negative number when the offset is wester than the other offset", () => {
      // given
      const offset1 = Offset.fromObject({ hours: 1, minutes: 0 });
      const offset2 = Offset.fromObject({ hours: 1, minutes: 30 });

      // when
      const comparison = Offset.compare(offset1, offset2);

      // then
      expect(comparison).toBe(-30);
    });
  });
});
