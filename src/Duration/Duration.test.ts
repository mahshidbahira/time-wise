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
});
