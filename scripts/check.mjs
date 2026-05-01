#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const latestCdn = 'https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@latest/dist/orbit-bg.iife.js';
const versionCdn = 'https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@v0.1.0/dist/orbit-bg.iife.js';
let errors = 0;
let warnings = 0;

function pass(message) { console.log(`PASS ${message}`); }
function fail(message) { console.log(`FAIL ${message}`); errors += 1; }
function warn(message) { console.log(`WARN ${message}`); warnings += 1; }
function read(path) { return readFileSync(join(root, path), 'utf8'); }

console.log('Checking Orbit Background Kit...');

[
  'README.md',
  'README_EN.md',
  'package.json',
  'src/orbit-bg.js',
  'dist/orbit-bg.iife.js',
  'dist/orbit-bg.min.js',
  'index.html',
  'demo.html',
  'LICENSE',
  'CHANGELOG.md',
  'RELEASE_NOTES.md',
  'PUBLISH_CHECKLIST.md',
  'DEPLOY_COMMANDS.md',
  'CONTRIBUTING.md',
  'SECURITY.md',
  'QUALITY_REPORT.md'
].forEach((file) => existsSync(join(root, file)) ? pass(`${file} exists`) : fail(`${file} missing`));

const pkg = JSON.parse(read('package.json'));
if (pkg.name === 'orbit-bg-kit') pass('package name is orbit-bg-kit'); else fail('package name must be orbit-bg-kit');
if (pkg.version === '0.1.0') pass('package version is 0.1.0'); else fail('package version must be 0.1.0');
if (pkg.main === 'dist/orbit-bg.iife.js') pass('package main points to dist'); else fail('package main must point to dist/orbit-bg.iife.js');
if (pkg.license === 'MIT') pass('license is MIT'); else fail('license must be MIT');
['dev', 'build', 'check', 'preview', 'examples'].forEach((script) => pkg.scripts?.[script] ? pass(`npm script ${script}`) : fail(`npm script ${script} missing`));

const src = read('src/orbit-bg.js');
if (src.includes('attachShadow({ mode:')) pass('Shadow DOM is used'); else fail('Shadow DOM not found');
if (src.includes('customElements.get') && src.includes('customElements.define')) pass('custom element registration is guarded'); else fail('customElements guard missing');
if (src.includes('disconnectedCallback')) pass('disconnectedCallback is present'); else fail('disconnectedCallback missing');
if (src.includes('requestAnimationFrame')) pass('requestAnimationFrame is used'); else fail('requestAnimationFrame missing');
if (src.includes('prefers-reduced-motion')) pass('prefers-reduced-motion is supported'); else fail('prefers-reduced-motion missing');

const requiredAttrs = ['words', 'theme', 'speed', 'opacity', 'grid', 'glow', 'noise', 'rings', 'beams', 'vignette', 'interactive', 'position', 'z-index', 'rows', 'angle', 'density', 'font', 'intensity', 'rounded', 'preset'];
requiredAttrs.forEach((attr) => src.includes(`'${attr}'`) ? pass(`attribute ${attr}`) : fail(`attribute ${attr} missing`));

['cream', 'dark', 'cyber', 'paper', 'terminal', 'glass', 'midnight', 'sunset', 'matrix', 'aurora'].forEach((theme) => src.includes(`${theme}:`) ? pass(`theme ${theme}`) : fail(`theme ${theme} missing`));
['ai-startup', 'developer-portfolio', 'open-source', 'prompt-market', 'pdf-tool', 'cyber-landing', 'minimal-blog', 'terminal-hacker', 'glass-saas', 'midnight-docs', 'aurora-showcase', 'paper-notes'].forEach((preset) => src.includes(`'${preset}'`) ? pass(`preset ${preset}`) : fail(`preset ${preset} missing`));

const readme = read('README.md');
if (readme.includes(latestCdn)) pass('README latest CDN URL is present'); else fail('README latest CDN URL missing');
if (readme.includes(versionCdn)) pass('README pinned CDN URL is present'); else fail('README pinned CDN URL missing');
if (!readme.includes('YOUR_USERNAME')) pass('README does not contain placeholder CDN username'); else fail('README contains placeholder CDN username');

const examplesDir = join(root, 'examples');
if (existsSync(examplesDir)) {
  const examples = readdirSync(examplesDir).filter((file) => file.endsWith('.html'));
  if (examples.length >= 6) pass(`${examples.length} example pages found`); else fail('not enough example pages');
  ['simple.html', 'local-card.html', 'multi-instance.html', 'pdf-tool.html', 'prompt-market.html'].forEach((file) => examples.includes(file) ? pass(`example ${file}`) : fail(`example ${file} missing`));
  examples.forEach((file) => {
    const html = read(`examples/${file}`);
    if (html.includes('../dist/orbit-bg.iife.js')) pass(`${file} uses local dist path`);
    else warn(`${file} does not use ../dist/orbit-bg.iife.js`);
  });
} else {
  fail('examples directory missing');
}

const dist = read('dist/orbit-bg.iife.js');
if (dist === src) pass('dist/orbit-bg.iife.js is synchronized with src'); else fail('dist/orbit-bg.iife.js differs from src; run npm run build');

if (errors) {
  console.log(`Check failed: ${errors} error(s), ${warnings} warning(s)`);
  process.exit(1);
}
console.log(`Check passed: ${warnings} warning(s)`);
