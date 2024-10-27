import { describe, it, expect } from "vitest";
import Duration from "./Duration";
import { DAYS } from "../Units/Units";

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

  describe("add", () => {
    it("should return sum of durations", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(2 * DAYS);

      expect(duration1.add(duration2)).toEqual(new Duration(8 * DAYS));
    });
  });

  describe("subtract", () => {
    it("should return subtraction of durations", () => {
      const duration1 = new Duration(6 * DAYS);
      const duration2 = new Duration(2 * DAYS);

      expect(duration1.subtract(duration2)).toEqual(new Duration(4 * DAYS));
    });
  });

  describe("multiply", () => {
    it("should return multiplication of durations", () => {
      const duration = new Duration(6 * DAYS);
      const factor = 2;

      expect(duration.multiply(factor)).toEqual(new Duration(12 * DAYS));
    });
  });

  describe("divide", () => {
    it("should return division of durations", () => {
      const duration = new Duration(6 * DAYS);
      const divisor = 2;

      expect(duration.divide(divisor)).toEqual(new Duration(3 * DAYS));
    });
  });
});
