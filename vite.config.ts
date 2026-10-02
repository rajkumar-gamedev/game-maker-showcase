// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender the index shell so the static build ships a real index.html;
    // the app then hydrates client-side (GitHub Pages has no server runtime).
    spa: { enabled: true },
  },
  // Self-hosting: builds to .output/public (plain static files for GitHub Pages etc.).
  // Inside Lovable builds LOVABLE_NITRO_PRESET (Cloudflare) takes precedence, so this only
  // applies when you build yourself, e.g. `bun run build:static`.
  nitro: { preset: "static" },
});
