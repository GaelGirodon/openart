// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  // Node.js
  {
    input: "src/targets/node/main.ts",
    output: {
      file: "dist/index.js",
      format: "cjs"
    },
    plugins: [
      typescript({ module: "esnext", include: ["src/targets/node/*.ts", "src/lib/**/*.ts"] })
    ]
  },
  // Browser
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
