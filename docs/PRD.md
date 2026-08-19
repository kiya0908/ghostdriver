**Ghost Driver Wiki / Guide 网站 PRD（产品需求文档）**  
**版本**：1.4  
**日期**：2026-08-19  
**状态**：开发中  
**技术栈**：TanStack Start（TypeScript + TanStack Router） + i18n + SSR/SSG  
**目标**：上线一个专业、SEO 友好、数据可维护、明确标注为粉丝非官方的 Roblox *Ghost Driver* 攻略与数据网站。

---

### 1. 项目目标

Ghost Driver 是 Tilted Vehicles 开发的 Roblox Pre-Alpha 驾驶游戏。网站覆盖兑换码、车辆、攻略与更新等核心搜索意图，并通过 SSR/SSG 确保搜索引擎无需执行 JavaScript 即可读取核心内容。

产品原则：
1. 英文站优先，结构预留 i18n。
2. Codes 与 Cars 数据必须标记验证日期与可信度。
3. 不把单一竞品 Wiki 数据直接当作事实；车辆身份与精确参数分开验证。
4. 未确认的价格、性能、解锁方式不编造补齐。
5. 全站明确声明为 fan-made unofficial website。
6. Cars 页面优先提供可读数据与文本内容，不依赖车辆图片完成信息表达。

---

### 2. 核心搜索意图

1. Ghost Driver codes / Ghost Driver Roblox codes。
2. Ghost Driver cars / all cars / car list / car prices / car stats。
3. Ghost Driver best cars / tier list / fastest car。
4. Ghost Driver free cars / starter cars。
5. Ghost Driver limited cars / showroom cars。
6. Ghost Driver new cars / latest cars。
7. 新手、刷钱、调校与驾驶技巧。
8. 游戏版本更新。

---

### 3. 网站信息架构

```text
/                              Home
/codes                         Ghost Driver Codes

/cars                          Ghost Driver Cars Database / All Cars
├── /cars/best                 Best Cars & Tier List
├── /cars/new                  New Cars
├── /cars/free                 Free Cars
└── /cars/limited              Limited Cars

/guides                        Guides
├── /guides/beginner
├── /guides/money
├── /guides/tuning
├── /guides/driving
└── /guides/song-ids

/updates
/faq
/about
/privacy
/terms
/contact
```

原 `/vehicles`、`/vehicles/best`、`/vehicles/free`、`/vehicles/limited` 路由作为历史兼容入口保留 301/应用级重定向到对应 `/cars` 路由，但不得出现在 sitemap、Footer、Header 或新建内部链接中。

---

### 4. Cars 数据库页面要求

#### 4.1 `/cars`
定位：**SEO Pillar Page + Cars Database + Cars Topic Hub**。

核心要求：
- H1：Ghost Driver Cars Database。
- 英文正文至少约 1,200 词，目标 1,200–1,500 词。
- 页面必须包含真实数据库内容，而不是只有 SEO 长文。
- SSR 输出全部核心文本和车辆数据。
- 页面需要明显内链到 `/cars/best`、`/cars/new`、`/cars/free`、`/cars/limited`。
- 内链既出现在专题入口卡片中，也自然嵌入正文相关章节。

内容模块：
1. Ghost Driver cars overview。
2. Cars database summary。
3. All tracked cars。
4. Best Cars 入口。
5. New Cars 入口。
6. Free Cars 入口。
7. Limited Cars 入口。
8. How to choose a car。
9. Car prices and progression。
10. Top speed / acceleration / handling 解读。
11. New vs Limited 区别。
12. Free / starter cars 说明。
13. Tuning 对车辆比较的影响。
14. 数据验证方法。
15. Cars FAQ。

#### 4.2 `/cars/best`
覆盖 Ghost Driver best cars、Ghost Driver tier list、Ghost Driver car tier list、fastest car。

Best Cars 与 Tier List 合并为一个 URL。排名只能使用证据足够的车辆；当前阶段为 evolving/community ranking，必须说明排名方法和局限。没有足够证据的车辆保持 unranked，不为了填满 S/A/B/C 强行分级。

#### 4.3 `/cars/new`
覆盖 Ghost Driver new cars、latest Ghost Driver cars、recent update cars。

“New” 与 “Limited” 必须分开：New 表示近期加入或近期更新关联，Limited 表示曾有时间/库存限制。页面不能把 Recent 自动理解成当前仍在售。

#### 4.4 `/cars/free`
覆盖 Ghost Driver free cars、starter cars、group rewards。

必须区分：
- 车辆身份是否确认。
- Free / starter 状态是否确认。
- unlock requirement 是否确认。

#### 4.5 `/cars/limited`
覆盖 Ghost Driver limited cars、showroom cars、limited rotation、rare cars。

Limited 身份和“当前正在售卖”是两个字段。历史 limited 车型可保留，但不能暗示仍在当前 showroom。

---

### 5. Cars 数据策略

车辆数据来源分层：

**Level A — 高可信**
- 当前游戏 UI。
- 清晰 Ghost Driver 实机视频/截图，可直接确认字段。
- 官方 Ghost Driver / Tilted Vehicles 信息。

**Level B — 可交叉验证**
- 独立游戏媒体。
- 带 Ghost Driver 实际游戏截图的攻略。
- 多个独立玩家内容相互印证。

**Level C — 候选来源**
- ghostdriverroblox.wiki。
- ghost-driver.site。
- ghostdriverwiki.wiki。
- 单一社区帖子。

Level C 可用于发现车型和候选数值，但不能自动升级为高可信事实。

当前原则：
- 车型身份可信、精确 specs 未确认：允许进入 roster。
- 已有具体社区数值且具有实际参考价值：可显示为 community-estimate / provisional。
- 页面不再为每个缺失字段堆叠多个 “Pending”；没有性能数据时统一解释为 exact performance figures not yet published/confirmed。
- 能确认的数值必须展示，不能因为其他字段缺失而把整辆车显示成 Pending。
- 名称本身无法确认：不进入正式 roster。
- 明显冲突或疑似虚构数据：留在研究层，不进入生产页面。

截至 2026-08-19，生产 roster 包含：Wulfbrecht RZ7、Weinchen V120、Kitsuni LX、Rangy Helly、Castellani Specchiera、Reinhardt RT32、Takama F10 GT、Audi R8、BMW M3 G80、BMW M140i、C7。

当前已保留可用的具体数值，例如：
- Kitsuni LX：社区来源报告 $45,000、165 MPH。
- Takama F10 GT：社区/竞品来源报告 $350,000、215 MPH stock、278 MPH tuned；车辆身份与 Limited 状态具有更强独立证据。

这些精确数值必须在 UI 中保持 provisional/community-estimate 语义，不包装成官方永久规格。

---

### 6. Vehicle 数据模型

本地 TypeScript 数据位于 `src/data/vehicles.ts`，通过 repository + server loader 提供 SSR 数据。

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

后期数据库化仍需保留 source/confidence，并逐步升级为字段级来源审计。

---

### 7. Cars 图片策略（2026-08-19 最终决定）

**Cars 页面当前不显示车辆图片。**

原因：
- 网络上 Ghost Driver 车辆素材清晰度不足。
- 普通图片搜索容易混入真实汽车或其他 Roblox 赛车游戏。
- 直接使用竞品自制图片有版权和重复内容风险。
- 低质量图片对数据库型页面的价值低于清晰的数据与文本信息。

实现要求：
- Vehicle Card 不展示图片、假车辆剪影或图片占位区域。
- 页面布局按纯数据卡片设计。
- `image` 字段暂时保留在类型中，为未来官方/自有高清素材预留，不在当前 UI 中渲染。

---

### 8. SEO 与内部链接

- `/cars` 是 Cars topic cluster 的父页面。
- `/cars/best`、`/cars/new`、`/cars/free`、`/cars/limited` 是独立 SEO Landing Pages，不只是 query filter。
- Header 主导航链接 `/cars`。
- Footer 使用描述性锚文本：Ghost Driver Cars、Best Ghost Driver Cars、New Ghost Driver Cars、Free Ghost Driver Cars、Limited Ghost Driver Cars。
- Sitemap 只收录 `/cars` 新路由，不收录旧 `/vehicles` 重定向路由。
- 首页、相关 Guides、Updates 后续新增 Cars 内链时统一指向 `/cars`。
- canonical 统一使用 `/cars` 路径。

---

### 9. SSR / 技术要求

- 强制 SSR 或 SSG。
- 页面初始 HTML 必须包含 H1、正文、Cars/Codes 数据等核心内容。
- 每页独立 title / description / canonical / OG。
- 文件路由使用 TanStack Router。
- 数据与 UI 分离。
- 所有关键数据通过 server loader 获取。
- sitemap 在新增可索引路由时同步更新。

---

### 10. 设计与体验

延续 `docs/DESIGN.md` 设计体系。

Cars 页面重点：
- 数据摘要。
- Filter / section tabs。
- 纯文本/数据车辆卡片。
- Free / Limited / Recent / Tier badges。
- Price / acquisition 清楚可见。
- 只有存在可信数据时才显示具体性能字段。
- Confidence / checked date 保持弱但可见。
- 移动端优先。

---

### 11. 当前开发状态

已完成/本轮完成：
- Cars 真实 roster 替换 placeholder 数据。
- Vehicle 类型扩展 confidence/source/acquisition 等字段。
- `/cars` 新主路由。
- `/cars/best`。
- `/cars/new`。
- `/cars/free`。
- `/cars/limited`。
- 旧 `/vehicles*` 路由重定向到 `/cars*`。
- Header / Footer Cars 链接迁移。
- Sitemap 路由迁移。
- `/cars` 主页面扩展为 1,200+ 词 Pillar Page。
- `/cars` 加入 Best / New / Free / Limited 明显内部链接。
- Cars 卡片去除图片/车辆剪影占位。
- Cars 卡片减少无意义 Pending 展示，仅在已有可信数据时显示具体性能值。

后续 Cars P1：
- Search by car name。
- Class / status filter。
- Sort by price / top speed / recent。
- 单车详情页（数据量足够后）。
- Breadcrumb / structured data。
- 持续验证更多 price / specs。

---

### 12. 风险

- Pre-Alpha 数据变化快：所有 Cars/Codes 显示验证时间。
- Community Wiki 可能互相抄袭：多个竞品相同不自动等于独立验证。
- 现实车型名与游戏内名称可能混用：优先游戏内名称。
- 图片质量和版权风险：当前 Cars 页面不显示图片。
- SEO：禁止纯 CSR，所有重要正文和数据库内容必须服务器输出。
- 合规：保持 fan-made / unofficial 声明，不暗示官方授权。
