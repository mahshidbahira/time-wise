# TimeWise

A versatile time management library, featuring utilities for duration, stopwatch, timer, etc.

## Installation

Install `time-wise` using npm:

```bash
npm install --save time-wise
```

## Import

- ES Modules

  ```javascript
  import { MILLISECONDS, SECONDS } from "time-wise";
  ```

- CommonJs

  ```javascript
  const { MILLISECONDS, SECONDS } = require("time-wise");
  ```

- IIFE/Browser

  - Include the IIFE script in your browser:

    ```html
    <script src="time-wise.iife.js"></script>
    ```

  - Destructure the global object:

    ```javascript
    const { MILLISECONDS, SECONDS } = TimeWise;
    ```
