import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
/** @type {import("rollup").RollupOptions} */
export default [
  {
    input: "src/main.ts",
    plugins: [typescript()],
    output: [
      {
        file: "dist/flowcode.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/flowcode.min.js",
        format: "es",
        plugins: [terser()],
        sourcemap: true,
      },
      {
        file: "dist/flowcode.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/flowcode.min.esm.js",
        format: "esm",
        plugins: [terser()],
        sourcemap: true,
      },
      {
        file: "dist/flowcode.cjs.js",
        format: "cjs",
        sourcemap: true,
        sourcemap: true,
      },
      {
        file: "dist/flowcode.min.cjs.js",
        format: "cjs",
        plugins: [terser()],
        sourcemap: true,
      },
    ],
  },
  {
    input: "src/backend.worker.ts",
    plugins: [typescript()],
    output: [
      {
        file: "dist/worker.flowcode.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/worker.flowcode.min.js",
        format: "es",
        plugins: [terser()],
        sourcemap: true,
      },
      {
        file: "dist/worker.flowcode.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/worker.flowcode.min.esm.js",
        format: "esm",
        plugins: [terser()],
        sourcemap: true,
      },
      {
        file: "dist/worker.flowcode.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/worker.flowcode.min.cjs.js",
        format: "cjs",
        plugins: [terser()],
        sourcemap: true,
      },
    ],
  },
];
