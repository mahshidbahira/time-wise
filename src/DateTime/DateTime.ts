interface ObjectDetails {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}

class DateTime {
  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly millisecond: number;

  constructor(millisecondsSinceEpoch: number) {
    const jsDate = new Date(millisecondsSinceEpoch);

    this.year = jsDate.getUTCFullYear();
    this.month = jsDate.getUTCMonth();
    this.day = jsDate.getUTCDate();
    this.hour = jsDate.getUTCHours();
    this.minute = jsDate.getUTCMinutes();
    this.second = jsDate.getUTCSeconds();
    this.millisecond = jsDate.getUTCMilliseconds();

    Object.freeze(this);
  }

  // static

  static of(millisecondsSinceEpoch: number): DateTime {
    return new DateTime(millisecondsSinceEpoch);
  }

  static fromObject(object: ObjectDetails): DateTime {
    const { year, month, day, hour, minute, second, millisecond } = object;
    const millisecondsSinceEpoch = Date.UTC(
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecond
    );

    return new DateTime(millisecondsSinceEpoch);
  }
}

export default DateTime;
