// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// `bun run build:static` sets STATIC_EXPORT=1 and builds .output with a Node
// server, which the deploy workflow then uses to render the real index.html.
// Everything in .output/public is pure static files for GitHub Pages.
const staticExport = process.env.STATIC_EXPORT === "1";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Inside Lovable builds LOVABLE_NITRO_PRESET (Cloudflare) takes precedence, so
  // this only changes the STATIC_EXPORT=1 self-hosting build.
  nitro: staticExport ? { preset: "node-server" } : true,
});
