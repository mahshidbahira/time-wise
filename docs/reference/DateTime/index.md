# DateTime

The `DateTime` immutable class represents a datetime broken down into year, month,
day, hour, minute, second, millisecond, and offset.
It provides a variety of methods for creation, formatting, comparison,
calculation, and conversion of datetime instances.

::: tip
All instances of `DateTime` are **immutable**!

So all manipulation methods return a new instance of datetime.
:::

## Table of Contents

- [Instance Properties](#instance-properties)
  - [`year`](#year)
  - [`month`](#month)
  - [`day`](#day)
  - [`hour`](#hour)
  - [`minute`](#minute)
  - [`second`](#second)
  - [`millisecond`](#millisecond)
  - [`offset`](#offset)
  - [`daysSinceEpoch`](#dayssinceepoch)
  - [`hoursSinceEpoch`](#hourssinceepoch)
  - [`minutesSinceEpoch`](#minutessinceepoch)
  - [`secondsSinceEpoch`](#secondssinceepoch)
  - [`millisecondsSinceEpoch`](#millisecondssinceepoch)
  - [`durationSinceEpoch`](#durationsinceepoch)
- [Instance Methods](#instance-methods)
  - [`valueOf`](#valueof)
  - [`toString`](#tostring)
  - [`[Symbol.toPrimitive]`](#symbol-toprimitive)
  - [`toJSON`](#tojson)
  - [`toISOString`](#toisostring)
  - [`toLocaleString`](#tolocalestring)
  - [`toObject`](#toobject)
  - [`toJSDate`](#tojsdate)
  - [`equals`](#equals)
  - [`isLaterThan`](#islaterthan)
  - [`isEarlierThan`](#isearlierthan)
  - [`withYear`](#withyear)
  - [`withMonth`](#withmonth)
  - [`withDay`](#withday)
  - [`withHour`](#withhour)
  - [`withMinute`](#withminute)
  - [`withSecond`](#withsecond)
  - [`withMillisecond`](#withmillisecond)
  - [`withOffset`](#withoffset)
  - [`inOffset`](#inoffset)
  - [`inZone`](#inzone)
  - [`inUTC`](#inutc)
  - [`plus`](#plus)
  - [`minus`](#minus)
- [Static Properties](#static-properties)
- [Static Methods](#static-methods)
  - [`fromDaysSinceEpoch`](#fromdayssinceepoch)
  - [`fromHoursSinceEpoch`](#fromhourssinceepoch)
  - [`fromMinutesSinceEpoch`](#fromminutessinceepoch)
  - [`fromSecondsSinceEpoch`](#fromsecondssinceepoch)
  - [`fromMillisecondsSinceEpoch`](#frommillisecondssinceepoch)
  - [`fromDurationSinceEpoch`](#fromdurationsinceepoch)
  - [`fromObject`](#fromobject)
  - [`fromString`](#fromstring)
  - [`fromISOString`](#fromisostring)
  - [`parse`](#parse)
  - [`fromJSDate`](#fromjsdate)
  - [`now`](#now)
  - [`compare`](#compare)

## Instance Properties

### `year`

Return the year of the datetime.

- **Type**: `number`

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
console.log(datetime.year); // 2024
```

### `month`

Return the month of the datetime.

- **Type**: `number`

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
console.log(datetime.month); // 12
```

### `day`

Return the day of the datetime.

- **Type**: `number`

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
console.log(datetime.day); // 7
```

### `hour`

Return the hour of the datetime.

- **Type**: `number`

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
console.log(datetime.hour); // 13
```

### `minute`

Return the minute of the datetime.

- **Type**: `number`

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
console.log(datetime.minute); // 56
```

### `second`

Return the second of the datetime.

- **Type**: `number`

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
console.log(datetime.second); // 19
```

### `millisecond`

Return the millisecond of the datetime.

- **Type**: `number`

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
console.log(datetime.millisecond); // 920
```

### `offset`

Return the offset of the datetime.

- **Type**: `Offset`

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
console.log(datetime.offset.toString()); // UTC+01:00
```

### `daysSinceEpoch`

Returns the total datetime in days since epoch.

- **Type**: `number`

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
console.log(datetime.daysSinceEpoch); // 20064.539119444446
```

### `hoursSinceEpoch`

Returns the total datetime in hours since epoch.

- **Type**: `number`

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
console.log(datetime.hoursSinceEpoch); // 481548.9388666667
```

### `minutesSinceEpoch`

Returns the total datetime in minutes since epoch.

- **Type**: `number`

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
console.log(datetime.minutesSinceEpoch); // 28892936.332
```

### `secondsSinceEpoch`

Returns the total datetime in seconds since epoch.

- **Type**: `number`

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
console.log(datetime.secondsSinceEpoch); // 1733576179.92
```

### `millisecondsSinceEpoch`

Returns the total datetime in milliseconds since epoch.

- **Type**: `number`

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
console.log(datetime.millisecondsSinceEpoch); // 1733576179920
```

### `durationSinceEpoch`

Returns the total datetime in duration since epoch.

- **Type**: `Duration`

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
console.log(datetime.durationSinceEpoch.toString()); // 20064 days 12:56:19.920
```

## Instance Methods

### `valueOf`

Returns the total datetime in milliseconds.

```typescript
valueOf(): number
```

- **Parameters**: `void`
- **Returns**: `number`
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
console.log(datetime.valueOf()); // 1733576179920
```

### `toString`

Returns the human-readable string representation of the datetime.

```typescript
toString(): string
```

- **Parameters**: `void`
- **Returns**: `string`
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
console.log(datetime.toString()); // 2024-12-07 13:56:19.920 UTC+01:00
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
console.log(+datetime); // 1733576179920
console.log(`${datetime}`); // 2024-12-07 13:56:19.920 UTC+01:00
```

### `toJSON`

Returns the JSON serialization representation of the datetime.

```typescript
toJSON(): string
```

- **Parameters**: `void`
- **Returns**: `string`
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
console.log(datetime.toJSON()); // "2024-12-07T13:56:19.920+01:00"
```

### `toISOString`

Returns the ISO 8601 representation of the datetime.

```typescript
toISOString(): string
```

- **Parameters**: `void`
- **Returns**: `string`
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
console.log(datetime.toISOString()); // 2024-12-07T13:56:19.920+01:00
```

### `toLocaleString`

Returns the locale representation of the datetime.

```typescript
toLocaleString(localeName: string): string
```

- **Parameters**:
  - `localeName`:
    - **description**: The locale to represent the datetime in.
    - **Type**: `string`
- **Returns**: `string`
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
console.log(datetime.toLocaleString("en-GB")); // 07/12/2024, 13:56:19
```

### `toObject`

Returns the object literal of the datetime.

```typescript
toObject(): Object
```

- **Parameters**: `void`
- **Returns**: `Object`
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
console.log(datetime.toObject()); // { year: 2024, month: 12, day: 7, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}
```

### `toJSDate`

Returns the js date of the datetime.

```typescript
toJSDate(): Date
```

- **Parameters**: `void`
- **Returns**: `Date`
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
console.log(datetime.toJSDate().toISOString()); // 2024-12-07T12:56:19.920Z
```

### `equals`

Returns whether the datetime is equal to the other datetime.

```typescript
equals(other: DateTime): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other datetime to compare against.
    - **Type**: `DateTime`
- **Returns**: `boolean`
- **Throws**: `void`

**Example**:

```typescript
const datetime1 = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const datetime2 = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
console.log(datetime1.equals(datetime2)); // true
```

### `isLaterThan`

Returns whether the datetime is later than the other datetime.

```typescript
isLaterThan(other: DateTime): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other datetime to compare against.
    - **Type**: `DateTime`
- **Returns**: `boolean`
- **Throws**: `void`

**Example**:

```typescript
const datetime1 = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const datetime2 = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
console.log(datetime1.isLaterThan(datetime2)); // false
```

### `isEarlierThan`

Returns whether the datetime is earlier than the other datetime.

```typescript
isEarlierThan(other: DateTime): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other datetime to compare against.
    - **Type**: `DateTime`
- **Returns**: `boolean`
- **Throws**: `void`

**Example**:

```typescript
const datetime1 = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const datetime2 = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
console.log(datetime1.isEarlierThan(datetime2)); // false
```

### `withYear`

Return a new datetime with year replaced.

```typescript
withYear(year: number): DateTime
```

- **Parameters**:
  - `year`:
    - **description**: The year to replace the old one.
    - **Type**: `number`
- **Returns**: `DateTime`
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
const datetimeWithYear = datetime.withYear(2023);
console.log(datetimeWithYear.toString()); // 2023-12-07 13:56:19.920 UTC+01:00
```

### `withMonth`

Return a new datetime with month replaced.

```typescript
withMonth(month: number): DateTime
```

- **Parameters**:
  - `month`:
    - **description**: The month to replace the old one.
    - **Type**: `number`
- **Returns**: `DateTime`
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
const datetimeWithMonth = datetime.withMonth(9);
console.log(datetimeWithMonth.toString()); // 2024-09-07 13:56:19.920 UTC+01:00
```

### `withDay`

Return a new datetime with day replaced.

```typescript
withDay(day: number): DateTime
```

- **Parameters**:
  - `day`:
    - **description**: The day to replace the old one.
    - **Type**: `number`
- **Returns**: `DateTime`
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
const datetimeWithDay = datetime.withDay(28);
console.log(datetimeWithDay.toString()); // 2024-12-28 13:56:19.920 UTC+01:00
```

### `withHour`

Return a new datetime with hour replaced.

```typescript
withHour(hour: number): DateTime
```

- **Parameters**:
  - `hour`:
    - **description**: The hour to replace the old one.
    - **Type**: `number`
- **Returns**: `DateTime`
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
const datetimeWithHour = datetime.withHour(21);
console.log(datetimeWithHour.toString()); // 2024-12-07 21:56:19.920 UTC+01:00
```

### `withMinute`

Return a new datetime with minute replaced.

```typescript
withMinute(minute: number): DateTime
```

- **Parameters**:
  - `minute`:
    - **description**: The minute to replace the old one.
    - **Type**: `number`
- **Returns**: `DateTime`
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
const datetimeWithMinute = datetime.withMinute(59);
console.log(datetimeWithMinute.toString()); // 2024-12-07 13:59:19.920 UTC+01:00
```

### `withSecond`

Return a new datetime with second replaced.

```typescript
withSecond(second: number): DateTime
```

- **Parameters**:
  - `second`:
    - **description**: The second to replace the old one.
    - **Type**: `number`
- **Returns**: `DateTime`
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
const datetimeWithSecond = datetime.withSecond(59);
console.log(datetimeWithSecond.toString()); // 2024-12-07 13:56:59.920 UTC+01:00
```

### `withMillisecond`

Return a new datetime with millisecond replaced.

```typescript
withMillisecond(millisecond: number): DateTime
```

- **Parameters**:
  - `millisecond`:
    - **description**: The millisecond to replace the old one.
    - **Type**: `number`
- **Returns**: `DateTime`
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
const datetimeWithMillisecond = datetime.withMillisecond(999);
console.log(datetimeWithMillisecond.toString()); // 2024-12-07 13:56:19.999 UTC+01:00
```

### `withOffset`

Return a new datetime with offset replaced.

::: warning
This method returns a datetime with other fields **un-changed**.

If you want to reflect the same datetime in another `offset` use `inOffset`.
:::

```typescript
withOffset(offset: Offset): DateTime
```

- **Parameters**:
  - `offset`:
    - **description**: The offset to replace the old one.
    - **Type**: `Offset`
- **Returns**: `DateTime`
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
const datetimeWithOffset = datetime.withOffset(Offset.fromObject({ hour: -1 }));
console.log(datetimeWithOffset.toString()); // 2024-12-07 13:56:19.920 UTC-01:00
```

### `inOffset`

Return the same datetime reflected in another offset.

::: warning
This method returns a datetime with other fields **changed**.

If you want to replace just the `offset` and not anything else use `withOffset`.
:::

```typescript
inOffset(offset: Offset): DateTime
```

- **Parameters**:
  - `offset`:
    - **description**: The offset to return the datetime in.
    - **Type**: `Offset`
- **Returns**: `DateTime`
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
const datetimeInOffset = datetime.inOffset(Offset.UTC);
console.log(datetimeInOffset.toString()); // 2024-12-07 12:56:19.920 UTC
```

### `inZone`

Return the same datetime reflected in another timezone.

::: warning
This method returns a datetime with other fields **changed**.
:::

```typescript
inZone(zoneName: string): DateTime
```

- **Parameters**:
  - `zoneName`:
    - **description**: The zone name to return the datetime in.
    - **Type**: `string`
- **Returns**: `DateTime`
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
const datetimeInZone = datetime.inZone("UTC");
console.log(datetimeInZone.toString()); // 2024-12-07 12:56:19.920 UTC
```

### `inUTC`

Return the same datetime reflected in UTC.

::: warning
This method returns a datetime with other fields **changed**.
:::

```typescript
inUTC(): DateTime
```

- **Parameters**: `void`
- **Returns**: `DateTime`
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
const datetimeInUTC = datetime.inUTC();
console.log(datetimeInUTC.toString()); // 2024-12-07 12:56:19.920 UTC
```

### `plus`

Return a new datetime as the sum of the datetime with a duration.

```typescript
plus(duration: Duration): DateTime
```

- **Parameters**:
  - `duration`:
    - **description**: The duration to add.
    - **Type**: `Duration`
- **Returns**: `DateTime`
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
const duration = Duration.fromObject({ millisecond: 10 });

const sum = datetime.plus(duration);
console.log(sum.toString()); // 2024-12-07 13:56:19.930 UTC+01:00
```

### `minus`

Return a new datetime as the difference of the datetime with a duration.

```typescript
minus(duration: Duration): DateTime
```

- **Parameters**:
  - `duration`:
    - **description**: The duration to subtract.
    - **Type**: `Duration`
- **Returns**: `DateTime`
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
const duration = Duration.fromObject({ millisecond: 10 });

const diff = datetime.minus(duration);
console.log(diff.toString()); // 2024-12-07 13:56:19.910 UTC+01:00
```

## Static Properties

None

## Static Methods

### `fromDaysSinceEpoch`

Return a new datetime from days since epoch.

::: info
This method returns the datetime reflected in your local timezone.
:::

```typescript
DateTime.fromDaysSinceEpoch(daysSinceEpoch: number): DateTime
```

- **Parameters**:
  - `daysSinceEpoch`:
    - **description**: the days since epoch.
    - **Type**: `number`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromDaysSinceEpoch(20064.539119444446);
console.log(datetime.toString()); // 2024-12-07 12:56:19.920 UTC - local timezone is assumed to be UTC in this case
```

### `fromHoursSinceEpoch`

Return a new datetime from hours since epoch.

::: info
This method returns the datetime reflected in your local timezone.
:::

```typescript
DateTime.fromHoursSinceEpoch(hoursSinceEpoch: number): DateTime
```

- **Parameters**:
  - `hoursSinceEpoch`:
    - **description**: the hours since epoch.
    - **Type**: `number`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromHoursSinceEpoch(481548.9388666667);
console.log(datetime.toString()); // 2024-12-07 12:56:19.920 UTC - local timezone is assumed to be UTC in this case
```

### `fromMinutesSinceEpoch`

Return a new datetime from minutes since epochs.

::: info
This method returns the datetime reflected in your local timezone.
:::

```typescript
DateTime.fromMinutesSinceEpoch(minutesSinceEpoch: number): DateTime
```

- **Parameters**:
  - `minutesSinceEpoch`:
    - **description**: the minutes since epoch.
    - **Type**: `number`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromMinutesSinceEpoch(28892936.332);
console.log(datetime.toString()); // 2024-12-07 12:56:19.920 UTC - local timezone is assumed to be UTC in this case
```

### `fromSecondsSinceEpoch`

Return a new datetime from seconds since epoch.

::: info
This method returns the datetime reflected in your local timezone.
:::

```typescript
DateTime.fromSecondsSinceEpoch(secondsSinceEpoch: number): DateTime
```

- **Parameters**:
  - `secondsSinceEpoch`:
    - **description**: the seconds since epoch.
    - **Type**: `number`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromSecondsSinceEpoch(1733576179.92);
console.log(datetime.toString()); // 2024-12-07 12:56:19.920 UTC - local timezone is assumed to be UTC in this case
```

### `fromMillisecondsSinceEpoch`

Return a new datetime from milliseconds since epoch.

::: info
This method returns the datetime reflected in your local timezone.
:::

```typescript
DateTime.fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number): DateTime
```

- **Parameters**:
  - `millisecondsSinceEpoch`:
    - **description**: the milliseconds since epoch.
    - **Type**: `number`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromMillisecondsSinceEpoch(1733576179920);
console.log(datetime.toString()); // 2024-12-07 12:56:19.920 UTC - local timezone is assumed to be UTC in this case
```

### `fromDurationSinceEpoch`

Return a new datetime from duration since epoch.

::: info
This method returns the datetime reflected in your local timezone.
:::

```typescript
DateTime.fromDurationSinceEpoch(durationSinceEpoch: Duration): DateTime
```

- **Parameters**:
  - `durationSinceEpoch`:
    - **description**: the duration since epoch.
    - **Type**: `Duration`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const durationSinceEpoch = Duration.fromObject({
  day: 20064,
  hour: 12,
  minute: 56,
  second: 19,
  millisecond: 920,
});
const datetime = DateTime.fromDurationSinceEpoch(durationSinceEpoch);
console.log(datetime.toString()); // 2024-12-07 12:56:19.920 UTC - local timezone is assumed to be UTC in this case
```

### `fromObject`

Return a new datetime from an object literal.

```typescript
DateTime.fromObject(object: Object): DateTime
```

- **Parameters**:
  - `object`:
    - **description**: the object literal.
    - **Type**: `Object`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const objectLiteral = {
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
};
const datetime = DateTime.fromObject(objectLiteral);
console.log(datetime.toString()); // 2024-12-07 13:56:19.920 UTC+01:00
```

### `fromString`

Return a new datetime from a human-readable string representation.

```typescript
DateTime.fromString(str: string): DateTime
```

- **Parameters**:
  - `str`:
    - **description**: the human-readable string representation.
    - **Type**: `string`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromString("2024-12-07 13:56:19.920 UTC+01:00");
console.log(datetime.toObject()); // {year: 2024, month: 12, day: 7, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}
```

### `fromISOString`

Return a new datetime from an ISO 8601 representation.

```typescript
DateTime.fromISOString(str: string): DateTime
```

- **Parameters**:
  - `str`:
    - **description**: the ISO 8601 representation.
    - **Type**: `string`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.fromISOString("2024-12-07T13:56:19.920+01:00");
console.log(datetime.toObject()); // {year: 2024, month: 12, day: 7, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}
```

### `parse`

Return a new datetime from any possible string.

```typescript
DateTime.parse(str: string): DateTime
```

- **Parameters**:
  - `str`:
    - **description**: the string.
    - **Type**: `string`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.parse("2024-12-07 13:56:19.920 UTC+01:00");
console.log(datetime.toObject()); // {year: 2024, month: 12, day: 7, hour: 13, minute: 56, second: 19, millisecond: 920, offset: { hour: 1 }}
```

### `fromJSDate`

Return a new datetime from a js date.

::: info
This method returns the datetime reflected in your local timezone.
:::

```typescript
DateTime.fromJSDate(date: Date): DateTime
```

- **Parameters**:
  - `date`:
    - **description**: the js date.
    - **Type**: `Date`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const jsDate = new Date(Date.UTC(2024, 11, 7, 12, 56, 19, 920));
const datetime = DateTime.fromJSDate(jsDate);
console.log(datetime.toString()); // 2024-12-07 12:56:19.920 UTC - local timezone is assumed to be UTC in this case
```

### `now`

Return the current datetime reflected in your local timezone.

```typescript
DateTime.now(): DateTime
```

- **Parameters**: `void`
- **Returns**: `DateTime`
- **Throws**: `void`

**Example**:

```typescript
const datetime = DateTime.now();
console.log(datetime.toString()); // 2024-12-07 12:56:19.920 UTC - local timezone is assumed to be UTC in this case
```

### `compare`

Returns the difference between two datetime instances.

::: tip
This method is useful for sorting `DateTime` instances in an array.
:::

```typescript
DateTime.compare(datetime1: DateTime, datetime2: DateTime): number
```

- **Parameters**:
  - `datetime1`:
    - **description**: The first datetime.
    - **Type**: `DateTime`
  - `datetime2`:
    - **description**: The second datetime.
    - **Type**: `DateTime`
- **Returns**: `number`
- **Throws**: `void`

**Example**:

```typescript
const datetime1 = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
const datetime2 = DateTime.fromObject({
  year: 2024,
  month: 12,
  day: 7,
  hour: 13,
  minute: 56,
  second: 19,
  millisecond: 920,
  offset: { hour: 1 },
});
console.log(DateTime.compare(datetime1, datetime2)); // 0
```
