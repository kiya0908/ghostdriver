**Ghost Driver Wiki / Guide 网站 PRD（产品需求文档）**  
**版本**：1.2  
**日期**：2026-08-18  
**状态**：待开发  
**技术栈**：TanStack Start（TypeScript + TanStack Router） + i18n + SSR/SSG  
**目标**：快速上线一个专业、SEO友好、数据可维护、明确标注为粉丝非官方的 Roblox *Ghost Driver* 游戏攻略网站

---

### 1. 项目背景与目标

**背景**  
Ghost Driver 是 Tilted Vehicles 开发的 Roblox Pre-Alpha 交通穿梭/驾驶游戏，近期因 YouTube 博主扩散导致搜索量暴涨。目前已有两个粉丝 Wiki 上线（ghost-driver.site 和 ghostdriverwiki.wiki），内容较全但存在导航不够清晰、数据更新滞后等问题。

**产品目标**  
1. 成为玩家（初期以英文为主）首选的 Ghost Driver 信息站点  
2. 覆盖核心用户意图：查兑换码、查车辆、看攻略、看更新  
3. 结构清晰、加载快、移动端友好、易于后续扩展数据库和多语言  
4. 上线初期用本地数据，后期可平滑接入数据库  
5. **明确标识为粉丝自主制作的非官方网站**，与官方 Ghost Driver、Tilted Vehicles、Roblox 无任何隶属或授权关系  
6. **搜索引擎爬虫可直接从初始 HTML 中获取完整页面内容**（强制 SSR/SSG）

**成功指标（初期）**  
- 完整实现规划的所有页面  
- Codes 和 Vehicles 支持筛选 + 最后验证时间  
- 首页重点突出最新 Codes 和快速上手路径  
- 基础 SEO 完善（title、description、Open Graph）  
- 全站清晰展示非官方免责声明  
- 页面源代码中可直接看到核心内容（验证爬虫可见性）

---

### 2. 目标用户

- 主要用户：Roblox 玩家，想快速查码、选车、学习刷钱和驾驶技巧  
- 次要用户：内容创作者、想了解游戏更新的玩家  
- 用户核心需求优先级：  
  1. 最新可用兑换码（带复制）  
  2. 车辆列表 + 属性对比 + Tier List  
  3. 新手入门 + 刷钱攻略  
  4. 更新日志  

---

### 3. 网站信息架构（最终确定）

```
首页 (Home)                          /
├── 兑换码 (Codes)                   /codes
│   ├── Active Codes                 /codes（默认显示 Active，支持筛选）
│   ├── Pre-Alpha Codes              /codes?status=pre-alpha（可选）
│   └── Expired Codes                /codes?status=expired
├── 车辆数据库 (Vehicles)            /vehicles
│   ├── 所有车辆 (All Cars)          /vehicles
│   ├── 最佳车辆 / Tier List         /vehicles/best 或 /vehicles/tier-list
│   ├── 免费车辆 (Free Cars)         /vehicles/free
│   └── 限时车辆 (Limited Cars)      /vehicles/limited
├── 攻略指南 (Guides)                /guides
│   ├── 新手入门 (Beginner)          /guides/beginner
│   ├── 刷钱技巧 (Money Farming)     /guides/money
│   ├── 车辆改装 (Car Tuning)        /guides/tuning
│   ├── 驾驶技巧 / No Hesi / Drift   /guides/driving
│   └── 歌曲 ID (Song IDs)           /guides/song-ids
├── 更新日志 (Updates)               /updates
├── 常见问题 (FAQ)                   /faq
├── 关于我们 (About)                 /about
├── Privacy Policy                   /privacy
├── Terms of Use                     /terms
└── Contact                          /contact
```

**路由说明**：
- 使用 TanStack Router 文件路由
- Codes 和 Vehicles 以列表页为主，支持 query 参数筛选
- Guides 采用列表页 + 详情页结构
- 新增三个静态合规页面：`/privacy`、`/terms`、`/contact`
- 所有页面需支持 i18n 架构（当前仅实现英文）

---

### 4. 功能需求

#### 4.1 首页 `/`
- 最新 Active Codes 区域（显示 3~5 个，带一键复制按钮 + 奖励说明）
- 快速新手路径（4~5 步卡片引导）
- 最新更新 / 新车预览
- 热门 Guides 入口
- 游戏基础信息（开发商、状态 Pre-Alpha、控制方式等）
- FAQ 精选
- **全站页脚 + 首页显著位置必须展示非官方免责声明**

#### 4.2 兑换码 `/codes`
- Active / Expired / Pre-Alpha 筛选或 Tab 切换
- 每个 Code 显示：代码、奖励、添加时间、最后验证时间
- 一键复制功能
- Redeem 步骤说明
- 来源提示（官方 Discord / Group）
- 空状态与过期提示

#### 4.3 车辆数据库 `/vehicles`
- 列表页支持筛选：All / Free / Limited
- 车辆卡片：名称、价格、是否免费/限时、核心属性（Top Speed / Handling / Acceleration）、缩略图占位
- Best / Tier List 页面：S/A/B/C 排名 + 简要推荐理由
- 每辆车详情页（可选，初期可先做列表）
- 最后验证时间

#### 4.4 攻略指南 `/guides`
- 列表页展示所有指南（标题、摘要、分类、更新日期）
- 单篇详情页：Markdown 或结构化内容渲染
- 必做指南：
  - 新手入门
  - 刷钱技巧
  - 车辆改装 / 升级
  - 驾驶技巧（No Hesi / Drift）
  - 歌曲 ID

#### 4.5 更新日志 `/updates`
- 按时间倒序列表
- 支持简单筛选（版本 / 日期）
- 内容包含新车、平衡调整、新码等

#### 4.6 FAQ `/faq` 与 About `/about`
- FAQ：常见问题手风琴或列表
- About：网站说明、**明确的非官方免责声明**、数据来源、联系方式

#### 4.7 合规静态页面（Google 过审必需）
- **/privacy**（Privacy Policy）：隐私政策，说明数据收集与使用情况
- **/terms**（Terms of Use）：使用条款，包含免责声明、知识产权声明
- **/contact**（Contact）：联系方式页面（邮箱或表单）

#### 4.8 通用功能
- 响应式设计（移动端优先）
- 顶部导航 + 底部 Footer（Footer 必须包含非官方声明 + Privacy / Terms / Contact 链接）
- 暗色模式（可选，建议支持）
- 基础 SEO（每页独立 title / description / Open Graph）
- 加载状态与空状态处理
- 复制成功 Toast 提示
- **i18n 多语言架构**：使用标准 i18n 方案，当前仅实现英文（en），预留其他语言扩展能力

---

### 5. 数据需求

**初期方案**：本地 TypeScript / JSON 数据（放在 `src/data/`）

**核心数据模型**（需定义 TypeScript 接口）：

- **Code**：id, code, reward, status (active | expired | pre-alpha), addedAt, verifiedAt, source
- **Vehicle**：id, name, slug, price, isFree, isLimited, topSpeed, handling, acceleration, image, description, tier?, verifiedAt
- **Guide**：id, title, slug, category, summary, content, updatedAt
- **Update**：id, title, version, date, content, relatedCodes?, relatedVehicles?

预留后续切换到数据库（Drizzle / Prisma + SQLite/PostgreSQL）的接口设计。  
**所有列表与详情数据必须在服务端 loader 中获取**，确保初始 HTML 包含完整内容。

---

### 6. 非功能需求

- **渲染与 SEO（强制）**：
  - 整个网站必须使用**服务端渲染（SSR）或静态生成（SSG）**
  - 搜索引擎爬虫在不执行 JavaScript 的情况下，必须能从初始 HTML 中直接看到完整的页面核心内容（标题、正文、Codes 列表、车辆数据、攻略内容等）
  - 禁止纯客户端渲染（CSR）导致爬虫只能看到空壳页面
  - 所有关键 SEO 内容必须在服务端完成渲染并输出到 HTML 中
- 性能：首屏加载快，SSR / SSG 混合
- SEO：完善 meta、结构化数据基础、sitemap 预留
- 可维护性：清晰目录结构、类型安全、组件复用
- 扩展性：数据层与 UI 层分离，方便后期加后台管理、用户提交、多语言
- 兼容性：现代浏览器 + 移动端
- **合规性**：全站必须清晰标识为粉丝非官方网站，与官方无任何关联

---

### 7. 设计与体验要求

- 风格：现代、干净、带轻微游戏感（深色背景 + 高亮强调色，推荐橙色/红色）
- 重点组件：复制按钮、车辆卡片、筛选 Tab、状态徽章（Active / Expired / Free / Limited）
- 交互：复制后即时反馈、筛选流畅、移动端导航友好
- **免责声明展示**：页脚固定显示，About 页面详细说明，必要时在关键页面顶部也做轻提示
- **设计参考**：后续会提供 `design.md` 作为前端页面视觉与组件设计的参考文档。在收到该文档前，按上述风格实现；收到后必须严格参考其中的设计规范进行调整。

---

### 8. 开发优先级（MVP）

**P0（必须先完成）**  
1. 项目初始化 + 完整路由结构 + 布局（含 i18n 基础架构 + SSR 支持）  
2. 全站非官方免责声明集成  
3. 首页 + Codes 页面（Active / Expired + 复制）—— 必须 SSR 输出完整内容  
4. Vehicles 列表 + 基础筛选—— 必须 SSR 输出完整内容  
5. Guides 列表 + 详情模板—— 必须 SSR 输出完整内容  
6. Privacy / Terms / Contact 静态页面  
7. 全站非官方免责声明  

**P1**  
8. Updates、FAQ、About  
9. Best / Tier List  
10. 基础 SEO 与响应式完善  

**P2（后续）**  
- 数据库接入  
- 用户提交新码功能  
- 更细车辆详情页  
- 暗色模式完整支持  
- 其他语言（如中文）支持  
- 根据 `design.md` 进行视觉精细对齐  

---

### 9. 技术约束与实现要求

- 必须使用 **TanStack Start** + TypeScript
- 必须实现 **i18n 多语言架构**（当前只上线英文）
- **必须使用 SSR 或 SSG**，确保爬虫可见完整内容
- 优先 Tailwind CSS + shadcn/ui（或同等现代化组件库）
- 文件路由清晰对应上述架构
- 数据与页面解耦，所有关键数据通过服务端 loader 获取
- 代码干净、有必要注释、README 完整（如何启动、i18n 使用方式、SSR 验证方法、后续扩展）
- 全站必须包含清晰的非官方免责声明文案（建议统一管理在 i18n 文件中）

**推荐免责声明文案（英文示例）**：  
“This is a fan-made, unofficial website about the Roblox game Ghost Driver. We are not affiliated with, endorsed by, or connected to Tilted Vehicles, Roblox Corporation, or the official Ghost Driver developers in any way. All game content, trademarks, and assets belong to their respective owners.”

---

### 10. 风险与注意事项

- 游戏处于 Pre-Alpha，数据变化快 → 所有 Codes / Vehicles 必须显示「最后验证时间」
- 内容版权 → 只参考公开事实，自己重写文案，不直接复制其他站点
- 初期数据量小 → 本地 JSON 完全够用，无需过早上数据库
- **合规风险** → 必须在全站显著位置声明非官方身份，避免被误认为官方站点
- Google 过审 → Privacy、Terms、Contact 页面必须完整且可访问
- **SEO 风险** → 如果使用纯 CSR，爬虫无法获取内容，必须通过 SSR/SSG 解决

---