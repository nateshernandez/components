import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  external: ["react", "@mui/material"],
  plugins: [typescript()],
};
