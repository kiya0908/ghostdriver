**Ghost Driver Wiki / Guide 网站 PRD（产品需求文档）**  
**版本**：1.3  
**日期**：2026-08-19  
**状态**：开发中  
**技术栈**：TanStack Start（TypeScript + TanStack Router） + i18n + SSR/SSG  
**目标**：快速上线一个专业、SEO友好、数据可维护、明确标注为粉丝非官方的 Roblox *Ghost Driver* 游戏攻略网站

---

### 1. 项目背景与目标

Ghost Driver 是 Tilted Vehicles 开发的 Roblox Pre-Alpha 驾驶游戏。网站目标是覆盖兑换码、车辆、攻略与更新等核心搜索意图，同时通过 SSR/SSG 确保搜索引擎无需执行 JavaScript 即可获取完整核心内容。

产品原则：
1. 英文站优先，结构预留 i18n。
2. Codes 与 Cars 数据必须标记验证日期与可信度。
3. 不把竞品 Wiki 的单一来源数据直接当作事实；车辆身份与精确参数分开验证。
4. 未确认的价格、性能、解锁方式使用 Pending/TBD，不编造补齐。
5. 全站明确声明为 fan-made unofficial website。

---

### 2. 目标用户与核心意图

1. 查询最新 Ghost Driver codes。
2. 查询 Ghost Driver cars、价格、性能、免费/限时车辆。
3. 查询 best cars / car tier list。
4. 新手入门、刷钱、调校与驾驶技巧。
5. 查询版本更新和新车。

---

### 3. 网站信息架构

```text
/                              Home
/codes                         Ghost Driver Codes

/vehicles                      Ghost Driver Cars Database / All Cars
├── /vehicles/best             Best Cars & Tier List
├── /vehicles/free             Free Cars
├── /vehicles/limited          Limited Cars
└── /vehicles/new              New Cars（规划，待实现）

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

#### Cars URL 决策
当前项目已实现 `/vehicles` 路由，因此本轮继续保持 URL 稳定，避免在功能开发过程中同时进行路由迁移。页面 SEO 文案统一优先使用用户实际搜索的 **Ghost Driver Cars / Cars Database / Best Cars / Free Cars / Limited Cars**，而不是机械重复 Vehicles。若后续 GSC 数据证明 `/cars` 有明显 URL 层级优势，再单独评估一次性迁移与 301。

---

### 4. Cars 数据库需求（2026-08-19 更新）

#### 4.1 `/vehicles` 主页面
定位：**SEO Pillar Page + Cars Database + Cars 内容 Hub**。

必须包含：
- H1：Ghost Driver Cars Database。
- 数据库摘要：tracked cars / limited / free / recent。
- All / Free / Limited / Best Cars 导航。
- 车辆卡片数据库。
- Cars 工作机制与数据库验证方法说明。
- SSR 输出全部核心车辆文字和数据。

车辆卡片字段：
- 游戏内名称。
- 现实车型映射（仅在证据足够时显示）。
- Class / Tier。
- Price / acquisition method。
- Free / Limited / Recent 标签。
- Top Speed / Handling / Acceleration。
- Last checked。
- Confidence / data quality。
- 未验证字段显示 Pending，不使用猜测值。

#### 4.2 `/vehicles/best`
页面目标关键词：Ghost Driver best cars、Ghost Driver tier list、Ghost Driver car tier list、fastest car。

Best Cars 与 Tier List 合并为一个页面，不再拆两个 URL。S/A/B/C 排名只能使用证据足够的数据；当前阶段属于 evolving/community ranking，页面必须说明方法与局限。

#### 4.3 `/vehicles/free`
覆盖：Ghost Driver free cars、starter cars、group/free rewards。

必须区分：
- 车辆存在是否确认。
- “免费”是否确认。
- 具体 unlock requirement 是否确认。

不能因为某竞品写 Free 就直接把解锁方式当成事实。

#### 4.4 `/vehicles/limited`
覆盖：Ghost Driver limited cars、showroom cars、limited vehicle rotation、rare cars。

Limited 身份与“当前正在售卖”必须分开。历史 Limited 车型可以保留，但不得暗示它现在仍在 showroom。

#### 4.5 `/vehicles/new`（下一阶段）
覆盖 latest Ghost Driver cars / new cars / update cars。使用版本与 added/update evidence 维护，不单纯依赖 `isNew` 永久标签。

---

### 5. Cars 数据验证规则

车辆数据采用分层来源：

**Level A — 高可信**
- 游戏内 UI / 自行验证。
- 清晰 Ghost Driver 实机视频或截图，能直接确认车辆名称/字段。
- 官方 Ghost Driver / Tilted Vehicles 公开信息。

**Level B — 可用于交叉验证**
- 独立游戏媒体、带 Ghost Driver 游戏截图的攻略。
- 多个独立玩家实机内容相互印证。

**Level C — 候选数据**
- ghostdriverroblox.wiki、ghost-driver.site、ghostdriverwiki.wiki 等竞品 Wiki。
- 单一社区帖子。

Level C 可用于发现车型和待验证字段，但不得作为高风险精确数据的唯一生产依据。

当前生产数据原则：
- 车型身份可信但 specs 未确认：允许进入 roster，数值为 null/Pending。
- 精确数值只有竞品单一来源：可保留为 provisional/community-estimate，并明确标记。
- 名称本身无法独立确认：不进入正式 roster。
- 明显冲突/疑似虚构：进入研究隔离表，不进入网站。

截至 2026-08-19，第一批生产 roster 重点包含：Wulfbrecht RZ7、Weinchen V120、Kitsuni LX、Rangy Helly、Castellani Specchiera、Reinhardt RT32、Takama F10 GT、Audi R8、BMW M3 G80、BMW M140i、C7。部分车辆只有身份确认，精确参数仍待验证。

---

### 6. 核心数据模型

本地 TypeScript 数据存放于 `src/data/`，通过 repository + server loader 获取。

Vehicle 至少支持：

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

后续数据库化时必须保留来源审计能力，理想状态进一步支持字段级 source/confidence。

---

### 7. 图片策略

不批量复制竞品自制图片。

优先级：
1. 官方允许公开使用的 Ghost Driver / Roblox 素材。
2. 可明确确认的游戏内截图（优先自行截取）。
3. 独立实机内容用于验证车型外观，不默认重新托管其版权图片。
4. 在没有可靠图片前，车辆卡片继续使用站内视觉占位，不用错误车型图片填充。

图片数据未来应支持 `imageSource` 与 `imageVerifiedAt`。

---

### 8. 其他功能需求

#### Codes
Active / Expired / Pre-Alpha 筛选、一键复制、奖励、添加与验证时间、Redeem 步骤、来源提示。

#### Guides
列表 + 详情模板；Beginner、Money、Tuning、Driving、Song IDs 为必做内容。

#### Updates
按时间倒序，记录新车、平衡调整、新 Codes 等，并可关联车辆。

#### 合规页面
Privacy、Terms、Contact、About 必须完整可访问；Footer 全站显示非官方声明与主要 SEO 子页面锚文本链接。

---

### 9. SEO 与渲染要求

- 强制 SSR 或 SSG。
- 页面初始 HTML 必须包含 H1、正文、Cars/Codes 数据等核心内容。
- 每页独立 title / description / canonical / OG。
- Sitemap 必须包含所有可索引正式页面；新增 Cars 页面时同步更新。
- Cars 页面正文自然覆盖 Ghost Driver cars 等主题词，不为了达到固定百分比而堆砌关键词。
- 页面之间建立 Cars Hub → Best / Free / Limited / New 的内链集群。
- Footer 使用描述性锚文本链接到重要二级路由。

---

### 10. 设计与体验

延续 `docs/DESIGN.md` 设计体系。Cars 页面重点参考竞品中有效的数据库体验，但不复制其视觉资产：
- 数据摘要。
- 清晰 Filter Tabs。
- 数据库式车辆卡片。
- Free / Limited / Recent / Tier badges。
- Pending/verification 状态可读。
- 移动端优先。

---

### 11. 开发优先级

**已完成 / 正在完成 P0**
- TanStack Start + SSR 基础架构。
- 首页 SEO 内容。
- Codes 页面。
- Cars 本地数据层与 `/vehicles`、`/vehicles/free`、`/vehicles/limited`、`/vehicles/best`。
- Footer 二级路由内链。
- 合规静态页面。

**Cars 当前迭代**
1. 用经过审计的真实车型替换 placeholder records。
2. 扩展 Vehicle 类型支持 confidence/source/acquisition。
3. `/vehicles` 升级为 Cars Database + SEO Pillar。
4. Free / Limited 页面增加独立搜索意图内容。
5. 完善 Best Cars 页面排名依据。
6. 新增 `/vehicles/new`。
7. 补可靠车辆图片。
8. 持续通过游戏 UI / 实机补齐 price 与 specs。

**P1**
- Updates / FAQ / About 深化。
- Cars 搜索、class filter、sort。
- JSON-LD / Breadcrumb schema。
- 响应式与 Core Web Vitals 优化。

**P2**
- 数据库接入与后台维护。
- 用户提交数据。
- 单车详情页。
- 多语言。

---

### 12. 风险

- Pre-Alpha 数据变化快：所有 Cars/Codes 显示验证时间。
- Community Wiki 可能互相抄袭：多个竞品相同不自动等于独立验证。
- 现实车型名与游戏虚构名称可能混用：优先展示游戏内名称。
- 图片版权与错误车型风险：无可靠图片时宁可使用占位视觉。
- SEO：禁止纯 CSR；所有重要正文和数据库内容必须服务器输出。
- 合规：保持 fan-made / unofficial 声明，不暗示官方授权。
