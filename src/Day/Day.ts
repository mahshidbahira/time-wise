class Day {
  readonly value: number;

  constructor(value: number) {
    if (value < 1 || value > 31) {
      throw new Error(`value is invalid: ${value}`);
    }

    this.value = value;

    Object.freeze(this);
  }

  valueOf(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString().padStart(2, "0");
  }

  [Symbol.toPrimitive](hint: string): number | string {
    switch (hint) {
      case "number":
        return this.valueOf();
      case "string":
        return this.toString();
      default:
        return this.toString();
    }
  }

  toISOString(): string {
    return this.toString();
  }
}

export default Day;
