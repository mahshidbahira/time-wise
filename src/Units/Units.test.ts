import { describe, expect, it } from "vitest";
import { DAY, HOUR, MILLISECOND, MINUTE, SECOND } from "./Units";

describe("MILLISECOND", () => {
  it("should be equal to 1 milliseconds", () => {
    expect(MILLISECOND).toBe(1);
  });
});

describe("SECOND", () => {
  it("should be equal to 1000 milliseconds", () => {
    expect(SECOND).toBe(1000);
  });
});

describe("MINUTE", () => {
  it("should be equal to 60_000 milliseconds", () => {
    expect(MINUTE).toBe(60_000);
  });
});

describe("HOUR", () => {
  it("should be equal to 3_600_000 milliseconds", () => {
    expect(HOUR).toBe(3_600_000);
  });
});

describe("DAY", () => {
  it("should be equal to 86_400_000 milliseconds", () => {
    expect(DAY).toBe(86_400_000);
  });
});
