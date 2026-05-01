# Orbit Background Kit

> 🌌 One `<script>` + one `<orbit-bg>` tag — premium animated background for any webpage.

Zero dependencies. Pure frontend. No frameworks, no backend, no build step required. Copy two lines and go.

**[Online Configurator](https://YOUR_USERNAME.github.io/orbit-bg-kit/)** · **[Live Demo](https://YOUR_USERNAME.github.io/orbit-bg-kit/demo.html)** · **[Examples](https://YOUR_USERNAME.github.io/orbit-bg-kit/examples/)**

---

## Quick Start

Add these two lines to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>
<orbit-bg></orbit-bg>
```

That's it. You now have a full-screen animated background.

---

## Full Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>

  <!-- 1. Load the component -->
  <script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>

  <!-- 2. Add the background -->
  <orbit-bg
    words="BUILD,DEPLOY,SHIP"
    theme="dark"
    speed="normal"
    opacity="0.06"
    grid="true"
    glow="true"
    noise="true"
  ></orbit-bg>

  <!-- 3. Your content — needs position:relative;z-index:1 to appear above -->
  <h1 style="position:relative;z-index:1;color:white;text-align:center;padding:40vh 20px;">
    Your content here
  </h1>

</body>
</html>
```

---

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `preset` | string | — | Preset name (overrides attribute defaults, see presets table below) |
| `words` | string | `AI,AGENT,ORBIT,CODEX,OPEN SOURCE` | Comma-separated keywords for the scrolling text background |
| `theme` | string | `dark` | Color theme: cream, dark, cyber, paper, terminal, glass, midnight, sunset, matrix, aurora |
| `speed` | string | `normal` | Animation speed: slow, normal, fast |
| `opacity` | number | `0.06` | Overall opacity (0.01–0.20 recommended) |
| `position` | string | `fixed` | CSS position: fixed (fullscreen) or absolute (container) |
| `z-index` | number | `-1` | CSS z-index |
| `rows` | number | `3` | Number of text rows (1–6) |
| `angle` | number | `-8` | Text rotation angle (-30 to 30) |
| `density` | string | `normal` | Text density: low, normal, high |
| `font` | string | `sans` | Font style: mono, sans, serif |
| `intensity` | string | `normal` | Overall effect strength: soft, normal, strong |
| `interactive` | boolean | `false` | Mouse-following glow effect |
| `rounded` | boolean | `false` | Rounded corners (for non-fullscreen use) |
| `seed` | string | — | Stable random seed for consistent layout |
| `grid` | boolean | `true` | Show grid overlay |
| `glow` | boolean | `true` | Show glow spots |
| `noise` | boolean | `true` | Show noise texture |
| `rings` | boolean | `false` | Show orbital ring lines |
| `beams` | boolean | `false` | Show soft light beams |
| `vignette` | boolean | `false` | Show edge vignette / focus effect |

All attributes support live updates — change them via JavaScript and the background updates instantly.

---

## Themes

| Theme | Vibe |
|-------|------|
| `cream` | Warm off-white — elegant, editorial |
| `dark` | Deep dark — subtle blue gradients |
| `cyber` | Cyberpunk — neon green on near-black |
| `paper` | Paper — low saturation, matte texture |
| `terminal` | Terminal — black with green monospace |
| `glass` | Glassmorphism — translucent, modern |
| `midnight` | Midnight blue — developer aesthetic |
| `sunset` | Warm sunset — personal, creative |
| `matrix` | Matrix green — restrained, not cheesy |
| `aurora` | Aurora — soft gradient, ethereal |

---

## Effects

- **Scrolling Text** — Large, low-opacity keywords drift diagonally at different speeds
- **Gradient Blobs** — Soft radial gradients slowly orbit for ambient depth
- **Grid** — Subtle line grid overlay
- **Glow** — Soft light spots that float independently
- **Noise** — SVG-based noise texture (no image files needed)
- **Rings** — Orbital circle lines
- **Beams** — Soft vertical light beams
- **Vignette** — Edge darkening for focus

All effects are individually toggleable.

---

## Presets

Use the `preset` attribute for one-click styles:

```html
<orbit-bg preset="ai-startup"></orbit-bg>
```

| Preset | Theme | Style |
|--------|-------|-------|
| `ai-startup` | glass | AI tools, interactive + beams |
| `developer-portfolio` | paper | Portfolio, serif + soft |
| `open-source` | dark | Open source, mono + grid |
| `prompt-market` | aurora | Prompt market, rings |
| `pdf-tool` | midnight | Tools, beams + vignette |
| `cyber-landing` | cyber | Cyberpunk, fast + high density |
| `minimal-blog` | cream | Blog, serif + soft |
| `terminal-hacker` | terminal | Terminal, mono + strong |
| `glass-saas` | glass | SaaS, interactive + beams |
| `midnight-docs` | midnight | Docs, mono + vignette |
| `aurora-showcase` | aurora | Showcase, rings + beams |
| `paper-notes` | paper | Notes, serif + vignette |

---

## Usage Patterns

### CDN (recommended)

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>
<orbit-bg theme="dark"></orbit-bg>
```

### Pinned version

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@v0.1.0/dist/orbit-bg.iife.js"></script>
```

### Local file

```html
<script src="dist/orbit-bg.iife.js"></script>
<orbit-bg></orbit-bg>
```

### Card / container background

```html
<div style="position:relative;height:400px;overflow:hidden;border-radius:16px;">
  <orbit-bg position="absolute" theme="aurora" rounded="true"></orbit-bg>
  <div style="position:relative;z-index:1;padding:40px;">
    <h2>Card content here</h2>
  </div>
</div>
```

---

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch**, select `main` / `/(root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/orbit-bg-kit/`

---

## jsDelivr CDN

Once your repo is public, jsDelivr serves it automatically:

```
https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js
```

Tags:
- `@latest` — latest release
- `@v0.1.0` — pinned version
- `@main` — latest main branch

---

## Local Development

```bash
git clone https://github.com/YOUR_USERNAME/orbit-bg-kit.git
cd orbit-bg-kit

# Any static server
npx serve .
# or
python3 -m http.server 3000
```

### npm scripts

```bash
npm run dev      # Start dev server
npm run build    # Copy src → dist
npm run preview  # Preview demo
npm run check    # Syntax check
```

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 67+ |
| Firefox | 63+ |
| Safari | 13.1+ |
| Edge | 79+ |

Requires Web Components / Custom Elements v1. No polyfills included.

---

## Performance

- Animations use CSS `transform` and `opacity` (GPU-accelerated)
- Auto-pauses when tab is hidden
- Respects `prefers-reduced-motion`
- Interactive mode uses `requestAnimationFrame` + passive event listeners
- No Canvas, minimal DOM nodes
- No external resources loaded

---

## FAQ

### Background not showing?
1. Make sure `<script>` is **before** `<orbit-bg>`
2. Make sure `<orbit-bg>` is inside `<body>`
3. Check the Network tab (F12) — the script should return 200
4. If using `position="absolute"`, the parent needs `position: relative` and a defined height

### How do I control z-index?
- Default is `z-index: -1` — background sits behind everything
- Your content needs `position: relative; z-index: 1` to appear above it
- Set `z-index: 0` to place it above page background but below content

### CDN is caching an old version
- Use `@v0.1.0` instead of `@latest` to pin a version
- Add a cache-buster: `orbit-bg.iife.js?v=abc123`
- jsDelivr cache refreshes roughly every 7 days

### Can I use it with React / Vue?
Yes. `<orbit-bg>` is a standard Web Component — works in any framework:
```jsx
// React
<orbit-bg theme="dark" words="HELLO,WORLD" />

// Vue
<orbit-bg theme="dark" words="HELLO,WORLD" />
```

### Mobile performance?
Uses CSS transform + opacity (GPU-accelerated). Auto-pauses when tab is hidden. Respects `prefers-reduced-motion`. Negligible impact on most devices.

---

## Privacy

- ✅ **Pure frontend** — no server, no backend, no API calls
- ✅ **No tracking** — zero analytics, zero fingerprinting
- ✅ **No data collection** — nothing leaves the browser
- ✅ **No external resources** — no fonts, images, or CDN dependencies
- ✅ **No cookies**

---

## License

[MIT](LICENSE) — use it anywhere, no attribution required (but appreciated 🙏).

---

## Contributing

PRs welcome. Keep it zero-dependency, keep it small, keep it elegant.

See [CONTRIBUTING.md](CONTRIBUTING.md).
