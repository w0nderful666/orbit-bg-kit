# Release Notes

## v0.1.0 (2026-05-01)

🎉 **Initial Public Release**

### Component
- Web Component `<orbit-bg>` with Shadow DOM isolation
- 10 themes: cream, dark, cyber, paper, terminal, glass, midnight, sunset, matrix, aurora
- 12 presets: ai-startup, developer-portfolio, open-source, prompt-market, pdf-tool, cyber-landing, minimal-blog, terminal-hacker, glass-saas, midnight-docs, aurora-showcase, paper-notes
- 21 configurable attributes
- 8 effect layers: scrolling text, gradient blobs, grid, glow, noise, rings, beams, vignette
- Mouse interactivity mode
- Seeded PRNG for stable random layouts
- Visibility API auto-pause
- prefers-reduced-motion support

### Playground
- Online configurator with real-time preview
- 12 one-click presets
- Full attribute documentation
- 8-item FAQ

### Examples
- 13 HTML examples
- Card background, multi-instance, various themes

### Usage
```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@v0.1.0/dist/orbit-bg.iife.js"></script>
<orbit-bg preset="ai-startup"></orbit-bg>
```

### Notes
- Zero dependencies
- Pure frontend, no backend
- No tracking, no analytics
- MIT License
- ~24KB unminified, ~21KB minified
