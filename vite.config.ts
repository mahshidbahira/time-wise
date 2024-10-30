/// <reference types="vitest/config" />

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    minify: "esbuild",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "TimeWise",
      fileName: "time-wise",
      formats: ["es", "cjs", "iife", "umd", "system"],
    },
  },
  esbuild: {
    keepNames: true,
    minifyIdentifiers: false,
  },
  plugins: [dts({ rollupTypes: true })],
});
