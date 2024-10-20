/// <reference types="vitest/config" />

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "TimeWise",
      fileName: "time-wise",
      formats: ["es", "cjs", "iife", "umd", "system"],
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
