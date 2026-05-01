# Contributing to Orbit Background Kit

Thanks for your interest! Here's how to contribute.

## Getting Started

```bash
git clone https://github.com/w0nderful666/orbit-bg-kit.git
cd orbit-bg-kit
npx serve .
```

Open `http://localhost:3000` to see the configurator.

## What to Contribute

### New Themes

Add a theme object to the `THEMES` map in `src/orbit-bg.js`:

```js
mytheme: {
  bg: '#...',           // background color
  text: '#...',         // text color
  gradient1: 'rgba(...)',
  gradient2: 'rgba(...)',
  gradient3: 'rgba(...)',
  gridColor: 'rgba(...)',
  glowColor: 'rgba(...)',
  noiseOpacity: 0.03,
  ringColor: 'rgba(...)',
  beamColor: 'rgba(...)',
  vignetteColor: 'rgba(...)',
},
```

Then add it to `VALID_THEMES` and the configurator's theme list.

### New Presets

Add a preset object to the `PRESETS` array in `index.html`.

### Bug Fixes

1. Open an issue describing the bug
2. Fork and create a branch: `git checkout -b fix/my-fix`
3. Fix it, test in multiple browsers
4. Submit a PR

## Rules

- **Zero dependencies** — no npm packages, no external CDNs
- **Keep it small** — the dist file should stay under 20KB
- **Test manually** — open the HTML files directly in a browser
- **No frameworks** — vanilla JS only
- **Respect privacy** — no tracking, no analytics, no external calls

## PR Process

1. Fork the repo
2. Create a feature branch
3. Make your changes in `src/orbit-bg.js`
4. Run `npm run check` to verify syntax
5. Update `dist/orbit-bg.iife.js` (currently just a copy)
6. Test `index.html` and `demo.html`
7. Submit PR with a clear description
