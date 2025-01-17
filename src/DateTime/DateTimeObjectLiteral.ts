import OffsetObjectLiteral from "../Offset/OffsetObjectLiteral";

interface DateTimeObjectLiteral {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
  offset: OffsetObjectLiteral;
}

export default DateTimeObjectLiteral;
