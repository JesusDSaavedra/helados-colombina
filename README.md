# Helados Colombina — Landing page

Landing page for Helados Colombina built with Astro, Tailwind CSS v4, daisyUI and astro-icon.

## Stack

- **Astro** — static site, View Transitions (`<ClientRouter />`).
- **Tailwind CSS v4 + daisyUI 5** — utility styles and components, with a custom `colombina` theme (`src/styles/global.css`).
- **astro-icon + Iconify** — `lucide` for UI icons, `simple-icons` for social networks.
- **Fonts** — Ocean Sans (brand, licensed) with Montserrat as web fallback; Pacifico for script accents.

## Brand tokens

| Token | Value | Use |
| --- | --- | --- |
| `brand-blue` | `#243587` | Primary, backgrounds, headings |
| `brand-red` | `#E22411` | Accents, buttons, CTAs |
| white | `#FFFFFF` | Backgrounds, text, breathing space |

To use the real Ocean Sans font, add its licensed `@font-face` files to `public/fonts/` and declare them in `global.css`; the font stack already lists it first.

## Structure

```
src/
  data/content.ts        # All copy and image slots (edit here)
  layouts/Layout.astro   # <head>, view transitions, scroll reveal
  components/
    sections/            # Header, Hero, Flavors, Moments, Footer
    ui/                  # Logo, ImageFrame, Wave, Swoosh, Sparkle
  styles/global.css      # Tailwind, daisyUI theme, animations
public/images/           # Generated / official images go here
```

## Images

Images start as branded placeholders. See [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md) (Spanish step-by-step guide, English prompts). Raw downloads go in `imagenes-entrantes/` (git-ignored) and are processed into `public/images/`.

## Commands

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build
pnpm preview
```

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which sets `SITE_URL` and `BASE_PATH` automatically from the repo owner and name.
