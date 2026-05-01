# Orbit Background Kit

一个纯前端 Web Component 背景动效库。用户只需要一行 CDN `script` 和一个 `<orbit-bg>` 标签，就可以给任意网页添加可配置的高级动态背景。

- 在线 Demo / Playground: https://w0nderful666.github.io/orbit-bg-kit/
- 最小示例: https://w0nderful666.github.io/orbit-bg-kit/demo.html
- 仓库: https://github.com/w0nderful666/orbit-bg-kit

**项目价值:** 不需要 React、Vue、后端、构建步骤或统计脚本，适合直接放到 GitHub Pages、静态站、落地页、工具站和个人主页。

## 快速开始

复制两行到你的 HTML 页面里：

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>
<orbit-bg preset="ai-startup"></orbit-bg>
```

你的页面内容需要放在背景上方：

```html
<main style="position:relative;z-index:1;">
  Your content here
</main>
```

## CDN 引入

最新版本，适合试用：

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>
```

固定版本，适合生产页面：

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@v0.1.1/dist/orbit-bg.iife.js"></script>
```

## 完整配置示例

```html
<script src="https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@latest/dist/orbit-bg.iife.js"></script>

<orbit-bg
  words="BUILD,DEPLOY,SHIP"
  theme="dark"
  speed="normal"
  opacity="0.06"
  grid="true"
  glow="true"
  noise="true"
  rings="false"
  beams="true"
  vignette="false"
  interactive="true"
  position="fixed"
  z-index="0"
  rows="3"
  angle="-8"
  density="normal"
  font="sans"
  intensity="normal"
></orbit-bg>
```

## Preset 简写

```html
<orbit-bg preset="open-source"></orbit-bg>
```

## 局部容器背景

用于卡片、Hero 内部区域或某个局部模块时，父容器必须有 `position: relative`、明确高度和 `overflow: hidden`。

```html
<div style="position:relative;min-height:400px;overflow:hidden;border-radius:16px;">
  <orbit-bg position="absolute" z-index="0" preset="glass-saas" rounded></orbit-bg>
  <div style="position:relative;z-index:1;padding:40px;">
    Card content here
  </div>
</div>
```

## 参数说明

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `words` | string | `AI,AGENT,ORBIT,CODEX,OPEN SOURCE` | 逗号分隔的滚动文字 |
| `theme` | string | `dark` | 主题名 |
| `speed` | string | `normal` | `slow` / `normal` / `fast` |
| `opacity` | number | `0.06` | 整体透明度，组件会限制极端值 |
| `grid` | boolean | `true` | 网格层 |
| `glow` | boolean | `true` | 光晕层 |
| `noise` | boolean | `true` | SVG 噪点纹理 |
| `rings` | boolean | `false` | 轨道圆环 |
| `beams` | boolean | `false` | 柔和光束 |
| `vignette` | boolean | `false` | 暗角 |
| `interactive` | boolean | `false` | 鼠标交互，使用 requestAnimationFrame 节流 |
| `position` | string | `fixed` | `fixed` 全屏背景，`absolute` 局部背景 |
| `z-index` | number | `0` | 背景层级。内容通常设置为 `z-index:1` |
| `rows` | number | `3` | 文字行数，会被限制在安全范围 |
| `angle` | number | `-8` | 文字角度，会被限制在安全范围 |
| `density` | string | `normal` | `low` / `normal` / `high` |
| `font` | string | `sans` | `sans` / `mono` / `serif` |
| `intensity` | string | `normal` | `soft` / `normal` / `strong` |
| `rounded` | boolean | `false` | 使用父容器圆角裁剪 |
| `preset` | string | 空 | 使用预设配置 |
| `seed` | string | 自动 | 固定随机布局 |

布尔属性支持 `true`、`false`、`"true"`、`"false"` 和空属性，例如 `<orbit-bg interactive></orbit-bg>`。

## 主题

| 主题 | 适合场景 |
| --- | --- |
| `cream` | 极简博客、个人写作 |
| `dark` | 开源项目、技术主页 |
| `cyber` | 赛博风落地页 |
| `paper` | 作品集、笔记、轻量内容站 |
| `terminal` | 命令行、开发者、极客主题 |
| `glass` | SaaS、AI 工具、现代产品页 |
| `midnight` | 文档站、工具站 |
| `sunset` | 创意展示、个人主页 |
| `matrix` | 黑绿终端风 |
| `aurora` | 展示页、Prompt / AI 类产品 |

## Presets

| Preset | 说明 |
| --- | --- |
| `ai-startup` | AI 产品启动页 |
| `developer-portfolio` | 开发者作品集 |
| `open-source` | 开源项目主页 |
| `prompt-market` | 提示词市场 |
| `pdf-tool` | PDF 工具站 |
| `cyber-landing` | 高能赛博落地页 |
| `minimal-blog` | 极简博客 |
| `terminal-hacker` | 终端黑客风 |
| `glass-saas` | 玻璃拟态 SaaS |
| `midnight-docs` | 深色文档站 |
| `aurora-showcase` | 极光展示页 |
| `paper-notes` | 纸感笔记页 |

## examples 目录

- `examples/simple.html`: 最简单复制示例
- `examples/local-card.html`: `position="absolute"` 局部卡片背景
- `examples/multi-instance.html`: 多个 `<orbit-bg>` 同页共存
- `examples/pdf-tool.html`: 虚拟 PDF 工具站落地页
- `examples/prompt-market.html`: 虚拟提示词市场落地页

所有示例都使用本地 `../dist/orbit-bg.iife.js`，不依赖外部网络资源。

## GitHub Pages 部署

1. 推送项目到 `w0nderful666/orbit-bg-kit`
2. 打开仓库 `Settings -> Pages`
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main` 和 `/ (root)`
5. 访问 `https://w0nderful666.github.io/orbit-bg-kit/`

## jsDelivr 使用和缓存

公开 GitHub 仓库可以直接通过 jsDelivr 访问：

```text
https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@latest/dist/orbit-bg.iife.js
```

建议生产页面使用固定版本：

```text
https://cdn.jsdelivr.net/gh/w0nderful666/orbit-bg-kit@v0.1.1/dist/orbit-bg.iife.js
```

如果 CDN 更新不生效，优先使用固定 tag。jsDelivr 对 GitHub 文件有缓存，发布新版本后可能需要等待缓存刷新；调试时可以临时在 URL 后加查询参数，例如 `?v=20260501`。

## 本地开发

```bash
npm run dev
npm run build
npm run check
npm run preview
npm run examples
```

## 常见问题

### 背景不显示怎么办？

确认 `<script>` 已加载、`<orbit-bg>` 在 `<body>` 内。如果使用 `position="absolute"`，父容器必须有 `position: relative` 和明确高度。

### 内容被背景盖住怎么办？

给内容容器加 `position: relative; z-index: 1`。背景默认是 `z-index="0"`。

### z-index 怎么设置？

全屏背景建议保持 `z-index="0"`，内容使用 `z-index:1` 或更高。局部背景也建议背景为 `0`，卡片内容为 `1`。

### 局部卡片背景怎么用？

使用 `position="absolute"`，并让父容器 `position:relative; overflow:hidden; min-height:...`。参考 `examples/local-card.html`。

### CDN 更新不生效怎么办？

生产环境使用 `@v0.1.1` 固定版本。测试时可以使用 `@latest` 或临时查询参数绕过浏览器缓存。

### 能不能商业使用？

可以。项目使用 MIT License。

### 是否上传数据？

不会。组件只在浏览器内运行，不发送请求，不上传数据。

### 是否需要后端？

不需要。它是纯前端 Web Component。

## 隐私说明

- 纯前端
- 无后端
- 无统计
- 无上传
- 无 Cookie
- 可自托管

## License

MIT
