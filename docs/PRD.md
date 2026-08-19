# Ghost Driver Wiki / Guide 网站 PRD

**版本**：2.0  
**日期**：2026-08-19  
**状态**：持续开发 / 已具备生产内容结构  
**生产分支**：`master`  
**技术栈**：TanStack Start + TanStack Router + React 19 + TypeScript + Tailwind CSS 4 + i18next + SSR + Cloudflare Workers  
**产品定位**：面向 Roblox 游戏 **Ghost Driver** 的非官方英文 Wiki、攻略与数据站，通过 SEO 内容集群承接 Ghost Driver、Codes、Cars、Guides、Updates 等搜索需求。

---

## 1. 产品背景

Ghost Driver 是一个仍在快速迭代中的 Roblox 驾驶游戏。用户搜索需求并不只集中在游戏名称本身，还包含兑换码、车辆、最快车辆、免费车辆、Limited 车辆、新手攻略、赚钱方法、调校、驾驶技巧、音乐 ID 以及版本变化等大量长尾意图。

本项目的目标不是做单页关键词站，而是建立一个可持续扩展的 **Ghost Driver Topic Authority Site**：

- 首页承接品牌/游戏核心词；
- Codes、Cars、Guides、Updates 分别建立独立主题；
- Cars 与 Guides 继续拆分专题 Landing Pages；
- 通过 SSR、内部链接、结构化页面和持续更新形成可抓取的内容网络；
- 对快速变化的数据保留来源、验证日期和可信度，不为了 SEO 填充虚构信息。

全站必须明确保持 **fan-made / unofficial** 定位，不暗示获得 Roblox、Tilted Vehicles 或 Ghost Driver 官方授权。

---

## 2. 产品目标

### 2.1 SEO 目标

1. 建立 `Ghost Driver` 主关键词首页。
2. 承接 `Ghost Driver codes`、`Ghost Driver Roblox codes` 等高意图搜索。
3. 建立完整 Cars topic cluster，覆盖 all cars、best cars、new cars、free cars、limited cars 等需求。
4. 建立 Guides topic cluster，覆盖 beginner、money、tuning、driving、song IDs 等搜索意图。
5. 保证核心内容存在于 SSR 初始 HTML 中。
6. 通过 Header、Footer、正文上下文链接形成稳定 internal linking graph。
7. 避免多个页面同时抢同一主要关键词。

### 2.2 用户目标

用户进入网站后应能快速完成以下任务：

- 找到当前可用 Ghost Driver Codes；
- 查看 Ghost Driver Cars roster 和已确认数据；
- 判断 Best / New / Free / Limited Cars；
- 找到新手、赚钱、调校、驾驶等实用攻略；
- 查看近期游戏或 Wiki 内容变化；
- 快速进入 Roblox 游戏或观看实际 gameplay；
- 理解网站数据的来源和可信度。

### 2.3 内容质量目标

- 重要 SEO Landing Page 目标正文约 1,200 词或以上，但以搜索意图完整性优先；
- 每个核心页面只围绕一个主要关键词/搜索意图组织内容；
- 内容必须原创整合，不直接复制竞品文章；
- 事实型内容必须区分 confirmed、community-verified、community-estimate、unverified 等状态；
- 图片用于提升用户体验，而不是代替正文或数据。

---

## 3. 当前信息架构

```text
/                              Ghost Driver homepage
├── /codes                     Ghost Driver Codes
├── /cars                      Ghost Driver Cars Database
│   ├── /cars/best             Best Cars / Tier List
│   ├── /cars/new              New Cars
│   ├── /cars/free             Free / Starter Cars
│   └── /cars/limited          Limited Cars
├── /guides                    Ghost Driver Guides Hub
│   ├── /guides/beginner       Beginner Guide
│   ├── /guides/money          Money Guide
│   ├── /guides/tuning         Tuning Guide
│   ├── /guides/driving        Driving Guide
│   └── /guides/song-ids       Song IDs Guide
├── /updates                   Updates
├── /faq                       FAQ
├── /about                     About
├── /contact                   Contact
├── /privacy                   Privacy
└── /terms                     Terms
```

历史路由：

```text
/vehicles
/vehicles/best
/vehicles/free
/vehicles/limited
```

这些路径只保留兼容性，并重定向到对应 `/cars*` URL。它们不能继续出现在主导航、Footer、sitemap 或新建正文内链中。

---

## 4. 首页 `/`

### 4.1 页面定位

首页是全站最高层级 Pillar Page，核心关键词为：

- Primary：`Ghost Driver`
- Secondary：`Ghost Driver codes`
- Secondary：`Ghost Driver Roblox code / codes`

首页既承担用户入口，也承担主题总览与内部链接分发。

### 4.2 当前内容模块

当前首页已经从轻量 Landing Page 扩展为长篇 SEO 首页，包含：

1. Hero 区域；
2. Ghost Driver 核心介绍；
3. 游戏玩法与体验说明；
4. Codes 主题入口；
5. Cars / progression 主题入口；
6. Guides / learning 内容入口；
7. Roblox 游戏入口；
8. YouTube gameplay 视频嵌入；
9. FAQ / 更新 / 数据可信度说明；
10. Footer Wiki 内链。

Hero 当前使用 Ghost Driver 游戏相关视觉素材，不再使用最初 telemetry panel 作为主要视觉重点。

### 4.3 SEO 要求

- 首页正文应尽量保持约 1,200–1,800 英文词；
- `Ghost Driver` 是核心语义，不应为了密度机械重复；
- Codes、Cars、Guides 等次级词必须自然链接至对应页面；
- H1 只服务 Ghost Driver 主主题；
- 页面必须输出独立 title、description、canonical、OG/Twitter metadata；
- 首页正文、H1、关键链接必须由 SSR 输出。

---

## 5. Codes `/codes`

### 5.1 页面定位

核心关键词：

- `Ghost Driver codes`
- `Ghost Driver Roblox codes`

用户主要目标是快速获得可复制的 active codes，因此页面需要兼顾即时答案与长篇解释内容。

### 5.2 当前数据

截至 2026-08-19，`src/data/codes.ts` 中已存在社区验证的 active codes，例如：

- `THANKSFOR1MIL`
- `SINCEROWASHERE`
- `SORRYFORLATE`

其中 reward、addedAt、verifiedAt、source、confidence 均通过数据模型记录。

### 5.3 页面要求

- Active codes 优先展示；
- Reward、状态、last checked 必须可见；
- 支持 active / pre-alpha / expired 状态筛选；
- 提供 How to redeem、Why codes fail、How codes are checked 等解释内容；
- 页面不能声称社区来源 code 永久有效；
- 失效 code 应进入 expired 数据，而不是直接删除历史记录；
- 每次游戏重大更新后重新验证 active 状态。

---

## 6. Cars Topic Cluster

### 6.1 `/cars`

定位：**Cars Database + Cars SEO Pillar Page + Topic Hub**。

主要关键词：

- `Ghost Driver cars`
- `Ghost Driver car list`
- `Ghost Driver cars database`

当前要求：

- 英文正文约 1,200–1,500+ 词；
- SSR 输出 Cars roster 与核心正文；
- 页面明显链接 `/cars/best`、`/cars/new`、`/cars/free`、`/cars/limited`；
- 数据卡片展示 confirmed / provisional 信息；
- 不为缺失字段反复展示大量 `Pending`；
- exact specs 未确认时可整体说明，而不是用假数字填充；
- 页面优先数据可读性，目前不依赖车辆图片。

### 6.2 `/cars/best`

主要关键词：

- `Ghost Driver best cars`
- `Ghost Driver tier list`
- `Ghost Driver car tier list`
- `fastest car in Ghost Driver`

要求：

- 排名必须说明评价方法；
- 数据不足的车辆保持 unranked；
- 不为了视觉完整强行填满 S/A/B/C；
- stock 与 tuned top speed 必须明确区分；
- 排名是 evolving/community ranking 时必须在页面说明。

### 6.3 `/cars/new`

主要关键词：`Ghost Driver new cars`。

New 表示近期加入或与近期版本相关，不等同于 Limited，也不等同于当前 showroom 正在出售。

页面需要记录：

- recent status；
- known introduction/update context；
- last checked；
- 与 `/updates` 的上下文内链。

### 6.4 `/cars/free`

主要关键词：

- `Ghost Driver free cars`
- `Ghost Driver starter cars`

必须分别确认：

1. 车型身份；
2. Free / Starter 状态；
3. acquisition / unlock requirement。

无法确认解锁条件时不得自行推断。

### 6.5 `/cars/limited`

主要关键词：`Ghost Driver limited cars`。

Limited 历史身份与“当前是否可购买”是两种不同状态。页面不能因为车辆曾 Limited 就暗示今天仍在 showroom。

---

## 7. Cars 数据策略

### 7.1 来源层级

**Level A — 高可信**

- 游戏内 UI；
- 官方 Ghost Driver / Tilted Vehicles 信息；
- 清晰可识别的实机视频或截图。

**Level B — 可交叉验证**

- 独立媒体攻略；
- 玩家实机视频；
- 多个互不依赖来源的相同信息。

**Level C — 候选发现来源**

- ghostdriverroblox.wiki；
- ghost-driver.site；
- ghostdriverwiki.wiki；
- 单一社区帖子。

Level C 可以帮助发现车型、关键词或候选数值，但不应自动包装成官方数据。

### 7.2 当前 roster

当前生产数据中已经纳入的车型包括：

- Wulfbrecht RZ7
- Weinchen V120
- Kitsuni LX
- Rangy Helly
- Castellani Specchiera
- Reinhardt RT32
- Takama F10 GT
- Audi R8
- BMW M3 G80
- BMW M140i
- C7

部分车辆已经具有 community-estimate 数值，例如价格或 top speed。UI 必须保持 provisional 语义。

### 7.3 数据模型

主要数据位于 `src/data/vehicles.ts`。

```text
id
name
slug
realWorldModel?
vehicleClass?
price: number | null
acquisition?
isFree
isLimited
isNew?
topSpeed: number | null
tunedTopSpeed?: number | null
handling: number | null
acceleration: number | null
image: string | null
description
tier?
verifiedAt
dataQuality
confidence?
sources?
specsVerified?
```

后期迁移数据库时，应继续保留来源与 confidence，并逐步升级为字段级 source attribution。

---

## 8. Guides Topic Cluster

### 8.1 `/guides`

定位：Ghost Driver Guides Hub。

核心关键词：`Ghost Driver guides`。

当前页面已扩展为长篇内容 Hub，不再只是简单 Guide 卡片列表。Hub 的任务是：

- 解释不同 Guide 解决的问题；
- 帮助新玩家判断阅读顺序；
- 链接所有 Guide 子页面；
- 建立 Beginner → Money → Tuning → Driving 等学习路径；
- 将 Guides 与 Cars / Codes / Updates 建立自然内链。

### 8.2 Guide 子页面

当前主要 Guide：

- `/guides/beginner`
- `/guides/money`
- `/guides/tuning`
- `/guides/driving`
- `/guides/song-ids`

每个 Guide 需要：

- 一个主要搜索意图；
- 独立 title / description / canonical；
- 约 1,000–1,500 英文词为目标；
- H2/H3 结构明确；
- 图片或辅助图表在有价值时使用；
- 相关 Cars / Codes / Guides 内链；
- 避免将未验证机制写成确定事实。

当前 `public/guides/` 已存在多张自有 SVG 辅助素材，例如 beginner roadmap、money loop、traffic reading、tuning baseline、song ID checklist，可用于增强页面阅读体验。

---

## 9. Updates `/updates`

### 9.1 页面定位

主要覆盖：

- Ghost Driver updates；
- latest Ghost Driver changes；
- Wiki/data refresh notes。

Updates 页面必须清楚区分：

- 官方游戏更新；
- 社区观察到的变化；
- 本网站自己的 Wiki/data/content 更新。

不能把站点内容更新伪装成官方 patch notes。

### 9.2 后续方向

- 持续记录 major code refresh；
- Cars roster/spec changes；
- game version / release changes；
- 将更新内容链接到受影响的 Codes、Cars、Guides 页面。

---

## 10. Header / Footer / 品牌视觉

### 10.1 Header

- 使用站点 favicon / brand mark；
- 核心导航优先指向 Codes、Cars、Guides、Updates；
- 不再链接旧 `/vehicles`；
- 移动端必须保持可用。

### 10.2 Footer

当前 Footer 使用两列：

**Wiki**

- Ghost Driver Codes
- Ghost Driver Cars
- Best Ghost Driver Cars
- New Ghost Driver Cars
- Free Ghost Driver Cars
- Limited Ghost Driver Cars
- Ghost Driver Guides
- Ghost Driver Updates
- Ghost Driver FAQ

**Legal**

- About
- Contact
- Privacy
- Terms

Footer 的 Wiki 列同时承担 SEO 内链分发功能，锚文本应保持描述性。

### 10.3 图片策略

首页已引入 Ghost Driver Hero 游戏视觉素材与 favicon。Guides 可以使用自有 SVG/示意图辅助理解。

Cars 当前仍采用数据优先策略，不展示来源不可靠或质量较差的车辆图片。后续只有在获得高清、可信、可合理使用的图片时再恢复车辆图像。

---

## 11. SSR / SEO 技术要求

全站核心页面必须满足：

1. H1、正文和重要数据存在于服务器返回 HTML；
2. 不允许关键 SEO 内容依赖客户端加载后才出现；
3. 每页拥有独立 title；
4. 每页拥有独立 meta description；
5. canonical 指向正式 URL；
6. OG / Twitter metadata 与页面内容一致；
7. sitemap 在新增或迁移路由后同步更新；
8. robots.txt 可正常访问；
9. 旧路由使用重定向而不是产生重复内容；
10. 页面之间使用可爬取 `<a>` / Router Link 内链。

现有数据流：

```text
Route loader → createServerFn → ContentRepository / local TS data → SSR output
```

未来即使迁移至 Cloudflare D1、CMS 或其他数据库，也应尽量保持 route/component contract 不变。

---

## 12. Cloudflare Workers 部署

当前项目已配置 `wrangler.jsonc`：

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "ghostdriver",
  "compatibility_date": "2026-08-19",
  "compatibility_flags": ["nodejs_compat"],
  "main": "dist/server/server.js",
  "assets": {
    "directory": "dist/client"
  },
  "observability": {
    "enabled": true
  }
}
```

生产构建命令：

```bash
npm ci
npm run build
```

构建输出要求：

```text
dist/server/server.js
dist/client/
```

Cloudflare Worker 负责 SSR，静态资源由 `dist/client` 提供。

当前 GitHub 默认/生产分支为 `master`。功能开发可以在 feature branch 中完成，验收后再合并/覆盖至 `master` 触发生产部署。

---

## 13. 技术栈与工程要求

当前依赖：

- TanStack Start
- TanStack Router
- React 19
- TypeScript 5
- Vite 8
- Tailwind CSS 4
- i18next / react-i18next
- Vitest
- srvx

工程原则：

- 页面组件与内容数据分离；
- `routeTree.gen.ts` 自动生成，不手改；
- 新增 SEO 页面优先使用文件路由；
- 修改路由后检查 sitemap；
- 修改 Link 时确保 TanStack Router `search` 类型要求正确，避免再次出现 build-time TS2741；
- 所有生产提交至少应通过 `npm run build`；
- 涉及数据逻辑时补充或更新测试。

---

## 14. 当前完成状态

截至 2026-08-19，已经完成：

- 首页 Ghost Driver SEO 长内容重写；
- 首页 YouTube gameplay 与 Roblox 相关入口；
- 首页 Hero 图片与 favicon 品牌视觉升级；
- Codes 页面内容扩展；
- active Codes 数据录入；
- `/vehicles` → `/cars` 信息架构迁移；
- Cars roster 替换 placeholder；
- `/cars` 1,200+ 词 Pillar Page；
- `/cars/best`；
- `/cars/new`；
- `/cars/free`；
- `/cars/limited`；
- Cars 内链体系；
- Guides Hub 长内容扩展；
- 5 个主要 Guide 子页面；
- Guides 辅助视觉素材；
- `/updates` 内容扩展；
- Header favicon 品牌图标；
- Footer Wiki / Legal 两列重构；
- sitemap 更新；
- Cloudflare Workers `wrangler.jsonc`；
- README 与 PRD 对当前生产状态同步。

---

## 15. 下一阶段 P1

优先级建议：

1. **Cars 数据继续验证**：补充更多 price、stock/tuned speed、acquisition、New/Limited 状态。
2. **Cars 交互增强**：search、filter、sort。
3. **单车详情页**：数据量足够后建立 `/cars/:slug`，避免过早创建薄内容页。
4. **Guide 子页继续扩展**：将每个重点 Guide 稳定扩充至完整搜索意图覆盖。
5. **Updates 内容体系**：建立真实游戏变化与站点更新的持续记录。
6. **Structured Data**：完善 BreadcrumbList、Article、FAQ（仅在页面确实符合 schema 时）。
7. **更多内部链接**：首页、Codes、Cars、Guides、Updates 之间增加上下文相关链接。
8. **图片完善**：继续使用自有/可信视觉素材提升 Guides 和首页体验。
9. **SEO QA**：检查 title duplication、canonical、sitemap、SSR HTML、404/redirect。
10. **数据持久化评估**：当 Cars/Codes/Updates 数据明显增长时，再决定是否迁移至 D1/CMS。

---

## 16. 风险与约束

### 16.1 数据变化风险

Ghost Driver 仍在快速变化，Codes、Cars、价格、速度、Limited 状态和 progression 都可能变化。必须保留 last checked / verifiedAt。

### 16.2 社区数据污染

多个 Wiki 可能互相引用，因此“多个网站写了一样的数据”不一定等于独立验证。重要数字尽量回到游戏内 UI、官方信息或真实 gameplay。

### 16.3 SEO 风险

- 禁止纯 CSR 承载核心内容；
- 禁止大量生成近似页面抢同一关键词；
- 不创建没有独立搜索价值的薄内容 URL；
- 关键词密度不能以牺牲可读性为代价；
- 旧 `/vehicles` 必须避免与 `/cars` 形成重复索引。

### 16.4 图片与版权风险

- 不直接复制竞品自制图片；
- 不使用来源不明的大量 Roblox 游戏截图做数据库素材；
- 优先自有图形、合理引用或用户提供且有使用权限的素材。

### 16.5 合规风险

全站持续展示 unofficial / fan-made 定位，不得使用“official wiki”等可能误导用户的表述。

---

## 17. 产品验收标准

每个新的核心 SEO 页面发布前至少确认：

- [ ] 页面只有一个明确主搜索意图；
- [ ] H1 与主意图一致；
- [ ] 正文足以完整回答用户问题；
- [ ] SSR HTML 包含核心正文；
- [ ] title / description / canonical 正确；
- [ ] 至少存在合理的上级/同级/下级内部链接；
- [ ] 数据型内容具有 verifiedAt / confidence 逻辑；
- [ ] 没有虚构事实或未经说明的社区估值；
- [ ] 移动端可读；
- [ ] sitemap / redirect 在路由变化时同步；
- [ ] `npm run build` 通过；
- [ ] 非官方声明保持可见。

此 PRD 应以生产代码为事实来源持续维护；当页面架构、主要关键词集群、数据模型或部署方式发生明显变化时，同步更新版本。
