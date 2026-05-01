# Deploy Commands

Run these from the repository root.

```bash
git status
npm run build
npm run check
git add .
git commit -m "Release v0.1.0"
git push
git tag v0.1.0
git push origin v0.1.0
```

After pushing:

1. Open GitHub repository settings.
2. Enable Pages from `main` and `/ (root)`.
3. Create a GitHub Release for tag `v0.1.0`.
4. Use the fixed jsDelivr URL in production:

```text
https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@v0.1.0/dist/orbit-bg.iife.js
```
