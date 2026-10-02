# AGENTS.md

<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Self-hosting / static export

- Self-hosting builds go through `bun run build:static` (sets `STATIC_EXPORT=1`): it builds a Nitro `node-server` bundle into `.output`, and the GitHub Actions workflow (`.github/workflows/deploy.yml`) renders `index.html` from that server and serves `.output/public` as a static site on GitHub Pages. Do NOT use the Nitro `static` preset — it exits nonzero after prerendering due to a known upstream Nitro/Vite bug ("rolldownOptions.input should not be an html file when building for SSR"). Inside Lovable builds `LOVABLE_NITRO_PRESET` pins Cloudflare, so `vite.config.ts`'s `STATIC_EXPORT` branch never affects the Lovable build.
- `public/CNAME` contains `rajkumargamedev.com` so the GitHub Pages deploy uses the custom domain.
