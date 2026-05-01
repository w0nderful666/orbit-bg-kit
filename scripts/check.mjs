#!/usr/bin/env node

/**
 * check.mjs — Verify project integrity
 * Usage: node scripts/check.mjs
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

let errors = 0;
let warnings = 0;

function ok(msg) { console.log(`  ✅ ${msg}`); }
function fail(msg) { console.log(`  ❌ ${msg}`); errors++; }
function warn(msg) { console.log(`  ⚠️  ${msg}`); warnings++; }

// ---- Required files ----
console.log('\n📁 Required files:');
const required = [
  'index.html', 'demo.html', 'README.md', 'README_EN.md',
  'LICENSE', 'package.json', 'CHANGELOG.md', 'CONTRIBUTING.md', 'SECURITY.md',
  'src/orbit-bg.js', 'dist/orbit-bg.iife.js',
];
required.forEach(f => {
  existsSync(join(root, f)) ? ok(f) : fail(`Missing: ${f}`);
});

// ---- Examples ----
console.log('\n📄 Examples:');
const exDir = join(root, 'examples');
if (existsSync(exDir)) {
  const examples = readdirSync(exDir).filter(f => f.endsWith('.html'));
  examples.forEach(f => ok(f));
  if (examples.length < 6) warn(`Only ${examples.length} examples (recommend 6+)`);
} else {
  fail('examples/ directory missing');
}

// ---- Component integrity ----
console.log('\n🔧 Component:');
const src = readFileSync(join(root, 'src/orbit-bg.js'), 'utf8');

if (src.includes('customElements.define')) ok('customElements.define found');
else fail('customElements.define missing');

if (src.includes("customElements.get('orbit-bg')")) ok('Duplicate registration guard');
else fail('Missing duplicate registration guard');

if (src.includes('observedAttributes')) ok('observedAttributes defined');
else fail('observedAttributes missing');

if (src.includes('disconnectedCallback')) ok('disconnectedCallback defined');
else fail('disconnectedCallback missing');

if (src.includes('Shadow DOM') || src.includes("attachShadow({ mode: 'open' })") || src.includes("attachShadow")) ok('Shadow DOM used');
else warn('Shadow DOM not found');

if (src.includes('prefers-reduced-motion')) ok('prefers-reduced-motion support');
else fail('prefers-reduced-motion missing');

// ---- Themes ----
console.log('\n🎨 Themes:');
const themes = ['cream', 'dark', 'cyber', 'paper', 'terminal', 'glass', 'midnight', 'sunset', 'matrix', 'aurora'];
themes.forEach(t => {
  src.includes(`${t}:`) ? ok(t) : fail(`Theme missing: ${t}`);
});

// ---- Presets ----
console.log('\n🎯 Presets:');
const presets = ['ai-startup', 'developer-portfolio', 'open-source', 'prompt-market', 'pdf-tool', 'cyber-landing', 'minimal-blog', 'terminal-hacker', 'glass-saas', 'midnight-docs', 'aurora-showcase', 'paper-notes'];
presets.forEach(p => {
  src.includes(`'${p}'`) ? ok(p) : fail(`Preset missing: ${p}`);
});

// ---- CDN URL consistency ----
console.log('\n🔗 CDN URLs:');
const readme = readFileSync(join(root, 'README.md'), 'utf8');
if (readme.includes('cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit')) ok('README uses YOUR_USERNAME placeholder');
else warn('README CDN URL format unexpected');

// ---- Attributes ----
console.log('\n📋 Attributes:');
const attrs = ['words', 'theme', 'speed', 'opacity', 'grid', 'glow', 'noise', 'z-index', 'position', 'rows', 'angle', 'density', 'font', 'interactive', 'rounded', 'intensity', 'seed', 'rings', 'beams', 'vignette', 'preset'];
const observedMatch = src.match(/observedAttributes\(\)\s*\{[\s\S]*?return \[([\s\S]*?)\]/);
if (observedMatch) {
  const observed = observedMatch[1].match(/'[^']+'/g).map(a => a.replace(/'/g, ''));
  attrs.forEach(a => {
    observed.includes(a) ? ok(a) : fail(`Attribute not observed: ${a}`);
  });
  if (observed.length > attrs.length) warn(`Extra observed attributes: ${observed.filter(a => !attrs.includes(a)).join(', ')}`);
} else {
  fail('Could not parse observedAttributes');
}

// ---- Summary ----
console.log(`\n${'='.repeat(40)}`);
if (errors === 0) {
  console.log(`🎉 All checks passed! (${warnings} warnings)`);
} else {
  console.log(`💥 ${errors} error(s), ${warnings} warning(s)`);
  process.exit(1);
}
