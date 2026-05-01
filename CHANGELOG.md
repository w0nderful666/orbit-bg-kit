# Changelog

All notable changes to Orbit Background Kit will be documented in this file.

## [0.1.0] - 2026-05-01

### 🎉 Initial Release

#### Component (`<orbit-bg>`)
- Web Component with Shadow DOM isolation
- 10 themes: cream, dark, cyber, paper, terminal, glass, midnight, sunset, matrix, aurora
- 12 presets: ai-startup, developer-portfolio, open-source, prompt-market, pdf-tool, cyber-landing, minimal-blog, terminal-hacker, glass-saas, midnight-docs, aurora-showcase, paper-notes
- 21 observed attributes (preset, words, theme, speed, opacity, grid, glow, noise, z-index, position, rows, angle, density, font, interactive, rounded, intensity, seed, rings, beams, vignette)
- 8 effect layers: scrolling text, gradient blobs, grid, glow, noise, rings, beams, vignette
- Mouse interactivity mode (`interactive`)
- Seeded PRNG for stable random layouts (`seed`)
- Visibility API auto-pause (pauses when tab is hidden)
- `prefers-reduced-motion` support
- Multi-instance support (multiple `<orbit-bg>` on one page)
- `position="absolute"` for container backgrounds
- `disconnectedCallback` full cleanup

#### Playground (`index.html`)
- Online configurator with real-time preview
- 12 one-click presets
- Code generation (HTML, preset shorthand)
- Full attribute documentation table
- 8-item FAQ

#### Examples (`examples/`)
- 13 HTML examples covering different use cases
- Card background example (position="absolute")
- Multi-instance example

#### Documentation
- README.md (Chinese)
- README_EN.md (English)
- CHANGELOG.md
- CONTRIBUTING.md
- SECURITY.md
- PROJECT_BRIEF.md
- QUALITY_REPORT.md
- RELEASE_NOTES.md
- PUBLISH_CHECKLIST.md
- DEPLOY_COMMANDS.md
- GITHUB_PROFILE.md

#### Build
- `npm run build` — generates dist/orbit-bg.iife.js + dist/orbit-bg.min.js
- `npm run check` — verifies project integrity
- No external build tools required
