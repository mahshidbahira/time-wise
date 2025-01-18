# Interval

The `Interval` immutable class represents a time interval between two points in time, defined by a start and end `DateTime`.
It provides a variety of methods for creation, formatting, comparison,
calculation, and conversion of interval instances.

::: tip
All instances of `Interval` are **immutable**!

So all manipulation methods return a new instance of interval.
:::

## Table of Contents

- [Instance Properties](#instance-properties)
  - [`start`](#start)
  - [`end`](#end)
  - [`duration`](#duration)
- [Instance Methods](#instance-methods)
  - [`valueOf`](#valueof)
  - [`toString`](#tostring)
  - [`[Symbol.toPrimitive]`](#symbol-toprimitive)
  - [`toJSON`](#tojson)
  - [`toISOString`](#toisostring)
  - [`toObject`](#toobject)
  - [`equals`](#equals)
  - [`withStart`](#withstart)
  - [`withEnd`](#withend)
- [Static Properties](#static-properties)
- [Static Methods](#static-methods)
  - [`between`](#between)
  - [`since`](#since)
  - [`until`](#until)
  - [`fromObject`](#fromobject)
  - [`fromString`](#fromstring)
  - [`fromISOString`](#fromisostring)
  - [`parse`](#parse)
  - [`compare`](#compare)

## Instance Properties

### `start`

Return the start of the interval.

- **Type**: `DateTime`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.start.toString()); // 2024-12-07 13:56:19:920 UTC+01:00
```

### `end`

Return the end of the interval.

- **Type**: `DateTime`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.end.toString()); // 2024-12-09 13:56:19:920 UTC+01:00
```

### `duration`

Return the duration of the interval.

- **Type**: `Duration`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.duration.toString()); // 2 days 00:00:00
```

## Instance Methods

### `valueOf`

Returns the total interval duration in milliseconds.

```typescript
valueOf(): number
```

- **Parameters**: `void`
- **Returns**: `number`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.valueOf()); // 172800000
```

### `toString`

Returns the human-readable string representation of the interval.

```typescript
toString(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.toString()); // [ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 )
```

### `[Symbol.toPrimitive]`

Custom implementation to handle coercion.

```typescript
[Symbol.toPrimitive](hint: string): number | string
```

- **Parameters**:
  - `hint`:
    - **description**: The hint type (`"number"` or `"string"`)
    - **Type**: `string`
- **Returns**: `string | number`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(+interval); // 172800000
console.log(`${interval}`); // [ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 )
```

### `toJSON`

Returns the JSON serialization representation of the interval.

```typescript
toJSON(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.toJSON()); // "2024-12-07T13:56:19.920+01:00/2024-12-09T13:56:19.920+01:00"
```

### `toISOString`

Returns the ISO 8601 representation of the interval.

```typescript
toISOString(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.toISOString()); // 2024-12-07T13:56:19.920+01:00/2024-12-09T13:56:19.920+01:00
```

### `toObject`

Returns the object literal of the interval.

```typescript
toObject(): Object
```

- **Parameters**: `void`
- **Returns**: `Object`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.toObject()); // {start: {year: 2024, month: 12, day: 7, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}, end: {year: 2024, month: 12, day: 9, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}}
```

### `equals`

Returns whether the interval is equal to the other interval.

```typescript
equals(other: Interval): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other interval to compare against.
    - **Type**: `Interval`
- **Returns**: `boolean`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval1 = Interval.between(start, end);
const interval2 = Interval.between(start, end);
console.log(interval1.equals(interval2)); // true
```

### `withStart`

Return a new interval with start replaced.

```typescript
withStart(start: DateTime): Interval
```

- **Parameters**:
  - `start`:
    - **description**: The start to replace the old one.
    - **Type**: `DateTime`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
const newStart = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 4,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const intervalWithStart = interval.withStart(newStart);
console.log(intervalWithStart.toString()); // [ 2024-12-04 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 )
```

### `withEnd`

Return a new interval with end replaced.

```typescript
withEnd(end: DateTime): Interval
```

- **Parameters**:
  - `end`:
    - **description**: The end to replace the old one.
    - **Type**: `DateTime`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
const newEnd = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 11,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const intervalWithEnd = interval.withEnd(newEnd);
console.log(intervalWithEnd.toString()); // [ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-11 13:56:19.920 UTC+01:00 )
```

## Static Properties

None

## Static Methods

### `between`

Return a new interval between a start and an end datetime.

```typescript
Interval.between(start: DateTime, end: DateTime): Interval
```

- **Parameters**:
  - `start`:
    - **description**: the start datetime.
    - **Type**: `DateTime`
  - `end`:
    - **description**: the end datetime.
    - **Type**: `DateTime`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.between(start, end);
console.log(interval.toString()); // [ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 )
```

### `since`

Return a new interval since a datetime until now.

```typescript
Interval.since(datetime: DateTime): Interval
```

- **Parameters**:
  - `datetime`:
    - **description**: the datetime.
    - **Type**: `DateTime`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.since(datetime);
console.log(interval.toString()); // [ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 ) - now is assumed to be "2024-12-09 13:56:19.920 UTC+01:00" in this case
```

### `until`

Return a new interval since now until a datetime.

```typescript
Interval.until(datetime: DateTime): Interval
```

- **Parameters**:
  - `datetime`:
    - **description**: the datetime.
    - **Type**: `DateTime`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval = Interval.until(datetime);
console.log(interval.toString()); // [ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 ) - now is assumed to be "2024-12-07 13:56:19.920 UTC+01:00" in this case
```

### `fromObject`

Return a new interval from an object literal.

```typescript
Interval.fromObject(object: Object): Interval
```

- **Parameters**:
  - `object`:
    - **description**: the object literal.
    - **Type**: `Object`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const interval = Interval.fromObject({
  start: {
    year: 2024,
    month: 12,
    day: 7,
    hour: 13,
    minute: 56,
    second: 19,
    millisecond: 920,
    offset: { hour: 1 },
  },
  end: {
    year: 2024,
    month: 12,
    day: 9,
    hour: 13,
    minute: 56,
    second: 19,
    millisecond: 920,
    offset: { hour: 1 },
  },
});
console.log(interval.toString()); // [ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 )
```

### `fromString`

Return a new interval from a human-readable string representation.

```typescript
Interval.fromString(str: string): Interval
```

- **Parameters**:
  - `str`:
    - **description**: the human-readable string representation.
    - **Type**: `string`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const interval = Interval.fromString(
  "[ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 )"
);
console.log(interval.toObject()); // {start: {year: 2024, month: 12, day: 7, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}, end: {year: 2024, month: 12, day: 9, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}}
```

### `fromISOString`

Return a new interval from an ISO 8601 representation.

```typescript
Interval.fromISOString(str: string): Interval
```

- **Parameters**:
  - `str`:
    - **description**: the ISO 8601 representation.
    - **Type**: `string`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const interval = Interval.fromISOString(
  "2024-12-07T13:56:19.920+01:00/2024-12-09T13:56:19.920+01:00"
);
console.log(interval.toObject()); // {start: {year: 2024, month: 12, day: 7, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}, end: {year: 2024, month: 12, day: 9, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}}
```

### `parse`

Return a new interval from any possible string.

```typescript
Interval.parse(str: string): Interval
```

- **Parameters**:
  - `str`:
    - **description**: the string.
    - **Type**: `string`
- **Returns**: `Interval`
- **Throws**: `void`

**Example**:

```typescript
const interval = Interval.parse(
  "[ 2024-12-07 13:56:19.920 UTC+01:00 , 2024-12-09 13:56:19.920 UTC+01:00 )"
);
console.log(interval.toObject()); // {start: {year: 2024, month: 12, day: 7, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}, end: {year: 2024, month: 12, day: 9, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}}
```

### `compare`

Returns the difference between two intervals.

::: tip
This method is useful for sorting `Interval` instances in an array.
:::

```typescript
Interval.compare(interval1: Interval, interval2: Interval): number
```

- **Parameters**:
  - `interval1`:
    - **description**: The first interval.
    - **Type**: `Interval`
  - `interval2`:
    - **description**: The second interval.
    - **Type**: `Interval`
- **Returns**: `number`
- **Throws**: `void`

**Example**:

```typescript
const start = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const end = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 9,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const interval1 = Interval.between(start, end);
const interval2 = Interval.between(start, end);
console.log(Interval.compare(interval1, interval2)); // 0
```
