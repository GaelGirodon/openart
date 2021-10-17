// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  // CommonJS
  {
    input: "src/targets/node/main.ts",
    output: {
      file: "dist/openart.common.js",
      format: "cjs"
    },
    plugins: [
      typescript({ module: "esnext", include: ["src/targets/node/*.ts", "src/lib/**/*.ts"] })
    ]
  },
  // ES Module
  {
    input: "src/targets/node/main.ts",
    output: {
      file: "dist/openart.esm.js",
      format: "es"
    },
    plugins: [
      typescript({ module: "esnext", include: ["src/targets/node/*.ts", "src/lib/**/*.ts"] })
    ]
  },
  // IIFE
  {
    input: "src/targets/browser/main.ts",
    output: {
      file: "dist/openart.min.js",
      format: "iife",
      sourcemap: true
    },
    plugins: [
      typescript({ module: "esnext", include: ["src/targets/browser/*.ts", "src/lib/**/*.ts"] }),
      terser({ output: { comments: false } })
    ]
  }
];
