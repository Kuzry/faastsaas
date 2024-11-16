import typescript from "rollup-plugin-typescript2";
import preserveDirectives from "rollup-plugin-preserve-directives";
import external from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "./dist/index.esm.js",
        format: "esm",
        exports: "named",
      },
    ],
    plugins: [typescript(), preserveDirectives(), external()],
  },
];
