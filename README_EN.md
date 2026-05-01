# Orbit Background Kit

A pure frontend Web Component for animated webpage backgrounds. Add one CDN script and one `<orbit-bg>` tag to give any static page a polished, configurable background.

- Playground: https://w0nderful666.github.io/orbit-bg-kit/
- Minimal demo: https://w0nderful666.github.io/orbit-bg-kit/demo.html
- Repository: https://github.com/w0nderful666/orbit-bg-kit

Orbit Background Kit is framework-free, backend-free, tracking-free, GitHub Pages friendly, and jsDelivr friendly.

## Quick Start

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>
<orbit-bg preset="ai-startup"></orbit-bg>
```

Place your content above the background:

```html
<main style="position:relative;z-index:1;">
  Your content here
</main>
```

## CDN

Latest:

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>
```

Pinned version:

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@v0.1.0/dist/orbit-bg.iife.js"></script>
```

## Full Example

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>

<orbit-bg
  words="BUILD,DEPLOY,SHIP"
  theme="dark"
  speed="normal"
  opacity="0.06"
  grid="true"
  glow="true"
  noise="true"
  beams="true"
  interactive="true"
  position="fixed"
  z-index="0"
  rows="3"
  angle="-8"
  density="normal"
  font="sans"
  intensity="normal"
></orbit-bg>
```

## Preset Shorthand

```html
<orbit-bg preset="open-source"></orbit-bg>
```

## Local Container Background

Use `position="absolute"` inside a positioned container:

```html
<div style="position:relative;min-height:400px;overflow:hidden;border-radius:16px;">
  <orbit-bg position="absolute" z-index="0" preset="glass-saas" rounded></orbit-bg>
  <div style="position:relative;z-index:1;padding:40px;">
    Card content here
  </div>
</div>
```

## Attributes

| Attribute | Default | Notes |
| --- | --- | --- |
| `words` | `AI,AGENT,ORBIT,CODEX,OPEN SOURCE` | Comma-separated background words |
| `theme` | `dark` | `cream`, `dark`, `cyber`, `paper`, `terminal`, `glass`, `midnight`, `sunset`, `matrix`, `aurora` |
| `preset` | empty | One-attribute style shortcut |
| `speed` | `normal` | `slow`, `normal`, `fast` |
| `opacity` | `0.06` | Clamped for safety |
| `grid`, `glow`, `noise` | `true` | Toggle base effects |
| `rings`, `beams`, `vignette`, `interactive`, `rounded` | `false` | Toggle optional effects |
| `position` | `fixed` | `fixed` for fullscreen, `absolute` for local containers |
| `z-index` | `0` | Keep content at `z-index:1` or higher |
| `rows` | `3` | Text rows, clamped |
| `angle` | `-8` | Text angle, clamped |
| `density` | `normal` | `low`, `normal`, `high` |
| `font` | `sans` | `sans`, `mono`, `serif` |
| `intensity` | `normal` | `soft`, `normal`, `strong` |
| `seed` | auto | Stable randomized layout |

Boolean attributes support `true`, `false`, `"true"`, `"false"`, and empty attributes.

## Presets

`ai-startup`, `developer-portfolio`, `open-source`, `prompt-market`, `pdf-tool`, `cyber-landing`, `minimal-blog`, `terminal-hacker`, `glass-saas`, `midnight-docs`, `aurora-showcase`, `paper-notes`.

## Examples

- `examples/simple.html`
- `examples/local-card.html`
- `examples/multi-instance.html`
- `examples/pdf-tool.html`
- `examples/prompt-market.html`

All examples use `../dist/orbit-bg.iife.js` and do not depend on external network assets.

## Development

```bash
npm run dev
npm run build
npm run check
npm run preview
npm run examples
```

## GitHub Pages

Enable Pages from `Settings -> Pages -> Deploy from a branch`, then select `main` and `/ (root)`.

## jsDelivr Cache Notes

Use `@v0.1.0` for production. `@latest` is convenient for demos, but CDN and browser caches can take time to refresh. For testing, add a temporary query string such as `?v=20260501`.

## Privacy

Orbit Background Kit is pure frontend code. It has no backend, no analytics, no tracking, no uploads, no cookies, and can be self-hosted.

## License

MIT
