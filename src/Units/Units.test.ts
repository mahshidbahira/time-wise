import { describe, it, expect } from "vitest";
import { MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS } from "./Units";

describe("MILLISECONDS", () => {
  it("should be equal to 1 milliseconds", () => {
    expect(MILLISECONDS).toBe(1);
  });
});

describe("SECONDS", () => {
  it("should be equal to 1000 milliseconds", () => {
    expect(SECONDS).toBe(1000);
  });
});

describe("MINUTES", () => {
  it("should be equal to 60_000 milliseconds", () => {
    expect(MINUTES).toBe(60_000);
  });
});

describe("HOURS", () => {
  it("should be equal to 3_600_000 milliseconds", () => {
    expect(HOURS).toBe(3_600_000);
  });
});

describe("DAYS", () => {
  it("should be equal to 86_400_000 milliseconds", () => {
    expect(DAYS).toBe(86_400_000);
  });
});
