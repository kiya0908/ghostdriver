# Ghost Driver Wiki / Guide

面向 Roblox 游戏 **Ghost Driver** 的非官方英文粉丝攻略站。项目使用 TanStack Start、TanStack Router 文件路由、React 19、TypeScript、Tailwind CSS 4 与 react-i18next，所有关键页面默认由服务器渲染。

> **非官方声明**：本项目是玩家自主制作的非官方网站，与 Ghost Driver、Tilted Vehicles、Roblox Corporation 或官方开发者不存在任何隶属、授权或背书关系。游戏内容、商标与资产归各自权利人所有。

## 当前数据状态

项目已实现完整信息架构和可替换数据层，但没有把未经核实的社区传言伪装成游戏事实：

- Codes 数据当前为空，页面会显示诚实的“无已验证代码”状态；
- Vehicles 中的初始记录用于展示数据库结构，未核实字段显示 `Pending`，名称待核实的条目有明确标记，且不会进入任何 Tier；
- Guides 是原创的通用驾驶/学习方法，不声称未证实的奖励或数值；
- Updates 中的首条记录明确标为 Wiki 更新，不冒充官方游戏补丁。

正式发布前，应由编辑者在游戏内完成 Codes 和 Vehicles 的证据核验，并更新 `verifiedAt`。

## 快速启动

环境要求：Node.js 20.19+（当前开发验证使用 Node.js 24）与 npm。

```bash
npm install
cp .env.example .env.local
npm run dev
```

Windows PowerShell 可使用：

```powershell
Copy-Item .env.example .env.local
npm run dev
```

访问 `http://localhost:3000`。

常用命令：

```bash
npm run dev        # SSR 开发服务器
npm run typecheck  # TypeScript 严格检查
npm test           # Vitest 单元测试
npm run build      # 客户端 + 服务端生产构建，并执行类型检查
npm start          # 使用 srvx 运行 dist 中的生产 SSR 服务
```

## 发布前配置

复制 `.env.example` 为 `.env.local`，填写两个公开配置：

```dotenv
VITE_CONTACT_EMAIL=support@ghostdriver.online
VITE_SITE_URL=https://ghostdriver.online
```

这些值会进入浏览器 bundle，因此只能放公开信息，不能放密钥。项目已内置 `ghostdriver.online` 与 `support@ghostdriver.online` 作为安全回退值；环境变量用于不同部署环境覆盖它们。

任何数据库密码、API Secret、身份令牌只能放在被 `.gitignore` 排除的环境文件中，并且只能在 `createServerFn` 或服务器专用模块读取。项目当前不需要任何敏感环境变量。

## 目录结构

```text
src/
├── components/       # Header、Footer、卡片、通知、页面通用组件
├── config/           # 公开站点配置
├── data/             # 本地内容与 ContentRepository 实现
├── i18n/             # i18next 初始化与英文资源
├── lib/              # SEO 等无状态工具
├── routes/           # TanStack Router 文件路由
├── server/           # createServerFn 数据读取边界
├── types/            # Code、Vehicle、Guide、Update 类型
├── routeTree.gen.ts  # TanStack 自动生成，请勿手改
├── router.tsx        # Router 实例
└── styles.css        # DESIGN.md 对应的视觉 token 与响应式样式
```

数据依赖方向为：

```text
Route loader → createServerFn → ContentRepository → 本地 TS 数据
```

以后接入 Drizzle、Prisma 或外部 CMS 时，优先替换 `ContentRepository` 实现，页面组件和路由数据契约无需跟着改。

## 路由

- `/`：首页
- `/codes?status=active|pre-alpha|expired`：兑换码筛选
- `/vehicles`、`/vehicles/free`、`/vehicles/limited`、`/vehicles/best`：车辆数据库与 Tier List
- `/guides`、`/guides/:slug`：攻略列表与五篇详情
- `/updates`、`/faq`、`/about`
- `/privacy`、`/terms`、`/contact`
- `/robots.txt`、`/sitemap.xml`：按当前请求域名动态输出

未知 Guide slug 会返回 TanStack Router 的 404 页面。

## i18n 扩展

当前只发布英文 `en`，但组件已经放在 `I18nextProvider` 下，语言资源集中在 `src/i18n/`。

增加语言时：

1. 新建 `src/i18n/<locale>.ts`，保持与 `en.ts` 相同的 key 结构；
2. 在 `src/i18n/index.ts` 的 `resources` 与 `supportedLanguages` 注册；
3. 决定语言 URL 方案（推荐 `/:locale/...`），不要仅靠客户端 localStorage 切换；
4. 为每种语言输出独立 canonical 与 `hreflang`；
5. 确保服务器请求阶段已经确定语言，避免 SSR 与 hydration 文案不一致。

长篇 Guide 和车辆内容属于内容数据，不应塞进 UI 翻译 key。扩展语言时应为 `ContentRepository` 增加 locale 参数，并建立对应语言的数据集或 CMS 字段；共享导航、按钮和免责声明继续由 i18next 管理。

## 如何验证 SSR / 爬虫可见性

不要只在浏览器 Elements 面板检查，因为那里可能包含 hydration 后的客户端内容。应直接读取 HTTP 初始响应：

```bash
curl -s http://localhost:3000/codes?status=active | grep "No active codes to publish"
curl -s http://localhost:3000/vehicles | grep "Starter Car"
curl -s http://localhost:3000/guides/beginner | grep "Start with control, not speed"
```

Windows PowerShell：

```powershell
(Invoke-WebRequest -UseBasicParsing http://localhost:3000/vehicles).Content |
  Select-String "Starter Car"
```

还可以在浏览器使用“查看网页源代码”（不是“检查元素”），确认以下内容直接存在：

- 页面独立 `title`、description、Open Graph 与 canonical；
- Codes 空状态或代码列表；
- Vehicles 卡片数据和最后核验日期；
- Guide 的标题、正文与步骤；
- Footer 非官方免责声明。

所有内容路由使用 loader；关键本地数据通过 `createServerFn` 获取。项目没有给这些路由设置 `ssr: false`。

## SEO 与结构化数据

- 每页独立 title、description、Open Graph、Twitter Card 与 canonical；
- 首页输出 `WebSite` JSON-LD；
- Guide 详情输出 `Article` JSON-LD；
- 所有核心内容存在于 SSR 初始 HTML；
- 使用语义化 heading、nav、article、section 与 details；
- canonical 默认使用 `https://ghostdriver.online`，也可通过 `VITE_SITE_URL` 为预览环境覆盖。

## 部署

### Node / Docker

```bash
npm ci
npm run build
npm start
```

`srvx` 会以服务端入口目录为基准提供 `../client` 静态资源，并把动态请求交给 `dist/server/server.js` 的 TanStack Start fetch 入口。

### Vercel

TanStack Start 当前官方文档建议通过 Nitro/Vercel 适配器部署。接入目标平台前安装对应适配器，并保留 `vite build` 作为构建命令。不要把当前 `dist/client` 当作纯静态 SPA 发布，否则会失去 SSR。

### Cloudflare Workers

按 TanStack Start 官方 Hosting 指南加入 `@cloudflare/vite-plugin` 与 Wrangler，并把插件放在 `tanstackStart()` 之前。Workers 的入口为 `@tanstack/react-start/server-entry`。Cloudflare 适配属于部署配置，不应改动页面 loader 或数据仓库接口。

官方参考：

- [TanStack Start Build from Scratch](https://tanstack.com/start/latest/docs/framework/react/build-from-scratch)
- [TanStack Start Hosting](https://tanstack.com/start/latest/docs/framework/react/guide/hosting)
- [TanStack Start Server Functions](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions)

## 质量与合规边界

- Footer、首页提示、内容页提示、About 和 Terms 都包含非官方声明；
- 当前无广告、Analytics、账号、支付或服务端联系表单；Privacy 按实际代码描述，不虚构 CMP 或数据实践；
- 不使用 Roblox 或游戏官方图片作为默认视觉资产，避免未经授权复制素材；
- Google Fonts 是当前唯一主动加载的第三方前端资源，Privacy 已披露；
- 联系邮箱默认为 `support@ghostdriver.online`，canonical 域名默认为 `https://ghostdriver.online`；
- 游戏处于 Pre-Alpha，所有事实型数据必须保留最后核验日期。
