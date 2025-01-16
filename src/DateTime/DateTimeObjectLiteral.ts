import DurationObjectLiteral from "../Duration/DurationObjectLiteral";

interface DateTimeObjectLiteral {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
  offset: DurationObjectLiteral;
}

export default DateTimeObjectLiteral;
