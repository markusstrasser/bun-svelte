// Import the plugin
import { SveltePlugin } from "bun-plugin-svelte";

// Use in Bun.build
Bun.build({
  entrypoints: ["src/index.html", "src/App.svelte"],
  outdir: "dist",
  target: "browser",
  plugins: [
    SveltePlugin({
      development: true, // Set to false for production
    }),
  ],
  // Additional configuration for better development experience
  sourcemap: "inline",
  minify: false,
});

// For development, you can also set up a dev server
if (process.env.NODE_ENV !== "production") {
  console.log("Starting development server...");

  Bun.serve({
    port: 3000,
    fetch(req) {
      const url = new URL(req.url);

      // Serve the built files
      if (url.pathname === "/" || url.pathname === "") {
        return new Response(Bun.file("dist/index.html"));
      }

      // Try to serve files from dist directory
      const filePath = `dist${url.pathname}`;
      const file = Bun.file(filePath);
      return file.size
        ? new Response(file)
        : new Response("Not Found", { status: 404 });
    },
    error() {
      return new Response("Error", { status: 500 });
    },
  });

  console.log("Server running at http://localhost:3000");
}