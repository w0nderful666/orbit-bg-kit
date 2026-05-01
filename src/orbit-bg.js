/**
 * Orbit Background Kit v0.1.0
 * 高级动态背景 Web Component
 *
 * Usage:
 *   <script src="…/orbit-bg.iife.js"></script>
 *   <orbit-bg words="AI,AGENT,ORBIT" theme="dark"></orbit-bg>
 *
 * @license MIT
 */

(function () {
  'use strict';

  /* ============================================================
   * Seeded PRNG (mulberry32)
   * ============================================================ */
  function mulberry32(seed) {
    let s = seed | 0;
    return function () {
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function hashString(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  /* ============================================================
   * Theme definitions (10 themes)
   * ============================================================ */
  const THEMES = {
    cream: {
      bg: '#f5f0e8', text: '#2a2520',
      gradient1: 'rgba(210,190,160,0.35)', gradient2: 'rgba(180,160,130,0.25)', gradient3: 'rgba(230,215,190,0.30)',
      gridColor: 'rgba(60,50,40,0.06)', glowColor: 'rgba(200,180,140,0.12)', noiseOpacity: 0.025,
      ringColor: 'rgba(60,50,40,0.04)', beamColor: 'rgba(200,180,140,0.06)', vignetteColor: 'rgba(40,35,25,0.3)',
    },
    dark: {
      bg: '#0a0a0f', text: '#ffffff',
      gradient1: 'rgba(60,80,200,0.12)', gradient2: 'rgba(100,40,180,0.10)', gradient3: 'rgba(30,60,150,0.08)',
      gridColor: 'rgba(255,255,255,0.04)', glowColor: 'rgba(80,120,255,0.06)', noiseOpacity: 0.03,
      ringColor: 'rgba(255,255,255,0.03)', beamColor: 'rgba(80,120,255,0.05)', vignetteColor: 'rgba(0,0,0,0.5)',
    },
    cyber: {
      bg: '#050510', text: '#00ffcc',
      gradient1: 'rgba(0,255,200,0.08)', gradient2: 'rgba(255,0,120,0.06)', gradient3: 'rgba(0,180,255,0.07)',
      gridColor: 'rgba(0,255,200,0.05)', glowColor: 'rgba(0,255,200,0.06)', noiseOpacity: 0.035,
      ringColor: 'rgba(0,255,200,0.04)', beamColor: 'rgba(0,255,200,0.04)', vignetteColor: 'rgba(0,0,10,0.5)',
    },
    paper: {
      bg: '#eae6df', text: '#3a3632',
      gradient1: 'rgba(160,150,135,0.20)', gradient2: 'rgba(140,130,115,0.15)', gradient3: 'rgba(180,170,155,0.18)',
      gridColor: 'rgba(80,70,60,0.05)', glowColor: 'rgba(160,150,130,0.08)', noiseOpacity: 0.04,
      ringColor: 'rgba(80,70,60,0.04)', beamColor: 'rgba(160,150,130,0.05)', vignetteColor: 'rgba(40,35,25,0.25)',
    },
    terminal: {
      bg: '#0c0c0c', text: '#00ff41',
      gradient1: 'rgba(0,255,65,0.06)', gradient2: 'rgba(0,180,40,0.04)', gradient3: 'rgba(0,255,65,0.05)',
      gridColor: 'rgba(0,255,65,0.04)', glowColor: 'rgba(0,255,65,0.05)', noiseOpacity: 0.03,
      ringColor: 'rgba(0,255,65,0.03)', beamColor: 'rgba(0,255,65,0.04)', vignetteColor: 'rgba(0,0,0,0.5)',
    },
    glass: {
      bg: '#f0f2f5', text: '#1a1a2e',
      gradient1: 'rgba(100,140,255,0.10)', gradient2: 'rgba(160,100,255,0.08)', gradient3: 'rgba(80,180,255,0.09)',
      gridColor: 'rgba(30,40,80,0.04)', glowColor: 'rgba(100,140,255,0.08)', noiseOpacity: 0.015,
      ringColor: 'rgba(30,40,80,0.03)', beamColor: 'rgba(100,140,255,0.06)', vignetteColor: 'rgba(0,0,20,0.15)',
    },
    midnight: {
      bg: '#06091a', text: '#c8d6e5',
      gradient1: 'rgba(40,60,160,0.14)', gradient2: 'rgba(20,40,120,0.10)', gradient3: 'rgba(60,40,140,0.08)',
      gridColor: 'rgba(100,130,200,0.04)', glowColor: 'rgba(60,90,200,0.06)', noiseOpacity: 0.025,
      ringColor: 'rgba(100,130,200,0.03)', beamColor: 'rgba(60,90,200,0.04)', vignetteColor: 'rgba(0,0,10,0.55)',
    },
    sunset: {
      bg: '#1a0a10', text: '#ffecd2',
      gradient1: 'rgba(255,120,60,0.10)', gradient2: 'rgba(200,60,100,0.08)', gradient3: 'rgba(255,180,80,0.07)',
      gridColor: 'rgba(255,200,160,0.03)', glowColor: 'rgba(255,140,80,0.06)', noiseOpacity: 0.025,
      ringColor: 'rgba(255,200,160,0.03)', beamColor: 'rgba(255,140,80,0.04)', vignetteColor: 'rgba(10,0,5,0.5)',
    },
    matrix: {
      bg: '#020a02', text: '#00cc44',
      gradient1: 'rgba(0,200,60,0.06)', gradient2: 'rgba(0,160,40,0.04)', gradient3: 'rgba(0,220,70,0.05)',
      gridColor: 'rgba(0,200,60,0.03)', glowColor: 'rgba(0,200,60,0.04)', noiseOpacity: 0.03,
      ringColor: 'rgba(0,200,60,0.03)', beamColor: 'rgba(0,200,60,0.03)', vignetteColor: 'rgba(0,0,0,0.55)',
    },
    aurora: {
      bg: '#080818', text: '#d4e0ff',
      gradient1: 'rgba(80,200,160,0.08)', gradient2: 'rgba(120,100,220,0.07)', gradient3: 'rgba(60,180,220,0.06)',
      gridColor: 'rgba(120,160,220,0.03)', glowColor: 'rgba(100,200,180,0.05)', noiseOpacity: 0.02,
      ringColor: 'rgba(120,160,220,0.03)', beamColor: 'rgba(100,200,180,0.04)', vignetteColor: 'rgba(0,0,10,0.45)',
    },
  };

  /* ============================================================
   * Preset definitions
   * ============================================================ */
  const PRESETS = {
    'ai-startup':       { theme:'glass',    words:'AI,INTELLIGENCE,LEARN,AUTOMATE', speed:'normal', opacity:'0.06', rows:3, angle:-8,  density:'normal', font:'sans',  intensity:'normal', grid:true,  glow:true,  noise:true,  rings:false, beams:true,  vignette:false, interactive:true  },
    'developer-portfolio':{ theme:'paper',   words:'CODE,DESIGN,SHIP,ITERATE',       speed:'slow',   opacity:'0.04', rows:2, angle:-5,  density:'low',    font:'serif', intensity:'soft',   grid:false, glow:true,  noise:true,  rings:false, beams:false, vignette:true,  interactive:false },
    'open-source':      { theme:'dark',     words:'OPEN,SOURCE,BUILD,SHARE,FORK',    speed:'normal', opacity:'0.06', rows:3, angle:-8,  density:'normal', font:'mono',  intensity:'normal', grid:true,  glow:true,  noise:true,  rings:false, beams:false, vignette:false, interactive:false },
    'prompt-market':    { theme:'aurora',   words:'PROMPT,CREATE,IMAGINE,GENERATE',  speed:'normal', opacity:'0.07', rows:4, angle:-10, density:'normal', font:'sans',  intensity:'normal', grid:true,  glow:true,  noise:true,  rings:true,  beams:false, vignette:false, interactive:false },
    'pdf-tool':         { theme:'midnight', words:'PDF,CONVERT,MERGE,EDIT,EXTRACT',  speed:'slow',   opacity:'0.05', rows:3, angle:-6,  density:'normal', font:'sans',  intensity:'soft',   grid:true,  glow:true,  noise:true,  rings:false, beams:true,  vignette:true,  interactive:false },
    'cyber-landing':    { theme:'cyber',    words:'HACK,BUILD,DEPLOY,SCALE',         speed:'fast',   opacity:'0.08', rows:4, angle:-12, density:'high',   font:'mono',  intensity:'strong', grid:true,  glow:true,  noise:true,  rings:true,  beams:false, vignette:false, interactive:false },
    'minimal-blog':     { theme:'cream',    words:'THINK,WRITE,PUBLISH',             speed:'slow',   opacity:'0.03', rows:2, angle:-4,  density:'low',    font:'serif', intensity:'soft',   grid:false, glow:false, noise:true,  rings:false, beams:false, vignette:true,  interactive:false },
    'terminal-hacker':  { theme:'terminal', words:'ROOT,SUDO,BASH,EXECUTE,COMPILE',  speed:'normal', opacity:'0.07', rows:3, angle:-8,  density:'high',   font:'mono',  intensity:'strong', grid:true,  glow:true,  noise:true,  rings:false, beams:false, vignette:false, interactive:false },
    'glass-saas':       { theme:'glass',    words:'SAAS,PLATFORM,SCALE,GROW',        speed:'normal', opacity:'0.05', rows:3, angle:-6,  density:'normal', font:'sans',  intensity:'normal', grid:true,  glow:true,  noise:true,  rings:false, beams:true,  vignette:false, interactive:true  },
    'midnight-docs':    { theme:'midnight', words:'DOCS,GUIDE,REFERENCE,API',        speed:'slow',   opacity:'0.05', rows:2, angle:-5,  density:'normal', font:'mono',  intensity:'soft',   grid:true,  glow:true,  noise:true,  rings:false, beams:false, vignette:true,  interactive:false },
    'aurora-showcase':  { theme:'aurora',   words:'SHOW,CREATE,INSPIRE,DESIGN',      speed:'normal', opacity:'0.07', rows:3, angle:-8,  density:'normal', font:'sans',  intensity:'normal', grid:false, glow:true,  noise:true,  rings:true,  beams:true,  vignette:false, interactive:false },
    'paper-notes':      { theme:'paper',    words:'NOTE,THINK,WRITE,SKETCH',         speed:'slow',   opacity:'0.04', rows:2, angle:-4,  density:'low',    font:'serif', intensity:'soft',   grid:false, glow:false, noise:true,  rings:false, beams:false, vignette:true,  interactive:false },
  };

  const VALID_PRESETS = Object.keys(PRESETS);

  /* ============================================================
   * Maps & constants
   * ============================================================ */
  const SPEED_MAP = { slow: 0.3, normal: 1, fast: 2.5 };
  const DENSITY_MAP = { low: 0.5, normal: 1, high: 2 };
  const INTENSITY_MAP = { soft: 0.6, normal: 1, strong: 1.6 };
  const FONT_MAP = {
    mono: "'SF Mono','Fira Code','Consolas','Courier New',monospace",
    sans: "-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Roboto,sans-serif",
    serif: "Georgia,'Times New Roman',serif",
  };
  const VALID_THEMES = Object.keys(THEMES);
  const VALID_SPEEDS = Object.keys(SPEED_MAP);
  const VALID_DENSITIES = Object.keys(DENSITY_MAP);
  const VALID_INTENSITIES = Object.keys(INTENSITY_MAP);
  const VALID_FONTS = Object.keys(FONT_MAP);

  /* ============================================================
   * CSS noise generator (SVG data-uri)
   * ============================================================ */
  function makeNoiseURL(opacity) {
    const o = Math.max(0, Math.min(1, opacity));
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='${o}'/%3E%3C/svg%3E")`;
  }

  /* ============================================================
   * <orbit-bg> Custom Element
   * ============================================================ */
  class OrbitBg extends HTMLElement {
    static get observedAttributes() {
      return [
        'words', 'theme', 'speed', 'opacity', 'grid', 'glow', 'noise',
        'z-index', 'position', 'rows', 'angle', 'density', 'font',
        'interactive', 'rounded', 'intensity', 'seed',
        'rings', 'beams', 'vignette', 'preset',
      ];
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._raf = null;
      this._lines = [];
      this._gradients = [];
      this._time = 0;
      this._destroyed = false;
      this._paused = false;
      this._mouseX = 0.5;
      this._mouseY = 0.5;
      this._targetMouseX = 0.5;
      this._targetMouseY = 0.5;
      this._mouseHandler = null;
      this._visibilityHandler = null;
      this._mqHandler = null;
      this._ringEls = [];
      this._beamEls = [];
      this._glowEls = [];
      this._conf = {};
    }

    /* ---- helpers ---- */
    _attr(name, fallback) {
      const v = this.getAttribute(name);
      return v !== null && v !== '' ? v : fallback;
    }

    _boolAttr(name, fallback) {
      const v = this.getAttribute(name);
      if (v === null || v === '') return fallback;
      return v !== 'false' && v !== '0';
    }

    _enumAttr(name, validList, fallback) {
      const v = (this.getAttribute(name) || '').toLowerCase();
      return validList.includes(v) ? v : fallback;
    }

    _numAttr(name, fallback, min, max) {
      const raw = this.getAttribute(name);
      if (raw === null || raw === '') return fallback;
      const n = parseFloat(raw);
      if (isNaN(n)) return fallback;
      if (min !== undefined && n < min) return min;
      if (max !== undefined && n > max) return max;
      return n;
    }

    _getConf() {
      // Start with preset defaults if a valid preset is specified
      const presetName = this._enumAttr('preset', VALID_PRESETS, null);
      const preset = presetName ? PRESETS[presetName] : {};

      const defaultWords = preset.words || 'AI,AGENT,ORBIT,CODEX,OPEN SOURCE';
      const wordsRaw = this._attr('words', defaultWords);
      const words = wordsRaw.split(/[,，]/).map(s => s.trim()).filter(Boolean);
      const theme = this._enumAttr('theme', VALID_THEMES, preset.theme || 'dark');
      const speed = SPEED_MAP[this._enumAttr('speed', VALID_SPEEDS, preset.speed || 'normal')];
      const opacity = this._numAttr('opacity', preset.opacity || 0.06, 0, 1);
      const grid = this._boolAttr('grid', preset.grid !== undefined ? preset.grid : true);
      const glow = this._boolAttr('glow', preset.glow !== undefined ? preset.glow : true);
      const noise = this._boolAttr('noise', preset.noise !== undefined ? preset.noise : true);
      const zIndex = this._numAttr('z-index', -1);
      const position = this._enumAttr('position', ['fixed', 'absolute'], 'fixed');
      const rows = this._numAttr('rows', preset.rows || 3, 1, 6);
      const angle = this._numAttr('angle', preset.angle || -8, -45, 45);
      const density = DENSITY_MAP[this._enumAttr('density', VALID_DENSITIES, preset.density || 'normal')];
      const font = this._enumAttr('font', VALID_FONTS, preset.font || 'sans');
      const interactive = this._boolAttr('interactive', preset.interactive || false);
      const rounded = this._boolAttr('rounded', false);
      const intensity = INTENSITY_MAP[this._enumAttr('intensity', VALID_INTENSITIES, preset.intensity || 'normal')];
      const seedRaw = this.getAttribute('seed');
      const seed = seedRaw !== null && seedRaw !== '' ? hashString(seedRaw) : null;
      const rings = this._boolAttr('rings', preset.rings || false);
      const beams = this._boolAttr('beams', preset.beams || false);
      const vignette = this._boolAttr('vignette', preset.vignette || false);

      return {
        words, theme, speed, opacity, grid, glow, noise, zIndex,
        position, rows, angle, density, font, interactive, rounded,
        intensity, seed, rings, beams, vignette,
      };
    }

    _getTheme(name) { return THEMES[name] || THEMES.dark; }

    /* ---- lifecycle ---- */
    connectedCallback() {
      this._build();
      this._startAnimation();
      this._observeReducedMotion();
      this._observeVisibility();
      const conf = this._getConf();
      if (conf.interactive) this._bindMouse();
    }

    disconnectedCallback() { this._destroy(); }

    attributeChangedCallback(name, oldVal, newVal) {
      if (this._destroyed) return;
      // Re-bind mouse if interactive changed
      if (name === 'interactive') {
        this._unbindMouse();
        if (this._boolAttr('interactive', false)) this._bindMouse();
      }
      this._build();
    }

    /* ---- build DOM & styles ---- */
    _build() {
      const conf = this._getConf();
      this._conf = conf; // cache for animation tick
      const t = this._getTheme(conf.theme);
      this.shadowRoot.innerHTML = '';

      const effMult = conf.intensity;
      const fontFamily = FONT_MAP[conf.font] || FONT_MAP.sans;

      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: block;
          position: ${conf.position};
          inset: 0;
          z-index: ${conf.zIndex};
          pointer-events: none;
          overflow: hidden;
          background: ${t.bg};
          -webkit-user-select: none;
          user-select: none;
          ${conf.rounded ? 'border-radius: 16px;' : ''}
        }
        .layer{position:absolute;inset:0;overflow:hidden}
        .text-line{
          position:absolute;white-space:nowrap;
          font-family:${fontFamily};
          font-weight:800;letter-spacing:0.25em;
          text-transform:uppercase;will-change:transform;
          transform-origin:center center;
        }
        .gradient-layer .blob{position:absolute;border-radius:50%;filter:blur(100px);will-change:transform}
        .grid-layer{
          background-image:
            linear-gradient(${t.gridColor} 1px,transparent 1px),
            linear-gradient(90deg,${t.gridColor} 1px,transparent 1px);
          background-size:60px 60px;
        }
        .noise-layer{background-image:${makeNoiseURL(t.noiseOpacity * effMult)};background-repeat:repeat;background-size:200px 200px}
        .glow-layer .glow{position:absolute;border-radius:50%;filter:blur(120px);will-change:transform}
        .ring{position:absolute;border-radius:50%;border:1px solid ${t.ringColor};will-change:transform}
        .beam{position:absolute;will-change:transform;filter:blur(60px)}
        .vignette-layer{
          position:absolute;inset:0;
          background:radial-gradient(ellipse at center,transparent 40%,${t.vignetteColor} 100%);
        }
        @media(prefers-reduced-motion:reduce){.text-line,.blob,.glow,.ring,.beam{animation:none!important}}
        @media(max-width:768px){.text-line{font-size:12vw!important}}
      `;
      this.shadowRoot.appendChild(style);

      const container = document.createElement('div');
      container.style.cssText = 'position:absolute;inset:0;overflow:hidden;';

      // Text layer
      const textLayer = document.createElement('div');
      textLayer.className = 'layer text-layer';
      this._lines = this._createTextLines(conf, t, fontFamily, effMult);
      this._lines.forEach(l => textLayer.appendChild(l.el));
      container.appendChild(textLayer);

      // Gradient layer
      const gradLayer = document.createElement('div');
      gradLayer.className = 'layer gradient-layer';
      this._gradients = this._createGradientBlobs(conf, t, effMult);
      this._gradients.forEach(b => gradLayer.appendChild(b.el));
      container.appendChild(gradLayer);

      // Glow layer
      if (conf.glow) {
        const glowLayer = document.createElement('div');
        glowLayer.className = 'layer glow-layer';
        this._glowEls = this._createGlows(t, effMult);
        this._glowEls.forEach(g => glowLayer.appendChild(g.el));
        container.appendChild(glowLayer);
      } else {
        this._glowEls = [];
      }

      // Rings
      if (conf.rings) {
        const ringLayer = document.createElement('div');
        ringLayer.className = 'layer ring-layer';
        this._ringEls = this._createRings(conf, t, effMult);
        this._ringEls.forEach(r => ringLayer.appendChild(r.el));
        container.appendChild(ringLayer);
      } else {
        this._ringEls = [];
      }

      // Beams
      if (conf.beams) {
        const beamLayer = document.createElement('div');
        beamLayer.className = 'layer beam-layer';
        this._beamEls = this._createBeams(conf, t, effMult);
        this._beamEls.forEach(b => beamLayer.appendChild(b.el));
        container.appendChild(beamLayer);
      } else {
        this._beamEls = [];
      }

      // Grid
      if (conf.grid) {
        const gridLayer = document.createElement('div');
        gridLayer.className = 'layer grid-layer';
        container.appendChild(gridLayer);
      }

      // Noise
      if (conf.noise) {
        const noiseLayer = document.createElement('div');
        noiseLayer.className = 'layer noise-layer';
        container.appendChild(noiseLayer);
      }

      // Vignette
      if (conf.vignette) {
        const vigLayer = document.createElement('div');
        vigLayer.className = 'vignette-layer';
        container.appendChild(vigLayer);
      }

      this.shadowRoot.appendChild(container);
    }

    /* ---- text lines ---- */
    _createTextLines(conf, t, fontFamily, effMult) {
      const lines = [];
      const rowCount = conf.rows;
      const rng = conf.seed !== null ? mulberry32(conf.seed) : Math.random;

      for (let i = 0; i < rowCount; i++) {
        const frac = rowCount === 1 ? 0.4 : i / (rowCount - 1);
        const y = 5 + frac * 80;
        const fontSizeBase = 12 + (rng() * 8);
        const fontSize = fontSizeBase + 'vw';
        const speedMul = 0.3 + rng() * 0.8;
        const opacityMul = 0.4 + rng() * 0.6;
        const direction = i % 2 === 0 ? 1 : -1;

        const el = document.createElement('div');
        el.className = 'text-line';
        el.style.cssText = `top:${y}%;left:0;font-size:${fontSize};color:${t.text};opacity:${conf.opacity * opacityMul * effMult};transform:rotate(${conf.angle}deg)`;
        el.textContent = this._buildScrollText(conf.words, conf.density);
        lines.push({
          el, speed: conf.speed * speedMul * 40 * direction,
          offset: rng() * 2000, angle: conf.angle,
        });
      }
      return lines;
    }

    _buildScrollText(words, density) {
      const count = Math.round(6 * density);
      const r = [];
      for (let i = 0; i < count; i++) r.push(words[i % words.length]);
      return r.join('   ·   ');
    }

    /* ---- gradient blobs ---- */
    _createGradientBlobs(conf, t, effMult) {
      const blobs = [];
      const rng = conf.seed !== null ? mulberry32(conf.seed + 100) : Math.random;
      const defs = [
        { size: '45vw', x: '10%', y: '15%', color: t.gradient1, dx: 60, dy: 40, dur: 20 },
        { size: '35vw', x: '60%', y: '55%', color: t.gradient2, dx: -50, dy: 55, dur: 25 },
        { size: '50vw', x: '35%', y: '80%', color: t.gradient3, dx: 45, dy: -35, dur: 22 },
      ];
      defs.forEach(d => {
        const el = document.createElement('div');
        el.className = 'blob';
        el.style.cssText = `width:${d.size};height:${d.size};left:${d.x};top:${d.y};background:${d.color};opacity:${conf.opacity * 3 * effMult}`;
        blobs.push({ el, dx: d.dx, dy: d.dy, dur: d.dur, phase: rng() * Math.PI * 2 });
      });
      return blobs;
    }

    /* ---- glow dots ---- */
    _createGlows(t, effMult) {
      const glows = [];
      const defs = [
        { size: '30vw', x: '20%', y: '30%', color: t.glowColor, dx: 80, dy: 60, dur: 18 },
        { size: '25vw', x: '70%', y: '60%', color: t.glowColor, dx: -70, dy: 50, dur: 22 },
      ];
      defs.forEach(d => {
        const el = document.createElement('div');
        el.className = 'glow';
        el.style.cssText = `width:${d.size};height:${d.size};left:${d.x};top:${d.y};background:${d.color};opacity:${effMult}`;
        glows.push({ el, dx: d.dx, dy: d.dy, dur: d.dur });
      });
      return glows;
    }

    /* ---- rings ---- */
    _createRings(conf, t, effMult) {
      const rings = [];
      const rng = conf.seed !== null ? mulberry32(conf.seed + 200) : Math.random;
      const count = 3;
      for (let i = 0; i < count; i++) {
        const size = 20 + rng() * 30;
        const el = document.createElement('div');
        el.className = 'ring';
        el.style.cssText = `width:${size}vw;height:${size}vw;left:${15 + rng() * 60}%;top:${15 + rng() * 60}%;opacity:${0.3 * effMult}`;
        rings.push({ el, dx: 20 + rng() * 30, dy: 20 + rng() * 30, dur: 15 + rng() * 15 });
      }
      return rings;
    }

    /* ---- beams ---- */
    _createBeams(conf, t, effMult) {
      const beams = [];
      const rng = conf.seed !== null ? mulberry32(conf.seed + 300) : Math.random;
      const count = 2;
      for (let i = 0; i < count; i++) {
        const w = 2 + rng() * 3;
        const h = 30 + rng() * 30;
        const el = document.createElement('div');
        el.className = 'beam';
        el.style.cssText = `width:${w}vw;height:${h}vh;left:${20 + rng() * 60}%;top:${rng() * 40}%;background:${t.beamColor};opacity:${0.5 * effMult};border-radius:${w}vw`;
        beams.push({ el, dx: 30 + rng() * 40, dy: 20 + rng() * 30, dur: 12 + rng() * 10 });
      }
      return beams;
    }

    /* ---- animation ---- */
    _startAnimation() {
      this._destroyed = false;
      this._paused = false;
      this._time = 0;
      let last = performance.now();

      const tick = (now) => {
        if (this._destroyed) return;
        if (this._paused) { this._raf = requestAnimationFrame(tick); return; }

        const dt = Math.min((now - last) / 1000, 0.1);
        last = now;
        this._time += dt;

        // Smooth mouse interpolation
        const isInteractive = this._conf.interactive;
        if (isInteractive) {
          this._mouseX += (this._targetMouseX - this._mouseX) * 0.03;
          this._mouseY += (this._targetMouseY - this._mouseY) * 0.03;
        }
        const mx = this._mouseX - 0.5;
        const my = this._mouseY - 0.5;

        // Text scroll
        this._lines.forEach(l => {
          const x = ((this._time * l.speed + l.offset) % 3000) - 1000;
          l.el.style.transform = `rotate(${l.angle}deg) translateX(${x}px)`;
        });

        // Gradient blobs
        this._gradients.forEach(b => {
          const angle = this._time / b.dur * Math.PI * 2 + b.phase;
          const ix = isInteractive ? mx * 15 : 0;
          const iy = isInteractive ? my * 10 : 0;
          b.el.style.transform = `translate(${Math.sin(angle) * b.dx + ix}px,${Math.cos(angle * 0.7) * b.dy + iy}px)`;
        });

        // Glow
        this._glowEls.forEach((g, i) => {
          const angle = this._time / (16 + i * 4) * Math.PI * 2;
          const ix = isInteractive ? mx * 20 : 0;
          const iy = isInteractive ? my * 15 : 0;
          g.el.style.transform = `translate(${Math.sin(angle) * 60 + ix}px,${Math.cos(angle * 0.8) * 50 + iy}px)`;
        });

        // Rings
        this._ringEls.forEach(r => {
          const angle = this._time / r.dur * Math.PI * 2;
          r.el.style.transform = `translate(${Math.sin(angle) * r.dx}px,${Math.cos(angle * 0.6) * r.dy}px)`;
        });

        // Beams
        this._beamEls.forEach(b => {
          const angle = this._time / b.dur * Math.PI * 2;
          b.el.style.transform = `translate(${Math.sin(angle) * b.dx}px,${Math.cos(angle * 0.5) * b.dy}px)`;
        });

        this._raf = requestAnimationFrame(tick);
      };

      this._raf = requestAnimationFrame(tick);
    }

    _observeReducedMotion() {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      this._mqHandler = (e) => {
        if (e.matches) this._stopAnimation();
        else if (!this._destroyed) this._startAnimation();
      };
      mq.addEventListener('change', this._mqHandler);
      if (mq.matches) this._stopAnimation();
    }

    _observeVisibility() {
      this._visibilityHandler = () => {
        if (document.hidden) { this._paused = true; }
        else { this._paused = false; }
      };
      document.addEventListener('visibilitychange', this._visibilityHandler);
    }

    _bindMouse() {
      this._mouseHandler = (e) => {
        this._targetMouseX = e.clientX / window.innerWidth;
        this._targetMouseY = e.clientY / window.innerHeight;
      };
      window.addEventListener('mousemove', this._mouseHandler, { passive: true });
    }

    _unbindMouse() {
      if (this._mouseHandler) {
        window.removeEventListener('mousemove', this._mouseHandler);
        this._mouseHandler = null;
      }
      this._targetMouseX = 0.5;
      this._targetMouseY = 0.5;
    }

    _stopAnimation() {
      if (this._raf) { cancelAnimationFrame(this._raf); this._raf = null; }
    }

    /* ---- public API ---- */
    destroy() { this._destroy(); this.remove(); }

    _destroy() {
      this._destroyed = true;
      this._stopAnimation();
      this._unbindMouse();
      if (this._mqHandler) {
        window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', this._mqHandler);
        this._mqHandler = null;
      }
      if (this._visibilityHandler) {
        document.removeEventListener('visibilitychange', this._visibilityHandler);
        this._visibilityHandler = null;
      }
      this.shadowRoot.innerHTML = '';
      this._lines = [];
      this._gradients = [];
      this._ringEls = [];
      this._beamEls = [];
      this._glowEls = [];
      this._conf = {};
    }
  }

  /* ============================================================
   * Register
   * ============================================================ */
  if (!customElements.get('orbit-bg')) customElements.define('orbit-bg', OrbitBg);
  window.OrbitBg = OrbitBg;
  window.OrbitBgPresets = PRESETS;

})();
