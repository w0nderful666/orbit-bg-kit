# Orbit Background Kit v0.1.1 Release Notes

Orbit Background Kit v0.1.1 is a patch release for the homepage Playground and live Web Component updates.

## Highlights

- Fixes the Playground preview so controls update the real `<orbit-bg>` instance reliably.
- Keeps one shared config flow for controls, preview, code output, presets, import/export JSON, randomize/reset, and share hashes.
- Adds small preview feedback labels for preset, theme, speed, opacity, and update status.
- Improves Web Component attribute update stability for repeated `setAttribute` changes.
- Updates pinned production CDN examples to v0.1.1.

## CDN

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@v0.1.1/dist/orbit-bg.iife.js"></script>
```

## Before Publishing

Run:

```bash
npm run build
npm run check
```

Then create tag `v0.1.1` and publish the GitHub Release. Do not move or overwrite the existing `v0.1.0` tag.
