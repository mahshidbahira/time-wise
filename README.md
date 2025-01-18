# Time-Wise

A Model-Driven Approach to Date and Time!

## Documentation

[Jump into the docs!](https://mahshidbahira.github.io/time-wise/)

## Features

- **DateTime**

  Easily create, format, and compare DateTime objects with precision, supporting various time zones.

- **Duration**

  Perform arithmetic operations with durations, including conversion between time units like seconds, minutes, hours, and more.

- **Offset**

  Handle time zone offsets and calculate time differences accurately, taking into account daylight savings and other factors.

- **Interval**

  Work with time intervals to compute intersections, contains, and durations, offering enhanced flexibility in managing time spans.

## Installation

Install via npm:

```bash
npm install time-wise
```

## Import

### ES Modules

When using ESM:

```typescript
import { DateTime, Offset, Interval, Duration } from "time-wise";
```

### CommonJS

When using CJS:

```typescript
const { DateTime, Offset, Interval, Duration } = require("time-wise");
```

### Browser

When using browser, include the script tag:

```html
<script src="time-wise.iife.js"></script>
<script>
  const { DateTime, Offset, Interval, Duration } = TimeWise;
</script>
```

## Have fun with ...

### DateTime

Wanna know what time it is in your favorite city right now?

```typescript
DateTime.now().inZone("America/New_York").toString();

// 2025-01-01 15:45:30.250 UTC-05:00
```

Create a special datetime; Maybe the day you fell in love?

```typescript
DateTime.fromObject({
  year: 2024,
  month: 2,
  day: 14,
  hour: 18,
  minute: 0,
  second: 0,
  millisecond: 0,
  offset: { hour: 1 }, // Paris? wow!
});
```

### Offset

Which city is more to the west?

```typescript
const losAngeles = Offset.fromZoneName("America/Los_Angeles");
const newYork = Offset.fromZoneName("America/New_York");

losAngeles.isWesterThan(newYork); // true
```

### Interval

How many milliseconds has passed since your were born?

```typescript
const birthday = DateTime.fromObject({
  year: 2000,
  month: 12,
  day: 7,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  offset: { hour: 1 },
});
const now = DateTime.now();
Interval.between(birthday, now).duration.inMilliseconds;

// 761093667321
```

### Duration

If each year of a dog's life is `7x` of a humans,
which is bigger? `1800` dog days? or `9000` human days?

```typescript
const dogs = Duration.fromDays(1800).multiplyBy(7);
const humans = Duration.fromDays(9000);

dogs.isLongerThan(humans); // true
```

## License

This library is licensed under the MIT License. See [LICENSE](./LICENSE) for more information.

## Contributing

Contributions are welcome! Please open an issue to discuss any major changes and check the [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to this project.
