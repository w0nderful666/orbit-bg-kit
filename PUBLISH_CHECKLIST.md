# PUBLISH_CHECKLIST.md

## Before Publishing

- [ ] Run `npm run build` — generates dist files
- [ ] Run `npm run check` — all checks pass
- [ ] Open `index.html` in browser — configurator works
- [ ] Open `demo.html` in browser — demo works
- [ ] Open each `examples/*.html` — all render correctly
- [ ] Test on mobile viewport (Chrome DevTools)
- [ ] Check `prefers-reduced-motion` (Chrome DevTools → Rendering)
- [ ] Verify no console errors
- [ ] CDN URL uses `YOUR_USERNAME` placeholder
- [ ] README examples match actual behavior

## GitHub Setup

1. Create public repo `orbit-bg-kit`
2. Push code: `git init && git add . && git commit -m "v0.1.0" && git remote add origin ... && git push`
3. Settings → Pages → Deploy from branch → `main` / `/(root)`
4. Settings → About → Add description + topics
5. Create Release v0.1.0 with release notes

## After Publishing

- [ ] GitHub Pages live at `https://YOUR_USERNAME.github.io/orbit-bg-kit/`
- [ ] jsDelivr accessible: `https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js`
- [ ] Test CDN URL in a fresh HTML file
- [ ] Update README with actual username (replace YOUR_USERNAME)
