import { describe, it, expect } from "vitest";
import Duration from "./Duration";
import { DAYS, HOURS, MINUTES, SECONDS, MILLISECONDS } from "../Units/Units";

describe("Duration", () => {
  describe("constructor", () => {
    it("should return a duration", () => {
      const duration = new Duration(1 * DAYS);
      expect(duration).toBeInstanceOf(Duration);
    });
  });

  describe("milliseconds", () => {
    it("should return the duration in milliseconds", () => {
      const duration = new Duration(1 * DAYS);
      expect(duration.milliseconds).toBe(86_400_000);
    });
  });

  describe("seconds", () => {
    it("should return the duration in seconds", () => {
      const duration = new Duration(1 * DAYS);
      expect(duration.seconds).toBe(86_400);
    });
  });

  describe("minutes", () => {
    it("should return the duration in minutes", () => {
      const duration = new Duration(1 * DAYS);
      expect(duration.minutes).toBe(1_440);
    });
  });

  describe("hours", () => {
    it("should return the duration in hours", () => {
      const duration = new Duration(1 * DAYS);
      expect(duration.hours).toBe(24);
    });
  });

  describe("days", () => {
    it("should return the duration in days", () => {
      const duration = new Duration(1 * DAYS);
      expect(duration.days).toBe(1);
    });
  });

  describe("valueOf", () => {
    it("should return the value of duration", () => {
      const duration = new Duration(1 * DAYS);
      expect(duration.valueOf()).toBe(86_400_000);
    });
  });

  describe("toString", () => {
    it("should return the string of only days", () => {
      const duration = new Duration(6 * DAYS);

      expect(duration.toString()).toBe("6 days 00:00:00");
    });

    it("should return the string of only hours", () => {
      const duration = new Duration(12 * HOURS);

      expect(duration.toString()).toBe("12:00:00");
    });

    it("should return the string of only minutes", () => {
      const duration = new Duration(30 * MINUTES);

      expect(duration.toString()).toBe("00:30:00");
    });

    it("should return the string of only seconds", () => {
      const duration = new Duration(45 * SECONDS);

      expect(duration.toString()).toBe("00:00:45");
    });

    it("should return the string of only milliseconds", () => {
      const duration = new Duration(2 * MILLISECONDS);

      expect(duration.toString()).toBe("00:00:00.002");
    });

    it("should return the string of only milliseconds", () => {
      const duration = new Duration(500 * MILLISECONDS);

      expect(duration.toString()).toBe("00:00:00.500");
    });

    it("should return the string of days and hours", () => {
      const duration = new Duration(6 * DAYS + 12 * HOURS);

      expect(duration.toString()).toBe("6 days 12:00:00");
    });

    it("should return the string of days and minutes", () => {
      const duration = new Duration(6 * DAYS + 30 * MINUTES);

      expect(duration.toString()).toBe("6 days 00:30:00");
    });

    it("should return the string of days and seconds", () => {
      const duration = new Duration(6 * DAYS + 45 * SECONDS);

      expect(duration.toString()).toBe("6 days 00:00:45");
    });

    it("should return the string of days and milliseconds", () => {
      const duration = new Duration(6 * DAYS + 2 * MILLISECONDS);

      expect(duration.toString()).toBe("6 days 00:00:00.002");
    });

    it("should return the string of hours and minutes", () => {
      const duration = new Duration(12 * HOURS + 30 * MINUTES);

      expect(duration.toString()).toBe("12:30:00");
    });

    it("should return the string of hours and seconds", () => {
      const duration = new Duration(12 * HOURS + 45 * SECONDS);

      expect(duration.toString()).toBe("12:00:45");
    });

    it("should return the string of hours and milliseconds", () => {
      const duration = new Duration(12 * HOURS + 2 * MILLISECONDS);

      expect(duration.toString()).toBe("12:00:00.002");
    });

    it("should return the string of minutes and seconds", () => {
      const duration = new Duration(30 * MINUTES + 45 * SECONDS);

      expect(duration.toString()).toBe("00:30:45");
    });

    it("should return the string of minutes and milliseconds", () => {
      const duration = new Duration(30 * MINUTES + 2 * MILLISECONDS);

      expect(duration.toString()).toBe("00:30:00.002");
    });

    it("should return the string of seconds and milliseconds", () => {
      const duration = new Duration(45 * SECONDS + 2 * MILLISECONDS);

      expect(duration.toString()).toBe("00:00:45.002");
    });

    it("should return the string of days, hours and minutes", () => {
      const duration = new Duration(6 * DAYS + 12 * HOURS + 30 * MINUTES);

      expect(duration.toString()).toBe("6 days 12:30:00");
    });

    it("should return the string of days, hours and seconds", () => {
      const duration = new Duration(6 * DAYS + 12 * HOURS + 45 * SECONDS);

      expect(duration.toString()).toBe("6 days 12:00:45");
    });

    it("should return the string of days, hours and milliseconds", () => {
      const duration = new Duration(6 * DAYS + 12 * HOURS + 2 * MILLISECONDS);

      expect(duration.toString()).toBe("6 days 12:00:00.002");
    });

    it("should return the string of days, minutes and seconds", () => {
      const duration = new Duration(6 * DAYS + 30 * MINUTES + 45 * SECONDS);

      expect(duration.toString()).toBe("6 days 00:30:45");
    });

    it("should return the string of days, minutes and milliseconds", () => {
      const duration = new Duration(6 * DAYS + 30 * MINUTES + 2 * MILLISECONDS);

      expect(duration.toString()).toBe("6 days 00:30:00.002");
    });

    it("should return the string of days, seconds and milliseconds", () => {
      const duration = new Duration(6 * DAYS + 45 * SECONDS + 2 * MILLISECONDS);

      expect(duration.toString()).toBe("6 days 00:00:45.002");
    });

    it("should return the string of hours, minutes and seconds", () => {
      const duration = new Duration(12 * HOURS + 30 * MINUTES + 45 * SECONDS);

      expect(duration.toString()).toBe("12:30:45");
    });

    it("should return the string of hours, minutes and milliseconds", () => {
      const duration = new Duration(
        12 * HOURS + 30 * MINUTES + 2 * MILLISECONDS
      );

      expect(duration.toString()).toBe("12:30:00.002");
    });

    it("should return the string of hours, seconds and milliseconds", () => {
      const duration = new Duration(
        12 * HOURS + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(duration.toString()).toBe("12:00:45.002");
    });

    it("should return the string of minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(duration.toString()).toBe("00:30:45.002");
    });

    it("should return the string of days, hours, minutes and seconds", () => {
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS
      );

      expect(duration.toString()).toBe("6 days 12:30:45");
    });

    it("should return the string of days, hours, minutes and milliseconds", () => {
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 2 * MILLISECONDS
      );

      expect(duration.toString()).toBe("6 days 12:30:00.002");
    });

    it("should return the string of hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(duration.toString()).toBe("12:30:45.002");
    });

    it("should return the string of days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(duration.toString()).toBe("6 days 12:30:45.002");
    });

    it("should return the string of negative days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        -(
          6 * DAYS +
          12 * HOURS +
          30 * MINUTES +
          45 * SECONDS +
          2 * MILLISECONDS
        )
      );

      expect(duration.toString()).toBe("-6 days 12:30:45.002");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the duration", () => {
      const duration = new Duration(1 * DAYS);
      expect(+duration).toBe(86_400_000);
    });

    it("should return a string when a string is expected of the duration", () => {
      const duration = new Duration(1 * DAYS);
      expect(`${duration}`).toBe("1 day 00:00:00");
    });
  });

  describe("toJSON", () => {
    it("should return the JSON of duration", () => {
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(JSON.stringify(duration)).toBe(`"P6DT12H30M45.002S"`);
    });
  });

  describe("toISOString", () => {
    it("should return the ISO-8601 string of only days", () => {
      const duration = new Duration(6 * DAYS);

      expect(duration.toISOString()).toBe("P6D");
    });

    it("should return the ISO-8601 string of only hours", () => {
      const duration = new Duration(12 * HOURS);

      expect(duration.toISOString()).toBe("PT12H");
    });

    it("should return the ISO-8601 string of only minutes", () => {
      const duration = new Duration(30 * MINUTES);

      expect(duration.toISOString()).toBe("PT30M");
    });

    it("should return the ISO-8601 string of only seconds", () => {
      const duration = new Duration(45 * SECONDS);

      expect(duration.toISOString()).toBe("PT45S");
    });

    it("should return the ISO-8601 string of only milliseconds", () => {
      const duration = new Duration(2 * MILLISECONDS);

      expect(duration.toISOString()).toBe("PT0.002S");
    });

    it("should return the ISO-8601 string of only milliseconds", () => {
      const duration = new Duration(500 * MILLISECONDS);

      expect(duration.toISOString()).toBe("PT0.5S");
    });

    it("should return the ISO-8601 string of days and hours", () => {
      const duration = new Duration(6 * DAYS + 12 * HOURS);

      expect(duration.toISOString()).toBe("P6DT12H");
    });

    it("should return the ISO-8601 string of days and minutes", () => {
      const duration = new Duration(6 * DAYS + 30 * MINUTES);

      expect(duration.toISOString()).toBe("P6DT30M");
    });

    it("should return the ISO-8601 string of days and seconds", () => {
      const duration = new Duration(6 * DAYS + 45 * SECONDS);

      expect(duration.toISOString()).toBe("P6DT45S");
    });

    it("should return the ISO-8601 string of days and milliseconds", () => {
      const duration = new Duration(6 * DAYS + 2 * MILLISECONDS);

      expect(duration.toISOString()).toBe("P6DT0.002S");
    });

    it("should return the ISO-8601 string of hours and minutes", () => {
      const duration = new Duration(12 * HOURS + 30 * MINUTES);

      expect(duration.toISOString()).toBe("PT12H30M");
    });

    it("should return the ISO-8601 string of hours and seconds", () => {
      const duration = new Duration(12 * HOURS + 45 * SECONDS);

      expect(duration.toISOString()).toBe("PT12H45S");
    });

    it("should return the ISO-8601 string of hours and milliseconds", () => {
      const duration = new Duration(12 * HOURS + 2 * MILLISECONDS);

      expect(duration.toISOString()).toBe("PT12H0.002S");
    });

    it("should return the ISO-8601 string of minutes and seconds", () => {
      const duration = new Duration(30 * MINUTES + 45 * SECONDS);

      expect(duration.toISOString()).toBe("PT30M45S");
    });

    it("should return the ISO-8601 string of minutes and milliseconds", () => {
      const duration = new Duration(30 * MINUTES + 2 * MILLISECONDS);

      expect(duration.toISOString()).toBe("PT30M0.002S");
    });

    it("should return the ISO-8601 string of seconds and milliseconds", () => {
      const duration = new Duration(45 * SECONDS + 2 * MILLISECONDS);

      expect(duration.toISOString()).toBe("PT45.002S");
    });

    it("should return the ISO-8601 string of days, hours and minutes", () => {
      const duration = new Duration(6 * DAYS + 12 * HOURS + 30 * MINUTES);

      expect(duration.toISOString()).toBe("P6DT12H30M");
    });

    it("should return the ISO-8601 string of days, hours and seconds", () => {
      const duration = new Duration(6 * DAYS + 12 * HOURS + 45 * SECONDS);

      expect(duration.toISOString()).toBe("P6DT12H45S");
    });

    it("should return the ISO-8601 string of days, hours and milliseconds", () => {
      const duration = new Duration(6 * DAYS + 12 * HOURS + 2 * MILLISECONDS);

      expect(duration.toISOString()).toBe("P6DT12H0.002S");
    });

    it("should return the ISO-8601 string of days, minutes and seconds", () => {
      const duration = new Duration(6 * DAYS + 30 * MINUTES + 45 * SECONDS);

      expect(duration.toISOString()).toBe("P6DT30M45S");
    });

    it("should return the ISO-8601 string of days, minutes and milliseconds", () => {
      const duration = new Duration(6 * DAYS + 30 * MINUTES + 2 * MILLISECONDS);

      expect(duration.toISOString()).toBe("P6DT30M0.002S");
    });

    it("should return the ISO-8601 string of days, seconds and milliseconds", () => {
      const duration = new Duration(6 * DAYS + 45 * SECONDS + 2 * MILLISECONDS);

      expect(duration.toISOString()).toBe("P6DT45.002S");
    });

    it("should return the ISO-8601 string of hours, minutes and seconds", () => {
      const duration = new Duration(12 * HOURS + 30 * MINUTES + 45 * SECONDS);

      expect(duration.toISOString()).toBe("PT12H30M45S");
    });

    it("should return the ISO-8601 string of hours, minutes and milliseconds", () => {
      const duration = new Duration(
        12 * HOURS + 30 * MINUTES + 2 * MILLISECONDS
      );

      expect(duration.toISOString()).toBe("PT12H30M0.002S");
    });

    it("should return the ISO-8601 string of hours, seconds and milliseconds", () => {
      const duration = new Duration(
        12 * HOURS + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(duration.toISOString()).toBe("PT12H45.002S");
    });

    it("should return the ISO-8601 string of minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(duration.toISOString()).toBe("PT30M45.002S");
    });

    it("should return the ISO-8601 string of days, hours, minutes and seconds", () => {
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS
      );

      expect(duration.toISOString()).toBe("P6DT12H30M45S");
    });

    it("should return the ISO-8601 string of days, hours, minutes and milliseconds", () => {
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 2 * MILLISECONDS
      );

      expect(duration.toISOString()).toBe("P6DT12H30M0.002S");
    });

    it("should return the ISO-8601 string of hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(duration.toISOString()).toBe("PT12H30M45.002S");
    });

    it("should return the ISO-8601 string of days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(duration.toISOString()).toBe("P6DT12H30M45.002S");
    });

    it("should return the ISO-8601 string of negative days, hours, minutes, seconds and milliseconds", () => {
      const duration = new Duration(
        -(
          6 * DAYS +
          12 * HOURS +
          30 * MINUTES +
          45 * SECONDS +
          2 * MILLISECONDS
        )
      );

      expect(duration.toISOString()).toBe("-P6DT12H30M45.002S");
    });
  });

  describe("equals", () => {
    it("should return true for equal durations", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(6 * DAYS);

      expect(duration1.equals(duration2)).toBe(true);
    });

    it("should return false for unequal durations", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(2 * DAYS);

      expect(duration1.equals(duration2)).toBe(false);
    });
  });

  describe("isLongerThan", () => {
    it("should return true when the duration is longer than the other duration", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(2 * DAYS);

      expect(duration1.isLongerThan(duration2)).toBe(true);
    });

    it("should return false when the duration is equal to the other duration", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(6 * DAYS);

      expect(duration1.isLongerThan(duration2)).toBe(false);
    });

    it("should return false when the duration is shorter than the other duration", () => {
      const duration1 = new Duration(2 * DAYS);
      const duration2 = new Duration(6 * DAYS);

      expect(duration1.isLongerThan(duration2)).toBe(false);
    });
  });

  describe("isShorterThan", () => {
    it("should return true when the duration is shorter than the other duration", () => {
      const duration1 = new Duration(2 * DAYS);
      const duration2 = new Duration(6 * DAYS);

      expect(duration1.isShorterThan(duration2)).toBe(true);
    });

    it("should return false when the duration is equal to the other duration", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(6 * DAYS);

      expect(duration1.isShorterThan(duration2)).toBe(false);
    });

    it("should return false when the duration is longer than the other duration", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(2 * DAYS);

      expect(duration1.isShorterThan(duration2)).toBe(false);
    });
  });

  describe("add", () => {
    it("should return the addition of durations", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(2 * DAYS);

      expect(duration1.add(duration2)).toEqual(new Duration(8 * DAYS));
    });
  });

  describe("subtract", () => {
    it("should return the subtraction of durations", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(2 * DAYS);

      expect(duration1.subtract(duration2)).toEqual(new Duration(4 * DAYS));
    });
  });

  describe("multiply", () => {
    it("should return the multiplication of durations", () => {
      const duration = new Duration(6 * DAYS);
      const factor = 2;

      expect(duration.multiply(factor)).toEqual(new Duration(12 * DAYS));
    });
  });

  describe("divide", () => {
    it("should return the division of durations", () => {
      const duration = new Duration(6 * DAYS);
      const divisor = 2;

      expect(duration.divide(divisor)).toEqual(new Duration(3 * DAYS));
    });
  });

  describe("negate", () => {
    it("should return the negative duration of a positive duration", () => {
      const duration = new Duration(6 * DAYS);

      expect(duration.negate()).toEqual(new Duration(-6 * DAYS));
    });

    it("should return the positive duration of a negative duration", () => {
      const duration = new Duration(-6 * DAYS);

      expect(duration.negate()).toEqual(new Duration(6 * DAYS));
    });
  });

  describe("absolute", () => {
    it("should return the absolute of a negative duration", () => {
      const duration = new Duration(-6 * DAYS);

      expect(duration.absolute()).toEqual(new Duration(6 * DAYS));
    });

    it("should return the absolute of a positive duration", () => {
      const duration = new Duration(6 * DAYS);

      expect(duration.absolute()).toEqual(new Duration(6 * DAYS));
    });
  });

  describe("after", () => {
    it("should return a date after the duration since a given date", () => {
      const duration = new Duration(2 * DAYS);
      const date = new Date(2001, 0, 22);

      expect(duration.after(date)).toEqual(new Date(2001, 0, 24));
    });
  });

  describe("before", () => {
    it("should return a date before the duration since a given date", () => {
      const duration = new Duration(2 * DAYS);
      const date = new Date(2001, 0, 22);

      expect(duration.before(date)).toEqual(new Date(2001, 0, 20));
    });
  });

  describe("static parse", () => {
    it("should return the duration of only days from a string", () => {
      const str = "6 days 00:00:00";
      const duration = new Duration(6 * DAYS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only hours from a string", () => {
      const str = "12:00:00";
      const duration = new Duration(12 * HOURS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only minutes from a string", () => {
      const str = "00:30:00";
      const duration = new Duration(30 * MINUTES);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only seconds from a string", () => {
      const str = "00:00:45";
      const duration = new Duration(45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from a string", () => {
      const str = "00:00:00.002";
      const duration = new Duration(2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from a string", () => {
      const str = "00:00:00.500";
      const duration = new Duration(500 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and hours from a string", () => {
      const str = "6 days 12:00:00";
      const duration = new Duration(6 * DAYS + 12 * HOURS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and minutes from a string", () => {
      const str = "6 days 00:30:00";
      const duration = new Duration(6 * DAYS + 30 * MINUTES);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and seconds from a string", () => {
      const str = "6 days 00:00:45";
      const duration = new Duration(6 * DAYS + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and milliseconds from a string", () => {
      const str = "6 days 00:00:00.002";
      const duration = new Duration(6 * DAYS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and minutes from a string", () => {
      const str = "12:30:00";
      const duration = new Duration(12 * HOURS + 30 * MINUTES);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and seconds from a string", () => {
      const str = "12:00:45";
      const duration = new Duration(12 * HOURS + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and milliseconds from a string", () => {
      const str = "12:00:00.002";
      const duration = new Duration(12 * HOURS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes and seconds from a string", () => {
      const str = "00:30:45";
      const duration = new Duration(30 * MINUTES + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes and milliseconds from a string", () => {
      const str = "00:30:00.002";
      const duration = new Duration(30 * MINUTES + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of seconds and milliseconds from a string", () => {
      const str = "00:00:45.002";
      const duration = new Duration(45 * SECONDS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and minutes from a string", () => {
      const str = "6 days 12:30:00";
      const duration = new Duration(6 * DAYS + 12 * HOURS + 30 * MINUTES);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and seconds from a string", () => {
      const str = "6 days 12:00:45";
      const duration = new Duration(6 * DAYS + 12 * HOURS + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and milliseconds from a string", () => {
      const str = "6 days 12:00:00.002";
      const duration = new Duration(6 * DAYS + 12 * HOURS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and seconds from a string", () => {
      const str = "6 days 00:30:45";
      const duration = new Duration(6 * DAYS + 30 * MINUTES + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and milliseconds from a string", () => {
      const str = "6 days 00:30:00.002";
      const duration = new Duration(6 * DAYS + 30 * MINUTES + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, seconds and milliseconds from a string", () => {
      const str = "6 days 00:00:45.002";
      const duration = new Duration(6 * DAYS + 45 * SECONDS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and seconds from a string", () => {
      const str = "12:30:45";
      const duration = new Duration(12 * HOURS + 30 * MINUTES + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and milliseconds from a string", () => {
      const str = "12:30:00.002";
      const duration = new Duration(
        12 * HOURS + 30 * MINUTES + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, seconds and milliseconds from a string", () => {
      const str = "12:00:45.002";
      const duration = new Duration(
        12 * HOURS + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes, seconds and milliseconds from a string", () => {
      const str = "00:30:45.002";
      const duration = new Duration(
        30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and seconds from a string", () => {
      const str = "6 days 12:30:45";
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and milliseconds from a string", () => {
      const str = "6 days 12:30:00.002";
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from a string", () => {
      const str = "12:30:45.002";
      const duration = new Duration(
        12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from a string", () => {
      const str = "6 days 12:30:45.002";
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from a string", () => {
      const str = "-6 days 12:30:45.002";
      const duration = new Duration(
        -(
          6 * DAYS +
          12 * HOURS +
          30 * MINUTES +
          45 * SECONDS +
          2 * MILLISECONDS
        )
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only days from an iso string", () => {
      const str = "P6D";
      const duration = new Duration(6 * DAYS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only hours from an iso string", () => {
      const str = "PT12H";
      const duration = new Duration(12 * HOURS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only minutes from an iso string", () => {
      const str = "PT30M";
      const duration = new Duration(30 * MINUTES);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only seconds from an iso string", () => {
      const str = "PT45S";
      const duration = new Duration(45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      const str = "PT0.002S";
      const duration = new Duration(2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of only milliseconds from an iso string", () => {
      const str = "PT0.500S";
      const duration = new Duration(500 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and hours from an iso string", () => {
      const str = "P6DT12H";
      const duration = new Duration(6 * DAYS + 12 * HOURS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and minutes from an iso string", () => {
      const str = "P6DT30M";
      const duration = new Duration(6 * DAYS + 30 * MINUTES);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and seconds from an iso string", () => {
      const str = "P6DT45S";
      const duration = new Duration(6 * DAYS + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days and milliseconds from an iso string", () => {
      const str = "P6DT0.002S";
      const duration = new Duration(6 * DAYS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and minutes from an iso string", () => {
      const str = "PT12H30M";
      const duration = new Duration(12 * HOURS + 30 * MINUTES);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and seconds from an iso string", () => {
      const str = "PT12H45S";
      const duration = new Duration(12 * HOURS + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours and milliseconds from an iso string", () => {
      const str = "PT12H0.002S";
      const duration = new Duration(12 * HOURS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes and seconds from an iso string", () => {
      const str = "PT30M45S";
      const duration = new Duration(30 * MINUTES + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes and milliseconds from an iso string", () => {
      const str = "PT30M0.002S";
      const duration = new Duration(30 * MINUTES + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of seconds and milliseconds from an iso string", () => {
      const str = "PT45.002S";
      const duration = new Duration(45 * SECONDS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and minutes from an iso string", () => {
      const str = "P6DT12H30M";
      const duration = new Duration(6 * DAYS + 12 * HOURS + 30 * MINUTES);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and seconds from an iso string", () => {
      const str = "P6DT12H45S";
      const duration = new Duration(6 * DAYS + 12 * HOURS + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours and milliseconds from an iso string", () => {
      const str = "P6DT12H0.002S";
      const duration = new Duration(6 * DAYS + 12 * HOURS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and seconds from an iso string", () => {
      const str = "P6DT30M45S";
      const duration = new Duration(6 * DAYS + 30 * MINUTES + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, minutes and milliseconds from an iso string", () => {
      const str = "P6DT30M0.002S";
      const duration = new Duration(6 * DAYS + 30 * MINUTES + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, seconds and milliseconds from an iso string", () => {
      const str = "P6DT45.002S";
      const duration = new Duration(6 * DAYS + 45 * SECONDS + 2 * MILLISECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and seconds from an iso string", () => {
      const str = "PT12H30M45S";
      const duration = new Duration(12 * HOURS + 30 * MINUTES + 45 * SECONDS);

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes and milliseconds from an iso string", () => {
      const str = "PT12H30M0.002S";
      const duration = new Duration(
        12 * HOURS + 30 * MINUTES + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, seconds and milliseconds from an iso string", () => {
      const str = "PT12H45.002S";
      const duration = new Duration(
        12 * HOURS + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of minutes, seconds and milliseconds from an iso string", () => {
      const str = "PT30M45.002S";
      const duration = new Duration(
        30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and seconds from an iso string", () => {
      const str = "P6DT12H30M45S";
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes and milliseconds from an iso string", () => {
      const str = "P6DT12H30M0.002S";
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "PT12H30M45.002S";
      const duration = new Duration(
        12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of days, hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "P6DT12H30M45.002S";
      const duration = new Duration(
        6 * DAYS + 12 * HOURS + 30 * MINUTES + 45 * SECONDS + 2 * MILLISECONDS
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return the duration of negative days, hours, minutes, seconds and milliseconds from an iso string", () => {
      const str = "-P6DT12H30M45.002S";
      const duration = new Duration(
        -(
          6 * DAYS +
          12 * HOURS +
          30 * MINUTES +
          45 * SECONDS +
          2 * MILLISECONDS
        )
      );

      expect(Duration.parse(str)).toEqual(duration);
    });

    it("should return null from an invalid string", () => {
      const str = "-6DT12:30MW002S";

      expect(Duration.parse(str)).toBeNull();
    });
  });

  describe("static compare", () => {
    it("should return a positive number when the duration is longer than the other duration", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(2 * DAYS);

      expect(Duration.compare(duration1, duration2)).toBe(345_600_000);
    });

    it("should return zero when the duration is equal to the other duration", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(6 * DAYS);

      expect(Duration.compare(duration1, duration2)).toBe(0);
    });

    it("should return a negative number when the duration is shorter than the other duration", () => {
      const duration1 = new Duration(2 * DAYS);
      const duration2 = new Duration(6 * DAYS);

      expect(Duration.compare(duration1, duration2)).toBe(-345_600_000);
    });
  });
});
