# Time-Wise

A TypeScript library for handling time durations with high precision, flexible formatting, and rich manipulation capabilities. The `Duration` class provides methods to create, compare, and format time intervals in a readable way, supporting conversions between milliseconds, seconds, minutes, hours, and days.

## Features

- **Flexible Duration Parsing:** Parse from human-readable strings, ISO-8601 duration strings, or custom objects.
- **High Precision:** Supports operations down to the millisecond level.
- **Intuitive Duration Manipulation:** Add, subtract, compare, and format durations.
- **Date Calculations:** Add or subtract durations from specific dates.

## Installation

Install via npm:

```bash
npm install time-wise
```

## Usage

If you're using **ES Modules**:

```typescript
import { Duration, SECOND, MINUTE } from "time-wise";
```

Or if you're using **CommonJS**:

```typescript
const { Duration, SECOND, MINUTE } = require("time-wise");
```

Or if you're using the **browser** include the script tag:

```html
<script src="time-wise.iife.js"></script>
<script>
  const { Duration, SECOND, MINUTE } = TimeWise;
</script>
```

### Creating a Duration

You can create a duration using milliseconds, an object, or a string.

```typescript
// Using milliseconds
const durationOfMilliseconds = Duration.of(5_400_000); // 1 hour and 30 minutes

const duration = Duration.of(1 * HOUR + 30 * MINUTE); // 1 hour and 30 minutes (but readable!)

// From an object
const durationFromObject = Duration.fromObject({
  hours: 1,
  minutes: 30,
});

// From a string (e.g., "1 day 01:30:00" or ISO 8601 format)
const durationFromString = Duration.fromString("1 day 01:30:00");
const durationFromISO = Duration.fromISOString("P1DT1H30M");
```

### Accessing Duration Properties

Retrieve various properties and representations of the duration in days, hours, minutes, etc.

```typescript
console.log(duration.hours); // 1 hour
console.log(duration.minutes); // 30 minutes
console.log(duration.milliseconds); // 0 milliseconds

console.log(duration.inHours); // 1.5 hours
console.log(duration.inMinutes); // 90 minutes
console.log(duration.inMilliseconds); // 5_400_000 milliseconds
```

### Performing Operations on Durations

You can add, subtract, multiply, and divide durations.

```typescript
const duration1 = Duration.of(1 * HOUR); // 1 hour
const duration2 = Duration.of(30 * MINUTE); // 30 minutes

// Adding durations
const totalDuration = duration1.plus(duration2); // 1 hour 30 minutes

// Subtracting durations
const remainingDuration = duration1.minus(duration2); // 30 minutes

// Multiplying and dividing durations
const doubledDuration = duration1.multiplyBy(2); // 2 hours
const halvedDuration = duration1.divideBy(2); // 30 minutes
```

### Comparing Durations

Use `equals`, `isLongerThan`, and `isShorterThan` for comparisons.

```typescript
const duration1 = Duration.of(1 * HOUR); // 1 hour
const duration2 = Duration.of(30 * MINUTE); // 30 minutes

console.log(duration1.isLongerThan(duration2)); // true
console.log(duration1.equals(Duration.of(60 * MINUTE))); // true
```

### Formatting Durations

The library supports various string formats for durations.

```typescript
const duration = Duration.of(1 * HOUR + 1 * MINUTE + 1 * SECOND); // 1 hour, 1 minute, and 1 second

// Default string format
console.log(duration.toString()); // "01:01:01"

// ISO 8601 format
console.log(duration.toISOString()); // "PT1H1M1S"
```

### Using Durations with Dates

Calculate dates in the future or past based on a duration.

```typescript
const oneHour = Duration.of(1 * HOUR); // 1 hour
const now = new Date();

const oneHourLater = oneHour.after(now); // Date 1 hour from now
const oneHourBefore = oneHour.before(now); // Date 1 hour ago
```

## API Reference

### `Duration` Class

#### Static Methods

- `Duration.of(milliseconds: number): Duration`
- `Duration.fromObject(object: ObjectDetails): Duration`
- `Duration.fromString(str: string): Duration | null`
- `Duration.fromISOString(str: string): Duration | null`
- `Duration.parse(str: string): Duration | null`
- `Duration.between(since: Date, until: Date): Duration`
- `Duration.since(date: Date): Duration`
- `Duration.until(date: Date): Duration`
- `Duration.compare(duration1: Duration, duration2: Duration): number`

#### Instance Properties

- `days`, `hours`, `minutes`, `seconds`, `milliseconds`
- `inDays`, `inHours`, `inMinutes`, `inSeconds`, `inMilliseconds`

#### Instance Methods

- `toObject(): ObjectDetails`
- `toString(): string`
- `toISOString(): string`
- `toJSON(): string`
- `equals(other: Duration): boolean`
- `isLongerThan(other: Duration): boolean`
- `isShorterThan(other: Duration): boolean`
- `plus(other: Duration): Duration`
- `minus(other: Duration): Duration`
- `multiplyBy(factor: number): Duration`
- `divideBy(divisor: number): Duration`
- `negate(): Duration`
- `absolute(): Duration`
- `after(date: Date): Date`
- `before(date: Date): Date`

## License

This library is licensed under the MIT License. See [LICENSE](../LICENSE) for more information.

## Contributing

Contributions are welcome! Please open an issue to discuss any major changes and check the [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to this project.
