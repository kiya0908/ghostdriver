# Ghost Driver Wiki / Guide

面向 Roblox 游戏 **Ghost Driver** 的非官方英文攻略与数据站，围绕 `Ghost Driver`、`Ghost Driver codes`、`Ghost Driver Roblox codes`、`Ghost Driver cars`、`Ghost Driver guides` 等搜索意图建设内容集群。

项目当前使用 **TanStack Start + TanStack Router + React 19 + TypeScript + Tailwind CSS 4 + i18next**，核心页面采用 SSR，部署目标为 **Cloudflare Workers**。

> **非官方声明**：本项目是玩家自主制作的非官方网站，与 Ghost Driver、Tilted Vehicles、Roblox Corporation 或官方开发者不存在隶属、授权或背书关系。游戏名称、商标及相关资产归各自权利人所有。

## 当前产品状态

截至 2026-08-19，网站已从初始 Wiki 骨架扩展为完整的 Ghost Driver 内容站，当前重点包括：首页 SEO Pillar Content、兑换码、Cars 数据库、Cars 子专题、Guides 内容集群、Updates 以及基础法律与说明页面。

当前已经落地的主要内容：

- 首页围绕 Ghost Driver 主关键词扩展长篇 SEO 内容，并嵌入游戏视频、Roblox 游戏入口与站内主题入口；
- Codes 页面已录入当前社区可验证的 active codes，并展示 reward、状态与 last checked 信息；
- 原 Vehicles 信息架构已迁移为 `/cars`，建立 Cars topic cluster；
- `/cars` 已扩展为 1,200+ 词 Cars Database / Pillar Page，并连接 Best、New、Free、Limited 子页面；
- Cars 数据已从 placeholder / Pending 模型升级为真实候选 roster + community-estimate / confidence 标记；
- `/guides` 已扩展为长篇攻略 Hub，并提供 Beginner、Money、Tuning、Driving、Song IDs 等独立 Guide；
- `/updates` 已扩展为可持续发布站点与游戏相关更新的内容页面；
- Header 使用当前站点 favicon 品牌图标；首页 Hero 使用 Ghost Driver 游戏视觉素材；
- Footer 已重构为 `Wiki` 与 `Legal` 两列，其中 Wiki 集中承载核心 SEO 内链；
- `/robots.txt` 与 `/sitemap.xml` 已与当前 Cars 路由结构同步；
- 已提供 Cloudflare Workers 的 `wrangler.jsonc` 配置。

## 信息架构

```text
/
├── /codes
├── /cars
│   ├── /cars/best
│   ├── /cars/new
│   ├── /cars/free
│   └── /cars/limited
├── /guides
│   ├── /guides/beginner
│   ├── /guides/money
│   ├── /guides/tuning
│   ├── /guides/driving
│   └── /guides/song-ids
├── /updates
├── /faq
├── /about
├── /contact
├── /privacy
└── /terms
```

历史 `/vehicles*` 路由只用于兼容旧路径，应重定向至对应 `/cars*` 页面，不再作为站内主要链接或 sitemap URL。

## SEO 架构

当前内容策略采用 **Pillar Page + Topic Cluster**：

- `/`：核心主题 `Ghost Driver`；
- `/codes`：`Ghost Driver codes` / `Ghost Driver Roblox codes`；
- `/cars`：`Ghost Driver cars` / `Ghost Driver car list`；
- `/cars/best`：`Ghost Driver best cars` / `Ghost Driver tier list`；
- `/cars/new`：`Ghost Driver new cars`；
- `/cars/free`：`Ghost Driver free cars` / starter cars；
- `/cars/limited`：`Ghost Driver limited cars`；
- `/guides`：`Ghost Driver guides`；
- Guide 子页面分别覆盖 beginner、money、tuning、driving、song IDs 等独立搜索意图；
- `/updates`：Ghost Driver updates / latest changes。

内容页要求继续遵循：每页聚焦一个主要搜索意图，重要正文由 SSR 直接输出，内部链接优先使用描述性锚文本，避免多个 URL 竞争同一主关键词。

## 数据可信度原则

Ghost Driver 仍处于快速变化阶段，Codes、Cars 与版本信息不能被当作永久静态事实。

项目目前遵循以下规则：

1. 能由官方内容、游戏内 UI、清晰实机截图/视频确认的数据优先；
2. 社区 Wiki 和竞品站可用于发现候选信息，但关键数值应尽可能交叉验证；
3. 社区来源的精确价格、速度等字段使用 `community-estimate` / confidence 语义；
4. 无法确认的数据不为了页面完整度而编造；
5. Codes 与 Cars 应保留 `verifiedAt` / last checked 日期；
6. 游戏更新后优先重新检查 active codes、车辆价格、性能、Limited/New 状态。

当前 Codes 数据位于 `src/data/codes.ts`，Cars 数据位于 `src/data/vehicles.ts`，Guide 内容位于 `src/data/guides.ts`。

## 目录结构

```text
src/
├── components/       # Header、Footer、Cards、Cars 页面等通用组件
├── config/           # 站点公开配置
├── data/             # Codes、Cars、Guides、Updates 等本地内容
├── i18n/             # i18next 初始化与英文 UI 文案
├── lib/              # SEO 等工具
├── routes/           # TanStack Router 文件路由
├── server/           # createServerFn / 服务端数据读取边界
├── types/            # 内容数据类型
├── router.tsx
└── styles.css

public/
├── favicon.svg
├── ghost-driver-hero.webp
├── ghost-driver-hero.svg
├── guides/           # Guide 页面辅助视觉素材
└── ...

docs/
├── PRD.md
└── DESIGN.md
```

核心数据流仍保持：

```text
Route loader → createServerFn → ContentRepository / local data → SSR HTML
```

后期若迁移到 CMS / D1 / 外部数据库，应尽量保持页面组件的数据契约稳定。

## 本地开发

环境要求：Node.js 20.19+ 与 npm。

```bash
npm install
cp .env.example .env.local
npm run dev
```

Windows PowerShell：

```powershell
Copy-Item .env.example .env.local
npm run dev
```

默认访问：`http://localhost:3000`

常用命令：

```bash
npm run dev        # 本地开发
npm run typecheck  # TypeScript 检查
npm test           # Vitest
npm run build      # Vite production build + TypeScript check
npm start          # 本地运行 production SSR build
```

## 环境变量

`.env.example` 中的公开配置主要用于站点 URL 与联系邮箱，例如：

```dotenv
VITE_CONTACT_EMAIL=support@ghostdriver.online
VITE_SITE_URL=https://ghostdriver.online
```

`VITE_*` 会进入前端 bundle，只能保存公开信息。Secret、Token、数据库密码不能使用该前缀，也不能提交到仓库。

## SSR 与搜索引擎可见性

页面内容是否可被搜索引擎直接抓取，应检查初始 HTML，而不是只看浏览器 hydration 后的 DOM。

例如：

```bash
curl -s http://localhost:3000/ | grep "Ghost Driver"
curl -s http://localhost:3000/codes | grep "THANKSFOR1MIL"
curl -s http://localhost:3000/cars | grep "Ghost Driver Cars"
curl -s http://localhost:3000/guides | grep "Ghost Driver Guides"
```

发布前应确认：

- H1 与核心正文存在于 HTML source；
- 每页拥有独立 title、description、canonical；
- 核心 Cars / Codes / Guide 内容无需用户交互即可读取；
- `/cars` 子页面和 Guides 之间存在可爬取 HTML 内链；
- sitemap 不包含被废弃的 `/vehicles` 主路径；
- robots.txt 可正常访问。

## Cloudflare Workers 部署

仓库已经包含 Worker 配置：

```jsonc
{
  "name": "ghostdriver",
  "compatibility_date": "2026-08-19",
  "compatibility_flags": ["nodejs_compat"],
  "main": "dist/server/server.js",
  "assets": {
    "directory": "dist/client"
  }
}
```

生产构建：

```bash
npm ci
npm run build
```

Cloudflare 构建应确保生成：

```text
dist/server/server.js
dist/client/
```

Worker 负责 SSR 请求，`dist/client` 作为静态 assets 目录。当前默认生产 GitHub 分支为 `master`。

## 内容维护重点

每次 Ghost Driver 游戏出现明显更新时，优先检查：

- Active / expired codes；
- Cars roster、价格与 top speed；
- Limited / New / Free 状态；
- Guides 中可能已经失效的操作或 progression 描述；
- Updates 页面；
- 首页与相关专题中的事实型描述；
- sitemap 是否包含新增 SEO Landing Page。

新增内容页时，同时考虑 Header / Footer / contextual internal links，而不是只创建孤立 URL。

## 合规边界

- 全站保持 fan-made / unofficial 表述；
- 不暗示与 Roblox、Tilted Vehicles 或 Ghost Driver 官方存在合作关系；
- 不直接复制竞品长篇文案；
- 竞品内容主要用于搜索意图、信息架构和数据发现参考；
- 无法确认的游戏数据不得包装为官方事实；
- 图片优先使用自有、可合理使用或明确可用于当前项目的素材；
- Cars 页面当前以数据和正文为主，不依赖低质量或来源不清的车辆图片。

更完整的产品要求、页面目标和后续计划见 [`docs/PRD.md`](docs/PRD.md)。
