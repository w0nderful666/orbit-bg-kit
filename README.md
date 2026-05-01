# Orbit Background Kit

> 🌌 一行 `<script>` + 一个 `<orbit-bg>` 标签 — 给任意网页添加高级动态背景。

零依赖、纯前端 Web Component，无需框架、无需后端、无需构建。复制两行代码即可使用。

**[在线配置器](https://YOUR_USERNAME.github.io/orbit-bg-kit/)** · **[Demo 演示](https://YOUR_USERNAME.github.io/orbit-bg-kit/demo.html)** · **[示例合集](https://YOUR_USERNAME.github.io/orbit-bg-kit/examples/)**

---

## 快速开始（3 分钟上手）

### 第 1 步：复制这两行代码

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>
<orbit-bg theme="dark"></orbit-bg>
```

### 第 2 步：粘贴到你网页的 `<body>` 里

```html
<body>
  <!-- 把上面两行粘贴到这里 -->
  <h1 style="position:relative;z-index:1;color:white;">你的内容</h1>
</body>
```

### 第 3 步：打开浏览器看效果

就这么简单。背景自动全屏，不影响页面点击。

> **💡 提示**：你的内容需要 `position:relative; z-index:1` 才能显示在背景上方。

---

## 完整示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>

  <!-- 1. 加载组件 -->
  <script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>

  <!-- 2. 添加背景 -->
  <orbit-bg
    words="BUILD,DEPLOY,SHIP"
    theme="dark"
    speed="normal"
    opacity="0.06"
    grid="true"
    glow="true"
    noise="true"
  ></orbit-bg>

  <!-- 3. 你的内容 — 需要 position:relative; z-index:1 才能显示在背景之上 -->
  <h1 style="position:relative;z-index:1;color:white;text-align:center;padding:40vh 20px;">
    Your content here
  </h1>

</body>
</html>
```

---

## 参数说明

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `preset` | string | — | 预设名称（覆盖其他属性默认值，见下方预设表） |
| `words` | string | `AI,AGENT,ORBIT,CODEX,OPEN SOURCE` | 逗号分隔的背景滚动文字 |
| `theme` | string | `dark` | 颜色主题：cream / dark / cyber / paper / terminal / glass / midnight / sunset / matrix / aurora |
| `speed` | string | `normal` | 动画速度：slow / normal / fast |
| `opacity` | number | `0.06` | 整体透明度（推荐 0.01–0.20） |
| `position` | string | `fixed` | CSS 定位：fixed（全屏）或 absolute（局部容器） |
| `z-index` | number | `-1` | CSS 层级 |
| `rows` | number | `3` | 文字行数（1–6） |
| `angle` | number | `-8` | 文字旋转角度（-30 到 30） |
| `density` | string | `normal` | 文字密度：low / normal / high |
| `font` | string | `sans` | 字体风格：mono / sans / serif |
| `intensity` | string | `normal` | 整体强度：soft / normal / strong |
| `interactive` | boolean | `false` | 鼠标移动时光斑轻微跟随 |
| `rounded` | boolean | `false` | 圆角裁剪（用于局部容器时） |
| `seed` | string | — | 随机种子（相同 seed 布局一致） |
| `grid` | boolean | `true` | 显示网格叠加层 |
| `glow` | boolean | `true` | 显示光斑 |
| `noise` | boolean | `true` | 显示噪点纹理 |
| `rings` | boolean | `false` | 显示轨道圆环 |
| `beams` | boolean | `false` | 显示柔和光束 |
| `vignette` | boolean | `false` | 显示边缘暗角 |

所有属性都支持动态修改 — 通过 JavaScript `setAttribute()` 改变属性后背景立即更新。

---

## 主题

| 主题 | 风格 |
|------|------|
| `cream` | 米白高级感，适合编辑器 / 作品集 |
| `dark` | 深色科技感，蓝色渐变光斑 |
| `cyber` | 赛博霓虹，青绿色调 |
| `paper` | 纸张低饱和，温和质感 |
| `terminal` | 终端黑绿，极客风格 |
| `glass` | 透明玻璃拟态，适合 SaaS / AI 工具 |
| `midnight` | 深蓝午夜，适合开发者主页 |
| `sunset` | 暖色日落，适合个人博客 |
| `matrix` | 黑绿极客风，克制不廉价 |
| `aurora` | 极光柔和渐变，高级感 |

---

## 效果说明

- **滚动文字** — 大号低透明度关键词，多行不同速度缓慢漂移
- **渐变光斑** — 柔和的 radial-gradient 缓慢移动
- **网格** — 细线网格叠加
- **光斑** — 独立漂浮的发光点
- **噪点** — SVG 生成的噪点纹理（无图片依赖）
- **圆环** — 轨道线条
- **光束** — 柔和的竖向光线
- **暗角** — 边缘渐暗聚焦效果

所有效果可独立开关。

---

## 预设模板

使用 `preset` 属性一键应用风格：

```html
<orbit-bg preset="ai-startup"></orbit-bg>
```

| 预设 | 主题 | 风格 |
|------|------|------|
| `ai-startup` | glass | AI 工具站，interactive + beams |
| `developer-portfolio` | paper | 开发者作品集，serif + soft |
| `open-source` | dark | 开源项目，mono + grid |
| `prompt-market` | aurora | Prompt 市场，rings |
| `pdf-tool` | midnight | 工具站，beams + vignette |
| `cyber-landing` | cyber | 赛博风格，fast + high density |
| `minimal-blog` | cream | 极简博客，serif + soft |
| `terminal-hacker` | terminal | 终端风格，mono + strong |
| `glass-saas` | glass | SaaS 产品，interactive + beams |
| `midnight-docs` | midnight | 文档站，mono + vignette |
| `aurora-showcase` | aurora | 展示页，rings + beams |
| `paper-notes` | paper | 笔记本站，serif + vignette |

---

## 使用方式

### CDN 一行引入（推荐）

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>
<orbit-bg theme="dark"></orbit-bg>
```

### 固定版本

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@v0.1.0/dist/orbit-bg.iife.js"></script>
```

### 本地文件

```html
<script src="dist/orbit-bg.iife.js"></script>
<orbit-bg></orbit-bg>
```

### 局部容器背景

```html
<div style="position:relative;height:400px;overflow:hidden;border-radius:16px;">
  <orbit-bg position="absolute" theme="aurora" rounded="true"></orbit-bg>
  <div style="position:relative;z-index:1;padding:40px;">
    <h2>Card content here</h2>
  </div>
</div>
```

---

## 部署到 GitHub Pages

1. 创建 GitHub 仓库，推送代码
2. 进入 **Settings → Pages**
3. Source 选择 **Deploy from a branch**，选 `main` / `/(root)`
4. 等待几分钟，访问 `https://YOUR_USERNAME.github.io/orbit-bg-kit/`

---

## jsDelivr 使用

仓库公开后，jsDelivr 自动可用：

```
https://cdn.jsdelivr.net/gh/YOUR_USERNAME/orbit-bg-kit@latest/dist/orbit-bg.iife.js
```

可用标签：
- `@latest` — 最新版本
- `@v0.1.0` — 固定版本
- `@main` — main 分支最新

---

## 本地开发

```bash
# 克隆
git clone https://github.com/YOUR_USERNAME/orbit-bg-kit.git
cd orbit-bg-kit

# 启动本地服务
npx serve .
# 或
python3 -m http.server 3000

# 打开浏览器
# http://localhost:3000         → 配置器
# http://localhost:3000/demo.html → 演示
```

### npm scripts

```bash
npm run dev      # 启动开发服务
npm run build    # 复制 src → dist
npm run preview  # 预览 demo
npm run check    # 语法检查
```

---

## 浏览器兼容

| 浏览器 | 版本 |
|--------|------|
| Chrome | 67+ |
| Firefox | 63+ |
| Safari | 13.1+ |
| Edge | 79+ |

需要 Web Components / Custom Elements v1 支持。未包含 polyfill。

---

## 性能说明

- 动画使用 CSS `transform` 和 `opacity`（GPU 加速）
- 标签页不可见时自动暂停动画
- `prefers-reduced-motion` 自动停止动画
- `interactive` 模式使用 `requestAnimationFrame` + 被动事件监听
- 不使用 `Canvas`，不创建过多 DOM 节点
- 无外部资源加载

---

## 常见问题

### 背景没有显示？
1. 确认 `<script>` 在 `<orbit-bg>` **之前**
2. 确认 `<orbit-bg>` 在 `<body>` 内
3. 按 F12 打开开发者工具 → Network，看脚本是否加载成功（200 状态码）
4. 如果用 `position="absolute"`，父元素必须有 `position: relative` 和明确高度

### z-index 怎么处理？
- 默认 `z-index: -1`，背景在页面底层
- 你的内容需要 `position: relative; z-index: 1` 才能显示在背景上方
- 设为 `z-index: 0` 可以让背景在页面背景之上、内容之下

### CDN 缓存了旧版本怎么办？
- 用 `@v0.1.0` 替代 `@latest` 固定版本
- 或在 URL 后加 `?v=随机字符串` 强制刷新：`orbit-bg.iife.js?v=abc123`
- jsDelivr 缓存通常 7 天更新一次

### 能在 React / Vue 中使用吗？
能。`<orbit-bg>` 是标准 Web Component，任何框架都支持：
```jsx
// React
<orbit-bg theme="dark" words="HELLO,WORLD" />

// Vue
<orbit-bg theme="dark" words="HELLO,WORLD" />
```

### 移动端性能如何？
组件使用 CSS transform 和 opacity（GPU 加速），标签页不可见时自动暂停，系统开启减少动画时自动停止。大多数设备上无明显性能影响。

---

## 隐私说明

- ✅ **纯前端** — 无服务器、无后端、无 API 调用
- ✅ **无追踪** — 零分析、零指纹
- ✅ **无数据收集** — 任何数据都不离开浏览器
- ✅ **无外部资源** — 不加载字体、图片或 CDN 依赖
- ✅ **无 Cookie**

---

## License

[MIT](LICENSE) — 随便用，不要求署名（但欢迎 🙏）。

---

## 贡献

欢迎 PR！保持零依赖、保持小体积、保持优雅。

详见 [CONTRIBUTING.md](CONTRIBUTING.md)。
