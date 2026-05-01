# Changelog

## 0.1.1 - 2026-05-01

Patch release focused on the homepage Playground live preview and release examples.

- Fixed Playground live preview updates that could stop after the preview element id was removed.
- Unified the Playground configuration state flow for form controls, real preview updates, code generation, preset state, and share hashes.
- Improved preset, import JSON, randomize, reset, and share hash synchronization with the preview.
- Improved Web Component attribute update stability for live `setAttribute` changes.
- Updated pinned CDN examples to `@v0.1.1` while keeping `@latest` for quick demos.

## 0.1.0 - 2026-05-01

Initial public release of Orbit Background Kit.

- Added native `<orbit-bg>` Web Component with Shadow DOM.
- Added themes: `cream`, `dark`, `cyber`, `paper`, `terminal`, `glass`, `midnight`, `sunset`, `matrix`, `aurora`.
- Added 12 presets for common landing page and documentation use cases.
- Added local container support with `position="absolute"`.
- Added reduced-motion support, visibility pause, guarded custom element registration, and cleanup on disconnect.
- Added homepage Playground, minimal demo, and copyable examples.
- Added build and integrity check scripts.

## Notes

This project is pure frontend, has no backend, and does not collect data.
