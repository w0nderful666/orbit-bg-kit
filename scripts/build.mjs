#!/usr/bin/env node

/**
 * build.mjs — Copy src to dist, generate minified version
 * Usage: node scripts/build.mjs
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'src', 'orbit-bg.js');
const dist = join(root, 'dist', 'orbit-bg.iife.js');
const distMin = join(root, 'dist', 'orbit-bg.min.js');

// Ensure dist directory
if (!existsSync(join(root, 'dist'))) {
  mkdirSync(join(root, 'dist'), { recursive: true });
}

// Read source
const code = readFileSync(src, 'utf8');
console.log(`📦 Source: ${src} (${(code.length / 1024).toFixed(1)}KB)`);

// Write dist (full)
writeFileSync(dist, code);
console.log(`✅ Written: ${dist}`);

// Simple minification: remove comments, collapse whitespace, keep strings
function simpleMinify(src) {
  let out = '';
  let i = 0;
  let inStr = false;
  let strChar = '';
  let inLineComment = false;
  let inBlockComment = false;

  while (i < src.length) {
    const ch = src[i];
    const next = src[i + 1];

    if (inLineComment) {
      if (ch === '\n') { inLineComment = false; out += '\n'; }
      i++; continue;
    }
    if (inBlockComment) {
      if (ch === '*' && next === '/') { inBlockComment = false; i += 2; }
      else i++;
      continue;
    }
    if (inStr) {
      out += ch;
      if (ch === '\\') { out += src[i + 1] || ''; i += 2; continue; }
      if (ch === strChar) inStr = false;
      i++; continue;
    }

    // Start of string
    if (ch === '"' || ch === "'" || ch === '`') {
      inStr = true; strChar = ch; out += ch; i++; continue;
    }
    // Line comment
    if (ch === '/' && next === '/') { inLineComment = true; i += 2; continue; }
    // Block comment
    if (ch === '/' && next === '*') { inBlockComment = true; i += 2; continue; }
    // Collapse whitespace
    if (ch === ' ' || ch === '\t' || ch === '\r') {
      // Keep single space if next char is not a delimiter
      if (out.length && !/[{}\[\]();:,=+\-*/<>!&|?~^%]/.test(out[out.length - 1]) &&
          i + 1 < src.length && !/[{}\[\]();:,=+\-*/<>!&|?~^% \t\r\n]/.test(src[i + 1])) {
        out += ' ';
      }
      i++; continue;
    }
    if (ch === '\n') {
      // Keep newline only if it helps ASI
      if (out.length && /[})\]]/.test(out[out.length - 1])) {
        // ok
      }
      i++; continue;
    }

    out += ch;
    i++;
  }
  return out;
}

const minified = simpleMinify(code);
writeFileSync(distMin, minified);
console.log(`✅ Written: ${distMin} (${(minified.length / 1024).toFixed(1)}KB)`);
console.log(`📊 Compression: ${((1 - minified.length / code.length) * 100).toFixed(1)}% smaller`);
console.log('🎉 Build complete!');
