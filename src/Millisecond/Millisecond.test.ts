import { describe, expect, it } from "vitest";
import Millisecond from "./Millisecond";

describe("Millisecond", () => {
  describe("constructor", () => {
    it("should return a millisecond", () => {
      // given
      const value = 999;

      // when
      const millisecond = new Millisecond(value);

      // then
      expect(millisecond).toBeInstanceOf(Millisecond);
      expect(millisecond.value).toBe(999);
    });

    it("should throw an error with invalid lower value", () => {
      // given
      const value = -1;

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });

    it("should throw an error with invalid upper value", () => {
      // given
      const value = 1000;

      // when/then
      expect(() => new Millisecond(value)).toThrowError();
    });
  });

  describe("valueOf", () => {
    it("should return the value of the millisecond", () => {
      // given
      const millisecond = new Millisecond(999);

      // when
      const value = millisecond.valueOf();

      // then
      expect(value).toBe(999);
    });
  });

  describe("toString", () => {
    it("should return the padded string of the millisecond", () => {
      // given
      const millisecond = new Millisecond(2);

      // when
      const str = millisecond.toString();

      // then
      expect(str).toBe("002");
    });

    it("should return the string of the millisecond", () => {
      // given
      const millisecond = new Millisecond(999);

      // when
      const str = millisecond.toString();

      // then
      expect(str).toBe("999");
    });
  });

  describe("toPrimitive", () => {
    it("should return a number when a number is expected of the millisecond", () => {
      // given
      const millisecond = new Millisecond(999);

      // when
      const primitive = +millisecond;

      // then
      expect(primitive).toBe(999);
    });

    it("should return a string when a string is expected of the millisecond", () => {
      // given
      const millisecond = new Millisecond(999);

      // when
      const primitive = `${millisecond}`;

      // then
      expect(primitive).toBe("999");
    });
  });

  describe("toISOString", () => {
    it("should return the padded iso string of the millisecond", () => {
      // given
      const millisecond = new Millisecond(2);

      // when
      const isoStr = millisecond.toISOString();

      // then
      expect(isoStr).toBe("002");
    });

    it("should return the iso string of the millisecond", () => {
      // given
      const millisecond = new Millisecond(999);

      // when
      const isoStr = millisecond.toISOString();

      // then
      expect(isoStr).toBe("999");
    });
  });
});
