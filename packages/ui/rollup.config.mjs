import typescript from "rollup-plugin-typescript2";
import preserveDirectives from "rollup-plugin-preserve-directives";
import external from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/layout.ts",
    output: [
      {
        dir: "./dist",
        format: "esm",
        preserveModules: true,
        entryFileNames: "[name].mjs",
      },
    ],
    plugins: [typescript(), preserveDirectives(), external()],
    external: ["react", "react-dom"],
  },
  {
    input: "src/logo.ts",
    output: [
      {
        dir: "./dist",
        format: "esm",
        preserveModules: true,
        entryFileNames: "[name].mjs",
      },
    ],
    plugins: [typescript(), preserveDirectives(), external()],
    external: ["react", "react-dom"],
  },
  {
    input: "src/menu.ts",
    output: [
      {
        dir: "./dist",
        format: "esm",
        preserveModules: true,
        entryFileNames: "[name].mjs",
      },
    ],
    plugins: [typescript(), preserveDirectives(), external()],
    external: ["react", "react-dom"],
  },
];
