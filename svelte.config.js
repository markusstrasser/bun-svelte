/** @type {import('svelte/compiler').CompileOptions} */
const config = {
  compilerOptions: {
    dev: process.env.NODE_ENV !== "production",
  },
};

export default config;
