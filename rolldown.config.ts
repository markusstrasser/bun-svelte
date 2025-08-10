import { defineConfig } from "rolldown";
import svelte from "rollup-plugin-svelte";

export default defineConfig({
  input: "src/index.js",
  output: {
    dir: "./anywidget_dist/",
  },
  plugins: [
    svelte({ compilerOptions: { runes: true } }),
  ],
});