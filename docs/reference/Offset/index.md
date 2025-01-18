# Offset

The `Offset` immutable class represents a time zone offset from UTC (Coordinated
Universal Time) broken down into hours and minutes.
It provides a variety of methods for creation, formatting, comparison,
calculation, and conversion of offset instances.

::: tip
All instances of `Offset` are **immutable**!

So all manipulation methods return a new instance of offset.
:::

## Table of Contents

- [Instance Properties](#instance-properties)
  - [`hour`](#hour)
  - [`minute`](#minute)
  - [`inHours`](#inhours)
  - [`inMinutes`](#inminutes)
- [Instance Methods](#instance-methods)
  - [`valueOf`](#valueof)
  - [`toString`](#tostring)
  - [`[Symbol.toPrimitive]`](#symbol-toprimitive)
  - [`toJSON`](#tojson)
  - [`toISOString`](#toisostring)
  - [`toObject`](#toobject)
  - [`toDuration`](#toduration)
  - [`equals`](#equals)
  - [`isEasterThan`](#iseasterthan)
  - [`isWesterThan`](#iswesterthan)
  - [`withHour`](#withhour)
  - [`withMinute`](#withminute)
  - [`plus`](#plus)
  - [`minus`](#minus)
  - [`negate`](#negate)
  - [`absolute`](#absolute)
- [Static Properties](#static-properties)
  - [`UTC`](#utc)
- [Static Methods](#static-methods)
  - [`fromHours`](#fromhours)
  - [`fromMinutes`](#fromminutes)
  - [`fromObject`](#fromobject)
  - [`fromString`](#fromstring)
  - [`fromISOString`](#fromisostring)
  - [`parse`](#parse)
  - [`fromDuration`](#fromduration)
  - [`fromZoneName`](#fromzonename)
  - [`local`](#local)
  - [`compare`](#compare)

## Instance Properties

### `hour`

Return the number of hours in the offset.

- **Type**: `number`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.hour); // 1
```

### `minute`

Return the number of minutes in the offset.

- **Type**: `number`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.minute); // 30
```

### `inHours`

Returns the total offset in hours.

- **Type**: `number`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.inHours); // 1.5
```

### `inMinutes`

Returns the total offset in minutes.

- **Type**: `number`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.inMinutes); // 90
```

## Instance Methods

### `valueOf`

Returns the total offset in milliseconds.

```typescript
valueOf(): number
```

- **Parameters**: `void`
- **Returns**: `number`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.valueOf()); // 5400000
```

### `toString`

Returns the human-readable string representation of the offset.

```typescript
toString(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.toString()); // UTC+01:30
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
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(+offset); // 5400000
console.log(`${offset}`); // UTC+01:30
```

### `toJSON`

Returns the JSON serialization representation of the offset.

```typescript
toJSON(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.toJSON()); // "+01:30"
```

### `toISOString`

Returns the ISO 8601 representation of the offset.

```typescript
toISOString(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.toISOString()); // +01:30
```

### `toObject`

Returns the object literal of the offset.

```typescript
toObject(): Object
```

- **Parameters**: `void`
- **Returns**: `Object`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.toObject()); // {hour: 1, minute: 30}
```

### `toDuration`

Returns the duration of the offset.

```typescript
toDuration(): Duration
```

- **Parameters**: `void`
- **Returns**: `Duration`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.toDuration().toString()); // 01:30:00
```

### `equals`

Returns whether the offset is equal to the other offset.

```typescript
equals(other: Offset): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other offset to compare against.
    - **Type**: `Offset`
- **Returns**: `boolean`
- **Throws**: `void`

**Example**:

```typescript
const offset1 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const offset2 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset1.equals(offset2)); // true
```

### `isEasterThan`

Returns whether the offset is easter than the other offset.

```typescript
isEasterThan(other: Offset): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other offset to compare against.
    - **Type**: `Offset`
- **Returns**: `boolean`
- **Throws**: `void`

**Example**:

```typescript
const offset1 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const offset2 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset1.isEasterThan(offset2)); // false
```

### `isWesterThan`

Returns whether the offset is wester than the other offset.

```typescript
isWesterThan(other: Offset): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other offset to compare against.
    - **Type**: `Offset`
- **Returns**: `boolean`
- **Throws**: `void`

**Example**:

```typescript
const offset1 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const offset2 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset1.isWesterThan(offset2)); // false
```

### `withHour`

Return a new offset with hours replaced.

```typescript
withHour(hour: number): Offset
```

- **Parameters**:
  - `hour`:
    - **description**: The hour to replace the old one.
    - **Type**: `number`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const offsetWithHour = offset.withHour(2);
console.log(offsetWithHour.toString()); // UTC+02:00
```

### `withMinute`

Return a new offset with minutes replaced.

```typescript
withMinute(minute: number): Offset
```

- **Parameters**:
  - `minute`:
    - **description**: The minute to replace the old one.
    - **Type**: `number`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const offsetWithMinute = offset.withMinute(0);
console.log(offsetWithMinute.toString()); // UTC+01:00
```

### `plus`

Return a new offset as the sum of the offset with another offset.

```typescript
plus(other: Offset): Offset
```

- **Parameters**:
  - `other`:
    - **description**: The other offset to calculate the sum of.
    - **Type**: `Offset`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset1 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const offset2 = Offset.fromObject({
  hour: 1,
});
const sum = offset1.plus(offset2);
console.log(sum.toString()); // UTC+02:30
```

### `minus`

Return a new offset as the difference of the offset with another offset.

```typescript
minus(other: Offset): Offset
```

- **Parameters**:
  - `other`:
    - **description**: The other offset to calculate the difference of.
    - **Type**: `Offset`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset1 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const offset2 = Offset.fromObject({
  hour: 1,
});
const diff = offset1.minus(offset2);
console.log(diff.toString()); // UTC+00:30
```

### `negate`

Return a new offset as the negated offset.

```typescript
negate(): Offset
```

- **Parameters**: `void`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const negated = offset.negate();
console.log(negated.toString()); // UTC-01:30
```

### `absolute`

Return a new offset as the absolute offset.

```typescript
absolute(): Offset
```

- **Parameters**: `void`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: -1,
  minute: -30,
});
const abs = offset.absolute();
console.log(abs.toString()); // UTC+01:30
```

## Static Properties

### `UTC`

Return the offset of UTC.

- **Type**: `Offset`

**Example**:

```typescript
const offset = Offset.UTC;
console.log(offset.toString()); // UTC+00:00
```

## Static Methods

### `fromHours`

Return a new offset from the total hours.

```typescript
Offset.fromHours(inHours: number): Offset
```

- **Parameters**:
  - `inHours`:
    - **description**: the total offset in hours.
    - **Type**: `number`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromHours(1.5);
console.log(offset.toString()); // UTC+01:30
```

### `fromMinutes`

Return a new offset from the total minutes.

```typescript
Offset.fromMinutes(inMinutes: number): Offset
```

- **Parameters**:
  - `inMinutes`:
    - **description**: the total offset in minutes.
    - **Type**: `number`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromMinutes(90);
console.log(offset.toString()); // UTC+01:30
```

### `fromObject`

Return a new offset from an object literal.

```typescript
Offset.fromObject(object: Object): Offset
```

- **Parameters**:
  - `object`:
    - **description**: the object literal.
    - **Type**: `Object`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(offset.toString()); // UTC+01:30
```

### `fromString`

Return a new offset from a human-readable string representation.

```typescript
Offset.fromString(str: string): Offset
```

- **Parameters**:
  - `str`:
    - **description**: the human-readable string representation.
    - **Type**: `string`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromString("UTC+01:30");
console.log(offset.toObject()); // {hour: 1, minute: 30}
```

### `fromISOString`

Return a new offset from an ISO 8601 representation.

```typescript
Offset.fromISOString(str: string): Offset
```

- **Parameters**:
  - `str`:
    - **description**: the ISO 8601 representation.
    - **Type**: `string`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromISOString("+01:30");
console.log(offset.toObject()); // {hour: 1, minute: 30}
```

### `parse`

Return a new offset from any possible string.

```typescript
Offset.parse(str: string): Offset
```

- **Parameters**:
  - `str`:
    - **description**: the string.
    - **Type**: `string`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.parse("UTC+01:30");
console.log(offset.toObject()); // {hour: 1, minute: 30}
```

### `fromDuration`

Return a new offset from a duration.

```typescript
Offset.fromDuration(duration: Duration): Offset
```

- **Parameters**:
  - `duration`:
    - **description**: the duration.
    - **Type**: `Duration`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const duration = Duration.fromObject({
  hour: 1,
  minute: 30,
});
const offset = Offset.fromDuration(duration);
console.log(offset.toString()); // UTC+01:30
```

### `fromZoneName`

Return a new offset from a zone name.

```typescript
Offset.fromZoneName(zoneName: string): Offset
```

- **Parameters**:
  - `zoneName`:
    - **description**: the zone name.
    - **Type**: `string`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.fromZoneName("America/New_York");
console.log(offset.toObject()); // {hour: -5, minute: 0}
```

### `local`

Return the local offset.

```typescript
Offset.local(): Offset
```

- **Parameters**: `void`
- **Returns**: `Offset`
- **Throws**: `void`

**Example**:

```typescript
const offset = Offset.local();
console.log(offset.toString()); // depends on your zone
```

### `compare`

Returns the difference between two offsets.

::: tip
This method is useful for sorting `Offset` instances in an array.
:::

```typescript
Offset.compare(offset1: Offset, offset2: Offset): number
```

- **Parameters**:
  - `offset1`:
    - **description**: The first offset.
    - **Type**: `Offset`
  - `offset2`:
    - **description**: The second offset.
    - **Type**: `Offset`
- **Returns**: `number`
- **Throws**: `void`

**Example**:

```typescript
const offset1 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
const offset2 = Offset.fromObject({
  hour: 1,
  minute: 30,
});
console.log(Offset.compare(offset1, offset2)); // 0
```
