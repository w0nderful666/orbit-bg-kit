#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcFile = join(root, 'src', 'orbit-bg.js');
const distDir = join(root, 'dist');
const iifeFile = join(distDir, 'orbit-bg.iife.js');
const minFile = join(distDir, 'orbit-bg.min.js');

if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });

const source = readFileSync(srcFile, 'utf8');
writeFileSync(iifeFile, source);

function minify(code) {
  let out = '';
  let i = 0;
  let quote = '';
  let lineComment = false;
  let blockComment = false;

  while (i < code.length) {
    const ch = code[i];
    const next = code[i + 1];

    if (lineComment) {
      if (ch === '\n') lineComment = false;
      i += 1;
      continue;
    }
    if (blockComment) {
      if (ch === '*' && next === '/') {
        blockComment = false;
        i += 2;
      } else {
        i += 1;
      }
      continue;
    }
    if (quote) {
      out += ch;
      if (ch === '\\') {
        out += next || '';
        i += 2;
        continue;
      }
      if (ch === quote) quote = '';
      i += 1;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      out += ch;
      i += 1;
      continue;
    }
    if (ch === '/' && next === '/') {
      lineComment = true;
      i += 2;
      continue;
    }
    if (ch === '/' && next === '*') {
      blockComment = true;
      i += 2;
      continue;
    }
    if (/\s/.test(ch)) {
      const prev = out[out.length - 1] || '';
      const following = next || '';
      if (/[A-Za-z0-9_$]/.test(prev) && /[A-Za-z0-9_$]/.test(following)) out += ' ';
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out.trim() + '\n';
}

const minified = minify(source);
writeFileSync(minFile, minified);

const size = (file) => `${(statSync(file).size / 1024).toFixed(1)} KB`;
console.log('Orbit Background Kit build complete');
console.log(`- ${srcFile}`);
console.log(`- ${iifeFile} (${size(iifeFile)})`);
console.log(`- ${minFile} (${size(minFile)})`);
