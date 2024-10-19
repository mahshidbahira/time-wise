import { describe, it, expect } from "vitest";
import { greet } from "./main";

describe("greet", () => {
  it("should greet the world if no name is given", () => {
    expect(greet()).toBe("Hello, World!");
  });

  it("should greet the person if a name is given", () => {
    expect(greet("John")).toBe("Hello, John!");
  });
});
