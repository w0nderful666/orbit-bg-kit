# Deploy Commands

## Local Development

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/orbit-bg-kit.git
cd orbit-bg-kit

# Install (optional, only for serve)
npm install

# Dev server
npm run dev

# Build
npm run build

# Check
npm run check
```

## GitHub Pages

```bash
# Initialize and push
git init
git add .
git commit -m "feat: orbit-bg-kit v0.1.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/orbit-bg-kit.git
git push -u origin main
```

Then in GitHub:
1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **/(root)**
4. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/orbit-bg-kit/`

## jsDelivr

Once the repo is public, jsDelivr automatically serves files:

```
https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js
https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@v0.1.0/dist/orbit-bg.iife.js
https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@main/dist/orbit-bg.iife.js
```

## NPM Publish (optional)

```bash
npm login
npm publish
```

Then users can also use: `https://cdn.jsdelivr.net/npm/orbit-bg-kit@latest/dist/orbit-bg.iife.js`
