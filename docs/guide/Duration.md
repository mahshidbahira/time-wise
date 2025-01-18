# Duration

## Table of Contents

- [Instance Properties](#instance-properties)
  - [`day`](#day)
  - [`hour`](#hour)
  - [`minute`](#minute)
  - [`second`](#second)
  - [`millisecond`](#millisecond)
  - [`inDays`](#indays)
  - [`inHours`](#inhours)
  - [`inMinutes`](#inminutes)
  - [`inSeconds`](#inseconds)
  - [`inMilliseconds`](#inmilliseconds)
- [Instance Methods](#instance-methods)
  - [`valueOf`](#valueof)
  - [`toString`](#tostring)
  - [`[Symbol.toPrimitive]`](#symbol-toprimitive)
  - [`toJSON`](#tojson)
  - [`toISOString`](#toisostring)
  - [`toObject`](#toobject)
  - [`equals`](#equals)
  - [`isLongerThan`](#islongerthan)
  - [`isShorterThan`](#isshorterthan)
  - [`withDay`](#withday)
  - [`withHour`](#withhour)
  - [`withMinute`](#withminute)
  - [`withSecond`](#withsecond)
  - [`withMillisecond`](#withmillisecond)
  - [`plus`](#plus)
  - [`minus`](#minus)
  - [`multiplyBy`](#multiplyby)
  - [`divideBy`](#divideby)
  - [`negate`](#negate)
  - [`absolute`](#absolute)
- [Static Properties](#static-properties)
- [Static Methods](#static-methods)

## Instance Properties

### `day`

Return the number of days in the duration.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.day); // 6
  ```

### `hour`

Return the number of hours in the duration.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.hour); // 12
  ```

### `minute`

Return the number of minutes in the duration.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.minute); // 30
  ```

### `second`

Return the number of seconds in the duration.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.second); // 45
  ```

### `millisecond`

Return the number of milliseconds in the duration.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.millisecond); // 2
  ```

### `inDays`

Returns the total duration in days.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.inDays); // 6.521354189814815
  ```

### `inHours`

Returns the total duration in hours.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.inHours); // 156.51250055555556
  ```

### `inMinutes`

Returns the total duration in minutes.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.inMinutes); // 9390.750033333334
  ```

### `inSeconds`

Returns the total duration in seconds.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.inSeconds); // 563445.002
  ```

### `inMilliseconds`

Returns the total duration in milliseconds.

- **Type**: `number`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.inMilliseconds); // 563445002
  ```

## Instance Methods

### `valueOf`

Returns the total duration in milliseconds.

```typescript
valueOf(): number
```

- **Parameters**: `void`
- **Returns**: `number`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.valueOf()); // 563445002
  ```

### `toString`

Returns the string representation of the duration.

```typescript
toString(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.toString()); // 6 days 12:30:45.002
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
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(+duration); // 563445002
  console.log(`${duration}`); // 6 days 12:30:45.002
  ```

### `toJSON`

Returns the JSON serialization representation of the duration.

```typescript
toJSON(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.toJSON()); // "P6DT12H30M45.002S"
  ```

### `toISOString`

Returns the ISO 8601 representation of the duration.

```typescript
toISOString(): string
```

- **Parameters**: `void`
- **Returns**: `string`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.toISOString()); // P6DT12H30M45.002S
  ```

### `toObject`

Returns the object representation of the duration.

```typescript
toObject(): Object
```

- **Parameters**: `void`
- **Returns**: `object`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration.toObject()); // {day: 6, hour: 12, minute: 30, second: 45, millisecond: 2}
  ```

### `equals`

Returns whether the duration is equal to the other duration.

```typescript
equals(other: Duration): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other duration to compare against.
    - **Type**: `Duration`
- **Returns**: `boolean`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration1 = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  const duration2 = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration1.equals(duration2)); // true
  ```

### `isLongerThan`

Returns whether the duration is longer than the other duration.

```typescript
isLongerThan(other: Duration): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other duration to compare against.
    - **Type**: `Duration`
- **Returns**: `boolean`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration1 = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  const duration2 = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration1.isLongerThan(duration2)); // false
  ```

### `isShorterThan`

Returns whether the duration is shorter than the other duration.

```typescript
isShorterThan(other: Duration): boolean
```

- **Parameters**:
  - `other`:
    - **description**: The other duration to compare against.
    - **Type**: `Duration`
- **Returns**: `boolean`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration1 = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  const duration2 = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  console.log(duration1.isShorterThan(duration2)); // false
  ```

### `withDay`

Return a new duration with days replaced.

```typescript
withDay(day: number): Duration
```

- **Parameters**:
  - `day`:
    - **description**: The day to replace the old one.
    - **Type**: `number`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  const durationWithDay = duration.withDay(3);
  console.log(duration.toString()); // 3 days 12:30:45.002
  ```

### `withHour`

Return a new duration with hours replaced.

```typescript
withHour(hour: number): Duration
```

- **Parameters**:
  - `hour`:
    - **description**: The hour to replace the old one.
    - **Type**: `number`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  const durationWithHour = duration.withHour(23);
  console.log(duration.toString()); // 6 days 23:30:45.002
  ```

### `withMinute`

Return a new duration with minutes replaced.

```typescript
withMinute(minute: number): Duration
```

- **Parameters**:
  - `minute`:
    - **description**: The minute to replace the old one.
    - **Type**: `number`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  const durationWithMinute = duration.withMinute(59);
  console.log(duration.toString()); // 6 days 12:59:45.002
  ```

### `withSecond`

Return a new duration with seconds replaced.

```typescript
withSecond(second: number): Duration
```

- **Parameters**:
  - `second`:
    - **description**: The second to replace the old one.
    - **Type**: `number`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  const durationWithSecond = duration.withSecond(59);
  console.log(duration.toString()); // 6 days 12:30:59.002
  ```

### `withMillisecond`

Return a new duration with milliseconds replaced.

```typescript
withMillisecond(millisecond: number): Duration
```

- **Parameters**:
  - `millisecond`:
    - **description**: The millisecond to replace the old one.
    - **Type**: `number`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
    hour: 12,
    minute: 30,
    second: 45,
    millisecond: 2,
  });
  const durationWithMillisecond = duration.withMillisecond(999);
  console.log(duration.toString()); // 6 days 12:30:45.999
  ```

### `plus`

Return a new duration as the sum of the duration with another duration.

```typescript
plus(other: Duration): Duration
```

- **Parameters**:
  - `other`:
    - **description**: The other duration to calculate the sum of.
    - **Type**: `Duration`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration1 = Duration.fromObject({
    day: 6,
  });
  const duration2 = Duration.fromObject({
    day: 2,
  });
  const sum = duration1.plus(duration2);
  console.log(sum.toString()); // 8 days 00:00:00
  ```

### `minus`

Return a new duration as the difference of the duration with another duration.

```typescript
minus(other: Duration): Duration
```

- **Parameters**:
  - `other`:
    - **description**: The other duration to calculate the difference of.
    - **Type**: `Duration`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration1 = Duration.fromObject({
    day: 6,
  });
  const duration2 = Duration.fromObject({
    day: 2,
  });
  const diff = duration1.minus(duration2);
  console.log(diff.toString()); // 4 days 00:00:00
  ```

### `multiplyBy`

Return a new duration as the product of the duration with a factor.

```typescript
multiplyBy(factor: number): Duration
```

- **Parameters**:
  - `factor`:
    - **description**: The factor to calculate the product of.
    - **Type**: `number`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
  });
  const product = duration.multiplyBy(2);
  console.log(product.toString()); // 12 days 00:00:00
  ```

### `divideBy`

Return a new duration as the quotient of the duration with a divisor.

```typescript
divideBy(divisor: number): Duration
```

- **Parameters**:
  - `divisor`:
    - **description**: The divisor to calculate the quotient of.
    - **Type**: `number`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
  });
  const quotient = duration.divideBy(2);
  console.log(quotient.toString()); // 3 days 00:00:00
  ```

### `negate`

Return a new duration as the negated duration.

```typescript
negate(): Duration
```

- **Parameters**: `void`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: 6,
  });
  const negated = duration.negate();
  console.log(negated.toString()); // -6 days 00:00:00
  ```

### `absolute`

Return a new duration as the absolute duration.

```typescript
absolute(): Duration
```

- **Parameters**: `void`
- **Returns**: `Duration`
- **Throws**: `void`
- **Example**:

  ```typescript
  const duration = Duration.fromObject({
    day: -6,
  });
  const abs = duration.absolute();
  console.log(abs.toString()); // 6 days 00:00:00
  ```
